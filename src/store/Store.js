import React, { createContext, useReducer } from "react";
import AuthReducer from "./auth/auth-reducer";
import { SAVE_USER_AUTH_DATA, REMOVE_USER_AUTH_DATA } from "./auth/types";
import {
  setAllTokens,
  setRefreshTokensTimer,
  clearRefreshTokensTimer,
} from "./auth/auth-manager";

const initialState = {
  username: "",
  isAuthenticated: false,
};

const Store = ({ children }) => {
  const [globalState, dispatch] = useReducer(AuthReducer, initialState);

  const setUserContext = async (userData) =>
    await dispatch({ type: SAVE_USER_AUTH_DATA, payload: userData });

  const clearUserContext = async () =>
    await dispatch({ type: REMOVE_USER_AUTH_DATA });

  const setUserAuthData = (authData, refreshMutation) => {
    setAllTokens(authData);
    setRefreshTokensTimer(authData, refreshMutation);
    setUserContext(authData);
  };

  const clearUserAuthData = async (logOutMutation) => {
    await logOutMutation();
    clearRefreshTokensTimer();
    clearUserContext();
  };

  return (
    <Context.Provider
      value={[globalState, dispatch, setUserAuthData, clearUserAuthData]}
    >
      {children}
    </Context.Provider>
  );
};

export const Context = createContext([initialState]);
export default Store;
