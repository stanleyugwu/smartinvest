import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      {/* Header @s */}
      <div className="header-main">
        <div className="header-contain er container container-xxl">
          <div className="header-wrap">
            {/* Logo @s */}
            <div
              className="header-logo logo animated"
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <a href="/" className="logo-link">
                <img className="logo-light" src={logo} style={{width:80,height:80}} alt="logo" />
              </a>
            </div>
            {/* Menu Toogle @s */}
            <div className="header-nav-toggle">
              <a
                href="#"
                className={`navbar-toggle ${menuOpen ? "navbar-active" : ""}`}
                onClick={handleMenuToggle}
                data-menu-toggle="header-menu"
              >
                <div className="toggle-line">
                  <span />
                </div>
              </a>
            </div>
            {/* Menu @s */}
            <div
              className={`header-navbar animated ${
                menuOpen ? "menu-shown" : ""
              }`}
              data-animate="fadeInDown"
              data-delay=".3"
            >
              <nav className="header-menu" id="header-menu">
                <ul className="menu">
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to={"/"}
                      
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#about"
                      
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#ecosystems"
                      
                    >
                      Our Services
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#features"
                      
                    >
                      Features
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#plans"
                      
                    >
                      Investment Plans
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#faq"
                      
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link nav-link menu-toggle"
                      to="#contact"
                      
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className="menu-btns">
                  <li>
                    <Link
                      to="/signin"
                      className="btn btn-sm btn-thin btn-outline btn-auto"
                    >
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="btn btn-sm btn-thin btn-outline btn-auto"
                    >
                      <span>Register</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* .header-navbar @e */}
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#1D2330",
              overflow: "hidden",
              boxSizing: "content-box",
              border: "1px solid #282E3B",
              borderRadius: "4px",
              textAlign: "right",
              lineHeight: "14px",
              fontSize: "12px",
              fontFeatureSettings: "normal",
              textSizeAdjust: "100%",
              padding: "0px",
              margin: "0px",
            }}
          >
            <div style={{ height: "40px" }}>
              <iframe
                title="coinlibframe"
                src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
                width="100%"
                height={36}
                scrolling="auto"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
                style={{ border: 0, margin: 0, padding: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
