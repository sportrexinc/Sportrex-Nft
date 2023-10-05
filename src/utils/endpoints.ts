/** this would wrap all the api endpoints and base urls */
import axios from "axios";
export const baseUrl = "https://bot.versuspay.co/";

export const url = {
  login: "login",
  register: "signup",
  message: "messages",
  firmOnboard: "firm/onboarding",
  coporateOnboard: "corporation/onboarding",
  privateOnboard: "private/onboarding",
  otpVerification: "/auth/verify/otp",
  otpVerificationPassword: "auth/verify/password",
  resendOtp: "auth/resend/signup/otp",
  forgotPassword: "auth/forgot-password",
  resetPassword: "auth/reset-password",
  onBoardingCoopate: "corporation/onboarding",
};


