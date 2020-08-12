import Dashboard from "views/pages/dashboards/Dashboard.js";
import Login from "views/pages/auth/Login.js";
import ForgotPassword from "views/pages/auth/ForgotPassword.js";
import ConfirmPassword from "views/pages/auth/ConfirmPassword.js";
import Register from "views/pages/auth/Register.js";
import Profile from "views/pages/examples/Profile.js";
import Error from "views/pages/Error.js";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    miniName: "D",
    icon: "ni ni-shop text-primary",
    component: Dashboard,
    state: "dashboardsCollapse",
    // layout: "/admin",
    isSideNavItem: true,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-shop text-primary",
    component: Register,
    state: "dashboardsCollapse",
    // layout: "/admin",
    isSideNavItem: false,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // layout: "/admin",
    isSideNavItem: false,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    // layout: "/admin",
    isSideNavItem: false,
  },
  {
    path: "/confirm-password/:username?",
    name: "ConfirmPassword",
    component: ConfirmPassword,
    // layout: "/admin",
    isSideNavItem: false,
  },
  {
    path: "/users",
    name: "Users",
    component: Profile,
    // layout: "/admin",
    isSideNavItem: true,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
    // layout: "/admin",
    isSideNavItem: false,
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    isSideNavItem: false,
    views: [
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: Login,
        // layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        component: Register,
        // layout: "/auth",
      },
    ],
  },
];

export default routes;
