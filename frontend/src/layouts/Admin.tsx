import React from "react";
import "../admin/assets/css/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../admin/pages/Home";
import AdminSignIn from "../admin/pages/SignIn";
import AdminAuthProvider from "../admin/components/AdminAuthProvider";
import useAdminAppStore from "../store/admin";

/**
 * The home page is a spa, so elements are arranged accordingly
 */
function Admin() {
  const token = useAdminAppStore((state) => state.accessToken);

  return (
    <AdminAuthProvider>
      <Routes>
        {token ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<AdminSignIn />} />
        )}
      </Routes>
    </AdminAuthProvider>
  );
}

export default Admin;