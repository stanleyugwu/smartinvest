import React from "react";
import TopNavBar from "./TopNavBar";

/**
 * Main content. Wraps children with welcome panel and top navigation
 */
const MainContent = ({ children = <div /> }: { children?: JSX.Element }) => {
  return (
    <main className="body-content">
      <TopNavBar/>
      <div className="ms-content-wrapper" style={{backgroundColor:"#fff"}}>
        <div className="row">{children}</div>
      </div>
    </main>
  );
};

export default MainContent;
