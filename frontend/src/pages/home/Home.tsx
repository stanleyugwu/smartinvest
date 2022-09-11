import React, { useEffect } from "react";
import getUserAccessToken from "../../api/services/getUserAccessToken";
import PreloaderAnimation from "../../components/PreloaderAnimation";
import useAuth from "../../hooks/useAuth";
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
  const auth = useAuth();
  // Auto signin
  useEffect(() => {
    const token = getUserAccessToken();
    if(token){
      auth.setToken(token);
    }
  },[])
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
