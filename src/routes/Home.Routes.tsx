import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Signup />,
  }
];


