import React, { useEffect } from "react";
import pageScript from "./script";
import "./signup_login.css";
import logoImg from "../../assets/images/logo.png";
import SignupForm from "./components/signup/Signup";
import LoginForm from "./components/login/Login";

const SignupAndLogin = ({
  /** This will be used to determine whether to show sign in or sign up form when page loads*/
  activeForm = "signin",
}: {
  activeForm?: "signin" | "signup";
}) => {
  useEffect(() => {
    if (activeForm === "signup") {
      // switch to signup panel via jquery
      // @ts-ignore 
      $(".authfy-panel.active").removeClass("active");
      $($(".lnk-toggler").data("panel")).addClass("active");
    }
    // @ts-ignore
    pageScript(jQuery);
  }, []);

  return (
    <div className="container-fluid" id="signup_wrapper">
      {/* Main structure css file */}
      <div className="row">
        <div className="authfy-container mx-auto col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
          <div
            className="col-sm-5 authfy-panel-left d-inline-block"
            style={{ backgroundColor: "#272F3D" }}
          >
            <div className="brand-col">
              <div className="headline">
                {/* brand-logo start */}
                <div className="brand-logo">
                  <div className="text-center d-block">
                    <h2 style={{ fontSize: "24px", padding: "10px" }}>
                      <img
                        src={logoImg}
                        style={{ width: "100px" }}
                        alt="logo"
                      />
                    </h2>
                  </div>
                </div>
                {/* ./brand-logo */}
                {/* social login buttons start */}
                <div className="row social-buttons">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <a
                      href="/"
                      className="btn btn-block btn-facebook"
                      style={{ backgroundColor: "#fff", color: "#FF4444" }}
                    >
                      <div className="d-block text-center">
                        <i className="fa fa-home d-inline-block" />{" "}
                        <span className="d-inline-block">Back To Homepage</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <a
                      href="#"
                      data-panel=".panel-signup"
                      className="btn btn-block btn-facebook lnk-toggler"
                      style={{
                        backgroundColor: "#FF4444",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    >
                      <div className="d-block text-center">
                        <i className="fa fa-user-plus d-inline-block" />{" "}
                        <span className="d-inline-block">Register Now</span>
                      </div>
                    </a>
                  </div>
                </div>
                {/* ./social-buttons */}
              </div>
            </div>
          </div>
          <div className="col-sm-7 d-inline-block authfy-panel-right">
            {/* authfy-login start */}
            <div className="authfy-login">
              <LoginForm />
              <SignupForm />
            </div>{" "}
            {/* ./authfy-login */}
          </div>
        </div>
      </div>{" "}
      {/* ./row */}
      {/* ./container */}
    </div>
  );
};

export default SignupAndLogin;
