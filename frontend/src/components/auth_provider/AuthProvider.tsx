import React, { useState } from "react";
import { SignIn, SignOut } from "../../api/services/auth";
import AuthContext from "../../contexts/authContext";

/**
 * Provides authentication info and utilities
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>();
  const signIn: SignIn = () => {};
  const signOut: SignOut = () => {};

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
