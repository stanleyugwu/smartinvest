import axiosInstance from "../axios";

type AdminSignInRes = {
  message: string;
  data: {
    token: string;
    data: {
      id: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};
export type AdminSignIn = (
  email: string,
  password: string
) => Promise<AdminSignInRes>;
export type AdminSignOut = () => void;

/**
 * Handles signing in user
 */
const signIn: AdminSignIn = (email, password) => {
  return axiosInstance.post("/auth/admin_signin", {
    email,
    password,
  }) as Promise<AdminSignInRes>;
};

/**
 * Handles signing out logged in user
 */
const signOut: AdminSignOut = () => {
  return axiosInstance.post("/signout");
};

export { signIn, signOut };
