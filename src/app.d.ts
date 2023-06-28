// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface LinkData {
		section: string;
		platform: string;
		href?: string | URL;
		address?: string;
		icon?: string;
		username?: string;
		order?: number;
		title?: string | object;
		description?: string | object;
		dark?: boolean;
	}

	interface LinkSectionData {

	}
}

export {};
