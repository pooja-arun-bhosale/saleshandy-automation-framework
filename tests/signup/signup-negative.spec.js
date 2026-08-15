// Signup Form Validation — Negative Test Cases
import { test, expect } from "../../src/utils/fixtures/fixtures.js";
import { SignupPage } from "../../src/pages/signup/SignupPage.js";
import { negativeUsers } from "../../src/utils/testData.js";

test.describe("Form Validation @negative", () => {
  test("empty form shows required field errors", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.firstNameInput.focus();
    await signup.firstNameInput.blur();
    await expect(
      page.locator("text=/first.*name.*required/i").first(),
    ).toBeVisible();
  });

  test("invalid email format shows error", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.fillForm(negativeUsers.invalidEmail);
    await signup.emailInput.blur();
    const emailError = page.locator(
      ".auth-form-row:has-text('Work email') .bs-input-label-suffix",
    );
    await expect(emailError).toHaveText("Please enter a valid email address.");
  });

  test("invalid phone number shows error", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.fillForm(negativeUsers.invalidPhone);
    await signup.phoneInput.blur();
    const phoneError = page.locator(".phone-form-input-error");
    await expect(phoneError).toBeVisible();
    await expect(phoneError).not.toBeEmpty();
  });

  test("Missing required field shows error", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.open();
    await signup.fillForm(negativeUsers.missingRequiredFields);
    await signup.firstNameInput.focus();
    await signup.firstNameInput.blur();
    await expect(
      page.locator("text=/first.*name.*required/i").first(),
    ).toBeVisible();
  });
});
