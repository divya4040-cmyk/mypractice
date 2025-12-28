import { test } from '@playwright/test';

test(' Leaftaps Storage State', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.locator('#username').fill('DemoSalesManager');
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.click('text=CRM/SFA');

  // Save session to JSON
  await page.context().storageState({ path: 'utils/leaftaps-auth.json' });
});