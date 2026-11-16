const {test,expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test("web Client App login", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const txtEmail = page.locator("#userEmail");
    const txtPassword = page.locator("#userPassword");
    const btnLogin = page.locator("#login");
    const products = page.locator(".card-body");
    const productName = "ZARA COAT 3";
    const email = "kina3991@yopmail.com";

    await txtEmail.fill(email);
    await txtPassword.fill("Login12*");
    await btnLogin.click();
    
    //Waiting at least one card is loaded..
    await page.waitForLoadState('networkidle');
    await products.locator("b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    //console.log(await (cardTitle.nth(2)).textContent());
    
    //Count number of Products:
    const count = await products.count();
    console.log(count);

    //to Find ZARA COAT 3 product
    //To get one product from multiple, if search matches to product name then add to card that item
    for(let i=0; i < count; i++)
    {
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        //await products.nth(i).locator("text = Add To Cart").click();
        await products.nth(i).getByRole('button', { name: 'Add To Cart' }).click();
        break;
    }
    }
    //await page.locator("[routerlink*='cart']").click();
    await page.getByRole('button', { name: 'Cart 1' }).click();

    //Wait until at least first item is loaded from the list ..
    await page.locator("div li").first().waitFor();

//Pseudo class type locator
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); 
    expect(bool).toBeTruthy();

    await page.getByRole('button', { name: 'Checkout' }).click();
    // await page.locator("text=Checkout").click();

    //'type' is depricated and 'fill' method is used to enter whole bunch of characters
    //here we need to enter cheacter one by one sequentially...
    //so we will use pressSequentially method...
    //await page.locator(placeholder="Select Country").pressSequentially("ind");

await page.locator("[placeholder*='Country']")
    .pressSequentially("ind", { delay: 150 });

const dropdown = page.locator(".ta-item");
    await dropdown.first().waitFor();

await dropdown.first().waitFor();

const optionCount = await dropdown.count();

for (let i = 0; i < optionCount; i++) {
    const text = await dropdown.nth(i).textContent();

    if (text?.trim() === "India") {
        await dropdown.nth(i).click();
        break;
    }
}

//Below code is as per rahul shetty website..
    // const optionCount = await dropdown.locator("button").count();
    // for(let i=0; i<optionCount; i++)
    // {
    //        const text =  await dropdown.locator("button").nth(i).textContent();
    //         if(text?.trim() === "India")
    //         {
    //                 //Click-
    //             await dropdown.locator("button").nth(i).click();
    //             break;
    //         }
    //     }

    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await expect(page.locator(".user__name [type='text']").last()).toHaveValue(email);
    await page.locator("a.action__submit").click();

    await page.getByRole('heading', { name: 'Thankyou for the order.' }).isVisible();
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    const rowscount = await rows.count();
    //console.log("Total numbers of rows are", rowscount);

    for(let i=0; i<rowscount; i++)
    {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        console.log(rowOrderID);
        //| 6af0491592a4341c4c0ad63d |  is with delimeter 
        //so we use includes() to search orderId
        if(orderID.includes(rowOrderID))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
    }

    //await page.pause();


});