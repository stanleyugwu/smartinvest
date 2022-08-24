import React, { useEffect } from "react";
import PreloaderAnimation from "../../components/PreloaderAnimation";
import About from "./components/About";
import BoardMembers from "./components/BoardMembers";
import CoinSupport from "./components/CoinSupport";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import HeaderBanner from "./components/HeaderBanner";
import InvestmentPlans from "./components/InvestmentPlans";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Tokens from "./components/Tokens";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
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
      // the first time user comes to home page, winLoad function is attached to window object.
      // the second time, we just run the function to re-initialise scripts executions
      // @ts-ignore
      if(window?.$__onLoad) window.$__onLoad()
      // @ts-ignore
      let appInfo = App_Info(jQuery, window, document); // get app info object
      // @ts-ignore
      appInfo = Script_Init(appInfo, jQuery, window, document); // run scripts.js initialisation
      // below function will be called whenever user navigates to and from home page to trigger 
      // scripts execution for normalising page
      //  assigning it to variable won't work so we attach it to window object
      // @ts-ignore
      window.$__onLoad = appInfo?.winLoad;
      // @ts-ignore
      var AppInfo = __CHART_INIT(appInfo, jQuery, window); // run charts.js initialisation
      AppInfo.Chart.ChartJs(); // draw chart
    } catch (error) {
      console.log(error);
      console.log("ERROR WITH THREE SCRIPTS LOADED IN INDEX.HTML");
    }
  }, []);
  return (
    <>
      {/* Main Page */}
      <div className="nk-wrap">
        {/* Main Content */}
        <main className="nk-pages tc-light">
          <HeaderBanner />
          <About />
          <Services />
          <WhyChooseUs />
          <Tokens />
          <InvestmentPlans />
          <Roadmap />
          <CoinSupport />
          <BoardMembers />
          <Partners />
          <Faq />
          <Contact />
        </main>
        {/* Unknown */}
        <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
          <div className="ovm-line" />
        </div>
      </div>
      {/* Welcome name flash animation */}
      <PreloaderAnimation />
    </>
  );
};

export default Home;
