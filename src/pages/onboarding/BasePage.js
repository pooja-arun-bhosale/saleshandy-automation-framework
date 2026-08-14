import { expect } from "@playwright/test";

// Shared base for all onboarding pages
export class BasePage {
  constructor(page) {
    this.page = page;
  }
  async clickButton(label) {
    await this.page.getByRole("button", { name: label, exact: true }).click();
  }
  async clickText(label) {
    await this.page.getByText(label, { exact: true }).click();
  }
  async assertHeading(text) {
    await expect(
      this.page.getByRole("heading", { name: text, exact: true })
    ).toBeVisible();
  }
}
