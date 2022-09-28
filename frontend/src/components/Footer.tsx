import React from "react";
import constants from "../utils/constants";

function Footer() {
  return (
    <footer className="nk-footer-bar section section-s">
      <div className="container container-xxl">
        <div className="row gutter-vr-10px">
          <div className="col-lg-6 order-lg-last text-lg-right">
            <ul className="footer-nav">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="copyright-text copyright-text-s2">
              {constants.COMPANY_NAME} © 2022 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
