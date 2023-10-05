
// LOGIN Payload
const login = {
    email, password
}
// Post Request 

// SIGN UP IS INTO TWO PARTS
const firstSignupData = {
    email, password
}
// Post Request it should return a temporary token for the purpose of resend otp 



// the above request will send an OTP TO THE ENTERED EMAIL ADDRESS
const otpVerification = { otp, temporaryToken  }
// Post Req

// Resend Otp
const resendOtp = { temporaryToken }  
//  Post request with temporaryToken as authorization header

// OTP success should return an object like below 
const OtpSuccessRes = {
    email: "string",
    authToken: "string",
    success: boolean,
    error: boolean,
    message: "string"
    // note let just use general message like this we shouldnt specify if one is error or not the success and error boolean values will determine how it will be represented on the frontend here.
}




