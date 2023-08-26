import { createContext, useState, useContext } from "react";
import { AuthToken } from "./hooks/user";

export const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }: { children: any }) => {
  const [isAuthenticated, setAuthenticated] = useState<AuthToken>({
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userEmail: "",
  });

  function logout() {
    localStorage.removeItem("authToken");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
