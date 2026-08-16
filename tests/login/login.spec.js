import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/login/LoginPage.js";
import { Auth } from "../../src/utils/auth.js";
import { users } from "../../src/utils/testData.js";

test.describe("Login", () => {
  for (const type of ["personal", "business", "client"]) {
    test(`should successfully login with valid ${type} account credentials`, async ({
      page,
    }) => {
      const login = new LoginPage(page);
      await login.open();
      await login.login(users[type]);
      await login.handleMfa();
      // Save session after successful login
      Auth.save(type, await page.context().storageState());
    });
  }
});
