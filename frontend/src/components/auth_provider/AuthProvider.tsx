import React from "react";
import {
  SignIn,
  SignOut,
  signIn as _signIn,
} from "../../api/services/auth";
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
    
    // because user will be moved to home page, we need to initialise it
    // @ts-ignore
    window.$__onLoad?.();
    // @ts-ignore
    window.$__drawChart?.();
    localStorage.removeItem("$__a_t");
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
