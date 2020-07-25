import React from "react";
// bootstrap rtl for rtl support page
import "assets/vendor/bootstrap-rtl/bootstrap-rtl.scss";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.1.0";

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Login from "./auth/Login";
import IoTApp from "./IoTApp";
import { API_URI } from "../../config";
import { setContext } from "@apollo/client/link/context";
import useGlobalState from "store/useGlobalState";
import Context from "store/context";

const App = () => {
  const isAuthenticated = false;

  const getToken = (token_name) => {
    const token = localStorage.getItem(token_name);
    if (!token) {
      //logout
    }
    const exp = "";
    const now = Date.now();
    if (exp < now) {
      // refresh
    }
    // return the headers to the context so httpLink can read them
    // if not in local storage return "logged_out";
    // if exp < currentTime {
    // refreshToken();
  };

  const httpLink = createHttpLink({
    uri: API_URI,
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const idtoken = localStorage.getItem("idToken");

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: idtoken ? `Bearer ${idtoken}` : "",
      },
    };
  });
  const client = new ApolloClient({
    uri: API_URI,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const store = useGlobalState();

  return (
    <Context.Provider>
      <ApolloProvider value={store}>
        <BrowserRouter>{!isAuthenticated ? <Login /> : <IoTApp />}</BrowserRouter>
      </ApolloProvider>
    </Context.Provider>
  );
};
export default App;
