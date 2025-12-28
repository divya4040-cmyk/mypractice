import test from "@playwright/test";
  test("Interact with dropdowns ", async ({ page }) => {
    
    await page.goto("https://www.telerik.com/contact");

    // Step 2: First dropdown -> select by index
   
    let firstDropdown = page.locator('select#Dropdown-1');
    await firstDropdown.selectOption({ index: 2 }); 
    const selectedValue = await firstDropdown.inputValue();
    console.log (selectedValue);

    // Step 3: Second dropdown -> select by value
    let secondDropdown = page.locator('select#Dropdown-2');
    await secondDropdown.selectOption({ value: 'KendoReact' }); 
   
   const selectedValue2 = await secondDropdown.inputValue();

    console.log (selectedValue2);
    // Step 4: Third dropdown -> select by label
    
    let thirdDropdown = page.locator('select#Country-1');
    await thirdDropdown.selectOption({ label: 'India' });
    const selectedValue3 = await thirdDropdown.inputValue();
    console.log (selectedValue3);
    
  });
