export interface IUser {
  name: string;
  email: string;
  dp: string;
  provider: {
    provider: "google" | "email";
    id: string;
  };
  verified: boolean;
}
