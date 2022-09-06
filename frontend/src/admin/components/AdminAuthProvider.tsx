import React, { useEffect } from "react";
import useAdminAppStore from "../../store/admin";
import { signIn as _signIn, SignOut } from "../api/services/auth";
import AuthContext from "../contexts/authContext";

/**
 * Provides authentication info and utilities
 */
const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useAdminAppStore((state) => [
    state.accessToken,
    state.setAccessToken,
  ]);

  const signOut: SignOut = () => {
    setToken(undefined);
    // because user will be moved to home page, we need to initialise it
    localStorage.removeItem("$__a_t_admin");
  };

  return (
    <AuthContext.Provider value={{ token, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AdminAuthProvider;
