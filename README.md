# Getting Started

1. Make sure your system has NodeJS installed. For this project, the node version used is v14.15.4. Version 14 is recommended as it is the current LTS.
2. Install all the node packages. Run `npm install`. You should find a `node_modules` folder in your project directory aftwerwards.
3. To launch the test runner, run `npm run cypress:open`. The test runner is useful as it allows you to view the application and see commands as they execute.
4. Click on `logoSearch.spec.js` to run the test.
5. Alternatively, to run the test in headless mode, run `npm run cypress:run`

---
## Concepts

### Fixtures

- Use of fixtures to define data sets
- Use of viewports to test against different screensizes (responsive view). This example uses 1920x1080

### Selectors
- Use of `data-test*`  attributes if applicable. Other selectors are frequently subjected to change and may be volatile.

### Grouping Tests
- Avoid dependence on the previous' test's state. If only one test is to run, example via `it.only`, it should still execute because it does not have a dependency to the other tests' state.
- Adding multiple assertions if applicable to make tests performant
- Avoid writing small assertions per (it)

### Using cypress config
- Configuring baseUrl in cypress config

### Using custom commands
- Make use of custom commands to write reusable functions rather than coupling in page objects