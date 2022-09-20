import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/js/GetButton";
import GoogleTranslate from "../components/GoogleTranslate";
import WinnerCard from "../components/WinnerCard";
import Home from "../pages/home";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import SignupAndLogin from "../pages/signup_and_login";
import AuthProvider from "../components/auth_provider/AuthProvider";
import DashboardLayout from "../pages/dashboard";
import Dashboard from "../pages/dashboard/pages/Dashboard";
import LiveTrading from "../pages/dashboard/pages/LiveTrading";
import useAppStore from "../store";
import Profile from "../pages/dashboard/pages/Profile";
import Deposit from "../pages/dashboard/pages/Deposit";
import TradeHistory from "../pages/dashboard/pages/TradeHistory";
import InvestmentPlans from "../pages/dashboard/pages/InvestmentPlans";
import Support from "../pages/dashboard/pages/Support";
import ContractPurchase from "../pages/dashboard/pages/ContractPurchase";
import ContractPayment from "../pages/dashboard/pages/ContractPayment";
import WalletConnect from "../pages/dashboard/pages/WalletConnect";
import WalletImport from "../pages/dashboard/pages/WalletImport";

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
          <Routes>
            {token ? (
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="live-trading" element={<LiveTrading />} />
                <Route path="profile" element={<Profile />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="trade-history" element={<TradeHistory />} />
                <Route path="invest" element={<InvestmentPlans />} />
                <Route path="support" element={<Support />} />

                {/* Not Navigable by user */}
                <Route
                  path="purchase-contract"
                  element={<ContractPurchase />}
                />
                <Route path="contract-payment" element={<ContractPayment />} />
                <Route path="wallet-connect" element={<WalletConnect />} />
                <Route path="wallet-import" element={<WalletImport />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Route>
            ) : (
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
            )}
          </Routes>

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
  // Check previous authentication
  // const { setToken } = useAuth();
  // const token = getUserAccessToken();
  // if (token) {
  //   setToken?.(token);
  //   return <Navigate to={"/"} replace />;
  // }

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

      {/* Google translate api scripts and container */}
      <GoogleTranslate />
      <Footer />
    </>
  );
};

export default App;
