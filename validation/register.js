const Validator = require('validator');
const isEmpty = require ('./is-empty')

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min:2, max:30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if(isEmpty(data.name)){
    errors.name = 'Name field is required';
  }
  if (!Validator.isEmail(data.email)){
    errors.email = 'Invalid email format';
  }
  if(isEmpty(data.email)){
    errors.email = 'Email field is required';
  }

  if(!Validator.isLength(data.password, { min:6, max:10 })){
    errors.password = 'Password length should be between 6 to 10 characters';
  }
  if (isEmpty(data.password)){
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid:isEmpty(errors)
  }
}