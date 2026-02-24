import { test, expect } from "@playwright/test";

test("home page displays main heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /first attempt/, level: 1 }),
  ).toBeVisible();
});

test("home page displays interviewing is a skill heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /interviewing is a skill/i }),
  ).toBeVisible();
});

test("home page displays web developers heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /web developers/i }),
  ).toBeVisible();
});

test("home page displays meet our team heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /meet our team/i }),
  ).toBeVisible();
});

test("home page displays like what you see heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /like what you see/i }),
  ).toBeVisible();
});

test("home page displays build with us heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /build with us/i }),
  ).toBeVisible();
});
