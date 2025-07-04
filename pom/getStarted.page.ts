import { Locator, Page } from "@playwright/test";

export class GetStartedPage {
	readonly page: Page;
	readonly joinAsAgentButtonEn: Locator;
	readonly joinAsAgentButtonDe: Locator;

	constructor(page: Page) {
		this.page = page;
		this.joinAsAgentButtonEn = page.getByRole("link", {
			name: "Join as agent",
		});
		this.joinAsAgentButtonDe = page.getByRole("link", {
			name: "Zugang für Agenten",
		});
	}

	async clickJoinAsAgent(local: string) {
		// Timeout and clicks are added to minimise flakeness
		local === "en"
			? await this.joinAsAgentButtonEn.click({ timeout: 3_000 })
			: await this.joinAsAgentButtonDe.click({ timeout: 3_000 });
	}
}
