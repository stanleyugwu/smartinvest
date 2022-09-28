import React, { useEffect } from "react";
import {
  SignOut,
  signIn as _signIn,
} from "../../api/services/auth";
import storeUserAccessToken from "../../api/services/storeUserAccessToken";
import AuthContext from "../../contexts/authContext";
import useAppStore from "../../store";
import { SignIn } from "../../types";

/**
 * Provides authentication info and utilities
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useAppStore(state => [state.accessToken,state.setAccessToken]);

  useEffect(() => {
    if(token === undefined){
      // @ts-ignore
      window.$__onLoad?.();
      // @ts-ignore
      window.$__drawChart?.();
    }
  },[token])

  const signIn: SignIn = async (email: string, password: string) => {
    const updateProfile = useAppStore.getState().setProfile;
    const updateAccount = useAppStore.getState().setAccount;
    return _signIn(email,password).then(res => {
      const token = res?.data?.token;
      setToken(token);
      storeUserAccessToken(token)
      updateProfile(res.data.data.profile);
      updateAccount(res.data.data.account);
      return res;
    });
  };
  const signOut: SignOut = () => {
    setToken(undefined);
    // because user will be moved to home page, we need to initialise it
    localStorage.removeItem("$__a_t");
    window.location.replace("/")
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
