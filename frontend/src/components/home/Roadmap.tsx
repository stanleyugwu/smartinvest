import React from "react";

function Roadmap() {
  return (
    <section className="section section-l" id="roadmap">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Timeline"
              >
                ROADMAY
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay="0.2">
                ICO Crypto is developing a global data-driven platform for the
                world. Powered by blockchain and smart contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div
            className="roadmap-wrap roadmap-wrap-ovl-right text-center animated"
            data-animate="fadeInUp"
            data-delay="0.3"
          >
            <div className="roadmap-line-s2" />
            <div
              className="roadmap-slider has-carousel carousel-nav-center"
              data-blank="true"
              data-items={5}
              data-items-tab-l={4}
              data-items-tab-p={3}
              data-items-mobile={2}
              data-margin={-1}
              data-navs="true"
            >
              <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                <h6 className="roadmap-year-s2">Q1 2018</h6>
                <h5 className="title title-sm roadmap-date">
                  January - Mar 2018
                </h5>
                <div className="roadmap-text">
                  <p>
                    We started Mega Trade Villa and worked on creating a robust
                    platform for efficient trading.
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i2 roadmap-finished">
                <h6 className="roadmap-year-s2">Q2 2018</h6>
                <h5 className="title title-sm roadmap-date">
                  April - June 2018
                </h5>
                <div className="roadmap-text">
                  <p>
                    Consolidating our holds in the market with major
                    diversification into emerging currencies.
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i3 roadmap-finished">
                <h6 className="roadmap-year-s2">Q3 2018</h6>
                <h5 className="title title-sm roadmap-date">
                  July - September 2018
                </h5>
                <div className="roadmap-text">
                  <p>Mega Trade Villa kicks off it's trading platform.</p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i4 roadmap-finished">
                <h6 className="roadmap-year-s2">Q4 2018</h6>
                <h5 className="title title-sm roadmap-date">
                  October - December 2018
                </h5>
                <div className="roadmap-text">
                  <p>
                    Building of a consolidated market share running on a
                    connected system.
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i5 roadmap-finished">
                <h6 className="roadmap-year-s2">Q1 2019</h6>
                <h5 className="title title-sm roadmap-date">
                  January - March 2019
                </h5>
                <div className="roadmap-text">
                  <p>
                    Building of a strong portfolio for vibrant profitable trade.
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i6 roadmap-finished">
                <h6 className="roadmap-year-s2">Q2 2019</h6>
                <h5 className="title title-sm roadmap-date">
                  April - June 2019
                </h5>
                <div className="roadmap-text">
                  <p>
                    Workable synergy in the market with the initial launch of
                    Mega Trade Villa .
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i7">
                <h6 className="roadmap-year-s2">Q3 2019</h6>
                <h5 className="title title-sm roadmap-date">
                  July - September 2019
                </h5>
                <div className="roadmap-text">
                  <p>
                    Expanded the availability of the platform to more countries.
                  </p>
                </div>
              </div>
              <div className="roadmap roadmap-s2 roadmap-i7">
                <h6 className="roadmap-year-s2">Q4 2019</h6>
                <h5 className="title title-sm roadmap-date">
                  October - December 2019
                </h5>
                <div className="roadmap-text">
                  <p>
                    Expanded the trading and analysis team in more countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
