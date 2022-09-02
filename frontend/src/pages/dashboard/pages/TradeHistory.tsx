import React from "react";

const TradeHistory = () => {
  return (
    <div className="col-xl-12 col-md-12" style={{ marginTop: "20px" }}>
      <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header">
          <h4>Trade History </h4>
        </div>
        <div className="ms-panel-body">
          <div className="table-responsive">
            <table className="table thead-primary">
              <thead style={{ backgroundColor: "#262626" }}>
                <tr>
                  <th scope="col">Asset</th>
                  <th scope="col">Trade Amount</th>
                  <th scope="col">Trade Date</th>
                  <th scope="col">Trade Outcome</th>
                  <th scope="col">Trade Status</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
