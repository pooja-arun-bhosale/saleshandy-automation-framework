// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: false,
  retries: 1,
  workers: 1,
  reporter: "html",
  timeout: 120000,
  /*
 * Global storageState is intentionally not configured because signup/login
 * tests require a fresh unauthenticated session. Auth state is reused only
 * by tests that require an already logged-in user.
 */

  use: {
    headless: false,
    trace: "on-first-retry",
    actionTimeout: 30000, // 30 seconds for individual actions
    navigationTimeout: 60000, // 1 minute for navigation
    // storageState: ".auth/business.json",
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
