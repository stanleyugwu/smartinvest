import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * Protects child route from being accessed by unathenticated user
 */
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token)
    return <Navigate to={"/signin"} state={{ from: location }} replace />;
  return children;
};

export default RequireAuth;
