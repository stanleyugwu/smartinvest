import React, { useEffect } from "react";
import InjectScript from "../../../utils/services/injectScriptTag";

let tickerTapeScriptContent = `{
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "S&P 500"
      },
      {
        "proName": "FOREXCOM:NSXUSD",
        "title": "US 100"
      },
      {
        "proName": "FX_IDC:EURUSD",
        "title": "EUR/USD"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "Bitcoin"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "Ethereum"
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "en"
  }`;

/* TradingView Widget BEGIN Ticker Tape */
const TickerTapeWidget = () => {
  useEffect(() => {
    InjectScript("#tv_ticker_tape", undefined, tickerTapeScriptContent, {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
      async: "true",
    });
  }, []);
  return (
    <div className="tradingview-widget-container" id="tv_ticker_tape">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TickerTapeWidget;
