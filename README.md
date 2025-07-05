## Yoummday E2E Test Automation Framework

This repository contains a end-to-end (E2E) test automation suite for Yoummday platform. The framework is built with **Playwright** and **TypeScript**, leveraging the **Page Object Model (POM)** to ensure the tests are stable, maintainable, and scalable.

### Overview
The primary goal of this test suite is to show knowledge by validating critical user journeys on the Yoummday website. It focuses on ensuring that the path from the homepage to the agent registration page functions correctly.

### Setup
This guide will help you get the test automation project up and running on your local machine.

### Prerequisites:
* **Node.js**: Ensure you have Node.js (LTS version recommended) installed. You can download it from [nodejs.org](https://nodejs.org/).
* **Git**: You'll need Git installed to clone the repository.

### Setup Steps:
1.  **Clone the repository**:
    Open your terminal or command prompt and clone the project from GitHub:
2.  **Navigate to the project directory**:
    Change into the newly cloned project directory:
3.  **Install dependencies**:
    Install all the necessary Node.js packages, including Playwright and its related dependencies:
    ```
    npm install
    ```
4.  **Install Playwright browsers**:
    Playwright needs browser binaries to run tests. Install them using the Playwright CLI:
    ```
    npx playwright install
    ```
---

## Running tests:
Once the setup is complete, you can run the tests using either of the following commands:
1.  Using `npx playwright test` (Direct Playwright CLI):
    This is the direct way to invoke the Playwright test runner.
    ```
    npx playwright test
    ```
2.  Using `npm run test` (via `package.json` script):
    The `package.json` file in the repository likely has a `test` script defined, which points to `npx playwright test`.
    ```
    npm run test
    ```

### Running tests in headed mode (with Browser UI):
If you want to see the browser UI during test execution (useful for debugging), you can use the `--headed` flag:
* Using Playwright CLI directly:
    ```
    npx playwright test --headed
    ```

This will execute the Playwright tests defined in the repository, providing you with a test report upon completion.