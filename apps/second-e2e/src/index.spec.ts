import { expect, test } from "@playwright/test";

test("should show correct index page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("App: second")).toBeVisible();
});
