export const BASE_URL = process.env.BASE_URL || "https://my.saleshandy.com";
export const SIGNUP_URL = `${BASE_URL}/signup`;
export const LOGIN_URL = `${BASE_URL}/login`;

export const ACCOUNT_TYPE_LABELS = {
  personal: "Personal Use",
  business: "Business",
  client: "Clients",
};
export const ONBOARDING_HEADINGS = {
  accountType: "Let’s shape your experience",
  personal: {
    occupation: "Please select your occupation",
    goal: "What is your primary goal for using Saleshandy?",
    usage: "How would you use Saleshandy?",
    emailVolume: "How many emails are you likely to send every month?",
    source: "How did you find us?",
  },
  business: {
    goal: "What is your primary goal for using Saleshandy?",
    priorToolUsage:
      "Have you used a cold outreach tool like Saleshandy before?",
    usage: "How would you use Saleshandy?",
    source: "How did you find us?",
  },
  client: {
    agencyType: "What type of agency are you?",
    clientCount: "How many clients do you serve?",
    emailVolume: "How many emails are you likely to send every month?",
    source: "How did you find us?",
  },
};
