import React from "react";
import "../admin/assets/styles/index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import useAdminAppStore from "../store/admin";

import AdminNavbar from "../admin/components/Navbars/AdminNavbar.js";
import HeaderStats from "../admin/components/Headers/HeaderStats.js";
import FooterAdmin from "../admin/components/Footers/FooterAdmin.js";
import Sidebar from "../admin/components/Sidebar/Sidebar";

import Dashboard from "../admin/views/admin/Dashboard.js";
import Maps from "../admin/views/admin/Maps.js";
import Settings from "../admin/views/admin/Settings.js";
import Tables from "../admin/views/admin/Tables.js";

import Login from "../admin/views/auth/Login";
import FooterSmall from "../admin/components/Footers/FooterSmall.js";

import bgImg from "../admin/assets/img/register_bg_2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../admin/assets/styles/tailwind.css";
import AdminAuthProvider from "../admin/components/AdminAuthProvider";

/**
 * The home page is a spa, so elements are arranged accordingly
 */
function Admin() {
  const token = useAdminAppStore((state) => state.accessToken);

  return (
    <AdminAuthProvider>
      {token ? (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="maps" element={<Maps />} />
                <Route path="settings" element={<Settings />} />
                <Route path="tables" element={<Tables />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
              <FooterAdmin />
            </div>
          </div>
        </>
      ) : (
        <>
          <main>
            <section className="relative w-full h-full py-10 md:py-40 min-h-screen">
              <div
                className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                style={{
                  backgroundImage: "url(" + bgImg + ")",
                }}
              ></div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
              <FooterSmall absolute />
            </section>
          </main>
        </>
      )}
    </AdminAuthProvider>
  );
}

export default Admin;
