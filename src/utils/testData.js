// User credentials and onboarding data — loaded from .env
export const users = {
  personal: {
    firstName: "Test",
    lastName: "Personal",
    email: process.env.PERSONAL_EMAIL,
    phone: process.env.PERSONAL_PHONE,
    password: process.env.PERSONAL_PASSWORD,
    onboarding: {
      occupation: "Freelancer",
      goal: "One-time Email Outreach",
      usage: "Cold Outreach",
      emailVolume: "0 - 30K",
      source: "LinkedIn",
    },
  },

  business: {
    firstName: "Test",
    lastName: "Business",
    email: process.env.BUSINESS_EMAIL,
    phone: process.env.BUSINESS_PHONE,
    password: process.env.BUSINESS_PASSWORD,
    onboarding: {
      goal: "Promote Products / Services",
      priorToolUsage: "Yes, I have",
      usage: "Cold Outreach",
      source: "LinkedIn",
    },
  },

  client: {
    firstName: "Test",
    lastName: "Client",
    email: process.env.CLIENT_EMAIL,
    phone: process.env.CLIENT_PHONE,
    password: process.env.CLIENT_PASSWORD,
    onboarding: {
      agencyType: "Sales Agency",
      clientCount: "0 - 5",
      emailVolume: "0 - 30K",
      source: "LinkedIn",
    },
  },
};

// Negative test data for validation scenarios
export const negativeUsers = {
  emptyForm: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  },

  invalidEmail: {
    firstName: "Test",
    lastName: "User",
    email: "invalid-email-format",
    phone: "9000000000",
    password: "ValidPass123!",
  },

  shortPassword: {
    firstName: "Test",
    lastName: "User",
    email: "test.shortpass@example.com",
    phone: "9000000000",
    password: "123",
  },

  invalidPhone: {
    firstName: "Test",
    lastName: "User",
    email: "test.invalidphone@example.com",
    phone: "123",
    password: "ValidPass123!",
  },

  missingRequiredFields: {
    firstName: "",
    lastName: "User",
    email: "test@example.com",
    phone: "9000000000",
    password: "ValidPass123!",
  },
};
