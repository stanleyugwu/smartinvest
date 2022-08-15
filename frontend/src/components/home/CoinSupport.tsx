import React from "react";

function CoinSupport() {
  return (
    <section className="section section-l" id="roadmap">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h3
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Timeline"
              >
                At Mega Trade Villa We Support
              </h3>
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
              <div className="roadmap ">
                <img
                  src="coin/btc.png"
                  alt=""
                  style={{ width: "200px", borderRadius: "10px" }}
                />
              </div>
              <div className="roadmap  roadmap-i1  ">
                <img
                  src="coin/eth.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap  roadmap-i1  ">
                <img
                  src="coin/bch.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap  roadmap-i1 ">
                <img
                  src="coin/lit.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/tet.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/shib.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/doge.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/bnb.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/sol.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/crypto.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src="coin/cad.png"
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoinSupport;
