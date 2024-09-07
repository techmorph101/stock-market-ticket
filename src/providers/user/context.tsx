import { createContext } from "react";
import type { IUserContext } from "../../types/context";

const defaultContext: IUserContext = {
  user: null,
  setUser: () => {
    return;
  },
  signIn: () => {
    return;
  },
  logOut: () => {
    return;
  },
  loading: false,
  setLoading: () => {
    return;
  },
};

const UserContext = createContext<IUserContext>(defaultContext);

export default UserContext;
