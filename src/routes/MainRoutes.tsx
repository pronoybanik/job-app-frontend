import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import { routeGenerator } from "../utils/RouteGenerator";
import { NavbarPath } from "./Home.Routes";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import { AdminPaths } from "./Admin.Routes";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(NavbarPath),
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: routeGenerator(AdminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default MainRoutes;
