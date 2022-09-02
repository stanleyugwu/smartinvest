import React from "react";
import "../styles/trading-view.css";
import "../styles/table.css";
import ChartWidget from "../components/ChartWidget";
import RateWidget from "../components/RateWidget";
import TickerTapeWidget from "../components/TickerTapeWidget";

const Dashboard = () => {
  return (
    <>
      {/* News Flash */}
      <div className="col-sm-12">
        <span style={{ fontSize: "35px", color: "black" }}>
          Welcome
          <b style={{ color: "#FF4444", textDecoration: "underline" }}> Dev</b>
        </span>
      </div>
      <div className="col-sm-12 mb-4">
        <p
          id="date"
          style={{
            float: "left",
            fontWeight: "normal",
            color: "black",
            textAlign: "center",
          }}
        >
          {Date()}
        </p>
      </div>
      {/* Crypto Slider */}
      <div className="col-md-12">
        <div className="col-xl-12 col-md-12">
          <div
            className="ms-card ms-widget ms-infographics-widget"
            style={{
              backgroundImage: "linear-gradient(5deg, #272F3D, #272F3D)",
              border: "none",
            }}
          >
            <div className="ms-card-body media">
              <div className="media-body">
                <h6 style={{ color: "white" }}>Deposits</h6>
                <p className="ms-card-change" style={{ color: "white" }}>
                  {" "}
                  <img
                    src="money-bag-with-dollar-symbol.svg"
                    style={{ width: "20px" }}
                  />{" "}
                  £0.00
                </p>
                <p className="fs-12" style={{ color: "#fff" }}>
                  Stats -{" "}
                  <b
                    style={{ padding: "3px", borderRadius: "5px" }}
                    className=" btn-danger"
                  >
                    Pending Transaction
                  </b>
                </p>
              </div>
            </div>
            <i className="flaticon-layers" style={{ color: "white" }} />
          </div>
        </div>
        <div className="col-xl-12 col-md-12">
          <div
            className="ms-card ms-widget ms-infographics-widget"
            style={{
              backgroundImage: "linear-gradient(10deg, #272F3D, #272F3D)",
              border: "none",
            }}
          >
            <div className="ms-card-body media">
              <div className="media-body">
                <h6 style={{ color: "white" }}>Balance</h6>
                <p className="ms-card-change" style={{ color: "white" }}>
                  {" "}
                  <img
                    src="money-bag-with-dollar-symbol.svg"
                    style={{ width: "20px" }}
                  />{" "}
                  £0.00{" "}
                </p>
                <p className="fs-12" style={{ color: "#fff" }}>
                  Stats
                </p>
              </div>
            </div>
            <i className="flaticon-stats" />
          </div>
        </div>
        <div className="col-xl-12 col-md-12">
          <div
            className="ms-card ms-widget ms-infographics-widget"
            style={{
              backgroundImage: "linear-gradient(100deg, #000, #374B52)",
              border: "none",
            }}
          >
            <div className="ms-card-body media">
              <div className="media-body">
                <h6 style={{ color: "white" }}>Profit</h6>
                <p className="ms-card-change" style={{ color: "white" }}>
                  {" "}
                  <i className="material-icons" style={{ color: "#ff6666" }}>
                    arrow_upward
                  </i>{" "}
                  £0.00
                </p>
                <p className="fs-12" style={{ color: "#fff" }}>
                  Stats
                </p>
              </div>
            </div>
            <i className="flaticon-statistics" style={{ color: "white" }} />
          </div>
        </div>
        <TickerTapeWidget/>
      </div>
      <div
        className="col-xs-12 col-md-12"
        style={{ height: "auto" }}
        id="tradingWidgetWrapper"
      >
        {/* TradingView Widget BEGIN */}
        {/* Two script tags will go here for trade chart */}
        {/* TradingView Widget END */}

        <ChartWidget/>
        <RateWidget/>
      </div>
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div
              className="ms-card ms-widget ms-infographics-widget"
              style={{
                backgroundImage: "linear-gradient(500deg, #2f3640, #353b48)",
                border: "none",
              }}
            >
              <div className="ms-card-body media">
                <div className="media-body">
                  <h6 style={{ color: "white" }}>Credit</h6>
                  <p className="ms-card-change" style={{ color: "white" }}>
                    {" "}
                    <i className="material-icons" style={{ color: "white" }}>
                      arrow_upward
                    </i>{" "}
                    £0.00{" "}
                  </p>
                  <p className="fs-12" style={{ color: "#fff" }}>
                    Stats
                  </p>
                </div>
              </div>
              <i className="flaticon-statistics" style={{ color: "white" }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="ms-card ms-widget ms-infographics-widget"
              style={{
                backgroundImage: "linear-gradient(100deg, #2f3640, #353b48)",
                border: "none",
              }}
            >
              <div className="ms-card-body media">
                <div className="media-body">
                  <h6 style={{ color: "white" }}>Withdrawal</h6>
                  <p className="ms-card-change" style={{ color: "white" }}>
                    {" "}
                    <i className="material-icons" style={{ color: "white" }}>
                      arrow_upward
                    </i>{" "}
                    £0.00
                  </p>
                  <p className="fs-12" style={{ color: "#fff" }}>
                    Stats
                  </p>
                </div>
              </div>
              <i className="flaticon-statistics" style={{ color: "white" }} />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="ms-card ms-widget ms-infographics-widget"
              style={{
                backgroundImage: "linear-gradient(100deg, #2f3640, #353b48)",
                border: "none",
              }}
            >
              <div className="ms-card-body media">
                <div className="media-body">
                  <h6 style={{ color: "white" }}>Account Manager</h6>
                  <p className="ms-card-change" style={{ color: "white" }}>
                    {" "}
                    <i className="material-icons" style={{ color: "white" }}>
                      arrow_upward
                    </i>
                  </p>
                  <p className="fs-12" style={{ color: "#fff" }}>
                    Stats
                  </p>
                </div>
              </div>
              <i className="flaticon-user" style={{ color: "white" }} />
            </div>
          </div>
          <div className="col-xl-12 col-md-6">
            <div
              className="ms-card ms-widget ms-infographics-widget"
              style={{
                backgroundImage: "linear-gradient(10deg, #2f3640, #353b48)",
                border: "none",
              }}
            >
              <div className="ms-card-body media">
                <div className="media-body">
                  <h6 style={{ color: "white" }}>Trading Percentage</h6>
                  <p className="ms-card-change" style={{ color: "white" }}>
                    {" "}
                    <i className="material-icons" style={{ color: "white" }}>
                      arrow_upward
                    </i>{" "}
                    0%
                  </p>
                  <p className="fs-12">Stats</p>
                </div>
              </div>
              <i className="flaticon-pie-chart" style={{ color: "white" }} />
            </div>
          </div>
          <div className="col-xl-12 col-md-6">
            <div
              className="ms-card ms-widget ms-infographics-widget"
              style={{
                backgroundImage: "linear-gradient(10deg, #000, #ffc34d)",
                border: "none",
              }}
            >
              <div className="ms-card-body media">
                <div className="media-body">
                  <br />
                  <h4 style={{ color: "white", fontSize: "23px" }}>
                    My Referrals
                  </h4>
                </div>
              </div>
              <table>
                <tbody>
                  <tr style={{ backgroundColor: "white" }}>
                    <th>Fullname</th>
                    <th>Username</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;