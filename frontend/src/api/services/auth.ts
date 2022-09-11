import { SignUp } from "../../types";
import axiosInstance from "../axios";

export type SignIn<RT = any> = (email: string, password: string) => Promise<RT>;
export type SignOut = () => void;

/**
 * Handles signing in user
 */
const signIn: SignIn<any> = (email: string, password) => {
  return axiosInstance.post("/auth/signup", { email, password });
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
