// authContext.js
import { createContext, useContext } from "react";
import useAuth from "./useAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
