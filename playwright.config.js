// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir:      "./tests",
  fullyParallel: true,
  forbidOnly:   false, 
  retries:      0, // No retries for local development
  workers:      undefined, // Use all available cores
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
    
    // Auth projects (uncomment to use saved .auth/*.json sessions)
    // { name: "personal", use: { ...devices["Desktop Chrome"], storageState: ".auth/personal.json" }, testMatch: /.*@personal.*/ },
    // { name: "business", use: { ...devices["Desktop Chrome"], storageState: ".auth/business.json" }, testMatch: /.*@business.*/ },
    // { name: "client", use: { ...devices["Desktop Chrome"], storageState: ".auth/client.json" }, testMatch: /.*@client.*/ }
  ],
});
