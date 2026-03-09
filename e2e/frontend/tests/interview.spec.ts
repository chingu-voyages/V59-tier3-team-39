import { test, expect } from "@playwright/test";

test("user completes a full Web Developer interview", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /interview/i }).first().click();
  await expect(page).toHaveURL("/interview");

  await page.getByRole("button", { name: /web developer/i }).click();

  await page.getByRole("button", { name: /continue/i }).click();

  for (let i = 0; i < 5; i++) {
    await expect(page.locator("text=Select the best answer below.")).toBeVisible();

    const firstOption = page.locator(".space-y-6 button").first();
    await firstOption.click();

    if (i < 4) {
      await page.getByRole("button", { name: /continue/i }).click();
    } else {
      await page.getByRole("button", { name: /finish/i }).click();
    }
  }

  await expect(
    page.getByRole("heading", { name: /interview complete/i })
  ).toBeVisible();
});
