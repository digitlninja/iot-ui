export const API_URI =
  process.env.NODE_ENV === "development" ? "http://localhost:3001/graphql" : process.env.GRAPHQL_API_URI;

export const tokenTypes = {
  idToken: "idToken",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};
