"use client";

import useUser from "@/providers/user/use-user-context";

import { Button } from "@/components/ui/button";
import { sendEmailverificationMail } from "@/api/user";

const Profile: React.FC = () => {
  const { user, logOut } = useUser();

  return (
    <div className="min-h-screen flex flex-col space-y-2 items-center justify-center text-lg">
      <h1>Welcome to Metastart</h1>
      <img
        src={user?.dp}
        alt="Profile Pic"
        className="h-20 w-20 rounded-full"
      />
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Verified: {user?.verified ? "True" : "False"}</p>
      {!user?.verified && (
        <Button onClick={sendEmailverificationMail}>Verify Email</Button>
      )}
      <Button onClick={logOut}>Logout</Button>
    </div>
  );
};

export default Profile;
