import { getSaleshandyOTP } from "./src/utils/gmail/otpReader.js";

async function testGmail() {
  try {
    console.log("Testing Gmail connection...");
    const otp = await getSaleshandyOTP();
    console.log("OTP retrieved:", otp);
  } catch (error) {
    console.error("Gmail test failed:", error);
  }
}

testGmail();
