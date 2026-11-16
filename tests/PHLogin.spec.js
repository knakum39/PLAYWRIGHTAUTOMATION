
const { test, expect, request } = require('@playwright/test');
require('dotenv').config();

let authState;

const appUrl = 'https://app2.pulsehealth-staging.tech';

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    try {

        // STEP 1: API Login
        const loginResponse = await apiContext.post(
            `${appUrl}/api/login_check`,
            {
                data: {
                    email: process.env.USER_EMAIL,
                    password: process.env.USER_PASSWORD
                }
            }
        );

        expect(loginResponse.status()).toBe(200);

        const responseJson = await loginResponse.json();

        console.log('API Login Successful');

        // STEP 2: Capture Authentication Cookies
        authState = await apiContext.storageState();

        const cookieNames = authState.cookies.map(
            cookie => cookie.name
        );

        expect(cookieNames).toContain('BEARER');
        expect(cookieNames).toContain('mercureAuthorization');
        expect(cookieNames).toContain('refresh_token');

        // STEP 3: Add Local Storage
        authState.origins = [
            {
                origin: appUrl,
                localStorage: [
                    {
                        name: 'authenticated',
                        value: 'true'
                    },
                    {
                        name: 'jwtExpiry',
                        value: new Date(
                            responseJson.expire_date
                        ).toISOString()
                    },
                    {
                        name: 'lastActivity',
                        value: new Date().toISOString()
                    }
                ]
            }
        ];

        console.log('Cookies and Local Storage prepared!');

    } finally {

        await apiContext.dispose();

    }

});


test('Access PulseHealth without UI login', async ({ browser }) => {

    const context = await browser.newContext({
        storageState: authState
    });

    try {

        // STEP 4: Verify Browser Cookies
        const browserCookies = await context.cookies(appUrl);

        console.log(
            'Browser Cookies:',
            browserCookies.map(cookie => cookie.name)
        );

        // STEP 5: Verify Local Storage
        const page = await context.newPage();

        await page.goto(`${appUrl}/login`);

        const localStorageData = await page.evaluate(() => ({
            authenticated: localStorage.getItem('authenticated'),
            jwtExpiry: localStorage.getItem('jwtExpiry'),
            lastActivity: localStorage.getItem('lastActivity')
        }));

        console.log('Local Storage:', localStorageData);

        expect(localStorageData.authenticated).toBe('true');

        // STEP 6: Verify authenticated user API
        const meResponse = await context.request.get(
            `${appUrl}/api/user/me`
        );

        console.log('ME API Status:', meResponse.status());

        expect(meResponse.status()).toBe(200);

        const userData = await meResponse.json();

        console.log('Authenticated User:', userData.email);

        // STEP 7: Navigate to Accounts
        await page.goto(`${appUrl}/accounts`);

        console.log('Final URL:', page.url());

        // STEP 8: Verify successful authentication
        await expect(page).toHaveURL(
            url => url.pathname === '/accounts'
        );

        await expect(
            page.getByText('Swati Patel')
        ).toBeVisible();

        console.log('Successfully bypassed UI login!');

    } finally {

        await context.close();

    }

});
