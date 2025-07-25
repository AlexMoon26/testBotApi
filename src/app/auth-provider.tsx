"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";
import { LoginUserData, User } from "../../global";

type AuthContextType = {
  user: User;
  login: (userData: LoginUserData) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const userData = Cookies.get("telegram_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData: LoginUserData) => {
    setUser(userData);
    Cookies.set("telegram_user", JSON.stringify(userData), { expires: 7 });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("telegram_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
