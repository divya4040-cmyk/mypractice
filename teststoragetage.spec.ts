import { test } from '@playwright/test';

// Reuse the saved storage state
test.use({ storageState: 'utils/leaftaps-auth.json' });

test('Leaftaps - Contacts and Accounts Flow', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.click('text=CRM/SFA');

  // Test 1: Create Contact
  await page.click('text=Contacts');
  await page.click('text=Create Contact');
  await page.locator('#firstNameField').fill('Divya');
  await page.locator('#lastNameField').fill('Bharathi');

  // Test 2: Create Account
  await page.click('text=Accounts');
  await page.click('text=Create Account');
  await page.locator('#accountName').fill('TestLeaf tech');

  
});