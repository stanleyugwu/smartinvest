import React from "react";

const ChartWidget = () => {
  return (
    <div
      id="tradingview_e1ae6-wrapper"
      style={{
        position: "relative",
        boxSizing: "content-box",
        width: "auto",
        height: "610px",
        margin: "0 auto !important",
        padding: "0 !important",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
      }}
    >
      <div
        style={{
          width: "auto",
          height: "610px",
          background: "transparent",
          padding: "0 !important",
        }}
      >
        <iframe
          title="chart widget"
          id="tradingview_e1ae6"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e1ae6&symbol=FX%3AEURUSD&interval=1&range=all&symboledit=1&saveimage=0&toolbarbg=f1f3f6&details=1&calendar=1&hotlist=1&studies=BB%40tv-basicstudies%1FMACD%40tv-basicstudies%1FMF%40tv-basicstudies&theme=Dark&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=megatradevilla.com&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AEURUSD"
          style={{
            width: "100%",
            height: "100%",
            margin: "0 !important",
            padding: "0 !important",
          }}
          frameBorder={0}
          allowTransparency
          scrolling="no"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default React.memo(ChartWidget);
