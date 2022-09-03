import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAppStore from "../../../store";
import logo from "../../../assets/images/logo.png";
import constants from "../../../utils/constants";

/**
 * Navigation state passed from ContractPurchase page
 */
type PassedState = {
  amount: number;
  paymentMethod: string;
};

const ContractPayment = () => {
  const profile = useAppStore((state) => state.profile);
  const navState = useLocation().state as PassedState;
  

  const companyEmail = constants.SUPPORT_EMAIL;
  const { BITCOIN, BNB, CARDANO, DOGE, ETHEREUM, RIPPLE, SOLANA, USDT } =
    constants.WALLET_ADDRESSES;

  const handlePaymentConfirmation = () => {
    //TODO: confirm payment
  };

  useEffect(() => {
    let addr = document.querySelector(`.card-header.${navState.paymentMethod}`)
    if(!addr){
        addr = document.querySelector(`.card-header.BITCOIN`)
    }
    // @ts-ignore
    addr?.click()
    addr?.scrollIntoView();
  }, [navState.paymentMethod])
  

  return (
    <section className="invoice-view-wrapper w-100">
      <div className="row">
        {/* invoice view page */}
        <div className="col-xl-12 col-md-12 col-12">
          <div className="card invoice-print-area">
            <div className="card-content">
              <div
                className="card-body pb-0 mx-25"
                style={{ background: "linear-gradient(rgb(0 0 0), #272F3D)" }}
              >
                {/* logo and title */}
                <div className="row my-3">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={logo}
                      alt="logo"
                      height={40}
                      width={200}
                      style={{ float: "left" }}
                    />
                  </div>
                </div>
                <hr />
                {/* invoice address and contact */}
                <div className="row invoice-info">
                  <div className="col-6 mt-1">
                    <h6
                      className="invoice-from"
                      style={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bolder",
                      }}
                    >
                      Contract Between <i className="fa fa-arrow-right" />
                    </h6>
                    <div className="mb-1">
                      <span style={{ color: "#fff" }}>
                        <b>Company : </b> {constants.COMPANY_NAME}
                      </span>
                    </div>
                    <div className="mb-1">
                      <span style={{ color: "#fff" }}>
                        <b>Email : </b> {constants.SUPPORT_EMAIL}
                      </span>
                    </div>
                  </div>
                  <div className="col-6 mt-1">
                    <h6
                      className="invoice-from"
                      style={{
                        color: "#FFF",
                        fontSize: "20px",
                        fontWeight: "bolder",
                      }}
                    >
                      And
                    </h6>
                    <div className="mb-1">
                      <span style={{ color: "#fff" }}>
                        <b>Fullname : {profile?.fullname}</b>
                      </span>
                    </div>
                    <div className="mb-1">
                      <span style={{ color: "#fff" }}>
                        <b>Email Address : {profile?.email}</b>
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div
                className="col-sm-12"
                style={{
                  backgroundColor: "#6f42c1",
                  fontWeight: "bolder",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                <span>
                  <div style={{ color: "#fff", fontSize: "18px" }}>
                    Please make your payment to any of the crypto-currency address below.
                  </div>
                </span>
              </div>
              {/* product details table*/}
              <div className="card-content">
                <div className="card-body">
                  <div className="accordion" id="cardAccordion">
                    <div className="card collapse-header">
                      <div
                        className="card-header BITCOIN"
                        id="headingOne"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            alt="coin btc"
                            src="/assets/dashboard/img/coins/btc.svg"
                            style={{
                              width: "30px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          BITCOIN
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse pt-1"
                        aria-labelledby="headingOne"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to Bitcoin Address :
                          <br />
                          <mark>{BITCOIN}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request Bitcoin Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card collapse-header"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="card-header ETHEREUM"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#ETHERUEM"
                        aria-expanded="false"
                        aria-controls="ETHERUEM"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/eth.png"
                            alt="coin ETH"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          ETHERUEM
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="ETHERUEM"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to Etheruem Address :
                          <br />
                          <mark>{ETHEREUM}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            <br /> to Request Etheruem Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card collapse-header">
                      <div
                        className="card-header USDT"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#USDT"
                        aria-expanded="false"
                        aria-controls="USDT"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            alt="coin usdt"
                            src="/assets/dashboard/img/coins/tether.png"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          USDT
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            style={{ width: "80px" }}
                            alt="blink"
                          />
                        </span>
                      </div>
                      <div
                        id="USDT"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to USDT(TRC20) Address :
                          <br />
                          <mark>{USDT}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request USDT Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card collapse-header">
                      <div
                        className="card-header DOGE"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#DOGE"
                        aria-expanded="false"
                        aria-controls="DOGE"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/doge.png"
                            alt="coin DOGE"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          DOGE
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="DOGE"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to DOGECOIN Address :
                          <br />
                          <mark> {DOGE} </mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request DOGECOIN Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card collapse-header">
                      <div
                        className="card-header SOLANA"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#SOLANA"
                        aria-expanded="false"
                        aria-controls="SOLANA"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/sol.png"
                            alt="coin SOLANA"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          SOLANA
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="SOLANA"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to SOLANA Address :
                          <br />
                          <mark>{SOLANA}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request SOLANA Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card collapse-header">
                      <div
                        className="card-header CARDANO"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#CARDANO"
                        aria-expanded="false"
                        aria-controls="CARDANO"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/cad.png"
                            alt="coin CADANO"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          CARDANO
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="CARDANO"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to CARDANO Address :
                          <br />
                          <mark>{CARDANO}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request CARDANO Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card collapse-header">
                      <div
                        className="card-header BNB"
                        id="headingTwo"
                        data-toggle="collapse"
                        data-target="#BNB"
                        aria-expanded="false"
                        aria-controls="BNB"
                        role="button"
                      >
                        <span className="collapsed collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/bnb.png"
                            alt="coin BNB"
                            style={{
                              width: "40px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          BNB
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="BNB"
                        className="collapse pt-1"
                        aria-labelledby="headingTwo"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to BNB Address :
                          <br />
                          <mark>{BNB}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request BNB Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header XRP"
                        id="headingFour"
                        data-toggle="collapse"
                        data-target="#XRP"
                        aria-expanded="false"
                        aria-controls="XRP"
                        role="button"
                      >
                        <span className="collapsed  collapse-title">
                          <img
                            src="/assets/dashboard/img/coins/xrp.jpg"
                            alt="coin RIPPLE"
                            style={{
                              width: "50px",
                              padding: "3px",
                              backgroundColor: "#fff",
                            }}
                          />
                          XRP
                          <img
                            src="/assets/dashboard/img/coins/blink.gif"
                            alt="blink"
                            style={{ width: "80px" }}
                          />
                        </span>
                      </div>
                      <div
                        id="XRP"
                        className="collapse pt-1"
                        aria-labelledby="headingFour"
                        data-parent="#cardAccordion"
                      >
                        <div className="card-body">
                          Pay to XRP Wallet Address :
                          <br />
                          <mark> {RIPPLE}</mark>
                          <br />
                          <b>
                            Kindly Contact For Further Assitance
                            <a href={`mailto:${companyEmail}`}>
                              {" "+companyEmail+" "}
                            </a>
                            to Request XRP Wallet Address For Payment.
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-body pt-0 mx-25"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="row">
                      <div
                        className="col-12 col-sm-12 mt-75"
                        style={{
                          backgroundColor: "#000",
                          padding: "10px",
                          borderRadius: "4px",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            color: "#fff",
                            float: "left",
                          }}
                        >
                          Confirm your payment by filling below form
                        </p>
                        <form onSubmit={handlePaymentConfirmation}>
                          <input
                            type="text"
                            className="form-control"
                            name="paymo"
                            style={{
                              float: "left",
                              backgroundColor: "#fff",
                              padding: "1.5em",
                              marginTop: "5px",
                              border: "none",
                            }}
                            required
                            placeholder="Enter Payment Mode - Bitcoin, Usdt..."
                          />
                          <br />
                          <input
                            type="number"
                            className="form-control"
                            name="amtna"
                            style={{
                              float: "left",
                              padding: "1.5em",
                              backgroundColor: "#fff",
                              marginTop: "1em",
                              border: "none",
                            }}
                            defaultValue={navState.amount}
                            placeholder="Enter The Amount You Sent"
                            required
                          />
                          <button
                            type="submit"
                            name="Send"
                            style={{
                              float: "left",
                              backgroundColor: "#e74339",
                              marginTop: "1.5em",
                              color: "#fff",
                            }}
                            className="btn"
                          >
                            I Have Paid
                          </button>
                        </form>
                        <p />
                      </div>
                      <div className="col-md-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* invoice action  */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ms-card card-gradient-dark">
                  <div className="ms-card-body">
                    <h1 style={{ color: "white" }}>To Proceed, Kindly</h1>
                    <p>
                      Contact management at
                      <b>
                        <span
                          style={{
                            backgroundColor: "#000000",
                            padding: "3.4px",
                            borderRadius: "4px",
                            fontWeight: "bolder",
                            color: "white",
                          }}
                        >
                          {companyEmail}
                        </span>
                      </b>
                      to deposit your investment
                      <b>
                        {/*via Bitcoin , Ethereum and Other Available Payment Methods*/}
                      </b>
                      ,<br /> Thank you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractPayment;
