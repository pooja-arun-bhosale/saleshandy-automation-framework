import { SIGNUP_URL } from "../../utils/constants.js";

// Signup page — form fill, submit, duplicate-user detection
export class SignupPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.emailInput = page.locator('input[name="email"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.signupButton = page.getByRole("button", {
      name: "Sign up",
      exact: true,
    });
  }

  async open() {
    await this.page.goto(SIGNUP_URL, { waitUntil: "networkidle" });
  }

  async fillForm(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.phoneInput.fill(user.phone);
    await this.passwordInput.fill(user.password);
  }

  async submit() {
    await this.signupButton.click({ force: true });
  }

  // Returns true if "User already exists" error appears, then clicks login link
  async handleExistingUser() {
    try {
      await this.page.getByText("User already exists");
      await this.page.getByRole("link", { name: "Log in!" }).click();
      return true;
    } catch {
      return false;
    }
  }

  // Full flow: open → fill → submit → handle duplicate. Returns false if user existed.
  async signup(user) {
    await this.open();
    await this.fillForm(user);
    await this.submit();
    const alreadyExists = await this.handleExistingUser();
    return !alreadyExists;
  }
}
