import { Navigate } from "react-router-dom";
import { logout, selectCurrentToken } from "../redux/features/auth/auth.slice";
import verifyToken from "../utils/verifyToken";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";


type TProtectedRoute = {
  children: ReactNode;
  roles?: string[] | undefined; // optional array of allowed roles
};

interface User {
  role: string;
}

const ProtectedRoute = ({ children, roles }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const user = verifyToken(token) as User;


  if (roles && !roles.includes(user?.role)) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default ProtectedRoute;
