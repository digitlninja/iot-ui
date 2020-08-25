import React from "react";
import logo from "assets/img/brand/three-sprints-logo-white-small.svg";

const LogoComponent = () => (
  <div className="text-center text-muted mb-4">
    <img
      className="img-fluid logo-medium"
      src={logo}
      alt="three sprints logo"
    />
  </div>
);

export default LogoComponent;
