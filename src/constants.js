export const graphQLErrorResults = [
  { type: "ValidationFailed" },
  { type: "IncorrectCredentials" },
  { type: "TooManyPasswordAttempts" },
  { type: "UserNotConfirmed" },
  { type: "UsernameExists" },
  { type: "ErrorResult" },
];

export const errorMessageTypes = {
  jwtExpired: "jwt expired",
  invalidSignature: "invalid signature",
};
