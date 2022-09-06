import React from "react";

export type AuthContextType = {
  token?: string;
  signOut?: Function;
};

const AdminAuthContext = React.createContext<AuthContextType>({
  signOut: undefined,
  token: undefined,
});

export default AdminAuthContext;
