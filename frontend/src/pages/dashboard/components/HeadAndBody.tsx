import React from "react";
import { useEffect } from "react";
import InjectScript from "../../../utils/services/injectScriptTag";

/**
 * Wraps children with html, head, and body elements
 */
const HeadAndBody = ({ children = <div /> }: { children?: JSX.Element }) => {
  useEffect(() => {
    // Scripts required by all dashboard pages
    // InjectScript("#dashboardBody","/static/dashboard/js/popper.min.js");
    // InjectScript("#dashboardBody","/static/dashboard/js/perfect-scrollbar.js");
    // InjectScript("#dashboardBody","/static/dashboard/js/jquery-ui.min.js");

    // Page specific scripts
    InjectScript("#dashboardBody", "/static/dashboard/js/slick.min.js");
    InjectScript("#dashboardBody", "/static/dashboard/js/moment.js");
    InjectScript(
      "#dashboardBody",
      "/static/dashboard/js/jquery.webticker.min.js"
    );
    InjectScript("#dashboardBody", "/static/dashboard/js/Chart.bundle.min.js");
    InjectScript("#dashboardBody", "/static/dashboard/js/Chart.Financial.js");
    InjectScript("#dashboardBody", "/static/dashboard/js/cryptocurrency.js");
    InjectScript("#dashboardBody", "/static/dashboard/js/framework.js");
    InjectScript("#dashboardBody", "/static/dashboard/js/settings.js");
  }, []);

  return (
    <>
      <body
        className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar"
        id="dashboardBody"
        style={{ backgroundColor: "#262626" }}
      >
        {children}
        {/* <!-- SCRIPTS --> */}
        {/* <!-- Global Required Scripts Start --> */}
        {/* JQuery is already imported */}
        {/* <script src="static/js/popper.min.js"></script> */}
        {/* Updated bootstrap already added */}
        {/* <script src="static/js/perfect-scrollbar.js"> </script> */}
        {/* <script src="static/js/jquery-ui.min.js"> </script> */}
        {/* <!-- Global Required Scripts End --> */}

        {/* <!-- Page Specific Scripts Start --> */}
        {/* <script src="static/js/slick.min.js"> </script> */}
        {/* <script src="static/js/moment.js"> </script> */}
        {/* <script src="static/js/jquery.webticker.min.js"> </script> */}
        {/* <script src="static/js/Chart.bundle.min.js"> </script> */}
        {/* <script src="static/js/Chart.Financial.js"> </script> */}
        {/* <script src="static/js/cryptocurrency.js"> </script> */}
        {/* <!-- Page Specific Scripts Finish --> */}

        {/* <!-- Mystic core JavaScript --> */}
        {/* <script src="static/js/framework.js"></script> */}

        {/* <!-- Settings --> */}
        {/* <script src="static/js/settings.js"></script> */}
      </body>
    </>
  );
};

export default HeadAndBody;
