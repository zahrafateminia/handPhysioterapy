export const validate = (form) => {
  const errors = {};
  if (!form.firstName.trim()) {
    errors.firstName = "This field is required."
  } else {
    delete errors.firstName;
  }
  if (!form.lastName.trim()) {
    errors.lastName = "This field is required.";
  } else {
    delete errors.lastName ;
  }
  if (!form.phoneNumber ) {
    errors.phoneNumber  = "This field is required.";
  } else {
    delete errors.phoneNumber ;
  }
  if (!form.email) {
    errors.email = "This field is required.";
  } else {
    delete errors.email ;
  }
  if (!form.let) {
    errors.let = "This field is required.";
  } else {
    delete errors.let ;
  }
  return errors;
};
