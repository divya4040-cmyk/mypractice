import {test} from '@playwright/test'

test('window  handle', async ({page,context}) => {
    await page.goto('https://www.leafground.com/window.xhtml')
    const promise = context.waitForEvent('page')
    await page.click('//span[text()="Open"]')
    const childpage=await promise
    await page.waitForTimeout(1000)
    await childpage.locator('[placeholder="Write your message..."]').fill('Hello Playwright')
    await page.bringToFront()//childpage.close()
    await page.click("//span[text()='Open Multiple']")
});