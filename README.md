# Playwright POC

This is a proof-of-concept project using [Playwright](https://playwright.dev/) for end-to-end browser testing. It supports headless and headed modes, custom test scripts, and a clean developer workflow.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js)

---

## Clone the Repository

```bash
git clone https://github.com/your-username/playwright-poc.git
cd playwright-poc

## Installation
npm install
npx playwright install

## Running Test
npx playwright test

## Run All Tests (Headed mode - visible browser)
npx playwright test --headed

## Run a Specific Test File
npx playwright test tests/example.spec.ts