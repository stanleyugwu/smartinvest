import React from "react";
import PackageList from "../components/PackageList";

const InvestmentPlans = () => {
  return (
    <div className="col-xl-12 col-md-12" style={{ marginTop: "20px" }}>
      <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header">
          <h1 style={{ fontSize: "26px", color: "#3a3952" }}>Investment Plans - Package List</h1>
        </div>
        <div className="ms-panel-body">
          {/* Our Pricing Table */}
          <section className="ulockd-pricing">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 text-center">
                  <div className="ulockd-main-title"></div>
                </div>
                <PackageList />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;
