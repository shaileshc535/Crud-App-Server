const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const registerValidation = require("../validations/registerValidation");
const loginValidation = require("../validations/loginValidation");
const logger = require("../utils/logger");

module.exports.userRegister = (req, res) => {
  const { errors, isValid } = registerValidation(req.body);

  if (!isValid) {
    logger.log("error", errors);
    return res.status(400).json({
      status: 400,
      success: false,
      message: errors,
    });
  }

  UserModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      logger.log("error", "Email already exists");
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Email already exists",
      });
    } else {
      if (req.body.password !== req.body.confirm_password) {
        logger.log("error", "Password and confirm password did not match.");
        res.status(400).json({
          status: 400,
          success: false,
          message: "Password and confirm password did not match.",
        });
      } else {
        bcrypt.hash(req.body.password, 12, function (err, hash) {
          if (err) {
            logger.log("error", err.message);

            return res.status(400).json({
              status: 400,
              success: false,
              message: "Something went wrong. Please try again.",
              error: err,
            });
          } else {
            const image = gravatar.url(req.body.firstname, {
              s: "200", // size
              r: "pg", // rating
              d: "mm", // default
            });

            var User = new UserModel({
              ...req.body,
              password: hash,
              image,
            });

            User.save()
              .then((result) => {
                var token = jwt.sign(
                  {
                    id: result._id,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email: result.email,
                    phone: result.phone,
                    image: result.image,
                    role: result.role,
                    gender: result.gender,
                  },
                  process.env.ACCESS_TOKEN_SECRET,
                  {
                    expiresIn: "1d",
                  }
                );

                logger.log("info", "success");

                res.status(200).json({
                  status: 200,
                  success: true,
                  message: "success",
                  token: token,
                  data: result,
                });
              })
              .catch((err) => {
                logger.log("error", "Something went wrong. Please try again.");
                res.status(400).json({
                  status: 400,
                  success: false,
                  message: "Something went wrong. Please try again.",
                  error: err,
                });
              });
          }
        });
      }
    }
  });
};

module.exports.UserLogin = (req, res, next) => {
  const { errors, isValid } = loginValidation(req.body);

  if (!isValid) {
    logger.log("error", errors);
    return res.status(400).json({
      status: 400,
      success: false,
      message: errors,
    });
  }

  UserModel.findOne({ email: req.body.email })
    .exec()
    .then((result) => {
      if (result === null) {
        logger.log("error", "Invalid user information");
        res.status(400).json({
          status: 400,
          success: false,
          message: "Invalid user information",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          result.password,
          function (err, data) {
            if (err) {
              logger.log("error", err);
              res.status(400).json({
                status: 400,
                success: false,
                message: "Authorization fail",
              });
            }
            if (data) {
              var token = jwt.sign(
                {
                  id: result._id,
                  firstname: result.firstname,
                  lastname: result.lastname,
                  email: result.email,
                  phone: result.phone,
                  image: result.image,
                  role: result.role,
                  gender: result.gender,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                  expiresIn: "1d",
                }
              );
              logger.log("info", "success");

              res.status(200).json({
                status: 200,
                success: true,
                message: "success",
                token: token,
                data: result,
              });
            } else {
              logger.log("error", "Something went wrong. Please try again");
              res.status(400).json({
                status: 400,
                success: false,
                message: "Something went wrong. Please try again",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      logger.log("error", err);
      res.json({
        error: err,
      });
    });
};

module.exports.getUsersList = (req, res) => {
  try {
    UserModel.find({ isdeleted: false }).then((result) => {
      if (result || result.length != 0) {
        logger.log("info", "user list fetch successfully.");
        return res.status(200).json({
          status: 200,
          success: true,
          message: "success",
          data: result,
        });
      } else {
        logger.log("error", "Something went wrong. Please try again");
        return res.status(200).json({
          status: 400,
          success: false,
          message: "Something went wrong. Please try again",
          data: "",
        });
      }
    });
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};

module.exports.getUserInfo = (req, res) => {
  try {
    const userId = req.params.id;

    UserModel.findById({ _id: userId }).then((result) => {
      if (result || result.length != 0) {
        logger.log("info", "user list fetch successfully.");
        return res.status(200).json({
          status: 200,
          success: true,
          message: "success",
          data: result,
        });
      } else {
        logger.log("error", "Something went wrong. Please try again");
        return res.status(200).json({
          status: 400,
          success: false,
          message: "Something went wrong. Please try again",
          data: "",
        });
      }
    });
  } catch (error) {
    logger.log("error", error);
    res.status(400).json({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};
