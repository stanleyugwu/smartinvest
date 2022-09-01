import axiosInstance from "../axios";

export type SignIn<RT = any> = (email: string, password: string) => Promise<RT>;
export type SignOut = () => void;

/**
 * Handles signing in user
 */
const signIn: SignIn<any> = (email: string, password) => {
  return Promise.resolve("Bearer 23jndnsndsnmnn234mdmsdn")
};

/**
 * Handles signing out logged in user
 */
const signOut: SignOut = () => {
  return axiosInstance.post("/signout");
};

export { signIn, signOut };
