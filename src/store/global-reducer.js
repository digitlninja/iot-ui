import jwtDecode from "jwt-decode";
// import useRefreshTokensMutation from "components/auth/graphql/useRefreshTokensMutation";

const GlobalReducer = (globalState, action) => {
  // const [refreshUserTokens] = useRefreshTokensMutation();

  switch (action.type) {
    case "SAVE_TOKENS":
      const decodedToken = jwtDecode(action.payload.idToken);

      // const fiveMinutesBeforeExpiry =
      //   decodedToken.exp - decodedToken.auth_time - 300;
      // setTimeout(() => {
      //   refreshUserTokens();
      // }, fiveMinutesBeforeExpiry);

      return {
        ...globalState,
        idToken: action.payload.idToken,
        accessToken: action.payload.accessToken,
        username: decodedToken["cognito:username"],
        isAuthenticated: true,
      };
    default:
      return globalState;
  }
};

export default GlobalReducer;
