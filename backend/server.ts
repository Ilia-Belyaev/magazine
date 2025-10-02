import express, { json } from "express";
import cors from "cors";
import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcryptjs";
import { CATEGORIES, SERVER_ADRESS } from "./constants";
import { Categories, InnerProducts, Products } from "./types";

const app = express();
app.use(cors());
app.use(json());

const id = crypto.randomUUID.toString();

let users = [
  { id: id, email: "test@test.com", password: hashSync("123456", 8), cart: [] }
];

let products: Products = [];
let categories: Categories = [];

async function initProducts() {
  try {
    const response = await fetch(SERVER_ADRESS);

    if (!response.ok) {
      throw new Error('Server is not available')
    }

    const data = await response.json() as InnerProducts;

    products = data.products;
  } catch (error) {
    throw new Error(error as string);
  }
  
}

initProducts();

async function initCategories() {
  try {
    const response = await fetch(CATEGORIES);

    if (!response.ok) {
      throw new Error('Server is not available')
    }

    const data = await response.json() as Categories;

    categories = data;
  } catch (error) {
    throw new Error(error as string);
  }
  
}

initCategories();

const SECRET = "supersecret";

// Логин
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  const id = crypto.randomUUID.toString();
  const token = sign({ id: id }, SECRET, { expiresIn: "1h" });
  console.log(users)
  switch (true) {
    case (user && !compareSync(password, user.password)):
      return res.status(401).json({ message: "Invalid credentials" });
    case (!user):
      users.push({id: id, email: email, password: hashSync(password, 8), cart: []  });
      
      return res.json({ token, email });
    case (user && compareSync(password, user.password)):
      return res.json({ token, email });
  }
});


// Получение товаров
app.get("/products", (req, res) => res.json(products));
//получение категорий
app.get('/categories',(req, res) => res.json(categories));

// Корзина
// app.post("/cart", (req, res) => {
//   const { userId, productId, quantity } = req.body;
//   const user = users.find(u => u.id === userId);
//   if (!user) return res.status(404).json({ message: "User not found" });

//   user.cart.push({ productId, quantity });
//   res.json(user.cart);
// });

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
