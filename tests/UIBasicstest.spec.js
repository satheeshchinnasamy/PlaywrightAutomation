const{test,expect}=require('@playwright/test');

test('First Playwright Test', async({page})=>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test('Second Playwright Test', async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('learning');
        await page.locator('#signInBtn').click();
        console.log(await page.locator("[style*='block']").textContent());

    })

test('Test to validate the Locators', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName=page.locator('#username');
    const password=page.locator('#password');
    const submit=page.locator('#signInBtn');
    const productsTitle=page.locator('.card-title');

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await submit.click();
    //await page.waitForLoadState('domcontentloaded');
   // console.log(await page.locator("//a[normalize-space()='iphone X']").textContent());
    //await page.waitForLoadState('networkidle');
    await page.locator('.card-title').first().waitFor();
   const titles=await productsTitle.allTextContents() ;
   console.log(titles.toString());
})

test.only('Static DropDowns', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName=page.locator('#username');
    const password=page.locator('#password');
    const submit=page.locator('#signInBtn');
    const radioButton=page.locator(".radiotextsty").last();
    const link=page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Mate')]");
    const okayBtn=page.locator('#okayBtn');
    const dropdown= page.locator("select.form-control");

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await radioButton.click();
    await radioButton.isChecked();
    await okayBtn.click();
    await expect(link).toHaveAttribute("class","blinkingText");
    //await submit.click();
    await dropdown.selectOption("consult");
    
})

test('Handling windows', async({browser})=>{

   const context= await browser.newContext();
   const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName=page.locator('#username');
    const password=page.locator('#password');
    const submitBtn=page.locator('#signInBtn');
    const doclink=page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Mate')]");

    const [newpage]= await Promise.all([context.waitForEvent('page'),
                                     doclink.click(),]);
    const text= await newpage.locator("//a[normalize-space()='mentor@rahulshettyacademy.com']");
    console.log(await text.textContent());
    await context.close();
})