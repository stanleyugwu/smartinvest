import React from "react";
import { SignIn, SignOut } from "../api/services/auth";

export type AuthContextType = {
  token?: string;
  signIn?: SignIn;
  signOut?: SignOut;
  setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: undefined,
  signOut: undefined,
  token: undefined,
  setToken:undefined
});

export default AuthContext;
