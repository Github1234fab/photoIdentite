// src/routes/[type_photo=intentions]/[ville]/+page.js
import { error } from '@sveltejs/kit';
import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

export const prerender = true;

// Donne à SvelteKit la liste de toutes les combinaisons intentions x villes à pré-générer
export function entries() {
	const intentions = Object.keys(intentionsSEO);
	const list = [];
	for (const type_photo of intentions) {
		for (const ville of Object.keys(villesSEO)) {
			list.push({ type_photo, ville });
		}
	}
	return list;
}

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
