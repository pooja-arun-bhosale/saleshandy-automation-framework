// Signup Edge Cases — Special Scenarios
import { test, expect } from "../../src/utils/fixtures/fixtures.js";
import { SignupPage } from "../../src/pages/signup/SignupPage.js";
import { LoginPage } from "../../src/pages/login/LoginPage.js";

test.describe("Signup & Login — Edge Case Scenarios @edge", () => {
  test("first name shows validation error when exceeding 25 characters", async ({
    page,
  }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.firstNameInput.fill("A".repeat(26));
    await signup.firstNameInput.blur();
    await expect(
      page
        .locator("label.bs-input-label-suffix")
        .filter({ hasText: "Should be between 2-25 characters." }),
    ).toBeVisible();
  });

  test("first name shows validation error for special characters", async ({
    page,
  }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.firstNameInput.fill("@@@@");
    await signup.firstNameInput.blur();
    await expect(
      page
        .locator("label.bs-input-label-suffix")
        .filter({ hasText: "Alphabetic characters only." }),
    ).toBeVisible();
  });

  test("First name accepts exactly 25 characters", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();
    const validName = "A".repeat(25);
    await signup.firstNameInput.fill(validName);
    await signup.firstNameInput.blur();
    await expect(
      page
        .locator("label.bs-input-label-suffix")
        .filter({ hasText: "Should be between 2-25 characters." }),
    ).not.toBeVisible();

    await expect(signup.firstNameInput).toHaveValue(validName);
  });

  test("First name accepts exactly 2 characters", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();

    await signup.firstNameInput.fill("Ab");
    await signup.firstNameInput.blur();
    await expect(
      page
        .locator("label.bs-input-label-suffix")
        .filter({ hasText: "Should be between 2-25 characters." }),
    ).not.toBeVisible();

    await expect(signup.firstNameInput).toHaveValue("Ab");
  });

  test("First name shows error for single character", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();

    await signup.firstNameInput.fill("A");
    await signup.firstNameInput.blur();

    await expect(
      page
        .locator("label.bs-input-label-suffix")
        .filter({ hasText: "Should be between 2-25 characters." }),
    ).toBeVisible();
  });

  test("shows error for an unregistered email", async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.emailInput.fill("notexist@test.com");
    await login.passwordInput.fill("Test@1234");
    await login.loginButton.click();
    await expect(
      page.getByText("Invalid username or password", { exact: true }),
    ).toBeVisible();
  });
});
