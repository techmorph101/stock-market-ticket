import { IUser } from "./schema";

export interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  signIn: () => void;
  logOut: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
