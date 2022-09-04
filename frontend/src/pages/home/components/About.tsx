import React, { useEffect } from "react";
import constants from "../../../utils/constants";

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="What and Why"
                style={{ visibility: "visible", animationDelay: "0.1s" }}
              >
                ABOUT {constants.COMPANY_NAME}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row justify-content-between align-items-center gutter-vr-40px">
            <div className="col-lg-12">
              <div className="nk-block-text">
                <h2
                  className="title animated fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.3"
                  style={{ visibility: "visible", animationDelay: "0.3s" }}
                >
                  {constants.COMPANY_NAME} is an investment platform legally registered
                  with all the relevant authorities online, providing secure,
                  smart trading through our team of professionals with the aim
                  of minimizing losses and maximizing profits for investors.
                </h2>
                <p
                  className="animated fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.4"
                  style={{ visibility: "visible", animationDelay: "0.4s" }}
                >
                  {constants.COMPANY_NAME} is one of the most transformative
                  technologies since the invention of the Internet. Mega Trade
                  Villa stands firmly in support of financial freedom and the
                  liberty that Bitcoin provides globally for anyone to
                  voluntarily participate in a permissionless and decentralized
                  network which empowers people to not be marginalized by
                  governments and financial institutions.
                </p>
                <p
                  className="animated fadeInUp"
                  data-animate="fadeInUp"
                  data-delay="0.5"
                  style={{ visibility: "visible", animationDelay: "0.5s" }}
                >
                  We welcome you to the digital world of crypto investment, Mega
                  Trade Villa - where our clients will receive stable and
                  risk-free long-term returns by placing your Bitcoin, Ethereum
                  and Litecoin asset in our online profound asset management
                  program. {constants.COMPANY_NAME} is an active cryptocurrency mining
                  and trading participant, crypto-currency asset management,
                  which is built on many years of experience and deep market
                  knowledge in the stock and digital market.
                </p>
                <ul className="btn-grp gutter-vr-20px pdt-m">
                  <li
                    className="animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.6"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <a
                      href="/signup"
                      className="menu-link btn btn-primary btn-round btn-lg"
                    >
                      <span>Get Started</span>{" "}
                      <em className="icon ti ti-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
