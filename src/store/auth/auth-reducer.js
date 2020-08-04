import jwtDecode from "jwt-decode";

const AuthReducer = (globalState, action) => {
  switch (action.type) {
    case "SAVE_USER_AUTH_DATA":
      const decodedToken = jwtDecode(action.payload.idToken);
      return {
        ...globalState,
        username: decodedToken["cognito:username"],
        isAuthenticated: true,
      };
    case "REMOVE_USER_AUTH_DATA":
      return {
        username: null,
        isAuthenticated: false,
      };
    default:
      return globalState;
  }
};

export default AuthReducer;
