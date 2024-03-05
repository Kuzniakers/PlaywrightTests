# Test Automation training from jaktestowac.pl

## Links
- course https://jaktestowac.pl/course/playwright-wprowadzenie/
- test site https://demo-bank.vercel.app/  

## Commands
- check `NodeJS` version  
`node -v`
- new project with Playwright  
`npm init playwright@latest`
- record tests for given site  
`npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
`npx playwright test`
- run tests with browser GUI  
`npx playwright test --headed`
- view report  
`npx playwright show-report`
- cancelling Node process  
hit twice <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Playwright Config modifications
- config file `playwright.config.ts`
- disable browsers, i.e. Firefox  
    ```javascript
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```

## Visual Studio Code
- Preview: for README.md
- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document

## Playwright snippets
- test:
    ```javascript
    test('test description', async ({ page }) => {
    
    });
    ```
- describe:
    ```javascript
     test.describe('Group description', () => {

     });
    ```
- running one test: `test.only`
