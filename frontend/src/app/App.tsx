import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/js/GetButton";
import GoogleTranslate from "../components/GoogleTranslate";
import WinnerCard from "../components/WinnerCard";
import "../assets/js/GetButton";
import Home from "../pages/home";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import SignupAndLogin from "../pages/signup_and_login";
import AuthProvider from "../components/auth_provider/AuthProvider";
import DashboardLayout from "../pages/dashboard";
import Dashboard from "../pages/dashboard/pages/Dashboard";
import useAuth from "../hooks/useAuth";
import getUserAccessToken from "../api/services/getUserAccessToken";
import LiveTrading from "../pages/dashboard/pages/LiveTrading";

/**
 * Initialises home page by running required scripts
 */
const homePageInit = () => {
  // @ts-ignore
  let appInfo = App_Info(jQuery, window, document); // get app info object
  // @ts-ignore
  appInfo = Script_Init(appInfo, jQuery, window, document); // run scripts.js initialisation
  // @ts-ignore
  var AppInfo = __CHART_INIT(appInfo, jQuery, window); // run charts.js initialisation
  AppInfo.Chart.ChartJs(); // draw chart
  // below function will be called whenever user navigates to and from home page to trigger
  // scripts execution for normalising page
  //  assigning it to variable won't work so we attach it to window object
  // it will be called when user moves to and from home page
  // @ts-ignore
  if (window.$__onLoad) window.$__onLoad?.();
  // @ts-ignore
  else window.$__onLoad = appInfo?.winLoad;
};

/**
 * The home page is a spa, so elements are arranged accordingly
 */
function App() {
  useEffect(() => {
    /**
     * Below undefined variables should be made available by `charts.js`, `scripts.js`,
     * and `jquery` library.
     * They're hopeully loaded in follwowing order: jquery.js, scripts.js, charts.js.
     *
     * The scripts: `scripts.js` and `charts.js` both have initialisation logics and they're supposed to
     * automatically when the scripts are loaded. We've however prevented those initialisations until our app
     * renders because the scripts will be loaded/executed before our app renders
     */
    try {
      homePageInit();
    } catch (error) {
      console.log(error);
      console.log("ERROR WITH THREE SCRIPTS LOADED IN INDEX.HTML");
    }
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      // we re-executes our scripts everytime user goes to home
      homePageInit();
    }
  }, [pathname]);

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/signup"
              element={<SignupAndLogin activeForm="signup" />}
            />
            <Route
              path="/signin"
              element={<SignupAndLogin activeForm="signin" />}
            />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/live-trading" element={<LiveTrading />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
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
export const HomeLayout = () => {
  // Check previous authentication
  const { setToken } = useAuth();
  const token = getUserAccessToken();
  if (token) {
    setToken?.(token);
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
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
};

export default App;
