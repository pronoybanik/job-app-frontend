import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import About from "../pages/About/About";
import Applications from "../pages/Applications/Applications";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import ProtectedRoute from "./ProtectedRoute";

export const NavbarPath = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Applications",
    path: "/applications",
    element: (
      <ProtectedRoute roles={["user", "admin"]}>
        <Applications />
      </ProtectedRoute>
    ),
  },
  {
    name: "Find Jobs",
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
