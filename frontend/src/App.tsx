import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Tokens from "./components/home/Tokens";
import InvestmentPlans from "./components/home/InvestmentPlans";
import Roadmap from "./components/home/Roadmap";
import CoinSupport from "./components/home/CoinSupport";
import BoardMembers from "./components/home/BoardMembers";
import Partners from "./components/home/Partners";
import Faq from "./components/home/Faq";
import Contact from "./components/home/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreloaderAnimation from "./components/PreloaderAnimation";
import "./assets/js/GetButton";
import GoogleTranslate from "./components/GoogleTranslate";
import WinnerCard from "./components/WinnerCard";
import './assets/js/GetButton';

/**
 * The home page is a spa, so elements are arranged accordingly
 */
function App() {
  return (
    <div className="App">
      {/* Main Page */}
      <div className="nk-wrap">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className="nk-pages tc-light">
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
        {/* Google translate api scripts and container */}
        <GoogleTranslate />
        {/* Footer */}
        <Footer />
        {/* Unknown */}
        <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
          <div className="ovm-line" />
        </div>
      </div>
      {/* Welcome name flash animation */}
      <PreloaderAnimation />

      {
      /* The three script tags which are supposed to be here are in the index.html file
      * Because there's no straight forward way to add script tags in react, 
      * the loaded scripts are too big to live in our bundle. Also we can't import all the
      * script in our app because two of them are not modules
      */
      }

      {/* GetButton.io script is already imported in this file */}
      
      {/* 
      * Shows Winner periodically.
      * The styles are already in index.css
      * and the script is coupled with the WinnerCard component
      */}
      <WinnerCard/>
    </div>
  );
}

export default React.memo(App);
