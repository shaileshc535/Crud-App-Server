const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: String,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
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

module.exports = contact = mongoose.model("contact", contactSchema);
