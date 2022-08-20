import React from "react";
import bronzeImg from '../images/investment_packages/bronze.jpg'
import silverImg from '../images/investment_packages/silver.jpg'
import goldImg from '../images/investment_packages/gold.jpg'

function InvestmentPlans() {
  return (
    <section className="section section-l" id="plans">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Pricing"
              >
                INVESTMENT PLANS
              </h2>
              <p
                className="animated"
                data-animate="fadeInUp"
                data-delay="0.2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row gutter-vr-50px">
            <div className="col-sm-6 col-lg-4">
              <div
                className="doc animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="doc-photo doc-shape doc-shape-a">
                  <img src={bronzeImg} alt="" />
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">Minimum Deposit $1,000</h5>
                  <h5 className="doc-title title-sm">
                    Maximum Deposit $10,000
                  </h5>
                  <h5 className="doc-title title-sm">Risk management</h5>
                  <h5 className="doc-title title-sm">Standard Options</h5>
                  <h5 className="doc-title title-sm">Account manager</h5>
                  <h5 className="doc-title title-sm">
                    Contract Duration: 2-3 Weeks
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                className="doc animated"
                data-animate="fadeInUp"
                data-delay="0.4"
              >
                <div className="doc-photo doc-shape doc-shape-b">
                  <img src={silverImg} alt="" />
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">
                    Minimum Deposit $10,000
                  </h5>
                  <h5 className="doc-title title-sm">
                    Maximum Deposit $50,000
                  </h5>
                  <h5 className="doc-title title-sm">Risk management</h5>
                  <h5 className="doc-title title-sm">Standard Options</h5>
                  <h5 className="doc-title title-sm">Account manager</h5>
                  <h5 className="doc-title title-sm">
                    Contract Duration: 3-4 Weeks{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                className="doc animated"
                data-animate="fadeInUp"
                data-delay="0.5"
              >
                <div className="doc-photo doc-shape doc-shape-c">
                  <img src={goldImg} alt="" />
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">
                    Minimum Deposit $50,000
                  </h5>
                  <h5 className="doc-title title-sm">
                    Maximum Deposit UNLIMITED
                  </h5>
                  <h5 className="doc-title title-sm">Risk management</h5>
                  <h5 className="doc-title title-sm">Standard Options</h5>
                  <h5 className="doc-title title-sm">Account manager</h5>
                  <h5 className="doc-title title-sm">
                    Contract Duration: 6 Weeks
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block text-center">
        <br />
        <a href="/signup" className="btn btn-lg">
            Sign up for more higher Investment plans today
        </a>
      </div>
    </section>
  );
}

export default InvestmentPlans;
