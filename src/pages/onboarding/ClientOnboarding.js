import { BasePage } from "./BasePage.js";
import { ONBOARDING_HEADINGS } from "../../utils/constants.js";

export class ClientOnboarding extends BasePage {
  async selectAgencyType(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.client.agencyType);

    await this.clickButton(value);
  }

  async selectClientCount(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.client.clientCount);

    await this.clickButton(value);
  }

  async selectEmailVolume(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.client.emailVolume);

    await this.clickButton(value);
  }

  async selectSource(value) {
    await this.assertHeading(ONBOARDING_HEADINGS.client.source);

    await this.clickButton(value);
  }

  async completeOnboarding(data) {
    await this.selectAgencyType(data.agencyType);
    await this.selectClientCount(data.clientCount);
    await this.selectEmailVolume(data.emailVolume);
    await this.selectSource(data.source);
  }
}
