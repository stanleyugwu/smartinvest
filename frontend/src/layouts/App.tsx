import React, { useEffect, lazy, Suspense } from "react";
import Footer from "../components/Footer";
import "../assets/js/GetButton";
import GoogleTranslate from "../components/GoogleTranslate";
import WinnerCard from "../components/WinnerCard";
import Home from "../pages/home";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import SignupAndLogin from "../pages/signup_and_login";
import AuthProvider from "../components/auth_provider/AuthProvider";
import useAppStore from "../store";


import "../assets/css/index.css";
import "../assets/css/vendor.css";
import "../assets/css/style.css";
import "../assets/css/azaleae.css";
import { QueryClient, QueryClientProvider } from "react-query";

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
  if (!window.$__drawChart) window.$__drawChart = AppInfo.Chart.ChartJs;
  // @ts-ignore
  else window.$__onLoad = appInfo?.winLoad;
};

// We lazy load the whole user dashboard assets and pages to improve speed
const DashBoardRoutes = lazy(() => import('./DashboardRoutes'))
const Loader = (
  <div className="position-absolute w-100 h-100 text-white d-flex">
    <i className="fa fa-spinner fa-spin text-white fa-3x m-auto"></i>
  </div>
)

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
  const token = useAppStore((state) => state.accessToken);
  const queryClient = new QueryClient();

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      // we re-executes our scripts everytime user goes to home
      homePageInit();
    }
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="App">
            {token ? (
              <>
              <Suspense fallback={Loader}>
                <DashBoardRoutes/>
              </Suspense>
              </>
            ) : (
              <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route
                  path="signup"
                  element={<SignupAndLogin activeForm="signup" />}
                />
                <Route
                  path="signin"
                  element={<SignupAndLogin activeForm="signin" />}
                />
                <Route path="*" element={<Navigate to={"/signin"} />} />
              </Route>
              </Routes>
            )}

          {/* The three script tags which are supposed to be here are in the index.html file
           * Because there's no straight forward way to add script tags in react,
           * the loaded scripts are too big to live in our bundle. Also we can't import all the
           * script in our app because two of them are not modules
           */}

          {/* GetButton.io script is already imported in this file */}
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

/**
 * Layout structure for home and sign up pages
 */
export const HomeLayout = () => {
  return (
    <>
      <Outlet />
      {/*
       * Shows Winner periodically.
       * The styles are already in index.css
       * and the script is coupled with the WinnerCard component
       */}
      <WinnerCard />

      {/* Google translate api scripts and container */}
      <GoogleTranslate />
      <Footer />
    </>
  );
};

export default App;
