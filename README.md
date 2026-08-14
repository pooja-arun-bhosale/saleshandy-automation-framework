# Saleshandy QA Automation — SDET-1 Assignment

Comprehensive automated test suite for the Saleshandy application, covering signup, login, onboarding flows, and form validation scenarios. Built with Playwright using modern JavaScript (ES modules) and Page Object Model design pattern.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
- [Test Execution](#test-execution)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Features & Integrations](#features--integrations)
- [CI/CD Integration](#cicd-integration)
- [Design Patterns](#design-patterns)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

This automation framework tests the complete user journey for Saleshandy, including:

- **User Registration**: Comprehensive signup form validation and submission
- **User Authentication**: Login with MFA (Multi-Factor Authentication) support
- **Onboarding Flows**: Three distinct user types (Personal, Business, Client/Agency)
- **Form Validations**: Positive, negative, and edge case scenarios
- **Gmail Integration**: Automated OTP retrieval for MFA verification

**Technologies Stack:**

- **Test Framework**: Playwright v1.62.1
- **Language**: JavaScript (ES6+ modules)
- **Design Pattern**: Page Object Model (POM)
- **Environment Management**: dotenv
- **Email Integration**: ImapFlow + mailparser for Gmail OTP
- **CI/CD**: GitHub Actions

---

## Project Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Gmail account with App Password (for MFA testing)

### Installation Steps

1. **Clone and install dependencies**

```bash
git clone <repository-url>
cd saleshandy-qa-automation
npm install
npx playwright install chromium
```

2. **Environment Configuration**

```bash
cp .env.example .env
```

3. **Configure credentials in `.env`**

```env
# Application URL
BASE_URL=https://my.saleshandy.com

# Test User Credentials
PERSONAL_EMAIL=your-personal@email.com
PERSONAL_PHONE=1234567890
PERSONAL_PASSWORD=YourPassword123

BUSINESS_EMAIL=your-business@email.com
BUSINESS_PHONE=1234567890
BUSINESS_PASSWORD=YourPassword123

CLIENT_EMAIL=your-client@email.com
CLIENT_PHONE=1234567890
CLIENT_PASSWORD=YourPassword123

# Gmail Integration (for MFA)
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

### Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security > 2-Step Verification
3. Generate an App Password for "Mail"
4. Use the generated 16-character password in `GMAIL_APP_PASSWORD`

---

## Test Execution

### Available Test Commands

| Command                        | Description            | Test Scope                |
| ------------------------------ | ---------------------- | ------------------------- |
| `npm test`                     | Run all test suites    | Complete test execution   |
| `npm run test:personal`        | Personal account tests | @personal tagged tests    |
| `npm run test:business`        | Business account tests | @business tagged tests    |
| `npm run test:client`          | Client/Agency tests    | @client tagged tests      |
| `npm run test:positive`        | Positive scenarios     | @positive tagged tests    |
| `npm run test:negative`        | Negative scenarios     | @negative tagged tests    |
| `npm run test:edge`            | Edge cases             | @edge tagged tests        |
| `npm run test:signup`          | Signup flow tests      | All signup related tests  |
| `npm run test:signup-negative` | Signup validations     | Negative signup scenarios |
| `npm run test:signup-edge`     | Signup edge cases      | Edge case scenarios       |
| `npm run report`               | Open test report       | HTML report viewer        |

### Test Execution Examples

```bash
# Run all tests
npm test

# Run specific test types
npm run test:positive
npm run test:negative

# Run specific test files
npm run test:signup-negative
npm run test:signup-edge

# Generate and view report
npm run report
```

---

## Project Structure

```
saleshandy-qa-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline configuration
├── src/
│   ├── pages/
│   │   ├── login/
│   │   │   ├── LoginPage.js        # Login form interactions
│   │   │   └── MfaVerifyPage.js    # MFA OTP verification
│   │   ├── onboarding/
│   │   │   ├── BasePage.js         # Base class for onboarding pages
│   │   │   ├── OnboardingPage.js   # Account type selection
│   │   │   ├── PersonalOnboarding.js # Personal user onboarding
│   │   │   ├── BusinessOnboarding.js # Business user onboarding
│   │   │   ├── ClientOnboarding.js   # Client/Agency onboarding
│   │   │   └── index.js            # Onboarding exports
│   │   └── signup/
│   │       └── SignupPage.js       # Signup form and validation
│   └── utils/
│       ├── constants.js            # Application constants and URLs
│       ├── testData.js            # Test data and user credentials
│       ├── fixtures/
│       │   └── fixtures.js        # Playwright custom fixtures
│       └── gmail/
│           ├── gmailClient.js     # Gmail IMAP connection
│           └── otpReader.js       # OTP extraction from emails
├── tests/
│   ├── login/
│   │   └── login.spec.js          # Login test scenarios
│   └── signup/
│       ├── signup.spec.js         # Positive signup scenarios
│       ├── signup-negative.spec.js # Form validation tests
│       └── signup-edge.spec.js    # Edge case scenarios
├── test-cases/
│   └── QA_Test_Cases_Saleshandy_Best_Final.xlsx # Manual test cases
├── test-results/                   # Playwright test results
├── playwright-report/              # HTML test reports
├── playwright.config.js           # Playwright configuration
├── debug-gmail.js                 # Gmail integration testing utility
├── package.json                   # Project dependencies and scripts
├── .env.example                   # Environment template
├── .env                          # Environment variables (gitignored)
├── .gitignore                    # Git ignore rules
└── README.md                     # Project documentation
```

---

## Test Coverage

### Functional Test Scenarios

#### 🟢 Positive Test Cases

- **Complete User Journeys**: End-to-end signup and onboarding for all user types
- **Login Flows**: Successful authentication with MFA support
- **Account Type Flows**:
  - Personal Use: Occupation → Goal → Usage → Email Volume → Source
  - Business: Goal → Prior Tool Usage → Usage → Source
  - Client/Agency: Agency Type → Client Count → Email Volume → Source

#### 🔴 Negative Test Cases

- **Form Validation**: Empty form submission validation
- **Email Validation**: Invalid email format detection
- **Phone Validation**: Invalid phone number handling
- **Required Fields**: Missing required field validation
- **Authentication**: Invalid login credentials

#### ⚠️ Edge Case Scenarios

- **Boundary Testing**: Field length validation (2-25 characters)
- **Special Characters**: Input sanitization testing
- **Duplicate Users**: Existing email handling
- **Unregistered Users**: Non-existent account validation

### Test Data Categories

#### User Types Covered

1. **Personal Users**: Freelancers, individual contributors
2. **Business Users**: Companies, enterprises
3. **Client/Agency Users**: Marketing agencies, service providers

#### Validation Scenarios

- Form field validations (required, format, length)
- Cross-browser compatibility (Chrome focus)
- Responsive design validation
- Error message accuracy

---

## Features & Integrations

### 🔐 Multi-Factor Authentication (MFA)

- **Gmail Integration**: Automated OTP retrieval using IMAP
- **Real-time Processing**: Checks emails from last 5 minutes
- **Pattern Matching**: Intelligent OTP extraction from email content
- **Fallback Mechanisms**: Multiple OTP detection strategies

### 📧 Gmail Integration Details

```javascript
// Automatic OTP retrieval
const otp = await getSaleshandyOTP();
// Searches recent emails for Saleshandy OTP
// Extracts 4-digit codes automatically
// Handles both subject and body OTP formats
```

### 🎯 Smart Fixtures System

```javascript
// Reusable onboarding fixture
await runOnboarding(accountType);
// Handles: signup → login → account selection → onboarding completion
```

### 🔄 Duplicate User Handling

- Automatic detection of existing users
- Seamless fallback to login flow
- No test failures for pre-existing accounts

---

## CI/CD Integration

### GitHub Actions Workflow

```yaml
# Automated testing on push/PR
- Runs on: Ubuntu Latest
- Node.js: LTS version
- Browsers: Chromium with dependencies
- Artifacts: Test reports with 30-day retention
```

### Pipeline Features

- **Trigger Events**: Push to main/master, Pull Requests
- **Parallel Execution**: Optimized for CI environment
- **Artifact Storage**: HTML reports and screenshots
- **Failure Handling**: Detailed error reporting

---

## Design Patterns

### Page Object Model (POM)

```javascript
// Hierarchical page structure
├── BasePage.js           # Common interactions
├── LoginPage.js          # Login-specific methods
├── SignupPage.js         # Signup form handling
└── OnboardingPages/      # User type specific flows
```

### Benefits of POM Implementation

- **Maintainability**: Changes isolated to specific page classes
- **Reusability**: Common methods shared via inheritance
- **Readability**: Test intent clear from method names
- **Scalability**: Easy to extend for new pages/flows

### Custom Fixtures Pattern

```javascript
// Encapsulates complex workflows
const test = base.extend({
  runOnboarding: async ({ page }, use) => {
    // Complete signup/login + onboarding logic
  },
});
```

### Constants Management

```javascript
// Single source of truth
export const ONBOARDING_HEADINGS = {
  personal: { occupation: "Please select your occupation" },
  business: { goal: "What is your primary goal..." },
  client: { agencyType: "What type of agency..." },
};
```

---

## Configuration

### Playwright Configuration Highlights

```javascript
export default defineConfig({
  timeout: 120000,        // 2 minutes (MFA handling)
  actionTimeout: 30000,   # 30 seconds per action
  navigationTimeout: 60000, // 1 minute navigation
  headless: false,        // Visible browser for debugging
  retries: 2,            // CI retry logic
});
```

### Environment Variables

- **BASE_URL**: Application base URL (default: https://my.saleshandy.com)
- **User Credentials**: Per account type credentials
- **Gmail Integration**: IMAP connection details

### Browser Support

- **Primary**: Chromium (Desktop Chrome simulation)
- **Configurable**: Easy extension to Firefox, Safari, Edge
- **Mobile**: Device simulation support available

---

## Troubleshooting

### Common Issues & Solutions

#### 🚫 Environment Setup Issues

```bash
# Missing dependencies
npm install
npx playwright install chromium

# Environment variables not loaded
cp .env.example .env
# Fill in real credentials
```

### Debug Mode Execution

```bash
# Run tests in debug mode
npx playwright test --debug

# Run with headed browser
npx playwright test --headed

# Generate trace on failure
npx playwright test --trace on
```

---

## Contributing

1. Follow the existing Page Object Model structure
2. Add test data to `testData.js` for new scenarios
3. Use existing fixtures for common workflows
4. Update constants for new UI elements
5. Maintain comprehensive test coverage

---

## Support & Maintenance

- **Framework Version**: Playwright 1.62.1
- **Node.js Compatibility**: 18+
- **Update Frequency**: Regular dependency updates
- **Browser Support**: Latest Chromium builds
