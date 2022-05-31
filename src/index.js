import express from "express";
import route from "./routes/index.js";
import mongoose from "mongoose";
import { notFound } from "./routes/controller/error.js";
import cors from "cors";
//const User=require('./model/user')
mongoose.connect("mongodb://localhost:27017/userdb", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Mongo connected successfully");
});

const app = express();

//app.use(notFound);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
//app.use('/',User)
app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
