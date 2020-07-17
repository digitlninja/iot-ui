import Dashboard from "views/pages/dashboards/Dashboard.js";
import Login from "views/pages/examples/Login.js";
import Profile from "views/pages/examples/Profile.js";
import Register from "views/pages/examples/Register.js";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    miniName: "D",
    icon: "ni ni-shop text-primary",
    component: Dashboard,
    state: "dashboardsCollapse",
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: Login,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        component: Register,
        layout: "/auth",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];

export default routes;
