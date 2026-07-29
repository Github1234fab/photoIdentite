// src/lib/stores/seoStore.svelte.js

class SeoState {
	/** @type {import('../data/villes').VilleSEO | null} */
	city = $state(null);

	/** @type {import('../data/intentions').IntentionSEO | null} */
	intention = $state(null);
}

export const seoStore = new SeoState();
