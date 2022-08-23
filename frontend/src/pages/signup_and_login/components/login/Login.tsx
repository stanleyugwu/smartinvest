import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorField from "../ErrorField";
import LoginSchema from "./login.schema";

export interface LoginInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(LoginSchema) });

  const [passwordMasked, setPasswordMasked] = useState(true);

  /**
   * Handles login form submission
   */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = handleSubmit((values) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    console.log(values);
  });

  return (
    <div className="authfy-panel panel-login text-center active">
      <div className="authfy-heading">
        <h3 className="auth-title" style={{ color: "#FF4444" }}>
          Login to your account
        </h3>
        <p style={{ color: "black" }}>
          Don't have an account?{" "}
          <a
            className="lnk-toggler"
            data-panel=".panel-signup"
            href="#"
            style={{ color: "#FF4444" }}
          >
            Sign Up Free!
          </a>
        </p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <form name="loginForm" className="loginForm" onSubmit={onSubmit}>
            <div className="form-group wrap-input">
              <input
                type="email"
                className="form-control email"
                placeholder="Email address"
                {...register("email")}
              />
              <span className="focus-input" />
            </div>
            <ErrorField error={errors.email} />
            <div className="form-group wrap-input">
              <div className="pwdMask">
                <input
                  type="password"
                  className="form-control password"
                  placeholder="Password"
                  {...register("password")}
                />
                <span className="focus-input" />
                <span
                  className={`fa fa-eye${
                    !passwordMasked ? "-slash" : ""
                  } pwd-toggle`}
                  onClick={() => setPasswordMasked(!passwordMasked)}
                />
              </div>
            </div>
            <ErrorField error={errors.password} />
            {/* start remember-row */}
            <div className="row remember-row">
              <div className="col-xs-6 col-sm-6">
                <label className="checkbox text-left">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    defaultChecked={true}
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
            </div>{" "}
            {/* ./remember-row */}
            <div className="form-group">
              <button
                disabled={isSubmitting}
                name="log"
                style={{
                  backgroundColor: "#FF4444",
                  border: "none",
                  color: "#fff",
                  fontWeight: "bolder",
                }}
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                {" "}
                {isSubmitting ? (
                  <i
                    className="fa fa-spinner fa-spin"
                    style={{ fontSize: 16 }}
                  ></i>
                ) : (
                  "Login Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
