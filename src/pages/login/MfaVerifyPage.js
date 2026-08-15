import { getSaleshandyOTP } from "../../utils/gmail/otpReader.js";

export class MfaVerifyPage {
  constructor(page) {
    this.page = page;
    this.otpInputs = page.locator(".otp-input");
    this.verifyButton = page.getByRole("button", {
      name: "Verify",
      exact: true,
    });
  }

  async verifyWithGmail() {
    await this.otpInputs.first().waitFor({
      state: "visible",
    });

    console.log("Waiting for OTP from Gmail...");

    try {
      const otp = await getSaleshandyOTP();
      console.log("Retrieved OTP:", otp);

      // Fill each OTP digit
      for (let i = 0; i < otp.length; i++) {
        await this.otpInputs.nth(i).fill(otp[i]);
      }
    } catch (error) {
      console.error("MFA verification failed:", error);
      throw error;
    }
  }
}
