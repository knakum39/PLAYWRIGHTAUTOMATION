const {test, expect} = require('@playwright/test');

// test('First Playwright test', async function()
// {
// //Playwright code of UI / API automation
// // JS/TS is asynnchronous by nature
// //so before writing any code 'await' keyword is must
// // when function is async then only await will work
// //step 1 - open browser
// //step 2 - enter u/p
// //step 3 - click 
// });

// //Arrow or anonymous function to make the code lighter
// test('First Playwright test', async ()=>
// {
// //Playwright code of UI / API automation
// // JS/TS is asynnchronous by nature
// //so before writing any code 'await' keyword is must
// // when function is async then only await will work
// //step 1 - open browser
// //step 2 - enter u/p
// //step 3 - click 
// });

//Fixtures means global variables which are availble across the project
//Hardly 4 inbuild fixtures are there in palywright: page, browser
test('Browser Context Playwright test', async ({browser})=>
{
    //chrome - plugins, cookies, cache, local storage
    //newContext => open new fresh instance that don't have any plugins, cookies, cache etc..
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('[id="password"]');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");

    //css
    await userName.fill('iurahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    

    //type-fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    //strict mode viloation error when result has multiple element found
    //console.log(await (cardTitles).first().textContent());
    console.log(await(cardTitles).nth(0).textContent());
    await expect((cardTitles).first()).toContainText("iphone X");
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    //await expect(cardTitles.first()).toHaveText("iphone X");

});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('[id="password"]');
    const documentLink = page.locator("[href*=documents-request]");
    //Logic to handle drop-down
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.getByLabel('User', { exact: true }).click();
    await page.locator("#okayBtn").click();
    console.log(await page.getByLabel('User', { exact: true }).isChecked());
    await expect(page.getByLabel('User', { exact: true })).toBeChecked();
     await page.locator("#terms").click();
     await expect(page.locator("#terms")).toBeChecked();
     await page.locator("#terms").uncheck();
     //Here action is performed inside bracket, so await is written inside
     expect (await page.locator("#terms").isChecked()).toBeFalsy();

     await expect(documentLink).toHaveAttribute("class","blinkingText");
    //page.pause();
    //const signIn = page.locator('#signInBtn');
});

test.only('@Child window handle', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*=documents-request]");

    //Here it returns newPage
    const[newPage] = await Promise.all(
    [
    context.waitForEvent('page'),//listen for any new page (Promise) pending, fulfilled, rejected
    documentLink.click(),
    ])
    
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = await arrayText[1].split(" ")[0];
    console.log(domain);
    await page.locator('#username').fill(domain);
    await page.pause();
    console.log(await page.locator('#username').inputValue());

});