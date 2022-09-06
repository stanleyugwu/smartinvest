import axiosInstance from "../axios";

export type AdminSignIn<RT = any> = (email: string, password: string) => Promise<RT>;
export type AdminSignOut = () => void;

/**
 * Handles signing in user
 */
const signIn: AdminSignIn<any> = (email: string, password) => {
  return Promise.resolve("Bearer 23jndnsndsnmnn234mdmsdn")
};

/**
 * Handles signing out logged in user
 */
const signOut: AdminSignOut = () => {
  return axiosInstance.post("/signout");
};

export { signIn, signOut };
