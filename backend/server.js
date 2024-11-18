import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connnectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to prase incomming reqeuests with JSON payloads (req.body)
app.use("/api/auth", authRoutes);
/*
app.get("/", (req, res) => {
  res.send("Hello!!");
});*/

app.listen(PORT, () => {
  connnectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
