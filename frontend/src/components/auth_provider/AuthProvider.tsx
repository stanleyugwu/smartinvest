import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SignIn,
  SignOut,
  signIn as _signIn,
  signOut as _signOut,
} from "../../api/services/auth";
import storeUserAccessToken from "../../api/services/storeUserAccessToken";
import AuthContext from "../../contexts/authContext";
import useAppStore from "../../store";

/**
 * Provides authentication info and utilities
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useAppStore(state => [state.accessToken,state.setAccessToken]);

  const signIn: SignIn = async (email: string, password: string) => {
    try {
      let token = await _signIn(email, password);
      setToken(token);
      // storeUserAccessToken(token);
    } catch (error) {
      throw error;
    }
  };
  const signOut: SignOut = () => {
    setToken(undefined);
    localStorage.removeItem("$__a_t");
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
