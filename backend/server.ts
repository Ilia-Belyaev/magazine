import express, { json } from "express";
import cors from "cors";
import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcryptjs";
import { SERVER_ADRESS } from "./constants";
import { Categories, InnerProducts, Products } from "./types";

const app = express();
app.use(cors());
app.use(json());

// let users = [
//   { id: 1, email: "test@test.com", password: hashSync("123456", 8), cart: [] }
// ];

let products: Products = [];
// let categories: Categories = [];

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

// const SECRET = "supersecret";

// Логин
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find(u => u.email === email);
//   if (!user || !compareSync(password, user.password)) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
//   const token = sign({ id: user.id }, SECRET, { expiresIn: "1h" });
//   res.json({ token });
// });

// Получение товаров
app.get("/products", (req, res) => res.json(products));

// Корзина
// app.post("/cart", (req, res) => {
//   const { userId, productId, quantity } = req.body;
//   const user = users.find(u => u.id === userId);
//   if (!user) return res.status(404).json({ message: "User not found" });

//   user.cart.push({ productId, quantity });
//   res.json(user.cart);
// });

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
