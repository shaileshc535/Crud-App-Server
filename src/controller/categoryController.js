const CategoryModel = require("../models/categoryModel");
const logger = require("../utils/logger");

module.exports.CreateCategory = async (req, res) => {
  try {
    let newCategory = CategoryModel({
      name: req.body.name,
      code: req.body.code,
      image: process.env.BASE_URI + "public/" + req.file.filename,
    });

    await newCategory
      .save()
      .then((data) => {
        logger.log("info", "success");
        res.status(200).json({
          success: true,
          message: "Category Created Successfully",
          data: data,
        });
      })
      .catch((error) => {
        logger.log("error", error);
        res.status(400).json({
          success: false,
          message: error.message || "Something went wrong. Please try again",
          error: error,
        });
      });
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong. Please try again",
      error: error,
    });
  }
};

module.exports.UpdateCategory = async (req, res) => {
  try {
    const UpdateCategoryDetails = {
      name: req.body.name,
      code: req.body.code,
      image: process.env.BASE_URI + "public/" + req.file.filename,
    };

    const _id = req.body.id;

    if (_id !== null && _id !== "" && _id !== undefined) {
      await CategoryModel.findOneAndUpdate({ _id: _id }, UpdateCategoryDetails)
        .then((result) => {
          logger.log("info", "success");
          res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            data: result,
          });
        })
        .catch((error) => {
          logger.log("error", error);
          res.status(400).json({
            success: false,
            message:
              error.message || "Something Went Wrong, Please try again later",
            error: error,
          });
        });
    } else {
      logger.log("error", "Category Id Is Required");
      res.status(400).json({
        success: false,
        message: "Category Id Is Required",
        error: "",
      });
    }
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      success: false,
      message: error.message || "Something Went Wrong, Please try again later",
      error: error,
    });
  }
};

module.exports.GetCategory = async (req, res) => {
  try {
    if (req.params.id) {
      await CategoryModel.find({
        isdeleted: false,
        status: true,
        _id: req.params.id,
      })
        .exec()
        .then((result) => {
          logger.log("info", "success");
          res.status(200).json({
            success: true,
            message: "success",
            data: result,
          });
        })
        .catch((error) => {
          logger.log("error", error);
          res.json({
            success: false,
            message: error.message || "Category Fetch error...",
            error: error,
          });
        });
    } else {
      CategoryModel.find({ isdeleted: false, status: true })
        .exec()
        .then((result) => {
          logger.log("info", "message");
          res.status(200).json({
            success: true,
            message: "success",
            data: result,
          });
        })
        .catch((error) => {
          logger.log("error", error);
          res.json({
            success: false,
            message: error.message || "Category Fetch error...",
            error: error,
          });
        });
    }
  } catch (error) {
    logger.log("error", error);
    res.json({
      success: false,
      message: error.message || "Category Fetch error...",
      error: error,
    });
  }
};

module.exports.UpdateCategoryStatus = async (req, res) => {
  try {
    await CategoryModel.find({ _id: req.body.id })
      .then((result) => {
        const updateStatus = {
          status: !result[0].status,
        };

        CategoryModel.findByIdAndUpdate({ _id: req.body.id }, updateStatus, {
          upsert: true,
          new: true,
        }).then((result) => {
          logger.log("info", "success");
          res.status(200).json({
            success: true,
            message: "success",
            data: result,
          });
        });
      })
      .catch((error) => {
        logger.log("error", error);
        res.status(400).json({
          success: false,
          message:
            error.message || "Something Went Wrong, Please try again later",
          error: error,
        });
      });
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      success: false,
      message: error.message || "Something Went Wrong, Please try again later",
      error: error,
    });
  }
};

module.exports.DeleteCategory = async (req, res) => {
  try {
    const updateStatus = {
      isdeleted: true,
      deleted_at: new Date(),
    };

    CategoryModel.findByIdAndUpdate({ _id: req.body.id }, updateStatus, {
      upsert: true,
      new: true,
    })
      .then((result) => {
        logger.log("info", "success");
        res.status(200).json({
          success: true,
          message: "success",
          data: "",
        });
      })
      .catch((error) => {
        logger.log("error", error);
        res.status(400).json({
          success: false,
          message:
            error.message || "Something Went Wrong, Please try again later",
          error: error,
        });
      });
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      success: false,
      message: error.message || "Something Went Wrong, Please try again later",
      error: error,
    });
  }
};
