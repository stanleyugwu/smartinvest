import React, { useRef } from "react";
import CountrySelect from "../../../components/country-select/CountrySelect";
import TickerTapeWidget from "../components/TickerTapeWidget";

const Profile = () => {
  const countryRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <h6 style={{ color: "#000", fontWeight: "bolder", fontSize: "24px", paddingLeft:"30px" }}>
        Account Profile
      </h6>
      <div
        className="col-md-12"
        style={{
          backgroundColor: "#262626",
          height: "auto",
          padding: "10px",
          marginBottom: "30px",
          borderRadius: "10px",
        }}
      >
        <div className="ms-panel" style={{ backgroundColor: "#262626" }}>
          <div
            className="ms-panel-header"
            style={{ backgroundColor: "#000", borderRadius: "10px" }}
          >
            <h6 style={{ color: "#ff6666" }}>
              Your Referral Link{" "}
              <i className="fa fa-arrow-right" style={{ color: "red" }} />
            </h6>
            <span style={{ color: "white" }}>
              https://megatradevilla.com/Meg-Villa/index.php?ref=
            </span>
          </div>
          <div className="ms-panel-body">
            <form method="post">
              <div className="col-sm-6" style={{ float: "left" }}>
                <div className="form-group">
                  <label htmlFor="exampleText" style={{ color: "#fff" }}>
                    Full Name
                  </label>
                  <input type="text" className="form-control" name="fn" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleEmail" style={{ color: "#fff" }}>
                    Email address
                  </label>
                  <input type="email" className="form-control" name="emm" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleText" style={{ color: "#fff" }}>
                    Phone Number
                  </label>
                  <input type="text" className="form-control" name="ph" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect" style={{ color: "#fff" }}>
                    Country
                  </label>
                  <CountrySelect
                    ref={countryRef}
                    name="cn"
                    id="exampleSelect"
                  />
                </div>
              </div>
              <div className="col-sm-6" style={{ float: "left" }}>
                <div className="form-group">
                  <label htmlFor="exampleSelect" style={{ color: "#fff" }}>
                    Currency
                  </label>
                  <select
                    className="form-control"
                    name="cur"
                    id="exampleSelect"
                  >
                    <option />
                    <option value="$">US Dollar</option>
                    <option value="€">Euro</option>
                    <option value="£">British Pound Sterling</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="examplePassword" style={{ color: "#fff" }}>
                    Change Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="examplePassword"
                    name="pw"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="examplePassword" style={{ color: "#fff" }}>
                    Confrim Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="examplePassword"
                    name="cpw"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="sub"
                    className="btn btn-primary"
                    defaultValue="Update"
                    style={{
                      marginTop: "25px",
                      backgroundColor: "#E67E00",
                      border: "1px solid #E67E00",
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Crypto Slider */}
      <div className="col-md-12">
        {/* TradingView Widget BEGIN */}
        <TickerTapeWidget />
        {/* TradingView Widget END */}
      </div>
    </>
  );
};

export default Profile;
