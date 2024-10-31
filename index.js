import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  // origin: process.env.CLIENT_URL, // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

app.use(express.json()); 
app.use(cookieParser()); 

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => { 
  connectDB();
  console.log("Server is running on port:", PORT);
});
