import React, { useEffect } from "react";
import InjectScript from "../../../utils/services/injectScriptTag";

let fxRateWidgetScript = `
"width": "100%",
"height": "100%",
"currencies": [
  "EUR",
  "USD",
  "JPY",
  "GBP",
  "CHF",
  "AUD",
  "CAD",
  "NZD",
  "CNY"
],
"isTransparent": false,
"colorTheme": "dark",
"locale": "en"
}`;

/* TradingView Widget FX Rate */
const RateWidget = () => {
  useEffect(() => {
    InjectScript("#fxRateWidget", undefined, fxRateWidgetScript, {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",
      async: "true",
    });
  }, []);
  return (
    <div className="tradingview-widget-container" id="fxRateWidget">
      <div className="tradingview-widget-container__widget"></div>
      {/* FX Rate script will be injected here */}
    </div>
  );
};

export default RateWidget;
