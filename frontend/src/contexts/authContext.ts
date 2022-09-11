import React from "react";
import { SignOut } from "../api/services/auth";
import { SignIn } from "../types";

export type AuthContextType = {
  token?: string;
  signIn?: SignIn;
  signOut?: SignOut;
  setToken(token?:string):void;
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: undefined,
  signOut: undefined,
  token: undefined,
  setToken:(t) => t
});

export default AuthContext;
