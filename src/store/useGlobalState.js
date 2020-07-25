import { useState } from "react";
import useRefreshTokensMutation from "../components/auth/graphql";
import jwtDecode from "jwt-decode";

const useGlobalState = () => {
  const [globalState, setState] = useState({});

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setRefreshTimeout":
        return setState(payload);
      case "setGlobalState": {
        const decodedToken = jwtDecode(payload.idToken);

        setTimeout(() => {
          // set timeout
          useRefreshTokensMutation();
        }, decodedToken.exp - decodedToken.auth_time - 300);
      }
      default:
        return globalState;
    }
  };
  return { globalState, actions };
};

export default useGlobalState;
