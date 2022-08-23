import React from "react";
import { SignIn, SignOut } from "../api/services/auth";

export type AuthContextType = {
  token?: string;
  signIn?: SignIn;
  signOut?: SignOut;
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: undefined,
  signOut: undefined,
  token: undefined,
});

export default AuthContext;
