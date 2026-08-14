// Signup & Onboarding — Positive Scenarios Only
import { test, expect } from "../../src/utils/fixtures/fixtures.js";

test.describe("Signup + Onboarding @positive", () => {
  for (const accountType of ["personal", "business", "client"]) {
    test(`Should successfully complete signup and onboarding for — ${accountType}account @${accountType}`, async ({
      runOnboarding,
    }) => {
      await runOnboarding(accountType);
    });
  }
});
