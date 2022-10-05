import React from "react";

export type CardStatsType = {
  statSubtitle: string;
  statTitle: "spinner" | number;
  statIconName: string;
  statIconColor: string;
};
export default function CardStats({
  statSubtitle = "Traffic",
  statTitle = 350,
  statIconName = "far fa-chart-bar",
  statIconColor = "bg-red-500",
}: CardStatsType) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
        <div className="flex-auto p-2 md:p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle === "spinner" ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  statTitle
                )}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
