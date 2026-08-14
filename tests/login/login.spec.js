// Login Tests — Positive Scenarios
import { test, expect } from "../../src/utils/fixtures/fixtures.js";
import { LoginPage } from "../../src/pages/login/LoginPage.js";
import { users } from "../../src/utils/testData.js";

test.describe("Login @positive", () => {
  test("Should successfully login with valid personal account credentials", async ({
    page,
  }) => {
    const login = new LoginPage(page);
    await login.open();
    await expect(page).toHaveURL(/login/);
    await login.login(users.personal);
    await expect(page).toHaveURL("**/sequence", { timeout: 90000 });
  });

  test("Should successfully login with valid business account credentials", async ({
    page,
  }) => {
    const login = new LoginPage(page);
    await login.open();
    await expect(page).toHaveURL(/login/);
    await login.login(users.business);
    await expect(page).toHaveURL("**/sequence", { timeout: 90000 });
  });

  test("Should successfully login with valid client account credentials", async ({
    page,
  }) => {
    test.setTimeout(120000);
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.client);
    await login.handleMfa();
    await expect(page).toHaveURL(/.*\/sequence/, { timeout: 30000 });
  });
});
