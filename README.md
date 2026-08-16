# Saleshandy QA Automation Framework

**Automated test suite for Saleshandy signup, login, and onboarding flows with session-based authentication.**

Built with Playwright + JavaScript ES6 + Page Object Model

---

## 🚀 Quick Start

```bash
git clone <repository-url>
cd saleshandy-automation-framework
npm install
npx playwright install chromium
cp .env.example .env  # Configure credentials
npm test
```

---

## 📋 Assignment Requirements ✅

**Assignment Compliance Achieved**

✅ **Reusable & Parameterized Signup**: Single `runOnboarding(accountType)` handles all 3 account types  
✅ **Account-Specific Flows**: Personal (5 steps), Business (4 steps), Client (4 steps) onboarding  
✅ **No Repeated Login**: Session persistence with `.auth/*.json` files  
✅ **Clean Framework**: Page Object Model with maintainable structure

---

## 🧪 Test Execution

```bash
# Core Commands
npm test                    # Run all tests
npm run test:personal       # Personal account tests
npm run test:business       # Business account tests
npm run test:client         # Client account tests

# Test Categories
npm run test:positive       # Positive scenarios
npm run test:negative       # Form validation
npm run test:edge          # Edge cases
npm run report             # View HTML report
```

---

## 📁 Project Structure

```
saleshandy-automation-framework/
├── .auth/                          # Session files (auto-generated)
│   ├── personal.json              # Personal account session
│   ├── business.json              # Business account session
│   └── client.json                # Client account session
├── src/
│   ├── pages/
│   │   ├── signup/SignupPage.js   # Signup form handling
│   │   ├── login/LoginPage.js     # Login + MFA
│   │   └── onboarding/            # Account-specific flows
│   │       ├── PersonalOnboarding.js   # Personal (5 steps)
│   │       ├── BusinessOnboarding.js   # Business (4 steps)
│   │       └── ClientOnboarding.js     # Client (4 steps)
│   └── utils/
│       ├── auth.js                # Session management
│       ├── testData.js           # User credentials
│       └── fixtures/fixtures.js  # Reusable test workflows
├── tests/
│   ├── signup
│   │    ├── signup.spec.js     # Positive flows
│   │    ├── signup-negative.spec.js # Negative cases
│   │    └── signup-edge.spec.js     #Edge cases
│   ├── login
│   │      ├── login.spec.js        # Login scenarios
│   └── session-test.spec.js       # Session validation
├── Test-cases-document/           # Manual test cases
├── AUTOMATION_COVERAGE_SUMMARY.md # Assignment coverage
└── README.md                      # This file
```

---

## ⚙️ Setup Instructions

### 1. Environment Configuration

Copy `.env.example` to `.env` and configure:

```env
BASE_URL=https://my.saleshandy.com

# Test Account Credentials (use different emails)
PERSONAL_EMAIL=your-personal@email.com
BUSINESS_EMAIL=your-business@email.com
CLIENT_EMAIL=your-client@email.com

PERSONAL_PASSWORD=YourPassword123
BUSINESS_PASSWORD=YourPassword123
CLIENT_PASSWORD=YourPassword123

PERSONAL_PHONE=""
BUSINESS_PHONE=""
CLIENT_PHONE=""

# Gmail MFA (for OTP automation)
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

### 2. Gmail App Password Setup

1. Enable 2FA on Gmail → Security → 2-Step Verification
2. Generate App Password for "Mail"
3. Use 16-character password in `.env`

---

## 🔐 Authentication & Sessions

### How Session Management Works

```bash
# First Run: Creates sessions
npm run test:signup  # → Generates .auth/personal.json, business.json, client.json

```

### Session Files Structure

```
.auth/
├── personal.json    # JWT tokens + cookies for personal account
├── business.json    # JWT tokens + cookies for business account
└── client.json      # JWT tokens + cookies for client account
```

### Usage in Tests

```javascript
// Automatic session loading
test("Dashboard @business", async ({ page }) => {
  await page.goto("/sequence"); // Already logged in!
});
```

---

## 📊 Test Coverage

### Account Types & Flows

| Account Type | Onboarding Steps                                   | Implementation Status |
| ------------ | -------------------------------------------------- | --------------------- |
| **Personal** | Occupation → Goal → Usage → Email Volume → Source  | ✅ Complete           |
| **Business** | Goal → Prior Tool → Usage → Source                 | ✅ Complete           |
| **Client**   | Agency Type → Client Count → Email Volume → Source | ✅ Complete           |

### Test Scenarios

- **✅ Positive Cases**: Valid signup/login flows for all account types
- **✅ Negative Cases**: Form validation, invalid data handling
- **✅ Edge Cases**: Boundary testing, special characters, existing users
- **✅ Session Management**: Authentication persistence across tests

---

## 🎯 Key Features

### Smart Authentication

- **Session Reuse**: No repeated logins across test runs
- **Auto-Fallback**: Existing users → auto-login, New users → signup
- **JWT Management**: Proper token validation & refresh

### Parameterized Testing

- **Single Fixture**: `runOnboarding(accountType)` handles all flows
- **Account-Specific**: Each type follows correct onboarding path
- **Zero Duplication**: One implementation for all scenarios

### Advanced Integrations

- **Gmail MFA**: Automated OTP extraction via IMAP
- **Error Handling**: Graceful duplicate user detection
- **HTML Reports**: Comprehensive test result analysis

---

## 🔧 Configuration

### Playwright Settings

```javascript
// playwright.config.js
export default defineConfig({
  timeout: 120000,         // 2 minutes (includes MFA)
  headless: false,         # Visual browser
  retries: 1,             // Handle network issues
  reporter: "html",       // Detailed reports
});
```

### Technology Stack

- **Framework**: Playwright 1.62.1
- **Language**: JavaScript ES6+ modules
- **Pattern**: Page Object Model
- **Authentication**: Session persistence with storageState
- **Email**: Gmail IMAP integration

---

## � Troubleshooting

### Common Issues

```bash
# Environment setup
npm install && npx playwright install chromium
cp .env.example .env  # Configure credentials

# Session issues
rm -rf .auth/ && npm run test:signup  # Recreate sessions

# Gmail MFA issues
node debug-gmail.js  # Test Gmail connection
```

### Debug Commands

```bash
npx playwright test --headed --debug     # Visual debugging
npx playwright test --trace on          # Generate traces
npm run report                          # View test results
```

---

## 📈 Assignment Success Metrics

**Core Requirements: 100% Implemented** ✅

| Requirement            | Implementation                   | Status |
| ---------------------- | -------------------------------- | ------ |
| Reusable Signup        | Single parameterized fixture     | ✅     |
| Account-Specific Flows | Personal/Business/Client classes | ✅     |
| UI Element Validation  | Heading & element verification   | ✅     |
| No Repeated Login      | Session persistence              | ✅     |
| Framework Design       | Page Object Model                | ✅     |
| Clean Code             | Maintainable architecture        | ✅     |

---

## 📞 Support

**Common Commands:**

```bash
npm test                 # Run all tests
npm run test:business   # Business account tests
npm run report          # View results
npx playwright test --debug  # Debug mode
```

**Key Files:**

- `.env` - Environment configuration
- `tests/session-test.spec.js` - Session validation
- `AUTOMATION_COVERAGE_SUMMARY.md` - Assignment analysis
