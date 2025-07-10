import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";

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
  }
];


