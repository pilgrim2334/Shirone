import { expect, test } from "@playwright/test";

const PASSWORD = "SZ-vault-7Q4m-N9x2";

test("私人空间正文仅在统一密码验证后显示", async ({ page }) => {
	const response = await page.goto("/private/", {
		waitUntil: "networkidle",
	});
	const html = await response?.text();
	expect(html).toContain("ciphertext");
	expect(html).not.toContain("这是私人空间的第一篇文章");

	await expect(page.locator(".password-gate")).toBeVisible();
	await expect(page.locator(".private-space")).toHaveCount(0);
	await page.locator('input[name="password"]').fill(PASSWORD);
	await page.locator('.password-gate button[type="submit"]').click();

	await expect(page.locator(".private-space")).toBeVisible();
	await expect(page.locator(".private-space__article")).toHaveCount(1);
	await expect(page.locator(".private-space__article")).toContainText(
		"这是私人空间的第一篇文章",
	);

	await page.reload({ waitUntil: "networkidle" });
	await expect(page.locator(".private-space")).toBeVisible();
});
