const express = require("express");
const Router = express.Router();
const {
  CreateCategory,
  DeleteCategory,
  UpdateCategory,
  GetCategory,
  UpdateCategoryStatus,
} = require("../controller/categoryController");
const multer = require("multer");
const { ensureDir } = require("fs-extra");
const path = require("path");

const storage = multer.diskStorage({
  //multers disk storage settings
  destination: async function (req, file, cb) {
    await ensureDir("./public/");
    cb(null, "./public/");
  },

  filename: function (req, file, cb) {
    const datetimestamp = Date.now();
    cb(
      null,
      file.fieldname + "-" + datetimestamp + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    callback(null, true);
  },
});

Router.post("/", upload.single("image"), CreateCategory);

Router.put("/", upload.single("image"), UpdateCategory);

Router.put("/delete", DeleteCategory);

Router.put("/change-status", UpdateCategoryStatus);

Router.get("/", GetCategory);

Router.get("/:id", GetCategory);

module.exports = Router;
