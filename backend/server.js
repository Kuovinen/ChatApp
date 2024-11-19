import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connnectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to prase incomming reqeuests with JSON payloads (req.body)
app.use(cookieParser);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
/*
app.get("/", (req, res) => {
  res.send("Hello!!");
});*/

app.listen(PORT, () => {
  connnectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
