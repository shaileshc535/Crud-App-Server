const express = require("express");
const Router = express.Router();
const {
  UserLogin,
  userRegister,
  getUserInfo,
  getUsersList,
} = require("../controller/userController");

Router.post("/signin", UserLogin);

Router.post("/signup", userRegister);

Router.get("/", getUsersList);

Router.get("/:id", getUserInfo);

module.exports = Router;
