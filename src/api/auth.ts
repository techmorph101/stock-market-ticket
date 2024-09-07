import { LOGIN, SIGNIN_WITH_EMAIL, SIGNUP_WITH_EMAIL } from "@/constants/api";
import axios from "axios";

export const getUser = async () => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  try {
    // Make the request with the token included in the Authorization header
    const response = await axios.get(LOGIN, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 300) {
      throw new Error("Login Failed");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const signupUserWithEmail = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(SIGNUP_WITH_EMAIL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (response.status > 300) {
    throw Error("Signup Failed");
  }
  return;
};

export const signInUser = async (email: string, password: string) => {
  const response = await fetch(SIGNIN_WITH_EMAIL, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status > 300) {
    throw Error("Login Failed");
  }
  const user = await response.json();
  return user;
};
