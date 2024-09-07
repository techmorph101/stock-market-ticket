import { SEND_VERIFICATION_EMAIL, VERIFY_EMAIL } from "@/constants/api";

export const sendEmailverificationMail = async () => {
  const response = await fetch(SEND_VERIFICATION_EMAIL, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
  });
  if (response.status > 300) {
    throw Error("Failed to send mail");
  }
  return;
};

export const verifyEmail = async (token: string) => {
  const response = await fetch(VERIFY_EMAIL + `?token=${token}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.status > 300) {
    throw Error("Verification Failed");
  }
  return;
};
