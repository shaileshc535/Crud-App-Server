const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors = "Email is not match";
  }

  if (Validator.isEmpty(data.password)) {
    errors = "Password field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};