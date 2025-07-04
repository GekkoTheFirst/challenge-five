import { Locator, Page } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly getStartedButtonEn: Locator;
	readonly getStartedButtonDe: Locator;
	readonly cookieBanner: Locator;
	readonly acceptCookiesEn: Locator;
	readonly acceptCookiesDe: Locator;
	readonly rejectCookiesEn: Locator;
	readonly rejectCookiesDe: Locator;

	constructor(page: Page) {
		this.page = page;
		this.getStartedButtonEn = page
			.getByRole("link", { name: "Get started" })
			.first();
		this.getStartedButtonDe = page
			.getByRole("link", { name: "Jetzt loslegen" })
			.first();
		this.acceptCookiesEn = page.getByRole("button", { name: "Accept All" });
		this.acceptCookiesDe = page.getByRole("button", {
			name: "Alles akzeptieren",
		});
		this.rejectCookiesEn = page.getByRole("button", { name: "Deny" });
		this.rejectCookiesDe = page.getByRole("button", { name: "Ablehnen" });
	}

	async goToDE() {
		await this.page.goto("/de", { waitUntil: "domcontentloaded" });
	}

	async clickGetStarted(local: string) {
		local === "en"
			? await this.getStartedButtonEn.click()
			: await this.getStartedButtonDe.click();
	}

	async waitForGetStartedPage(local: string) {
		const url =
			local === "en"
				? "https://www.yoummday.com/get-started/"
				: "https://www.yoummday.com/de/kontakt/";
		await this.page.waitForURL(url);
	}
}
