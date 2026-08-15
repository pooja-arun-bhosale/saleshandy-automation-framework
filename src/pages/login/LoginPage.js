// Login page — handles credentials + MFA redirect
import { LOGIN_URL } from "../../utils/constants.js";
import { MfaVerifyPage } from "../login/MfaVerifyPage.js";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder("Enter your work email address");
    this.passwordInput = page.getByPlaceholder("Enter your password");
    this.loginButton = page.getByRole("button", { name: "Login", exact: true });
    this.mfaPage = new MfaVerifyPage(page);
  }

  // Navigate to login page
  async open() {
    await this.page.goto(LOGIN_URL, {
      waitUntil: "networkidle",
    });
  }

  // Fills credentials and clicks login
  async login(user) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }
  async handleMfa() {
    try {
      await this.page.waitForURL("**/mfa-verify");
      await this.mfaPage.verifyWithGmail();
    } catch (error) {
      console.log("No MFA required or MFA page not found");
    }
  }
}
