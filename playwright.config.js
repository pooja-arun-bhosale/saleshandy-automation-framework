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

  use: {
    headless: false,
    trace: "on-first-retry",
    actionTimeout: 30000, // 30 seconds for individual actions
    navigationTimeout: 60000, // 1 minute for navigation
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
