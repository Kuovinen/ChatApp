import mongoose from "mongoose";
async function connnectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connection to MongoDB established");
  } catch (e) {
    console.log("ERROR IN THE DB CONNECTION!:" + e);
  }
}
export default connnectToMongoDB;
