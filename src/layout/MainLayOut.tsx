import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
