import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import axiosInstance from "../../../api/axios";
import CountrySelect from "../../../components/country-select/CountrySelect";
import ErrorField from "../../../components/ErrorField";
import Toast from "../../../components/Toast";
import useAppStore, { UserAccount, UserProfile } from "../../../store";
import constants from "../../../utils/constants";
import type { SignupInputs } from "../../signup_and_login/components/signup/signup.d";
import SignupSchema from "../../signup_and_login/components/signup/signup.schema";
import TickerTapeWidget from "../components/TickerTapeWidget";

const UpdateProfileSchema = object().shape({
  ...SignupSchema.fields,
  password: string().max(100),
  confirmPassword: string()
    .test(
      "equals-password",
      `passwords mismatch`,
      (value, ctx) => value === ctx.parent.password
    )
});

export type ProfileInputs = SignupInputs;
export type UpdateProfileRes = {
  message: string;
  data: {
    profile: UserProfile;
    account: UserAccount;
  };
};

const Profile = () => {
  const [profile, updateProfile] = useAppStore((state) => [
    state.profile,
    state.setProfile,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputs>({ resolver: yupResolver(UpdateProfileSchema) });
  const referralLink = `${constants.BASE_URL || ""}/signup?ref=${
    profile?.fullname ?? ""
  }`;
  const [updatingProfile, setUpdatingProfile] = useState(false);

  /**
   * Handles profile update form submission
   */
  const handleUpdateProfile = handleSubmit(async (data) => {
    if (updatingProfile) return;
    setUpdatingProfile(true);
    // Hit server
    try {
      const updated = (await axiosInstance.post("/api/update_profile", {
        fullname: data.fullName,
        email: data.email,
        phone: data.phone,
        currency: data.currency,
        country: data.country,
        password: data.password,
      })) as UpdateProfileRes;
      Toast.fire(updated.message, undefined, "success");
      updateProfile(updated.data.profile);
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setUpdatingProfile(false);
    }
  });

  return (
    <>
      <h6
        style={{
          color: "#000",
          fontWeight: "bolder",
          fontSize: "24px",
          paddingLeft: "30px",
        }}
      >
        Account Profile
      </h6>
      <div
        className="col-md-12"
        style={{
          backgroundColor: "#262626",
          height: "auto",
          padding: "10px",
          marginBottom: "30px",
          borderRadius: "10px",
        }}
      >
        <div className="ms-panel" style={{ backgroundColor: "#262626" }}>
          <div
            className="ms-panel-header"
            style={{ backgroundColor: "#000", borderRadius: "10px" }}
          >
            <h6 style={{ color: "#ff6666" }}>
              Your Referral Link{" "}
              <i className="fa fa-arrow-right" style={{ color: "red" }} />
            </h6>
            <span style={{ color: "white" }}>{referralLink}</span>
          </div>
          <div className="ms-panel-body">
            <form onSubmit={handleUpdateProfile}>
              <div className="col-sm-6" style={{ float: "left" }}>
                <div className="form-group">
                  <label htmlFor="exampleText" style={{ color: "#fff" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    defaultValue={profile?.fullname}
                    {...register("fullName")}
                  />
                  <ErrorField error={errors.fullName} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleEmail" style={{ color: "#fff" }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    defaultValue={profile?.email}
                    {...register("email")}
                  />
                  <ErrorField error={errors.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleText" style={{ color: "#fff" }}>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    defaultValue={profile?.phone}
                    {...register("phone")}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect" style={{ color: "#fff" }}>
                    Country
                  </label>
                  <CountrySelect
                    defaultValue={profile?.country}
                    {...register("country")}
                  />
                  <ErrorField error={errors.country} />
                </div>
              </div>
              <div className="col-sm-6" style={{ float: "left" }}>
                <div className="form-group">
                  <label htmlFor="exampleSelect" style={{ color: "#fff" }}>
                    Currency
                  </label>
                  <select
                    className="form-control"
                    id="exampleSelect"
                    defaultValue={profile?.currency}
                    {...register("currency")}
                  >
                    <option value="$">US Dollar</option>
                    <option value="€">Euro</option>
                    <option value="£">British Pound Sterling</option>
                  </select>
                  <ErrorField error={errors.currency} />
                </div>
                <div className="form-group">
                  <label htmlFor="examplePassword" style={{ color: "#fff" }}>
                    Change Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New Password"
                    id="examplePassword"
                    {...register("password")}
                  />
                  <ErrorField error={errors.password} />
                </div>
                <div className="form-group">
                  <label htmlFor="examplePassword" style={{ color: "#fff" }}>
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm New Password"
                    id="examplePassword"
                    {...register("confirmPassword")}
                  />
                  <ErrorField error={errors.confirmPassword} />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="sub"
                    disabled={updatingProfile}
                    className="btn btn-primary"
                    value={updatingProfile ? "Updating..." : "Update Profile"}
                    style={{
                      marginTop: "25px",
                      backgroundColor: "#E67E00",
                      border: "1px solid #E67E00",
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Crypto Slider */}
      <div className="col-md-12">
        {/* TradingView Widget BEGIN */}
        <TickerTapeWidget />
        {/* TradingView Widget END */}
      </div>
    </>
  );
};

export default Profile;
