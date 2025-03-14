const{test,expect}=require('@playwright/test');

test('First Playwright Test', async({page})=>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test.only('Second Playwright Test', async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.locator('#username').fill('rahulshettyacadem');
        await page.locator('#password').fill('learning');
        await page.locator('#signInBtn').click();
        console.log(await page.locator("[style*='block']").textContent());

    })