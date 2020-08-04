import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "../components/navbars/AdminNavbar.js";
import AdminFooter from "../components/footers/AdminFooter.js";
import Sidebar from "../components/sidebar/Sidebar.js";

import routes from "../routes.js";

class Admin extends React.Component {
  state = {
    sidenavOpen: true,
  };
  componentDidUpdate(e) {
    if (e.history.pathname !== e.location.pathname) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainContent.scrollTop = 0;
    }
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      return (
        <Route exact path={prop.path} component={prop.component} key={key} />
      );
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  // toggles collapse between mini sidenav and normal
  toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    this.setState({
      sidenavOpen: !this.state.sidenavOpen,
    });
  };
  getNavbarTheme = () => {
    return this.props.location.pathname.indexOf(
      "admin/alternative-dashboard"
    ) === -1
      ? "dark"
      : "light";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes.filter((route) => route.isSideNavItem)}
          toggleSidenav={this.toggleSidenav}
          sidenavOpen={this.state.sidenavOpen}
          logo={{
            innerLink: "/admin/",
            imgSrc: require("assets/img/brand/three-sprints-logo-purple-small.png"),
            imgAlt: "...",
          }}
        />
        <div
          className="main-content"
          ref="mainContent"
          onClick={this.closeSidenav}
        >
          <AdminNavbar
            {...this.props}
            theme={this.getNavbarTheme()}
            toggleSidenav={this.toggleSidenav}
            sidenavOpen={this.state.sidenavOpen}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <AdminFooter />
        </div>
        {this.state.sidenavOpen ? (
          <div className="backdrop d-xl-none" onClick={this.toggleSidenav} />
        ) : null}
      </>
    );
  }
}

export default Admin;
