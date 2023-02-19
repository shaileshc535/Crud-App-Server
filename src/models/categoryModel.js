const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);




module.exports = category = mongoose.model("category", categorySchema);
