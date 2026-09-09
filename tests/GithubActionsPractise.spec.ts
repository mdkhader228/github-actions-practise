import { test, expect } from '@playwright/test';

test("Practise Test #1", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practise Test #1");
})

test("Practise Test #2", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practise Test #1");
})

test("Practise Test #3", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practise Test #1");
})

test.describe("Practise of describe", async () => {
    test("Practise Test #4", async ({ page }) => {
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practise Test #1");
    })

    test("Practise Test #5", async ({ page }) => {
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practise Test #1");
    })

    test("Practise Test #6", async ({ page }) => {
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practise Test #1");
    })

    test("Practise Test #7", async ({ page }) => {
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practise Test #1");
    })

})
