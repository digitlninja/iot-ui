import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Register from "views/pages/auth/Register.js";

const IotApp = () => (
  <Switch>
    {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
    <Route path="/register" render={(props) => <Register {...props} />} />
    <Route path="/" render={(props) => <AdminLayout {...props} />} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default IotApp;
