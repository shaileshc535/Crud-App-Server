const express = require("express");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const contactRoutes = require("./contactRoutes");

const Router = express.Router();

Router.use("/user", userRoutes);

Router.use("/category", categoryRoutes);

Router.use("/contact", contactRoutes);

module.exports = Router;
