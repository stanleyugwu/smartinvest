import React from "react";
import constants from "../../../utils/constants";
import headset from "../images/headset.svg";

const Support = () => {
  const email = constants.SUPPORT_EMAIL;
  return (
    <div className="col-xl-12 col-md-12" style={{ marginTop: "20px" }}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="ms-card">
          <div className="ms-card-img">
            <div className="d-block text-center">
              <img
                src={headset}
                style={{ height: "90px", padding: "20px" }}
                alt="headset"
              />
            </div>
          </div>
          <div className="ms-card-body mt-0">
            <h1 style={{ textAlign: "center",marginBottom:"1.5rem"}}>
              Contact Via Our Support Mails
            </h1>
            <div className="d-block text-center">
              <span
                style={{
                  color: "white",
                  backgroundColor: "#49C42D",
                  padding: "0.8rem",
                  borderRadius: "5px",
                }}
              >
                <a href={`mailto:${email}`} style={{ color: "#fff" }}>
                  {email}
                </a>
              </span>
            </div>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
