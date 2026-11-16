# 🎭 Playwright JS/TS Automation Testing – From Scratch to Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-2EAD33?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Learning-blue?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green?logo=node.js&logoColor=white)
![Testing](https://img.shields.io/badge/Testing-UI%20%7C%20API%20%7C%20E2E-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Jenkins-red?logo=jenkins&logoColor=white)

## 📖 About This Repository

This repository documents my learning, hands-on practice, and implementation of modern automation testing using **Playwright with JavaScript and TypeScript**.

The learning path is based on the Udemy course:

**Playwright JS/TS Automation Testing from Scratch & Framework**

Instructor: Rahul Shetty (Rahul Shetty Academy)

The objective is to understand Playwright from the fundamentals, write automation scripts from scratch, develop scalable automation frameworks, perform UI and API testing, and implement automation in CI/CD pipelines.

This repository covers practical examples, reusable components, framework architecture, real-world testing scenarios, and advanced automation concepts.

---

## 🎯 Learning Objectives

- Understand Playwright architecture and its capabilities.
- Learn JavaScript and TypeScript fundamentals for automation.
- Create Playwright automation scripts from scratch.
- Automate real-world web applications.
- Understand locators, assertions, browser interactions, and synchronization.
- Implement Page Object Model (POM).
- Develop reusable automation frameworks.
- Perform API testing and API automation using Playwright.
- Integrate API testing with UI automation.
- Implement data-driven testing.
- Develop BDD frameworks using Cucumber.
- Develop automation frameworks using Mocha.
- Perform network interception and request/response mocking.
- Implement authentication using API requests and session cookies.
- Generate HTML and other test reports.
- Execute tests across multiple browsers and devices.
- Integrate automation tests with Jenkins CI/CD.
- Execute tests using Docker containers.
- Explore AI-assisted automation using Playwright AI Agents, MCP, and GitHub Copilot.

---

# 📚 Topics Covered

## 1. Introduction to Playwright

- Introduction to Playwright.
- Features and advantages of Playwright.
- Playwright vs Selenium vs Cypress.
- Understanding Playwright architecture.
- Setting up the Playwright environment.
- Installing Node.js and Visual Studio Code.
- Installing Playwright.
- Understanding the Playwright project structure.
- Running the first Playwright test.
- Understanding Playwright configuration.
- Running tests from the command line.

## 2. JavaScript Fundamentals

Understanding JavaScript concepts required for automation testing.

- Variables: `var`, `let`, and `const`.
- Data types and operators.
- Conditional statements.
- Loops: `for`, `while`, and `do-while`.
- Functions and arrow functions.
- Arrays and objects.
- Array methods: `map()`, `filter()`, and `reduce()`.
- String manipulation.
- ES6 features.
- Destructuring.
- Spread and rest operators.
- Import and export.
- Promises.
- Asynchronous JavaScript.
- `async` and `await`.
- Exception handling.
- JavaScript coding exercises and assignments.

## 3. TypeScript Fundamentals

- Introduction to TypeScript.
- JavaScript vs TypeScript.
- Type annotations.
- Primitive and non-primitive data types.
- Functions and return types.
- Arrays and objects.
- Interfaces and type aliases.
- Classes and constructors.
- Access modifiers.
- Inheritance.
- Modules and imports/exports.
- Understanding TypeScript configuration.

## 4. Playwright Test Fundamentals

- Understanding `@playwright/test`.
- Test structure and syntax.
- `test()` and `expect()`.
- Hooks:
  - `beforeAll()`
  - `beforeEach()`
  - `afterEach()`
  - `afterAll()`
- Test grouping using `test.describe()`.
- Assertions and web-first assertions.
- Soft assertions.
- Test annotations.
- Test skipping and focusing.
- Test tags.
- Test execution from the terminal.
- Running individual tests and test files.
- Headless and headed execution.

## 5. Locators and Web Element Handling

- `getByRole()`
- `getByText()`
- `getByLabel()`
- `getByPlaceholder()`
- `getByAltText()`
- `getByTitle()`
- `getByTestId()`
- CSS selectors.
- XPath locators.
- Chaining locators.
- Filtering locators.
- Handling multiple matching elements.
- Handling dynamic web elements.
- Dropdown handling.
- Checkboxes and radio buttons.
- Input fields and buttons.
- Tables and web elements.
- Frames and iframes.
- Multiple tabs and browser windows.
- Popups and dialogs.
- Mouse and keyboard actions.
- File upload and download.

## 6. Browser Automation and Advanced Playwright Features

- Browser, BrowserContext, and Page.
- Launching browsers.
- Creating browser contexts.
- Navigating between pages.
- Handling multiple pages.
- Browser context isolation.
- Handling authentication.
- Cookies and local storage.
- Session management.
- Browser storage state.
- Auto-waiting mechanisms.
- Explicit waits when required.
- Handling asynchronous operations.
- Network events.
- Request and response handling.
- Screenshots and videos.
- Browser configuration.
- Cross-browser testing.
- Mobile device emulation.

## 7. End-to-End UI Automation

Practical automation scenarios using real-world web applications, including e-commerce workflows.

- Login and logout.
- User registration.
- Product search.
- Product selection.
- Add to cart.
- Shopping cart validation.
- Checkout workflows.
- Order placement.
- Order history validation.
- Dynamic web elements.
- End-to-end business workflows.
- Positive and negative test scenarios.
- Data validation.
- Regression test automation.

## 8. Page Object Model (POM)

Implementing maintainable and reusable automation architecture.

- Introduction to Page Object Model.
- Creating page classes.
- Separating test scripts from page locators.
- Creating reusable page methods.
- Constructor and page initialization.
- Managing page objects.
- Reusing methods across test cases.
- Handling test data.
- Improving framework maintainability.
- Implementing POM best practices.

## 9. Playwright Fixtures and Data-Driven Testing

- Understanding Playwright fixtures.
- Built-in and custom fixtures.
- Test isolation.
- Fixture dependencies.
- Sharing reusable test setup.
- Parameterized testing.
- Data-driven testing.
- External test data management.
- JSON test data.
- Environment-based configuration.
- Reusable test utilities.
- Managing multiple test scenarios.

## 10. API Testing and API Automation

Using Playwright's API testing capabilities to validate backend services.

- Introduction to API testing.
- HTTP methods:
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
- API request context.
- API endpoints.
- Request headers.
- Query parameters.
- Request payloads.
- Response status codes.
- Response body validation.
- JSON response validation.
- API assertions.
- Authentication and authorization.
- API testing using Playwright.
- Creating test data through APIs.
- Updating application data.
- Deleting test data through APIs.
- Validating backend responses.

## 11. API and UI Integration Testing

Combining API and UI automation for efficient end-to-end testing.

- Creating test data using APIs.
- Using API calls before UI test execution.
- Validating created data through the UI.
- Updating records using APIs.
- Deleting test data after execution.
- Performing complete business workflows.
- Reducing dependency on repetitive UI operations.
- Improving execution speed and reliability.

## 12. Authentication and Session Management

- Understanding application authentication.
- API-based login.
- Capturing authentication tokens.
- Extracting session cookies.
- Handling authorization headers.
- Reusing authenticated sessions.
- Generating storage state.
- Bypassing repetitive UI login where appropriate.
- Using authentication state across test cases.
- Improving execution efficiency.

## 13. Network Interception and Mocking

- Understanding network requests and responses.
- Monitoring API calls.
- Intercepting network requests.
- Intercepting API responses.
- Request routing.
- Modifying request data.
- Mocking API responses.
- Handling failed network requests.
- Simulating backend errors.
- Validating application behaviour under different network conditions.

## 14. Cucumber BDD Framework

Developing a Behaviour-Driven Development framework using Playwright and Cucumber.

- Introduction to BDD.
- Introduction to Cucumber.
- Gherkin syntax.
- Feature files.
- Scenario and Scenario Outline.
- Given, When, and Then.
- Step definitions.
- Hooks.
- Background.
- Data tables.
- Parameterized scenarios.
- Page Object Model integration.
- Reusable step definitions.
- Test execution and reporting.
- Building a Cucumber framework from scratch.

## 15. Mocha Framework with Playwright

Developing an alternative automation framework using Mocha.

- Introduction to Mocha.
- Mocha test structure.
- `describe()` and `it()`.
- Hooks and lifecycle management.
- Assertions.
- Async test execution.
- Page Object Model integration.
- Reusable utilities.
- External test data.
- Framework configuration.
- Test execution.
- HTML reporting.

## 16. Test Execution and Parallel Testing

- Running individual test cases.
- Running complete test suites.
- Parallel test execution.
- Sequential execution.
- Worker configuration.
- Test retries.
- Timeouts.
- Cross-browser execution.
- Chromium, Firefox, and WebKit.
- Test tagging.
- Smoke and regression execution.
- Test filtering.
- Test execution in different environments.

## 17. Debugging and Reporting

- Playwright Inspector.
- Playwright Codegen.
- Playwright Trace Viewer.
- Debugging failed test cases.
- Screenshots on failure.
- Video recordings.
- Execution traces.
- HTML reports.
- Allure reporting.
- Test execution logs.
- Analyzing flaky tests.
- Troubleshooting automation failures.

## 18. Visual Testing and Mobile Emulation

- Introduction to visual testing.
- Screenshot comparison.
- Visual regression testing.
- Screenshot assertions.
- Browser viewport configuration.
- Mobile device emulation.
- Device-specific browser configurations.
- Testing responsive web applications.

## 19. CI/CD Integration with Jenkins

Integrating Playwright automation with Continuous Integration and Continuous Delivery pipelines.

- Introduction to CI/CD.
- Introduction to Jenkins.
- Jenkins installation and configuration.
- Creating Jenkins jobs.
- Configuring GitHub repository integration.
- Executing Playwright tests through Jenkins.
- Running tests from Jenkins pipelines.
- Managing test execution commands.
- Publishing automation reports.
- Managing test execution results.
- Automating regression execution.
- Integrating automation into CI/CD workflows.

## 20. Docker Integration

- Introduction to Docker.
- Understanding containers.
- Running Playwright inside Docker.
- Docker images and containers.
- Environment configuration.
- Executing automation tests in Docker containers.
- CI/CD integration using Docker.
- Understanding consistent test execution environments.

## 21. AI-Assisted Automation Testing

Exploring modern AI-assisted testing capabilities.

- Introduction to Playwright AI Agents.
- Understanding Model Context Protocol (MCP).
- Playwright MCP servers.
- Connecting AI agents to browser automation.
- Exploring applications using AI agents.
- AI-assisted test planning.
- AI-assisted test generation.
- AI-assisted test execution and debugging.
- GitHub Copilot integration with VS Code.
- Exploring Playwright CLI and AI-powered automation workflows.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | Web and API automation |
| JavaScript | Primary automation scripting language |
| TypeScript | Typed automation development |
| Node.js | JavaScript runtime |
| VS Code | Development environment |
| Cucumber | BDD framework |
| Mocha | Test framework |
| Git | Version control |
| GitHub | Source code management |
| Jenkins | CI/CD integration |
| Docker | Containerized test execution |
| HTML Reporter | Test execution reporting |
| Allure | Test reporting |
| Playwright Inspector | Debugging |
| Trace Viewer | Execution analysis |
| Playwright MCP | AI-assisted browser interaction |
| GitHub Copilot | AI-assisted development |

---

# 📁 Suggested Project Structure

```text
Playwright-Automation/
│
├── tests/
│   ├── login.spec.ts
│   ├── registration.spec.ts
│   ├── product.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   └── CartPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── test-data/
│   ├── users.json
│   └── products.json
│
├── api/
│   ├── apiHelpers.ts
│   └── apiTests.spec.ts
│
├── utils/
│   ├── helpers.ts
│   └── testDataGenerator.ts
│
├── .auth/
│   └── user.json
│
├── features/
│   └── login.feature
│
├── step-definitions/
│   └── loginSteps.ts
│
├── reports/
│
├── screenshots/
│
├── test-results/
│
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── Jenkinsfile
└── README.md
```

*Note: This is a suggested reference structure for organizing framework components. The actual folder structure can differ depending on the framework and implementation.*

---

# ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Git
- GitHub account
- Basic knowledge of web applications and testing.

### Step 1: Initialize the Project

```bash
mkdir Playwright-Automation
cd Playwright-Automation
npm init -y
```

### Step 2: Install Playwright

```bash
npm init playwright@latest
```

### Step 3: Install Browser Dependencies

```bash
npx playwright install
```

### Step 4: Execute Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

### Step 5: Generate HTML Report

```bash
npx playwright show-report
```

### Step 6: Open Playwright Codegen

```bash
npx playwright codegen
```

---

# 🧪 Sample Playwright Test

```typescript
import { test, expect } from '@playwright/test';

test('Verify application title', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example Domain/);

    await expect(page.locator('h1')).toBeVisible();

});
```

# 🔌 Sample API Test

```typescript
import { test, expect } from '@playwright/test';

test('Verify GET API response', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);

});
```

---

# 🚀 Key Automation Best Practices

- Follow Page Object Model principles.
- Create reusable methods and utilities.
- Use meaningful locator strategies.
- Prefer role-based and user-facing locators.
- Avoid unnecessary hard waits.
- Use Playwright's auto-waiting capabilities.
- Maintain independent test cases.
- Use proper test data management.
- Keep credentials in environment variables.
- Never commit passwords, tokens, or authentication state files.
- Use assertions to validate actual application behaviour.
- Capture screenshots and traces for failures.
- Execute tests across multiple browsers.
- Use parallel execution carefully.
- Integrate automated tests with CI/CD.
- Maintain clean and readable automation code.
- Regularly review and maintain automation scripts.

---

# 📈 Learning Progress

This section tracks my practical learning and implementation progress.

- [ ] Playwright installation and configuration
- [ ] JavaScript fundamentals
- [ ] TypeScript fundamentals
- [ ] Basic Playwright scripts
- [ ] Locators and assertions
- [ ] Browser and page handling
- [ ] Dynamic web element handling
- [ ] Page Object Model
- [ ] Fixtures and hooks
- [ ] Data-driven testing
- [ ] API testing
- [ ] API and UI integration
- [ ] Authentication and storage state
- [ ] Network interception and mocking
- [ ] Cucumber BDD framework
- [ ] Mocha framework
- [ ] Parallel execution and retries
- [ ] Debugging and reporting
- [ ] Visual testing
- [ ] Mobile device emulation
- [ ] Jenkins CI/CD integration
- [ ] Docker integration
- [ ] Playwright AI Agents and MCP
- [ ] GitHub Copilot integration

---

# 🎓 Learning Resource

**Course:** Playwright JS/TS Automation Testing from Scratch & Framework

**Instructor:** Rahul Shetty – Rahul Shetty Academy

**Platform:** Udemy

**Course Link:** https://www.udemy.com/course/playwright-tutorials-automation-testing/

---

# 👩‍💻 About Me

I am a QA professional with approximately 12 years of experience in Software Quality Assurance, with a strong background in manual testing and growing expertise in automation testing.

My technical interests include:

- Manual and Functional Testing
- Regression and Integration Testing
- API Testing using Postman
- API Automation using RestAssured
- Web Automation using Selenium WebDriver
- Playwright Automation using JavaScript and TypeScript
- Automation Framework Development
- CI/CD and Continuous Testing
- AI-assisted Software Testing

My goal is to continuously improve my automation engineering skills and develop scalable, reliable, and maintainable test automation frameworks.

---

⭐ **Learning | Practicing | Automating | Improving**

