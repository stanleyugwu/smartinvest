import React, { useEffect } from "react";

let listCountries = [
  "Argentina",
  "USA",
  "Germany",
  "France",
  "Italy",
  "South Korea",
  "Australia",
  "Norway",
  "Canada",
  "Argentina",
  "Saudi Arabia",
  "Mexico",
  "Spain",
  "Austria",
  "Venezuela",
  "South Africa",
  "Sweden",
  "South Korea",
  "China",
  "Italy",
  "Germany",
  "United Kingdom",
  "Bahrain",
  "Greece",
  "Cuba",
  "Bulgaria",
  "Portugal",
  "Austria",
  "Cyprus",
  "Panama",
  "Asia",
  "Norway",
  "Netherlands",
  "Switzerland",
  "Belgium",
  "Israel",
  "Cyprus",
  "Spain",
  "Norway",
];
let listPlans = [
  "$50000",
  "$15000",
  "$10000",
  "$100000",
  "$20000",
  "$30000",
  "$40000",
  "$60000",
  "$7000",
  "$25000",
  "$35000",
  "$5000",
  "$7000",
  "45000",
  "$3500",
  "$5000",
  "$12500",
  "$9500",
];
let interval: number;
let run: NodeJS.Timer;

function request() {
  clearInterval(run);
  interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
  var country = listCountries[Math.floor(Math.random() * listCountries.length)];
  var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
  var msg =
    "Someone from <b>" +
    country +
    ' just earned  <a href="javascript:void(0);" onclick="javascript:void(0);">' +
    plan +
    " .";
  $(".mgm .txt").html(msg);
  $(".mgm").stop(true).fadeIn(300);
  window.setTimeout(function () {
    $(".mgm").stop(true).fadeOut(300);
  }, 6000);
  run = setInterval(request, interval);
}

function WinnerCard() {
  useEffect(() => {
    interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
    run = setInterval(request, interval);
  }, []);
  return (
    
    <div className="mgm" style={{ display: "none" }}>
      <div className="txt" style={{ color: "black" }}>
        Someone from <b></b> just earned <a href=""></a>
      </div>
    </div>
  );
}

export default WinnerCard;
