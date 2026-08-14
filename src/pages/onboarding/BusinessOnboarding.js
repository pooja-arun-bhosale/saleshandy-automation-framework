import { BasePage } from "./BasePage.js";
import { ONBOARDING_HEADINGS } from "../../utils/constants.js";

export class BusinessOnboarding extends BasePage {
  async selectGoal(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.business.goal);
    await this.clickButton(value);
  }

  async selectPriorToolUsage(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.business.priorToolUsage);
    await this.clickButton(value);
  }

  async selectUsage(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.business.usage);
    await this.clickButton(value);
  }

  async selectSource(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.business.source);
    await this.clickButton(value);
  }

  async completeOnboarding(data) {
    await this.selectGoal(data.goal);
    await this.selectPriorToolUsage(data.priorToolUsage);
    await this.selectUsage(data.usage);
    await this.selectSource(data.source);
  }
}
