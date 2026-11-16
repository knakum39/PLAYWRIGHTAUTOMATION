const { test, expect } = require("@playwright/test");
const { login } = require("../utils/login");
const { futureDateValue } = require("../utils/dateHelper");

// import { test, expect } from '@playwright/test';
// import { login } from '../utils/login.js';

//- Generate a unique event title using Test Event ${Date.now()} — store this in a variable, you will need it throughout the test
//const title  =
// 2. Capture available seat count
// 3. Book one seat
// 4. Verify seat count decreases by 1

test("Create event and complete booking", async ({ page }) => {
  // Reusable login function
  await login(page);
  // Verify successful login
  await expect(
    page.getByRole("link", { name: "Browse Events →" }),
  ).toBeVisible();

  // Remaining test steps
  // Step 2 — Create a new event
  //- Navigate to /admin/events
  await page.getByRole("link", { name: "Browse Events →" }).click();
  await page.getByRole("button", { name: "Add New Event" }).click();

  //Generate a unique event title using Test Event ${Date.now()} — store this in a variable, you will need it throughout the test
  //Generate unique event title
  const eventTitle = `Test Event ${Date.now()}`;

  // Fill Event Details
  //Fill Title field (locate by id #event-title-input)
  await page.locator("#event-title-input").fill(eventTitle);

  // Fill Description textarea (locate using #admin-event-form textarea)
  await page
    .locator("#admin-event-form textarea")
    .fill("This is an automated test event created using Playwright.");

  //Fill City field (locate by label City)
  await page.getByLabel("City").fill("Ahmedabad");

  //- Fill Venue field (locate by label Venue)
  await page.getByLabel("Venue").fill("Test Convention Center");

  //- Fill Event Date & Time field (locate by label Event Date & Time) — use your futureDateValue() helper
  await page.getByLabel("Event Date & Time").fill(futureDateValue());

  //- Fill Price ($) field (locate by label Price ($)) — use any number e.g. 100
  await page.getByLabel("Price ($)").fill("100");

  // Fill Total Seats field (locate by label Total Seats) — use 50
    await page.getByLabel("Total Seats").fill("50");
    //await page.pause();

  // Submit Event
  // Click the submit button (locate by id #add-event-btn)
    await page.locator("#add-event-btn").click();

  // Verify successful event creation
  //- Assert: toast message Event created! is visible
  await expect(page.getByText("Event created!", { exact: true })).toBeVisible({timeout: 10000});
  console.log("Event created successfully:", eventTitle);

  //Step 3 — Find the event card and capture seats
//Navigate to /events
 await page.locator("#nav-events").click();

 //- Get all event cards (locate by data-testid="event-card")
  const eventCard = await page.locator("[data-testid='event-card']");

  //- Assert the first card is visible (confirms page loaded)
  await eventCard.first().waitFor();

  //- From all cards, filter for the one that contains your event title text
   const matchEventCard = await eventCard.filter({hasText:eventTitle});
   //- Assert the matched card is visible (timeout 5 seconds)
   await expect(matchEventCard).toBeVisible({timeout: 5000});

   // Read seat count from matched event card
   //Locate element containing text seat. locator('text=/seats?/i')
const seatText = await matchEventCard.locator('text=/seats?/i').innerText();
console.log('Seat text:', seatText);

//- Read the seat count text from that card (locate element containing text seat, parse integer from its inner text) — store this as seatsBeforeBooking
// Extract integer from text
//MATCH → [0] → parseInt
// Find the digits
// match(/\d+/)
// Extract the numeric portion.
const seatsBeforeBooking = parseInt(seatText.match(/\d+/)[0]);
console.log('Seats before booking:', seatsBeforeBooking);

//Step 4 — Start booking
//On the matched event card, click the Book Now button (locate by data-testid="book-now-btn" inside the card)
// Step 4: Start booking
const bookNowButton = matchEventCard.getByTestId('book-now-btn');

await expect(bookNowButton).toBeVisible();
await expect(bookNowButton).toBeEnabled();

await bookNowButton.click();

//Step 5 — Fill booking form

// - Assert: element with id #ticket-count has text 1 (default quantity)
// - Fill Full Name (locate by label Full Name)
// - Fill Email (locate by id #customer-email)
// - Fill Phone (locate by placeholder +91 98765 43210)
// - Click the confirm button (locate by CSS class .confirm-booking-btn)

// Step 5: Fill booking form

// Assert default ticket quantity is 1
await expect(page.locator('#ticket-count')).toHaveText('1');

// Fill Full Name
await page.getByLabel('Full Name').fill('Test User');

// Fill Email
await page.locator('#customer-email').fill('testuser@example.com');

// Fill Phone
await page.getByPlaceholder('+91 98765 43210').fill('9876543210');

// Click Confirm Booking
await page.locator('.confirm-booking-btn').click();

// Step 6 — Verify booking confirmation
// - Locate the booking reference element (locate by CSS class .booking-ref, take .first())
// - Assert it is visible
// - Read its inner text, trim it — store as bookingRef

// Step 6: Verify booking confirmation

// Locate booking reference
const bookingReference = page.locator('.booking-ref').first();

// Assert booking reference is visible
await expect(bookingReference).toBeVisible();

// Read inner text and remove extra whitespace
const bookingRef = (await bookingReference.innerText()).trim();

console.log('Booking Reference:', bookingRef);

// Step 7 — Verify in My Bookings

// - Click the link View My Bookings
// - Assert: URL is BASE_URL/bookings
// - Get all booking cards (locate by id #booking-card)
// - Assert the first booking card is visible
// - Filter booking cards for the one that contains an element with class .booking-ref matching your bookingRef text
// - Assert that matched card is visible
// - Assert that matched card contains your eventTitle text

// Step 7: Verify in My Bookings

// 1. Click View My Bookings
await page.getByRole('link', { name: 'View My Bookings' }).click();

// 2. Assert URL
await expect(page).toHaveURL(
    'https://eventhub.rahulshettyacademy.com/bookings'
);

// 3. Get all booking cards
const bookingCards = page.locator('#booking-card');

// 4. Assert first booking card is visible
await expect(bookingCards.first()).toBeVisible();

// 5. Filter booking cards by booking reference
const matchedBookingCard = bookingCards.filter({
    has: page.locator('.booking-ref', {
        hasText: bookingRef
    })
});

// 6. Assert matched booking card is visible
await expect(matchedBookingCard).toBeVisible();

// 7. Assert matched card contains event title
await expect(matchedBookingCard).toContainText(eventTitle);

console.log('Booking successfully verified:', bookingRef);
console.log('Event successfully verified:', eventTitle);

// Step 8 — Verify seat reduction
// - Navigate back to /events
// - Assert the first event card is visible
// - Filter cards again using hasText: eventTitle
// - Assert the card is visible
// - Read the seat count text again (same as Step 3) — store as seatsAfterBooking
// - Assert: seatsAfterBooking === seatsBeforeBooking - 1

// Step 8: Verify seat reduction

// Navigate back to Events
await page.locator('#nav-events').click();

// Reload to fetch latest event data
await page.reload();

// Get all event cards
const updatedEventCards = page.locator('[data-testid="event-card"]');

// Assert first event card is visible
await expect(updatedEventCards.first()).toBeVisible();

// Find our event
const updatedEventCard = updatedEventCards.filter({
    hasText: eventTitle
});

// Assert matched event card is visible
await expect(updatedEventCard).toBeVisible();

// Read updated seat count
const updatedSeatText = await updatedEventCard
    .locator('text=/seats?/i')
    .innerText();

// Extract integer
const seatsAfterBooking = Number(
    updatedSeatText.match(/\d+/)[0]
);

console.log('Seats before booking:', seatsBeforeBooking);
console.log('Seats after booking:', seatsAfterBooking);

// Verify seat reduction
expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);

});
