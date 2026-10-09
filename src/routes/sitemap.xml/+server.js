import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

export async function GET() {
	const domain = 'https://photo-identite-thurins.fr';
	
	const intentions = Object.keys(intentionsSEO);
	// Filtrer uniquement les 10 communes prioritaires
	const priorityCities = Object.keys(villesSEO).filter(slug => villesSEO[slug].isPriority);

	const today = new Date().toISOString().split('T')[0];
	const items = [];

	// 1. Page d'accueil principale (Priorité 1.0)
	items.push({
		url: domain,
		priority: '1.0',
		changefreq: 'daily'
	});

	// 2. Pages d'intentions x 10 Villes prioritaires (Priorité 0.9 pour Thurins studio, 0.8 pour les 9 communes proches)
	for (const intention of intentions) {
		for (const citySlug of priorityCities) {
			const ville = villesSEO[citySlug];
			const isStudioLoc = ville.isMainStudio;
			items.push({
				url: `${domain}/${intention}/${citySlug}`,
				priority: isStudioLoc ? '0.9' : '0.8',
				changefreq: 'weekly'
			});
		}
	}

	// Générer le XML propre
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${items.map(item => `
	<url>
		<loc>${item.url}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${item.changefreq}</changefreq>
		<priority>${item.priority}</priority>
	</url>`).join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
