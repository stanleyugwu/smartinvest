import axiosInstance from "../axios";

export type SignIn = (email: string, password: string) => void;
export type SignOut = () => void;

/**
 * Handles signing in user
 */
const signIn: SignIn = (email: string, password) => {
  return axiosInstance.post("/signin", {
    email,
    password,
  });
};

/**
 * Handles signing out logged in user
 */
const signOut: SignOut = () => {
  return axiosInstance.post("/signout");
};

export { signIn, signOut };
