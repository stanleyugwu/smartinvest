import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import {useForm} from 'react-hook-form';
import { object, string } from "yup";
import useAdminAppStore from "../../../store/admin";
import Toast from '../../../components/Toast';
import ErrorField from "../../../components/ErrorField";
import { signIn } from "../../api/services/auth.admin";
import storeAdminToken from '../../api/services/storeAdminAccessToken'
import getAdminToken from '../../api/services/getAdminAccessToken'

export interface AdminLoginInputs {
  email:string;
  password:string;
}

const AdminLoginSchema = object().shape({
  email:string().email("Enter a valid email").required("Enter e-mail address"),
  password:string().required("Enter password")
});

export default function Login() {
  const {register,handleSubmit,formState:{errors}} = useForm<AdminLoginInputs>({resolver:yupResolver(AdminLoginSchema)});
  const setToken = useAdminAppStore(state => state.setAccessToken);

  const [loggingIn, setLoggingIn] = useState(false);
  const remeberMeRef = useRef<HTMLInputElement>(null);
  const handleLogin = handleSubmit(async (data) => {
    if(loggingIn) return;
    setLoggingIn(true);
    const rememberMe = remeberMeRef.current?.checked;
    try {
      const res = await signIn(data.email,data.password);
      if(rememberMe){
        // store in localstorage
        storeAdminToken(res.data.token);
      }
      Toast.fire(res.message, undefined, "success");
      setToken(res.data.token);
    } catch (error:any) {
      Toast.fire(error.message,error.howToFix,"error")
    } finally {
      setLoggingIn(false);
    }
  });

  // Handles aut sign in
  useEffect(() => {
    const token = getAdminToken();
    if(token){
      setToken(token);
    }
  },[])

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 md:px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-16 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center md:text-xl my-6 font-bold">
                  <h1>Sign Into Your Account</h1>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-5">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <ErrorField error={errors.email} />
                  </div>

                  <div className="relative w-full mb-5">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <ErrorField error={errors.password} />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        ref={remeberMeRef}
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={loggingIn}
                    >
                      {
                        loggingIn ? (
                          <i className="text-md fa fa-spinner fa-spin"></i>
                        ) : "Sign In"
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
