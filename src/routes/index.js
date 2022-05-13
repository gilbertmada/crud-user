import express from "express";
import userRoute from "./user/index.js";

const route = express.Router();
route.use("/user", userRoute);
//.use('/', contactRoute)
route.get("/", async (req, res) => {
  res.send("Api is ok");
});
export default route;
