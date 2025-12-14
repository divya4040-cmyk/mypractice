import test, {chromium,firefox,webkit} from "@playwright/test";


test('Salesforce login', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');

  await page.fill('input#username', 'dilipkumar.rajendran@testleaf.com');

  await page.fill('input#password', 'TestLeaf@2025');

  // Click on login button
  await page.click('input#Login');

  await page.waitForTimeout(12000);

  const title = await page.title();
  console.log('Page title:', title);

  await page.click('button[title="App Launcher"]'); 
  
});