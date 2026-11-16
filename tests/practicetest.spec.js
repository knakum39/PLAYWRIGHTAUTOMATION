const {test,expect} = require('@playwright/test');

test("Preactice test", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    const txtFirstname = page.locator("#firstName");
    const txtLastname = page.locator("#lastName");
    const txtUseremail = page.locator("#userEmail");
    const txtUsermobile = page.locator("#userMobile");
    const txtUserpassword = page.locator("#userPassword");
    const txtConfpassword = page.locator("#confirmPassword");
    const checkboxConfirm = page.locator("input[type='checkbox']");
    const btnRegister = page.locator("#login");
    const txtAccountcreation = page.locator('h1:has-text("Account Created Successfully")');

    await txtFirstname.fill("Kina");
    await txtLastname.fill("Malde");
    await txtUseremail.fill("kina3991@yopmail.com");
    await txtUsermobile.fill("4803314641");
    await txtUserpassword.fill("Login12*");
    await txtConfpassword.fill("Login12*");
    await checkboxConfirm.check();

    await Promise.all([
        page.waitForURL('**/auth/register'),
        btnRegister.click()
    ]);

await expect(
    page.getByText('Account Created Successfully')
).toBeVisible();


    

});