import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/home.page";
import { GetStartedPage } from "../pom/getStarted.page";

test.describe("DE: Yoummday Website Navigation", () => {
	test.use({
		locale: "de-DE",
		timezoneId: "Europe/Berlin",
	});

	test("E2E Join agent from Homepage", async ({ page, context }) => {
		const homePage = new HomePage(page);
		const getStartedPage = new GetStartedPage(page);
		// deny cookie banner
		await page.addLocatorHandler(
			page.getByRole("button", { name: "Ablehnen" }),
			async () => {
				await page.getByRole("button", { name: "Ablehnen" }).click();
				await expect(
					page.getByRole("button", { name: "Ablehnen" }),
				).not.toBeVisible();
			},
		);
		// yoummday DE homepage
		await homePage.goToDE();
		await homePage.clickGetStarted("de");
		await homePage.waitForGetStartedPage("de");
		// new window
		const pagePromise = context.waitForEvent("page");
		await getStartedPage.clickJoinAsAgent("de");
		// join subdomain
		const joinPage = await pagePromise;
		await joinPage.waitForLoadState("domcontentloaded");
		await expect(joinPage).toHaveURL(/.*join.yoummday.com\/de/);
	});
});
