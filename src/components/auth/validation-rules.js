/* eslint-disable */
export const alphaNumericRegex = /[a-zA-Z0-9]/;
export const lettersOnlyRegex = /[A-Za-z]/;
export const specialCharactersRegex = /[^A-Za-z 0-9]/g;
export const upperAndLowerCharactersRegex = /[^A-Za-z 0-9]/g;
export const cognitoRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`])\S{8,99}$/;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const usernameRules = {
  required: true,
  minLength: 3,
  maxLength: 20,
  pattern: alphaNumericRegex,
};

export const usernameOrEmailRules = {
  required: true,
  minLength: 3,
  maxLength: 50,
};

export const firstNameRules = {
  required: true,
  minLength: 3,
  maxLength: 50,
  pattern: lettersOnlyRegex,
};
export const lastNameRules = {
  required: true,
  minLength: 3,
  maxLength: 50,
  pattern: lettersOnlyRegex,
};

export const passwordRules = { required: true, pattern: cognitoRegex };
export const emailRules = { required: true, pattern: emailRegex };
