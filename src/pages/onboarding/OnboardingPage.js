import { BasePage } from "./BasePage.js";
import { ACCOUNT_TYPE_LABELS,ONBOARDING_HEADINGS } from "../../utils/constants.js";

// Account-type modal shown after signup and login
export class OnboardingPage extends BasePage {
  async selectAccountType(type) {
    await this.assertHeading(ONBOARDING_HEADINGS.accountType);
    await this.clickText(ACCOUNT_TYPE_LABELS[type]);
  }
}
