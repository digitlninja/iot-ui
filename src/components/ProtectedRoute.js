import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../store/Store";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log({ Component });

  const [globalState] = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) =>
        globalState.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
