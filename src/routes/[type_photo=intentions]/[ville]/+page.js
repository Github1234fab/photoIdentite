// src/routes/[type_photo=intentions]/[ville]/+page.js
import { error } from '@sveltejs/kit';
import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const slugVille = params.ville ? params.ville.toLowerCase() : '';
	const typePhoto = params.type_photo;

	// Récupérer la configuration de la ville
	const villeInfo = villesSEO[slugVille];
	if (!villeInfo) {
		throw error(404, 'Ville non desservie par le studio photo');
	}

	// Récupérer l'intention
	const intentionInfo = intentionsSEO[typePhoto];
	if (!intentionInfo) {
		throw error(404, 'Prestation de photo d\'identité non supportée');
	}

	// Générer les balises SEO ciblées
	const seo = {
		title: `${intentionInfo.name} ${villeInfo.prepArticle} (${villeInfo.cp}) - Conforme à 100%`,
		description: `${intentionInfo.description} Réalisez vos photos officielles au studio photo de Thurins, à quelques minutes de ${villeInfo.name}.`
	};

	return {
		ville: villeInfo,
		intention: intentionInfo,
		seo
	};
}
