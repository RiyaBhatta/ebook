import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();


app.use(cors({
  origin: "https://ebook-frontendd.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/book", bookRoute);
app.use("/users", userRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
