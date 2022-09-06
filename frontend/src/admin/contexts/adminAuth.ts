import React from "react";
import { AdminSignOut } from "../api/services/auth";

export type AdminAuthContextType = {
  token?: string;
  signOut?: AdminSignOut;
};

const AdminAuthContext = React.createContext<AdminAuthContextType>({
  signOut: () => null,
  token: undefined,
});

export default AdminAuthContext;
