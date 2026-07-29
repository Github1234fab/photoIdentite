import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

export async function GET() {
	const domain = 'https://photo-identite-studio-thurins.fr'; // Placeholder domain to customize later
	
	// Pages de base
	const staticPages = [
		''
	];

	// Intentions & Villes
	const intentions = Object.keys(intentionsSEO);
	const cities = Object.keys(villesSEO);

	const urls = [];

	// 1. Pages statiques
	for (const page of staticPages) {
		urls.push(`${domain}${page}`);
	}

	// 2. Pages d'intention x villes
	for (const intention of intentions) {
		for (const city of cities) {
			urls.push(`${domain}/${intention}/${city}`);
		}
	}

	// Générer l'XML propre sans retours à la ligne au début
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${urls.map(url => `
	<url>
		<loc>${url}</loc>
		<changefreq>weekly</changefreq>
		<priority>${url === domain ? '1.0' : '0.8'}</priority>
	</url>`).join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
