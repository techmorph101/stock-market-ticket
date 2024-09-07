export const API_BASE_URL = "http://localhost:8080/v1/api";

export const SIGNIN_WITH_GOOGLE = API_BASE_URL + "/auth/google";
export const SIGNUP_WITH_EMAIL = API_BASE_URL + "/auth/email/signup";
export const SIGNIN_WITH_EMAIL = API_BASE_URL + "/auth/email";
export const LOGIN = API_BASE_URL + "/auth/login";
export const LOGOUT = API_BASE_URL + "/auth/logout";

export const SEND_VERIFICATION_EMAIL =
  API_BASE_URL + "/user/send-verification-email";
export const VERIFY_EMAIL = API_BASE_URL + "/user/verify";
