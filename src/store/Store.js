import React, { createContext, useReducer } from "react";
import GlobalReducer from "./global-reducer";

const initialState = {
  idToken: "",
  accessToken: "",
  username: "",
  isAuthenticated: false,
};

const Store = ({ children }) => {
  const [globalState, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <Context.Provider value={[globalState, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext([initialState]);
export default Store;
