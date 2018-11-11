const Validator = require('validator');
const isEmpty = require ('./is-empty')

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.website = !isEmpty(data.website) ? data.website : '';
  //data.twitter = !isEmpty(data.twitter) ? data.twitter : '';
  data.youtube = !isEmpty(data.youtube) ? data.youtube : '';
  data.facebook = !isEmpty(data.facebook) ? data.facebook : '';
  data.instagram = !isEmpty(data.instagram) ? data.instagram : '';
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : '';


    if(!Validator.isLength(data.handle, { min: 2, max: 40 })){
      errors.handle = 'Handle should be between 2 and 40 characters';
    }

    if(Validator.isEmpty(data.handle)){
      errors.handle = 'Handle is required';
    }

    if(Validator.isEmpty(data.status)){
      errors.status = 'Status is required';
    }

    if(Validator.isEmpty(data.skills)){
      errors.skills = 'Skills field is required';
    }

    if(!Validator.isEmpty(data.website)) {
      if(!Validator.isURL(data.website)){
        errors.website = 'URL is not formatted properly';
      }
    }

    if(!isEmpty(data.twitter)) {
      if(!Validator.isURL(data.twitter)){
        errors.twitter = 'URL is not formatted properly';
      }
    }

    if(!Validator.isEmpty(data.linkedin)) {
      if(!Validator.isURL(data.linkedin)){
        errors.linkedin = 'URL is not formatted properly';
      }
    }

    if(!Validator.isEmpty(data.instagram)) {
      if(!Validator.isURL(data.instagram)){
        errors.instagram = 'URL is not formatted properly';
      }
    }

    if(!Validator.isEmpty(data.facebook)) {
      if(!Validator.isURL(data.facebook)){
        errors.facebook = 'URL is not formatted properly';
      }
    }

    if(!Validator.isEmpty(data.youtube)) {
      if(!Validator.isURL(data.youtube)){
        errors.youtube = 'URL is not formatted properly';
      }
    }
 
  
  return {
    errors,
    isValid:isEmpty(errors)
  }
}