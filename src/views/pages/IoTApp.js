import React, { useContext, useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminLayout from "layouts/Admin.js";
import Register from "views/pages/auth/Register.js";
import Error from "views/pages/Error.js";
import Login from "./auth/Login";
import { Context } from "../../store/Store";
import useRefreshTokensMutation from "components/auth/graphql/useRefreshTokensMutation";
import { SAVE_TOKENS } from "../../store/types";

const IotApp = (props) => {
  const [globalState, dispatch] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [refreshUserTokens] = useRefreshTokensMutation();

  useEffect(() => {
    async function refreshTokens() {
      try {
        const { data } = await refreshUserTokens();
        setLoading(false);
        await dispatch({ type: SAVE_TOKENS, payload: data.refreshUserTokens });
      } catch (error) {
        setLoading(false);
        console.log(error);
        return;
      }
    }
    refreshTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Col className="d-flex justify-content-center align-items-center">
        <Loader
          type="Bars"
          color="#00BFFF"
          height={80}
          width={80}
          style={{ marginTop: `calc(50vh - ${80}px)` }}
        />
      </Col>
    );
  }

  if (!globalState.isAuthenticated) {
    return (
      <Switch>
        <Redirect from="/admin/dashboard" to="/" />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/error" render={(props) => <Error {...props} />} />
        <Route path="/" render={(props) => <Login {...props} />} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/error" render={(props) => <Error {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
    </Switch>
  );
};

export default IotApp;
