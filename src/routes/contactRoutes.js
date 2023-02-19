const express = require("express");
const Router = express.Router();
const {
  CreateContact,
  UpdateContact,
  GetContact,
  DeleteContact,
} = require("../controller/contactController");

Router.post("/", CreateContact);

Router.put("/", UpdateContact);

Router.put("/delete", DeleteContact);

Router.get("/", GetContact);

Router.get("/:id", GetContact);

module.exports = Router;
