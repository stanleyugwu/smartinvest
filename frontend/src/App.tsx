import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/js/GetButton";
import GoogleTranslate from "./components/GoogleTranslate";
import WinnerCard from "./components/WinnerCard";
import "./assets/js/GetButton";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";

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
      // @ts-ignore
      let appInfo = App_Info(jQuery, window, document); // get app info object
      // @ts-ignore
      appInfo = Script_Init(appInfo, jQuery, window, document); // run scripts.js initialisation
      // @ts-ignore
      var AppInfo = __CHART_INIT(appInfo, jQuery, window); // run charts.js initialisation
      AppInfo.Chart.ChartJs(); // draw chart
    } catch (error) {
      console.log(error);
      console.log("ERROR WITH THREE SCRIPTS LOADED IN INDEX.HTML");
    }
  }, []);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Google translate api scripts and container */}
      <GoogleTranslate />

      {/* The three script tags which are supposed to be here are in the index.html file
       * Because there's no straight forward way to add script tags in react,
       * the loaded scripts are too big to live in our bundle. Also we can't import all the
       * script in our app because two of them are not modules
       */}

      {/* GetButton.io script is already imported in this file */}

      {/*
       * Shows Winner periodically.
       * The styles are already in index.css
       * and the script is coupled with the WinnerCard component
       */}
      <WinnerCard />
      <Footer/>
    </div>
  );
}

export default App;
