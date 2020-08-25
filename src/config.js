export const API_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/graphql"
    : process.env.REACT_APP_GRAPHQL_API_URI;
