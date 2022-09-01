import React from "react";
import { useEffect } from "react";
import InjectScript from "../../../utils/services/injectScriptTag";

/**
 * Wraps children with html, head, and body elements
 */
const HeadAndBody = ({ children = <div /> }: { children?: JSX.Element }) => {
  useEffect(() => {
    // Scripts required by all dashboard pages
    // InjectScript("#dashboardBody","/assets/dashboard/js/popper.min.js");
    // InjectScript("#dashboardBody","/assets/dashboard/js/perfect-scrollbar.js");
    // InjectScript("#dashboardBody","/assets/dashboard/js/jquery-ui.min.js");

    // Page specific scripts
    InjectScript("#dashboardBody","/assets/dashboard/js/slick.min.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/moment.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/jquery.webticker.min.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/Chart.bundle.min.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/Chart.Financial.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/cryptocurrency.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/framework.js");
    InjectScript("#dashboardBody","/assets/dashboard/js/settings.js");
  }, [])
  
  return (
    <>
      <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar" id="dashboardBody">
        {children}
        {/* <!-- SCRIPTS --> */}
        {/* <!-- Global Required Scripts Start --> */}
        {/* JQuery is already imported */}
        {/* <script src="assets/js/popper.min.js"></script> */}
        {/* Updated bootstrap already added */}
        {/* <script src="assets/js/perfect-scrollbar.js"> </script> */}
        {/* <script src="assets/js/jquery-ui.min.js"> </script> */}
        {/* <!-- Global Required Scripts End --> */}

        {/* <!-- Page Specific Scripts Start --> */}
        {/* <script src="assets/js/slick.min.js"> </script> */}
        {/* <script src="assets/js/moment.js"> </script> */}
        {/* <script src="assets/js/jquery.webticker.min.js"> </script> */}
        {/* <script src="assets/js/Chart.bundle.min.js"> </script> */}
        {/* <script src="assets/js/Chart.Financial.js"> </script> */}
        {/* <script src="assets/js/cryptocurrency.js"> </script> */}
        {/* <!-- Page Specific Scripts Finish --> */}

        {/* <!-- Mystic core JavaScript --> */}
        {/* <script src="assets/js/framework.js"></script> */}

        {/* <!-- Settings --> */}
        {/* <script src="assets/js/settings.js"></script> */}
      </body>
    </>
  );
};

export default HeadAndBody;
