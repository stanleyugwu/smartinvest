import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { number, object, string } from "yup";
import ErrorField from "../../../components/ErrorField";
import useAppStore from "../../../store";
import { Currency } from "../../signup_and_login/components/signup/signup.d";

export interface PurchaseContractInput {
  amount: string;
  paymentMethod: string;
  paymentOption: string;
}

export const PurchaseContractSchema = object().shape({
  amount: number()
    .min(1, "Enter valid amount")
    .default(1)
    .required("Enter contract amount"),
  paymentMethod: string(),
  paymentOption: string()
    .oneOf(["Weekly", "Compounding"])
    .required("Select Payment Option"),
});

const ContractPurchase = () => {
  const profile = useAppStore((state) => state.profile);

  const currSymbolToName = (symbol: Currency) =>
    symbol === "$" ? "USD" : symbol === "£" ? "EURO" : "POUNDS";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PurchaseContractInput>({
    resolver: yupResolver(PurchaseContractSchema),
  });

  function calculateProfit() {
    const x = "" + (getValues().amount || 0);
    const cur = profile?.currency || "$";
    $("#demo").html(x);
    $("#demo1").html(cur + x);
    const per = 1.3;
    const valuea = (+x * per) / 100;
    const valueb = (+x * per * 7) / 100;
    const valuec = (+x * per * 30) / 100;
    $("#daily").html("$" + Math.round(valuea));
    $("#weekly").html("$" + Math.round(valueb));
    $("#monthly").html("$" + Math.round(valuec));
  }

  useEffect(() => {
    calculateProfit();
  }, []);

  const navigate = useNavigate();

  const onPurchase = handleSubmit((data) => {
    const state = { amount: data.amount, paymentMethod: data.paymentMethod };
    navigate("/contract-payment", { state });
  });

  return (
    <section className="ulockd-pricing" style={{ padding: "20px" }}>
      <div className="container">
        <div className="row">
          {/* BEGIN: Content*/}
          <div className="app-content content">
            <div className="content-overlay" />
            <div className="content-wrapper">
              <div className="content-header row">
                <div className="content-header-left col-12 mb-2 mt-1">
                  <div className="row breadcrumbs-top">
                    <div className="col-12">
                      <h3 className="content-header-title">
                        Purchase Contract
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-body">
                {/* Basic Inputs start */}
                <div className="alert" style={{ backgroundColor: "#1D3140" }}>
                  <b>
                    <i className="bx bx-info-circle mr-1 align-middle" />
                  </b>
                  <span className="align-middle">
                    <b style={{ color: "#fff" }}>
                      All contracts are transferable to next-of-kins, you can
                      setup anytime which takes a maximum of 48 hours.
                    </b>
                  </span>
                </div>
                <section id="basic-input">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-content">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-12">
                                <form
                                  id="contractdetails_form"
                                  onSubmit={onPurchase}
                                >
                                  <fieldset className="form-group">
                                    <label htmlFor="basicInput">
                                      Enter Amount In{" "}
                                      {currSymbolToName(
                                        (profile?.currency as Currency) || "$"
                                      )}
                                    </label>
                                    <input
                                      type={"number"}
                                      id="myRange"
                                      //   name="contractamount"
                                      className="form-control"
                                      onKeyUp={calculateProfit}
                                      defaultValue={1500}
                                      min={1}
                                      minLength={1}
                                      {...register("amount")}
                                    />
                                    <ErrorField error={errors.amount} />
                                    <input
                                      type="hidden"
                                      defaultValue={1}
                                      name="add"
                                    />
                                    <input
                                      type="hidden"
                                      defaultValue="STREAM 1"
                                      name="package"
                                    />
                                    <p
                                      className="value-box mt-3"
                                      style={{
                                        backgroundColor: "#50E682",
                                        padding: "10px",
                                        color: "#fff",
                                        borderRadius: "3px",
                                      }}
                                    >
                                      Value ({profile?.currency || "$"}):&nbsp;
                                      <span id="demo" />
                                    </p>
                                  </fieldset>
                                  <fieldset className="form-group">
                                    <label htmlFor="basicInput">
                                      Select Payment Method
                                    </label>
                                    <select
                                      className="form-control"
                                      {...register("paymentMethod")}
                                    >
                                      <optgroup label="Select Payment Method">
                                        <option value="BITCOIN">BITCOIN</option>
                                        <option value="ETHEREUM">
                                          ETHEREUM
                                        </option>
                                        <option value="USDT">USDT</option>
                                        <option value="DOGECOIN">
                                          DOGECOIN
                                        </option>
                                        <option value="XRP">XRP</option>
                                        <option value="POLKADOT">
                                          POLKADOT
                                        </option>
                                        <option value="SOLANA">SOLANA</option>
                                        <option value="CARDANO">CARDANO</option>
                                        <option value="BNB">BNB</option>
                                        <option value="TRON">TRON</option>
                                        <option value="TRON">PAYPAL</option>
                                      </optgroup>
                                    </select>
                                    <ErrorField error={errors.paymentMethod} />
                                  </fieldset>
                                  <fieldset className="form-group">
                                    <label htmlFor="basicInput">
                                      Select Payout Option
                                    </label>
                                    <select
                                      className="form-control"
                                      id="payoutoption"
                                      //   name="payoutoption"
                                      {...register("paymentOption")}
                                    >
                                      <optgroup label="Select Payout Option">
                                        <option value="Weekly">
                                          Weekly Payouts
                                        </option>
                                        <option value="Compounding">
                                          Compounding (at 1.5%)
                                        </option>
                                      </optgroup>
                                    </select>
                                    <ErrorField error={errors.paymentOption} />
                                  </fieldset>
                                  <button
                                    type="submit"
                                    name="continue"
                                    style={{
                                      backgroundColor: "#2DB259",
                                      color: "#fff",
                                      borderColor: "#1d3140",
                                    }}
                                    className="btn"
                                  >
                                    Continue
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* Hoverable rows start */}
                      <div className="row" id="table-hover-row">
                        <div className="col-12">
                          <div className="card">
                            <div className="card-content">
                              <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                  <thead>
                                    <tr>
                                      <th>Estimated Profit Forecast for </th>
                                      <th>
                                        <span
                                          style={{
                                            color: "#58C75B",
                                            fontWeight: "bolder",
                                          }}
                                          id="demo1"
                                        />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-bold-500 pl-2">
                                        Daily
                                      </td>
                                      <td
                                        id="daily"
                                        style={{ color: "#58C75B" }}
                                      />
                                    </tr>
                                    <tr>
                                      <td className="text-bold-500 pl-2">
                                        Weekly
                                      </td>
                                      <td
                                        id="weekly"
                                        style={{ color: "#58C75B" }}
                                      />
                                    </tr>
                                    <tr>
                                      <td className="text-bold-500 pl-2">
                                        Monthly
                                      </td>
                                      <td
                                        id="monthly"
                                        style={{ color: "#58C75B" }}
                                      />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="alert" style={{ margin: "4px" }}>
                                <p style={{ textAlign: "justify" }}>
                                  <i
                                    style={{
                                      color: "#403D3D",
                                      fontSize: "13px",
                                    }}
                                  >
                                    All figures above are estimates and are
                                    subject to change. This changes are beyond
                                    our control as trading difficulty and
                                    maintenance cost can change at any moment.
                                  </i>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Hoverable rows end */}
                    </div>
                  </div>
                </section>
                {/* Basic Inputs end */}
              </div>
              {/* Basic Card types section end */}
            </div>
          </div>
        </div>
        {/* END: Content*/}
      </div>
    </section>
  );
};

export default ContractPurchase;
