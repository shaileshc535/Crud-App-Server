const ContactModel = require("../models/contactModel");
const logger = require("../utils/logger");

module.exports.CreateContact = async (req, res) => {
  try {
    let newContact = ContactModel({
      name: req.body.name,
      number: req.body.number,
      address: req.body.address,
    });

    await newContact
      .save()
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Contact Created Successfully",
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

module.exports.UpdateContact = async (req, res) => {
  try {
    const UpdateContactDetails = {
      name: req.body.name,
      number: req.body.number,
      address: req.body.address,
    };

    const _id = req.body.id;

    if (_id !== null && _id !== "" && _id !== undefined) {
      await ContactModel.findOneAndUpdate({ _id: _id }, UpdateContactDetails)
        .then((result) => {
          res.status(200).json({
            success: true,
            message: "Contact Updated Successfully",
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
      logger.log("error", "Contact Id Is Required");
      res.status(400).json({
        success: false,
        message: "Contact Id Is Required",
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

module.exports.GetContact = async (req, res) => {
  try {
    if (req.params.id) {
      await ContactModel.find({
        _id: req.params.id,
        isdeleted: false,
      })
        .exec()
        .then((result) => {
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
            message: error.message || "Contact Fetch error...",
            error: error,
          });
        });
    } else {
      ContactModel.find({ isdeleted: false })
        .exec()
        .then((result) => {
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
            message: error.message || "Contact Fetch error...",
            error: error,
          });
        });
    }
  } catch (error) {
    logger.log("error", error);
    res.json({
      success: false,
      message: error.message || "Contact Fetch error...",
      error: error,
    });
  }
};

module.exports.DeleteContact = async (req, res) => {
  try {
    const updateStatus = {
      isdeleted: true,
    };

    console.log(req.body.id);

    ContactModel.findByIdAndUpdate({ _id: req.body.id }, updateStatus, {
      upsert: true,
      new: true,
    })
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "success",
          data: "",
        });
      })
      .catch((error) => {
        console.log(err);
        console.log(err.message);
        res.status(400).json({
          success: false,
          message:
            error.message || "Something Went Wrong, Please try again later",
          error: error,
        });
      });
  } catch (error) {
    console.log(err);
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: error.message || "Something Went Wrong, Please try again later",
      error: error,
    });
  }
};
