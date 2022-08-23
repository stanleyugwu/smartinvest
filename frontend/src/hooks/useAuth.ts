import { useContext } from "react";
import AuthContext from "../contexts/authContext";

/**
 * Hook for AuthContext
 */
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
