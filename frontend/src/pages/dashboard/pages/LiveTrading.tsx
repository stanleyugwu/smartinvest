import React from "react";
import "../styles/trading-view.css";
import ChartWidget from "../components/ChartWidget";
import RateWidget from "../components/RateWidget";

const LiveTrading = () => {
  return (
    <div>
      <div className="col-sm-12">
        <span style={{ fontSize: "35px", color: "black" }}>
          {" "}
          Welcome To Live Trading
          <b style={{ color: "#4da3ff", textDecoration: "underline" }} />
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
        />
        {"{"}Date(){"}"}
      </div>
      <div className="col-md-12">
        <div
          className="modal fade"
          id="modal-11"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-10"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-min"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body text-center">
                <h1 className="text-danger">SELL ORDER</h1> <hr />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <form role="form" method="post">
                  <div className="row">
                    <div className="col-md-12 pr-md-1">
                      <div className="form-group">
                        <label>Volume</label>
                        <input
                          type="number"
                          className="form-control"
                          name="svolamount"
                          placeholder="Amount to buy"
                          step="any"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 px-md-1">
                      <div className="form-group">
                        <label>Type</label>
                        <select className="form-control" name="stype">
                          <option value="Market Execution">
                            Market Execution
                          </option>
                          <option value="Pending Order">Pending Order</option>
                        </select>
                        <input
                          type="hidden"
                          name="ordertype"
                          defaultValue="buy"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pl-md-1">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Symbol</label>
                        <select name="ssymbol" className="form-control">
                          <option value="EURUSD ">
                            EURUSD , Euro vs United state Dollar
                          </option>
                          <option value="USDJPY">
                            USDJPY, UNITED STATE DOLLAR VS JAPANESE YEN
                          </option>
                          <option value="GBPUSD">
                            GBPUSD, GREAT BRITAIN POUNDS VS UNITED STATE DOLLAR
                          </option>
                          <option value="USDCAD">
                            USDCAD, UNITED STATE DOLLAR VS CANADIAN DOLLAR
                          </option>
                          <option value="USDCHF">
                            USDCHF, UNITED STATE DOLLAR VS SWISS FRANC
                          </option>
                          <option value="NZDUSD">
                            NZDUSD, NEW ZEALAND DOLLAR VS UNITED STATE DOLLAR
                          </option>
                          <option value="AUDUSD">
                            AUDUSD, AUSTRALIAN DOLLAR VS UNITED STATE DOLLAR
                          </option>
                          <option value="AUDNZD">
                            AUDNZD, AUSTRALIAN DOLLAR VS NEW ZEALAND DOLLAR
                          </option>
                          <option value="AUDCAD">
                            AUDCAD, AUSTRALIAN DOLLAR VS CANADIAN DOLLAR
                          </option>
                          <option value="AUDCHF">
                            AUDCHF, AUSTRALIAN DOLLAR VS SWISS FRANC
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-md-1">
                      <div className="form-group">
                        <label>
                          Stop Loss <b>(SL)</b>
                        </label>
                        <input
                          type="number"
                          name="ssl"
                          className="form-control"
                          min={0}
                          defaultValue={0.0}
                          step="any"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-md-1">
                      <div className="form-group">
                        <label>
                          Take Profit <b>(TP)</b>
                        </label>
                        <input
                          type="number"
                          name="stp"
                          className="form-control"
                          min={0}
                          defaultValue={0.0}
                          step="any"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          name="sell"
                          className="btn btn-block btn-danger btn-lg "
                          defaultValue="Sell by Market"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-10"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-10"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-min"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body text-center">
                {" "}
                <h1 className="text-success">BUY ORDER</h1>
                <hr />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <form role="form" method="post">
                  <div className="row">
                    <div className="col-md-12 pr-md-1">
                      <div className="form-group">
                        <label>Volume</label>
                        <input
                          type="number"
                          className="form-control"
                          name="bvolamount"
                          placeholder="Amount to buy"
                          defaultValue
                          step="any"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 px-md-1">
                      <div className="form-group">
                        <label>Type</label>
                        <select className="form-control" name="btype">
                          <option value="Market Execution">
                            Market Execution
                          </option>
                          <option value="Pending Order">Pending Order</option>
                        </select>
                        <input
                          type="hidden"
                          name="ordertype"
                          defaultValue="buy"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pl-md-1">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Symbol</label>
                        <select name="bsymbol" className="form-control">
                          <option value="EURUSD ">
                            EURUSD , Euro vs United state Dollar
                          </option>
                          <option value="USDJPY">
                            USDJPY, UNITED STATE DOLLAR VS JAPANESE YEN
                          </option>
                          <option value="GBPUSD">
                            GBPUSD, GREAT BRITAIN POUNDS VS UNITED STATE DOLLAR
                          </option>
                          <option value="USDCAD">
                            USDCAD, UNITED STATE DOLLAR VS CANADIAN DOLLAR
                          </option>
                          <option value="USDCHF">
                            USDCHF, UNITED STATE DOLLAR VS SWISS FRANC
                          </option>
                          <option value="NZDUSD">
                            NZDUSD, NEW ZEALAND DOLLAR VS UNITED STATE DOLLAR
                          </option>
                          <option value="AUDUSD">
                            AUDUSD, AUSTRALIAN DOLLAR VS UNITED STATE DOLLAR
                          </option>
                          <option value="AUDNZD">
                            AUDNZD, AUSTRALIAN DOLLAR VS NEW ZEALAND DOLLAR
                          </option>
                          <option value="AUDCAD">
                            AUDCAD, AUSTRALIAN DOLLAR VS CANADIAN DOLLAR
                          </option>
                          <option value="AUDCHF">
                            AUDCHF, AUSTRALIAN DOLLAR VS SWISS FRANC
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-md-1">
                      <div className="form-group">
                        <label>
                          Stop Loss <b>(SL)</b>
                        </label>
                        <input
                          type="number"
                          name="bsl"
                          className="form-control"
                          min={0}
                          defaultValue={0.0}
                          step="any"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-md-1">
                      <div className="form-group">
                        <label>
                          Take Profit <b>(TP)</b>
                        </label>
                        <input
                          type="number"
                          name="btp"
                          className="form-control"
                          min={0}
                          defaultValue={0.0}
                          step="any"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          name="buy"
                          className="btn btn-block btn-success btn-lg "
                          defaultValue="Buy by Market"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ float: "right", height: "72px" }}>
          <input
            type="submit"
            defaultValue="BUY"
            data-toggle="modal"
            data-target="#modal-10"
            className="btn btn-success"
            style={{ float: "right", marginLeft: "10px" }}
          />
          <input
            type="submit"
            defaultValue="SELL"
            data-toggle="modal"
            data-target="#modal-11"
            className="btn btn-danger"
            style={{ float: "right" }}
          />
        </div>
        <ChartWidget/>
      </div>
      <div className="col-xs-12 col-md-12" style={{ height: "auto" }}>
        <RateWidget/>
      </div>
      <br />
      <div
        className="pcoded-content"
        style={{ backgroundColor: "white", marginBottom: "200px" }}
      >
        {"{"}/* {/* [ breadcrumb ] end */} */{"}"}
        <div
          className="pcoded-inner-content"
          style={{ backgroundColor: "white" }}
        >
          {"{"}/* {/* Main-body start */} */{"}"}
          <div className="main-body" style={{ backgroundColor: "white" }}>
            <div className="page-wrapper" style={{ backgroundColor: "white" }}>
              {"{"}/* {/* Page-body start */} */{"}"}
              <div className="page-body">
                <div className="card"></div>
                {"{"}/* {/* Inverse table card start */} */{"}"}
                <div className="card">
                  <div className="card-header">
                    <h3>Order History</h3>
                    <div className="card-header-right"> </div>
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
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {"{"}/* {/* Inverse table card end */} */{"}"}
              </div>
              {"{"}/* {/* Page-body end */} */{"}"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTrading;
