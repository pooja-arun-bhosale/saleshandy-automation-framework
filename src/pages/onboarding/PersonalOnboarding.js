import { BasePage } from "./BasePage.js";
import { ONBOARDING_HEADINGS } from "../../utils/constants.js";

export class PersonalOnboarding extends BasePage {

  async selectOccupation(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.personal.occupation);
    await this.clickButton(value);
  }

  async selectGoal(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.personal.goal);
    await this.clickButton(value);
  }

  async selectUsage(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.personal.usage);
    await this.clickButton(value);
  }

  async selectEmailVolume(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.personal.emailVolume);
    await this.clickButton(value);
  }

  async selectSource(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.personal.source);
    await this.clickButton(value);
  }

  async completeOnboarding(data) {
    await this.selectOccupation(data.occupation);
    await this.selectGoal(data.goal);
    await this.selectUsage(data.usage);
    await this.selectEmailVolume(data.emailVolume);
    await this.selectSource(data.source);
  }
}
