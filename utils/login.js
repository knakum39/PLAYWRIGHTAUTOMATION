// export async function login(page) {

//     await page.goto("https://eventhub.rahulshettyacademy.com");

//     await page.locator("input[placeholder='you@email.com']").fill("kina3991@yopmail.com");
//     await page.getByLabel("Password").fill("Login12*");
//     await page.locator("#login-btn").click();
//     //await page.getByRole('button', { name: 'Sign In' }).click();
// }


async function login(page) {

    await page.goto("https://eventhub.rahulshettyacademy.com");

    await page.locator("#email").fill("kina3991@yopmail.com");
    await page.locator("#password").fill("Login12*");
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Verify successful login
    await page.waitForLoadState("domcontentloaded");
}

module.exports = { login };