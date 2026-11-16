const {test,expect, request} = require('@playwright/test');

//loginPayload is JS object, where only value will be in " "
const loginPayload = {
    userEmail: "kina3991@yopmail.com",
    userPassword: "Login12*"
};
let token;

test.beforeAll( async()=>{
const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: loginPayload
    })//200, 201
    expect((loginResponse).ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
});

test.beforeEach( ()=>{

});


test("web Client App login", async({page})=>{
    
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, token
    );

    await page.goto("https://rahulshettyacademy.com/client/");
    const productName = "ZARA COAT 3";
    const email = "kina3991@yopmail.com";
    const txtEmail = page.getByPlaceholder("email@example.com");
    const txtPassword = page.getByPlaceholder("enter your passsword");
    const btnLogin = page.getByRole('button',{name: "Login"});

    // await txtEmail.fill(email);
    // await txtPassword.fill("Login12*");
    // await btnLogin.click();
    
    // //Waiting at least one card is loaded..
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    //to Find ZARA COAT 3 product
    page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
    .getByRole('button',{name:'Add To Cart'}).click();

    //Click on Cart button
    //await page.locator('button').filter({ hasText: 'Cart' }).first()
    await page.getByRole('listitem').getByRole('button', { name: 'Cart 1' }).click();

    //Wait until at least first item is loaded from the list ..
    await page.locator("div li").first().waitFor();

    //To check that ZARA COAT 3 is displayed...
    //Pseudo class type locator
    await expect(page.getByText('ZARA COAT 3')).toBeVisible();

    //Click on checkout button
    await page.getByRole('button', { name: 'Checkout' }).click();

    //'type' is depricated and 'fill' method is used to enter whole bunch of characters
    //here we need to enter cheacter one by one sequentially...
    //so we will use pressSequentially method...
    //await page.locator(placeholder="Select Country").pressSequentially("ind");

    await page.getByPlaceholder('Select Country').pressSequentially("ind", {delay : 150});
    await page.getByRole('button', { name: 'India' }).nth(1).click();

    //Checking the email at 2 places
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await expect(page.locator(".user__name [type='text']").last()).toHaveValue(email);

    //Click on 'Place Order'
    await page.getByText('PLACE ORDER').click();

    //To verify 'Thankyou for the order.' message..

    await expect(page.getByText('Thankyou for the order.')).toBeVisible();

    const orderID = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent())
    .replace(/\|/g, "")
    .trim();
    
    //Click on "ORDERS" button
    await page.getByRole('button', { name: 'ORDERS' }).click();

    //Wait for table to load
    await page.locator("tbody").waitFor();

    //To find the row that has the OrderId of recent order placed 
    //const row = page.locator("tbody tr").filter({ hasText: orderID });

    //If your table has proper accessible roles and button names, you can also use:
    // Find the matching row
    const row = page.getByRole("row").filter({ hasText: orderID });

    // Click View button
    await row.getByRole('button', { name: 'View' }).click();

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderIdDetails).toContain(orderID);
    //await page.pause();


});