// src/lib/data/intentions.js

/**
 * @typedef {Object} IntentionSEO
 * @property {string} slug - Le paramètre d'URL (ex: 'photo-identite-ants')
 * @property {string} name - Le nom propre de l'intention (ex: 'Photo d\'identité ANTS')
 * @property {string} keyword - Le mot-clé principal visé (ex: 'photo d\'identité ANTS')
 * @property {string} description - Descriptif marketing
 */

/** @type {Record<string, IntentionSEO>} */
export const intentionsSEO = {
	'photo-identite-ants': {
		slug: 'photo-identite-ants',
		name: 'E-photo ANTS officielle',
		keyword: 'e-photo ANTS',
		description: 'Réalisez votre photo d\'identité avec code de signature numérique agréé ANTS pour votre permis de conduire ou titre de séjour.'
	},
	'photo-passeport': {
		slug: 'photo-passeport',
		name: 'Photo de passeport conforme',
		keyword: 'photo passeport',
		description: 'Vos photos d\'identité officielles pour passeport français ou étranger, 100% garanties conformes aux normes administratives ISO/IEC 19794-5.'
	},
	'photo-carte-identite': {
		slug: 'photo-carte-identite',
		name: 'Photo de carte nationale d\'identité',
		keyword: 'photo carte d\'identité',
		description: 'Photos officielles pour votre dossier de carte nationale d\'identité (CNI), validées pour acceptation en mairie.'
	},
	'photo-permis-de-conduire': {
		slug: 'photo-permis-de-conduire',
		name: 'Photo pour permis de conduire',
		keyword: 'photo permis de conduire',
		description: 'Photos d\'identité agréées ANTS pour le permis de conduire avec signature numérique sécurisée.'
	},
	'photo-identite-bebe-enfant': {
		slug: 'photo-identite-bebe-enfant',
		name: 'Photo d\'identité bébé et enfant',
		keyword: 'photo identité bébé',
		description: 'Le studio est spécialisé dans l\'accueil et la prise de vue des bébés et des jeunes enfants pour leurs premières photos officielles.'
	},
	'photo-visa': {
		slug: 'photo-visa',
		name: 'Photo de visa officiel',
		keyword: 'photo visa',
		description: 'Photos conformes aux exigences spécifiques de tous les pays (Visa USA 5x5 cm, Visa Inde, Chine, Canada, etc.).'
	}
};
