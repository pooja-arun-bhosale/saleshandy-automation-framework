import { test as base } from "@playwright/test";
import { SignupPage }         from "../../pages/signup/SignupPage.js";
import { LoginPage }          from "../../pages/login/LoginPage.js";
import { OnboardingPage }     from "../../pages/onboarding/OnboardingPage.js";
import { PersonalOnboarding } from "../../pages/onboarding/PersonalOnboarding.js";
import { BusinessOnboarding } from "../../pages/onboarding/BusinessOnboarding.js";
import { ClientOnboarding }   from "../../pages/onboarding/ClientOnboarding.js";
import { users }              from "../testData.js";

// Onboarding handlers keyed by account type
const onboardingMap = {
  personal: PersonalOnboarding,
  business: BusinessOnboarding,
  client:   ClientOnboarding,
};

export const test = base.extend({
  // Signs up or logs in, then completes account-type modal + onboarding steps
  runOnboarding: async ({ page }, use) => {
    await use(async (accountType) => {
      const user      = users[accountType];
      const isNewUser = await new SignupPage(page).signup(user, accountType);

      if (!isNewUser) {
        await new LoginPage(page).login(user);
        await new LoginPage(page).handleMfa();
      }

        await new OnboardingPage(page).selectAccountType(accountType);

        const OnboardingClass = onboardingMap[accountType];
        await new OnboardingClass(page).completeOnboarding(user.onboarding);
    });
  },
});

export { expect } from "@playwright/test";
