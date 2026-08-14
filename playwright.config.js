// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir:      "./tests",
  fullyParallel: true,
  forbidOnly:   !!process.env.CI,
  retries:      process.env.CI ? 2 : 0,
  workers:      process.env.CI ? 1 : undefined,
  reporter:     "html",
  timeout:      120000, // 2 minutes for MFA handling

  use: {
    headless: false,
    trace:    "on-first-retry",
    actionTimeout: 30000, // 30 seconds for individual actions
    navigationTimeout: 60000, // 1 minute for navigation
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
});
