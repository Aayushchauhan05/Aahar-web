

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";


interface AuthState {
  user: { username: string; email: string } | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (user: { username: string; email: string }) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthState["user"]>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (user: { username: string; email: string }) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const checkAuth = () => {
    return user !== null && isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
