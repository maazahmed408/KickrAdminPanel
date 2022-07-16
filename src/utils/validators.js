export const signUpValidator = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Invalid Name";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.confirmPassword
    )
  ) {
    errors.confirmPassword =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm Password must be same as password";
  }

  return errors;
};

export const loginValidator = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }
  return errors;
};

export const profileValidator = (values) => {
  console.log("values = ", values.currentPassword);
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Invalid Name";
  }
  if (
    values.currentPassword.length > 0 &&
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.currentPassword
    )
  ) {
    errors.currentPassword =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }

  if (
    values.newPassword.length > 0 &&
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.newPassword
    )
  ) {
    errors.newPassword =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }

  if (values.confirmNewPassword !== values.newPassword) {
    errors.confirmNewPassword = "Password doesn't match";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
};

export const resetPasswordValidator = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.confirmPassword
    )
  ) {
    errors.confirmPassword =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Confirm password must be same as new password";
  }
  return errors;
};
