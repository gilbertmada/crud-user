import express from "express";
const route = express.Router();
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getListUser,
} from "../controller/users.js";
route.post("/create-user", createUser);
route.get("/:id", getUser);
route.get("/all/users", getListUser);
route.put("/update/:id", updateUser);
route.delete("/:id", deleteUser);
export default route;
