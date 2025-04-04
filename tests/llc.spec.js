const{test, expect} =require("@playwright/test");

test('Special Locators', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill('Satheesh');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText(' The Form has been submitted successfully!.').isVisible();
    await page.getByRole('link', {name:'Shop'}).click();
    await page.locator('app-card').filter({hasText:'Samsung Note 8'}).getByRole('button',{name:'Add '}).click();
})