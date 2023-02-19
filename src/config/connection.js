const mongoose = require("mongoose");
const logger = require("../utils/logger");

const getConnection = async (req, res, next) => {
  if (!process.env.DATABASE_URI) {
    logger.log("error", "Database URI not found");
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Database URI not found",
    });
  }

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE_URI);
    logger.log("info", `Database Connected to the MongoDB`);
    next();
  } catch (error) {
    logger.log("error", error.message);
    return res.status(500).json({
      status: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

module.exports = getConnection;
