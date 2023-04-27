import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "./components/SideNav";
import HeadAndBody from "./components/HeadAndBody";
import MainContent from "./components/MainContent";
import logo from '../../assets/images/logo.png'
import "./styles/flat-icons/flaticon.css";
import "./styles/cryptocoins/cryptocoins.css";
import "./styles/cryptocoins/cryptocoins-colors.css";
import "./styles/jquery-ui.min.css";
import "./styles/slick.css";
import "./styles/style.css";
import GoogleTranslate from "../../components/GoogleTranslate";
import removeDuplicateTranslateElem from "../../utils/services/removeDuplicateTranslateElem";

/**
 * Layout structure for dashboard routes
 * Requires auth for any page
 */
const DashboardLayout = () => {
  return (
    <>
      <HeadAndBody>
        <>
          {/* Setting Panel */}
          <div className="ms-toggler ms-settings-toggle ms-d-block-lg">
            <i className="flaticon-paint" />
          </div>
          
          {/* Preloader */}
          <div id="preloader-wrap" style={{ backgroundColor: "#272F3D" }}>
            <img src={logo} style={{ width: 120 }} />
          </div>
          {/* Overlays */}
          <div
            className="ms-aside-overlay ms-overlay-left ms-toggler"
            data-target="#ms-side-nav"
            data-toggle="slideLeft"
          />
          <div
            className="ms-aside-overlay ms-overlay-right ms-toggler"
            data-target="#ms-recent-activity"
            data-toggle="slideRight"
          />
          <SideNavigation />
          {/* Google translate api scripts and container */}
          <GoogleTranslate />
          <MainContent>
            {/* Outlet is the dynamic part of it. swicthes between dashboard pages*/}
            <Outlet />
          </MainContent>
          <aside
            id="ms-quick-bar"
            className="ms-quick-bar fixed ms-d-block-lg"
            style={{ backgroundColor: "#262626" }}
          ></aside>
        </>
      </HeadAndBody>
    </>
  );
};

export default DashboardLayout;
