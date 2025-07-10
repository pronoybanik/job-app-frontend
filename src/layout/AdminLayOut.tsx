import { Outlet } from "react-router-dom";
import AdminDashBoard from "../shared/AdminDashBoard";

const AdminLayOut = () => {
  return (
    <div>
      <AdminDashBoard />
      <Outlet />
    </div>
  );
};

export default AdminLayOut;
