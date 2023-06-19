import React, { createContext, useState } from "react";
import { login, logout, register } from "../services/api";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (userData) => {
    try {
      const res = await login(userData);
      if (!res.error) {
        setUser(res);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const registerUser = async (userData) => {
    try {
      const res = await register(userData);
      if (!res.error) {
        setUser(res);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const logoutUser = async () => {
    try {
      const res = await logout();
      if (!res.error) {
        setUser(null);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const authContextValue = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
