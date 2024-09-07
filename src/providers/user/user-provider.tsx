"use client";

import { useState, useEffect, ReactNode } from "react";

import UserContext from "./context";

import { LOGOUT, SIGNIN_WITH_GOOGLE } from "@/constants/api";
import { getUser } from "@/api/auth";

import { IUserContext } from "@/types/context";
import { IUser } from "@/types/schema";

interface IUserProvider {
  children: ReactNode;
}

const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Handle sign in with Google
  const signIn = () => {
    window.open(SIGNIN_WITH_GOOGLE, "_self");
  };

  // Handle logout
  const logOut = () => {
    localStorage.removeItem("token");
    window.open(LOGOUT, "_self");
  };

  // Capture token from URL if present
  const captureTokenFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token, "token");
    console.log(window.location.search);
    

    if (token) {
      localStorage.setItem("token", token);
      // Optionally clear the token from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  useEffect(() => {
    // Capture token from URL on component mount
    captureTokenFromURL();

    // Fetch user data
    setLoading(true);
    try {
      getUser()
        .then((data: any) => {
          setUser(data.user);
        })
        .catch(() => {
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  }, []);

  const values: IUserContext = {
    user,
    setUser,
    signIn,
    logOut,
    loading,
    setLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
