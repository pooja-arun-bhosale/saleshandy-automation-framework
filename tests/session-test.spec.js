import { test, expect } from "@playwright/test";

// Use client session for this test
test.use({ storageState: ".auth/business.json" });

test("check session works @business", async ({ page }) => {
  // Go to sequence page - should be authenticated
  await page.goto("https://my.saleshandy.com/sequence");
  await expect(page).toHaveURL(/sequence/);
});
