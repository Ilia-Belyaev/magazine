import express, { json, NextFunction, Request, Response, } from "express";
import cors from "cors";
import { sign, verify } from "jsonwebtoken";
import { hashSync, compareSync } from "bcryptjs";
import { CATEGORIES, SERVER_ADRESS } from "./constants";
import { Categories, InnerProducts, Product, Products } from "./types";

const app = express();
app.use(cors());
app.use(json());

const id = crypto.randomUUID.toString();

let users = [
  { id: id,
    email: "test@test.com",
    password: hashSync("Ili@1111", 8),
    favorites: [] as Products,
  }
];

let products: Products = [];
let categories: Categories = [];
interface AuthRequest extends Request {
  userId?: string;
}

async function initProducts() {
  try {
    const response = await fetch(SERVER_ADRESS);

    if (!response.ok) {
      throw new Error('Server is not available')
    }

    const data = await response.json() as InnerProducts;

    const newData = data.products.map((elem) => ({...elem, isFavorite: false}));

    products = newData;
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

function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const payload = verify(token, SECRET) as { id: string };
    req.userId = payload.id;

    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
}

app.get("/getFavorites", authMiddleware, (req: AuthRequest, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user.favorites);
});

app.post("/setFavorite", authMiddleware, (req: AuthRequest, res) => {
  const {id: productId } = req.body;
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (!user.favorites.find((favoriteProduct) => favoriteProduct.id === productId)) {
    const currentFindedProduct = products.find((product) => product.id === productId) as Product;
    user.favorites.push(currentFindedProduct);
  }

});

app.delete("/dropFavorite/:id", authMiddleware, (req: AuthRequest, res) => {
  const productId = Number(req.params.id);

  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.favorites = user.favorites.filter((product) => product.id !== productId);
  res.json(user.favorites);

  return res.status(200).json('Product remowed');
});


// Логин
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  const id = crypto.randomUUID.toString();
  const token = sign({ id: id }, SECRET, { expiresIn: "1h" });

  switch (true) {
    case (user && !compareSync(password, user.password)):
      return res.status(401).json({ message: "Invalid credentials" });
    case (!user):
      users.push({id: id, email: email, password: hashSync(password, 8), favorites: []  });
      
      return res.json({ token, email });
    case (user && compareSync(password, user.password)):
      return res.json({ token, email });
  }
});

app.delete("/logout", (req, res) => {
  return res.status(200).json({ message: "Logged out" });
});


// Получение товаров
app.get("/products", (req: AuthRequest, res) => {
  const authHeader = req.headers.authorization;
  let userFavorites: number[] = [];

  if (authHeader) {
    try {
      const token = authHeader.split(" ")[1];
      const payload = verify(token, SECRET) as { id: string };
      const user = users.find(u => u.id === payload.id);
      console.log('user:',user)
      if (user) {
        userFavorites = user.favorites.map((product) => product.id);
        console.log(userFavorites);
      }
    } catch {

    }
  }

  const updatedProducts = products.map((product) => ({
    ...product,
    isFavorite: userFavorites.includes(product.id),
  }));

  res.json(updatedProducts);
});
//получение категорий
app.get('/categories',(req, res) => res.json(categories));
//проверка токена, действителен ли он ещё
app.get("/login", authMiddleware, (req: AuthRequest, res) => {
  const user = users.find(u => u.id === req.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    id: user.id,
    email: user.email,
  });
});

app.get('/checkLogin', authMiddleware,(req: AuthRequest, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json('200');
});

app.get('/currentProduct/:id',(req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(product);

})


app.listen(4000, () => console.log("Server running on http://localhost:4000"));
