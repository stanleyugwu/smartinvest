import { SignIn, SignUp } from "../../types";
import axiosInstance from "../axios";

export type SignOut = () => void;

/**
 * Handles signing in user
 */
const signIn:SignIn = (email, password) => {
  return axiosInstance.post("/auth/signin", { email, password });
};

/**
 * Handles signing out logged in user
 */
const signOut: SignOut = () => {
  return axiosInstance.post("/signout");
};

/**
 * Handles sign up
 */
const signUp: SignUp = (
  fullname,
  email,
  phone,
  currency,
  country,
  password
) => {
  return axiosInstance.post("/auth/signup", {
    fullname,
    email,
    phone,
    currency,
    country,
    password,
  });
};

export { signIn, signOut, signUp };
