import React from "react";
import "../styles/trading-view.css";
import "../styles/table.css";
import ChartWidget from "../components/ChartWidget";
import RateWidget from "../components/RateWidget";
import SellOrderForm from "../components/SellOrderForm";
import BuyOrderForm from "../components/BuyOrderForm";
import useAppStore from "../../../store";
export interface PlacedTrades {
  orderId: string;
  time: number | Date;
  type: "buy" | "sell";
  symbol: string;
  volume: number;
  stopLoss: number;
  takeProfit: number;
  status: string;
  expiry: number | Date;
  profit: string | number;
  loss: string | number;
}

const fakeTrades: PlacedTrades[] = [];

const LiveTrading = () => {
  const username = useAppStore((state) => state.profile?.fullname);
  return (
    <>
      <div className="col-sm-12">
        <span style={{ fontSize: "35px", color: "black" }}>
          Welcome To Live Trading
          <b style={{ color: "#4da3ff", textDecoration: "underline", marginLeft:"1rem" }}>
            {username}
          </b>
        </span>
      </div>
      <div className="col-sm-12">
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
      <div className="col-md-12">
        <SellOrderForm />
        <BuyOrderForm />
        <div className="col-md-12 w-full" id="tradeBtn">
          <input
            type="submit"
            value="BUY"
            data-toggle="modal"
            data-target="#modal-10"
            className="btn btn-success"
            style={{ float: "right", marginLeft: "10px" }}
          />
          <input
            type="submit"
            value="SELL"
            data-toggle="modal"
            data-target="#modal-11"
            className="btn btn-danger"
            style={{ float: "right" }}
          />
        </div>
      </div>
      <div className="col-xs-12 col-md-12" style={{ height: "auto" }}>
        <ChartWidget />
        <RateWidget />
      </div>
      <br />
      <div className="pcoded-content w-100 bg-white mb-10">
        {/* [ breadcrumb ] end */}
        <div
          className="pcoded-inner-content"
          style={{ backgroundColor: "white" }}
        >
          {/* Main-body start */}
          <div className="main-body" style={{ backgroundColor: "white" }}>
            <div className="page-wrapper" style={{ backgroundColor: "white" }}>
              {/* Page-body start */}
              <div className="page-body">
                {/* Inverse table card start */}
                <div className="card" style={{ padding: "20px 15px" }}>
                  <div className="card-header">
                    <h5>Order History</h5>
                    <div className="card-header-right"></div>
                  </div>
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <table className="table table-inverse">
                        <thead>
                          <tr>
                            <th scope="col">Order</th>
                            <th scope="col">Time</th>
                            <th scope="col">Type</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Volume</th>
                            <th scope="col">S/L</th>
                            <th scope="col">T/P</th>
                            <th scope="col">Status</th>
                            <th scope="col">Expire Time</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fakeTrades.map((t) => {
                            return (
                              <tr
                                style={{ color: "black", textAlign: "center" }}
                              >
                                <td>{t.orderId}</td>
                                <td>{new Date(t.time).toISOString()}</td>
                                <td>{t.type}</td>
                                <td>{t.symbol}</td>
                                <td>{t.volume}</td>
                                <td>{t.stopLoss}</td>
                                <td>{t.takeProfit}</td>
                                <td>{t.status}</td>
                                <td>{new Date(t.expiry).toISOString()}</td>
                                <td>{t.profit}</td>
                                <td>{t.loss}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Inverse table card end */}
              </div>
              {/* Page-body end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(LiveTrading, (p, n) => true);
