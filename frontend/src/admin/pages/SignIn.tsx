import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import ErrorField from "../../components/ErrorField";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import useAdminAppStore from "../../store/admin";

export interface AdminSignInInputs {
  email: string;
  password: string;
}

const AdminSignInSchema = object().shape({
  email: string()
    .email("Enter a valid email address")
    .required("Enter email address"),
  password: string().required("Enter a password"),
});

const AdminSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminSignInInputs>({
    resolver: yupResolver(AdminSignInSchema),
  });
  const [signingIn, setSigningIn] = useState(false);
  const setToken = useAdminAppStore(state => state.setAccessToken);

  const handleSignIn = handleSubmit((data) => {
    if (signingIn) return;
    setSigningIn(true);
    setTimeout(() => setToken("Bearer asjhhzxjzx"),2000);
    console.log(data);
  });

  return (
    <div className="bg-dark h-screen flex items-center justify-center">
      <div className="block m-auto w-full">
        <h1 className="text-white text-4xl my-3 text-center">Hello, Welcome</h1>
        <form
          className="border border-gray-400 w-full md:w-1/2 m-auto p-4"
          onSubmit={handleSignIn}
        >
          <fieldset className="my-2">
            <label className="text-light block pb-1.5">Email Address</label>
            <input
              type={"text"}
              className="p-3 rounded-md w-full"
              placeholder="Enter email address"
              {...register("email")}
            />
            <ErrorField error={errors.email} className="text-primary mt-1" />
          </fieldset>
          <fieldset className="mt-4">
            <label className="text-light block pb-1.5">Password</label>
            <input
              type={"password"}
              className="p-3 rounded-md w-full"
              placeholder="Enter email address"
              {...register("password")}
            />
            <ErrorField error={errors.password} className="text-primary mt-1" />
          </fieldset>

          <fieldset className="mt-6 mb-4 text-center">
            <button
              type={"submit"}
              disabled={signingIn}
              className="p-3 w-1/2 m-auto bg-primary text-white cursor-pointer"
            >
              {signingIn ? <Icon icon={faSpinner} spin /> : "SIGN IN"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
