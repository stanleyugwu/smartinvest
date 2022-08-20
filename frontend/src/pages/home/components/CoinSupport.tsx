import React from "react";
import btc from '../images/coins/btc.png';
import eth from '../images/coins/eth.png';
import bch from '../images/coins/bch.png';
import lit from '../images/coins/lit.png';
import tet from '../images/coins/tet.png';
import shib from '../images/coins/shib.png';
import doge from '../images/coins/doge.png';
import bnb from '../images/coins/bnb.png';
import sol from '../images/coins/sol.png';
import crypto from '../images/coins/crypto.png';
import cad from '../images/coins/cad.png';

function CoinSupport() {
  return (
    <section className="section section-l pt-0" id="coin_support">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h3
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Payment Methods"
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
                  src={btc}
                  alt=""
                  style={{ width: "200px", borderRadius: "10px" }}
                />
              </div>
              <div className="roadmap  roadmap-i1  ">
                <img
                  src={eth}
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
                  src={bch}
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
                  src={lit}
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
                  src={tet}
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
                  src={shib}
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
                  src={doge}
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
                  src={bnb}
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
                  src={sol}
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
                  src={crypto}
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "100%",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="roadmap roadmap-i1  ">
                <img
                  src={cad}
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "100%",
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
