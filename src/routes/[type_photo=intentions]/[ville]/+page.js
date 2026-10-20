// src/routes/[type_photo=intentions]/[ville]/+page.js
import { error } from '@sveltejs/kit';
import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

export const prerender = true;

// Donne à SvelteKit la liste des combinaisons des 10 communes prioritaires à pré-générer
export function entries() {
	const intentions = Object.keys(intentionsSEO);
	const priorityCities = Object.keys(villesSEO).filter(slug => villesSEO[slug].isPriority);
	const list = [];
	for (const type_photo of intentions) {
		for (const ville of priorityCities) {
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

	const domain = 'https://photo-identite-thurins.fr';
	const isMainStudio = Boolean(villeInfo.isMainStudio);
	const canonical = `${domain}/photo-carte-identite/${slugVille}`;

	let title;
	let description;

	if (typePhoto === 'photo-carte-identite') {
		title = isMainStudio
			? `Photo d'identité & E-photo ANTS à Thurins — Studio Photo Fabien Marceau`
			: `Photo d'identité & E-photo ANTS ${villeInfo.prepArticle} — Studio Thurins`;

		description = isMainStudio
			? `Photos d'identité officielles et e-photos ANTS (permis, passeport, CNI) au studio photo de Thurins (69510). Prise de vue professionnelle garantie 100% conforme en 5 minutes.`
			: `Photos d'identité et e-photos ANTS officielles conformes pour permis de conduire, passeport et carte d'identité. Studio à Thurins, à quelques minutes ${villeInfo.prep === 'à' ? 'de ' + villeInfo.name : 'd\'' + villeInfo.name}.`;
	} else {
		title = `${intentionInfo.name} ${villeInfo.prepArticle} (${villeInfo.cp}) — Studio Thurins`;
		description = `${intentionInfo.description} Réalisez vos photos officielles au studio photo de Thurins, à quelques minutes de ${villeInfo.name}.`;
	}

	const seo = {
		title,
		description,
		canonical
	};

	return {
		ville: villeInfo,
		intention: intentionInfo,
		seo
	};
}
