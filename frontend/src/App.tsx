import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/js/GetButton";
import GoogleTranslate from "./components/GoogleTranslate";
import WinnerCard from "./components/WinnerCard";
import "./assets/js/GetButton";
import Home from "./pages/home";
import { Routes, Route, Outlet } from "react-router-dom";
import SignupAndLogin from "./pages/signup_and_login";
import AuthProvider from "./components/auth_provider/AuthProvider";
import Dashboard from "./pages/dashboard";
import RequireAuth from "./components/RequireAuth";

/**
 * The home page is a spa, so elements are arranged accordingly
 */
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route
              path="/signup"
              element={<SignupAndLogin activeForm="signup" />}
            />
            <Route path="/signin" element={<SignupAndLogin />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>

        {/* Google translate api scripts and container */}
        <GoogleTranslate />

        {/* The three script tags which are supposed to be here are in the index.html file
         * Because there's no straight forward way to add script tags in react,
         * the loaded scripts are too big to live in our bundle. Also we can't import all the
         * script in our app because two of them are not modules
         */}

        {/* GetButton.io script is already imported in this file */}
      </div>
    </AuthProvider>
  );
}

/**
 * Layout structure for home and sign up pages
 */
export const HomeLayout = () => (
  <>
    <Header />
    <Outlet />
    {/*
     * Shows Winner periodically.
     * The styles are already in index.css
     * and the script is coupled with the WinnerCard component
     */}
    <WinnerCard />
    <Footer />
  </>
);

export default App;
