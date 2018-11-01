const Validator = require('validator');
const isEmpty = require ('./is-empty')

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmpassword = !isEmpty(data.confirmpassword) ? data.confirmpassword : '';


  if (!Validator.isLength(data.name, { min:2, max:30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if(Validator.isEmpty(data.name)){
    errors.name = 'Name field is required';
  }
  if (!Validator.isEmail(data.email)){
    errors.email = 'Invalid email format';
  }
  if(Validator.isEmpty(data.email)){
    errors.email = 'Email field is required';
  }

  if(!Validator.isLength(data.password, { min:6, max:10 })){
    errors.password = 'Password length should be between 6 to 10 characters';
  }
  if (Validator.isEmpty(data.password)){
    errors.password = 'Password field is required';
  }
  if(Validator.isEmpty(data.confirmpassword)){
    errors.confirmpassword = 'Confirm password filed missing';
  }
  if(!Validator.equals(data.password, data.confirmpassword)){
    errors.confirmpassword = 'Passwords do not match';
  }

  return {
    errors,
    isValid:true
  }
}