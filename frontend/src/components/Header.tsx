import React, { useState } from "react";
import headerImg from '../assets/images/gfx-e.png'
import logo from '../assets/images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
   setMenuOpen(!menuOpen)
  }

  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      {/* Header @s */}
      <div className="header-main">
        <div className="header-container container container-xxl">
          <div className="header-wrap">
            {/* Logo @s */}
            <div
              className="header-logo logo animated"
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <a href="index.html" className="logo-link">
                <img className="logo-light" src={logo} alt="logo" />
              </a>
            </div>
            {/* Menu Toogle @s */}
            <div className="header-nav-toggle">
              <a
                href="#"
                className={`navbar-toggle ${menuOpen ? 'navbar-active' : ''}`}
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
              className={`header-navbar animated ${menuOpen ? 'menu-shown' : ''}`}
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <nav className="header-menu" id="header-menu">
                <ul className="menu">
                  <li className="menu-item">
                    <a
                      className="menu-link nav-link menu-toggle"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link menu-toggle" href="#about">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link nav-link menu-toggle"
                      href="/#ecosystems"
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link nav-link menu-toggle"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link menu-toggle" href="#plans">
                      Investment Plans
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link menu-toggle" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link nav-link menu-toggle"
                      href="#contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul className="menu-btns">
                  <li>
                    <a
                      href="/signup"
                      className="btn btn-sm btn-thin btn-outline btn-auto"
                    >
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="btn btn-sm btn-thin btn-outline btn-auto"
                    >
                      <span>Register</span>
                    </a>
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
      {/* .header-main @e */}
      <div className="banner banner-fs tc-light">
        <div className="nk-block nk-block-sm nk-block-header my-auto">
          <div className="container container-xxl pt-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="banner-gfx banner-gfx-auto animated"
                  data-animate="fadeInUp"
                  data-delay=".7"
                >
                  <img src={headerImg}alt="header" />
                </div>
              </div>
              {/* .col */}
              <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                <div className="banner-caption">
                  <h1
                    className="title title-lg ttu animated"
                    data-animate="fadeInUp"
                    data-delay=".8"
                  >
                    DECENTRALIZED TRADING &amp; INVESTMENT PLATFORM WITH
                    BLOCKCHAIN INFRASTRUCTURE
                  </h1>
                  <p
                    className="lead animated"
                    data-animate="fadeInUp"
                    data-delay=".9"
                  >
                    Decentralized Trading &amp; Investment platform for
                    cryptocurrencies, forex, binary option, CFD that standarizes
                    data &amp; operations with blockchain technology. We provide
                    user-friendly, efficient and secure trading &amp; investment
                    solutions utilizing blockchain technology.{" "}
                  </p>
                  <div
                    className="cpn-action animated"
                    data-animate="fadeInUp"
                    data-delay={1}
                  >
                    <a href="/signup" className="btn btn-primary btn-round">
                      SIGN IN
                    </a>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
        </div>
        <div className="nk-block nk-block-status">
          <div className="container container-xxl">
            <div className="row gutter-vr-40px justify-content-between">
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <div
                  className="progress-wrap progress-wrap-point animated"
                  data-animate="fadeInUp"
                  data-delay="0.8"
                >
                  <ul className="progress-info progress-info-s2">
                    <li>
                      Raised - <span>1,1250 Tokens</span>
                    </li>
                    <li className="text-right">
                      Target - <span>150,000 Tokens</span>
                    </li>
                  </ul>
                  <div className="progress-bar progress-bar-xs">
                    <div
                      className="progress-percent progress-percent-s2"
                      data-percent={30}
                    />
                    <div className="progress-point" data-point={25}>
                      Soft Cap
                    </div>
                    <div className="progress-point" data-point={55}>
                      Crowdsale
                    </div>
                    <div className="progress-point" data-point={85}>
                      Hard Cap
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-left">
                <div className="row justify-content-around gutter-vr-30px">
                  <div className="col-sm-4 col-md-6 col-lg-4 col-xl-5">
                    <div
                      className="status-info animated"
                      data-animate="fadeInUp"
                      data-delay="0.9"
                    >
                      <h6 className="title title-xxs tc-default status-title ttu">
                        Current Bonus
                      </h6>
                      <h3 className="fz-3 fw-3 status-percent">20%</h3>
                      <div className="fz-8">Contributors can receive</div>
                    </div>
                  </div>
                  <div className="col-sm-8 col-md-6 col-lg-7 col-xl-7">
                    <div
                      className="status-countdown float-sm-right animated"
                      data-animate="fadeInUp"
                      data-delay={1}
                    >
                      <h6 className="title title-xxs tc-default status-title ttu">
                        The Bonus ends in
                      </h6>
                      <div
                        className="countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt"
                        data-date="2022/03/10"
                        data-min-text="Minutes"
                        data-sec-text="Seconds"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block nk-block-actions">
          <div className="container container-xxl">
            <div className="row gutter-vr-40px align-items-center">
              <div className="col-sm-7 d-flex justify-content-center justify-content-sm-start">
                <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.8"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=41JCpzvnn_0"
                      className="link link-light link-break video-popup"
                    >
                      <em className="icon-circle icon-border icon-animation fas fa-play" />
                      <span>What Is Bitcoin ?</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5">
                <ul
                  className="social-links social-links-s2 justify-content-center justify-content-sm-end animated"
                  data-animate="fadeInUp"
                  data-delay={1}
                >
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-medium-m" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-bitcoin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Place Particle Js */}
        <div
          id="particles-bg"
          className="particles-container is-fixed particles-bg op-20"
        />
      </div>
    </header>
  );
}

export default Header;
