const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm_password = !isEmpty(data.confirm_password) ? data.confirm_password : "";

  if (Validator.isEmpty(data.phone)) {
    errors = "Phone Number is required";
  }

  if (!Validator.isLength(data.phone, { min: 6, max: 30 })) {
    errors = "Phone Number must be 10 digits long";
  }

  if (Validator.isEmpty(data.email)) {
    errors = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.confirm_password)) {
    errors = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.confirm_password)) {
    errors = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};