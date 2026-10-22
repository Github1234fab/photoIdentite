import { getRedirectTarget } from '$lib/data/villes.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const pathname = event.url.pathname;
	const parts = pathname.split('/').filter(Boolean);

	// Intercepter les requêtes à 2 segments (ex: /photo-identite-ants/brignais ou /photo-carte-identite/grezieu-la-varenne)
	if (parts.length === 2) {
		const [typePhoto, slugVille] = parts;
		const redirectTarget = getRedirectTarget(typePhoto, slugVille);
		
		if (redirectTarget && redirectTarget !== pathname) {
			return new Response(null, {
				status: 301,
				headers: {
					Location: redirectTarget,
					'Cache-Control': 'public, max-age=31536000, immutable'
				}
			});
		}
	}

	return resolve(event);
}
