import React, { useState } from "react";
import CountrySelect from "../../../../components/country-select/CountrySelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorField from "../../../../components/ErrorField";
import type { SignupInputs } from "./signup.d";
import SignupSchema from "./signup.schema";
import { signUp } from "../../../../api/services/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SignupInputs>({
    resolver: yupResolver(SignupSchema),
  });
  const navigate = useNavigate();

  /**
   * Handles signup after validation
   */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (values) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await signUp(
        values.fullName,
        values.email,
        values.mobileNumber,
        values.currency,
        values.country,
        values.password
      );
      Swal.fire(undefined, res.message, "success");
      setIsSubmitting(false);
      // open sign in panel
      // @ts-ignore
      $?.(".lnk-toggler")?.trigger?.("click");
    } catch (error: any) {
      setIsSubmitting(false);
      Swal.fire(error.message, error.howToFix, "error");
    }
  });
  const [passwordMasked, setPasswordMasked] = useState(true);
  const [confirmPasswordMasked, setConfirmPasswordMasked] = useState(true);

  return (
    <div
      className="authfy-panel panel-signup text-center"
      style={{ overflowX: "auto" }}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="authfy-heading">
            <h3 className="auth-title" style={{ color: "#FF4444" }}>
              Sign up for free!
            </h3>
          </div>
          <form name="signupForm" className="signupForm" onSubmit={onSubmit}>
            <div className="form-group wrap-input">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                {...register("fullName")}
              />
              <span className="focus-input" />
            </div>
            <ErrorField error={errors.fullName} />
            <div className="form-group wrap-input">
              <input
                type="email"
                className="form-control"
                {...register("email")}
                placeholder="Email address"
              />
            </div>
            <ErrorField error={errors.email} />
            <div className="form-group wrap-input">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                {...register("mobileNumber")}
              />
            </div>
            <ErrorField error={errors.mobileNumber} />
            <div className="form-group wrap-input">
              <CountrySelect {...register("country")} />
              <ErrorField error={errors.country} />
            </div>
            <div className="form-group wrap-input">
              <select className="form-control" {...register("currency")}>
                <option disabled>Choose Currency</option>
                <option value="$">US Dollar</option>
                <option value="€">Euro</option>
                <option value="£">British Pound Sterling</option>
              </select>
              <ErrorField error={errors.currency} />
            </div>
            <div className="form-group wrap-input d-none">
              <input
                type="text"
                readOnly
                className="form-control"
                name="ref"
                defaultValue="No Referral"
              />
            </div>
            <div className="form-group wrap-input">
              <div className="pwdMask">
                <input
                  type={passwordMasked ? "password" : "text"}
                  className="form-control"
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
            <div className="form-group wrap-input">
              <div className="pwdMask">
                <input
                  type={confirmPasswordMasked ? "password" : "text"}
                  className="form-control"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <span className="focus-input" />
                <span
                  className={`fa fa-eye${
                    !confirmPasswordMasked ? "-slash" : ""
                  } pwd-toggle`}
                  onClick={() =>
                    setConfirmPasswordMasked(!confirmPasswordMasked)
                  }
                />
              </div>
            </div>
            <ErrorField error={errors.confirmPassword} />
            <div className="form-group mt-3 mb-2">
              <input
                type="checkbox"
                style={{ float: "left" }}
                checked
                readOnly
              />
              <p className="term-policy text-muted small">
                I agree to the privacy policy and terms of service
              </p>
            </div>
            <div className="form-group">
              <button
                disabled={isSubmitting}
                name="reg"
                style={{
                  backgroundColor: "#FF4444",
                  border: "none",
                }}
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{ fontSize: 16 }}
                    ></i>
                    <span className="ml-2">Signing up</span>
                  </>
                ) : (
                  "Sign Up Now"
                )}
              </button>
            </div>
          </form>
          <a
            className="lnk-toggler"
            data-panel=".panel-login"
            href="#"
            style={{ color: "#FF4444", fontWeight: "bolder" }}
          >
            Already have an Account ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
