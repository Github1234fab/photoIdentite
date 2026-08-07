// src/lib/data/villes.js

/**
 * @typedef {Object} VilleSEO
 * @property {string} slug - Le paramètre d'URL (ex: 'brindas')
 * @property {string} name - Le nom propre de la commune (ex: 'Brindas')
 * @property {string} prep - La préposition simple (ex: 'à')
 * @property {string} prepArticle - Préposition + article combinés (ex: 'à Brindas')
 * @property {string} cp - Le code postal (ex: '69126')
 * @property {boolean} [isMainStudio] - Indique si c'est la commune d'accueil du studio
 */

/** @type {Record<string, VilleSEO>} */
export const villesSEO = {
	'thurins': { slug: 'thurins', name: 'Thurins', prep: 'à', prepArticle: 'à Thurins', cp: '69510', isMainStudio: true },
	'brindas': { slug: 'brindas', name: 'Brindas', prep: 'à', prepArticle: 'à Brindas', cp: '69126' },
	'vaugneray': { slug: 'vaugneray', name: 'Vaugneray', prep: 'à', prepArticle: 'à Vaugneray', cp: '69670' },
	'saint-martin-en-haut': { slug: 'saint-martin-en-haut', name: 'Saint-Martin-en-Haut', prep: 'à', prepArticle: 'à Saint-Martin-en-Haut', cp: '69850' },
	'rontalon': { slug: 'rontalon', name: 'Rontalon', prep: 'à', prepArticle: 'à Rontalon', cp: '69510' },
	'soucieu-en-jarrest': { slug: 'soucieu-en-jarrest', name: 'Soucieu-en-Jarrest', prep: 'à', prepArticle: 'à Soucieu-en-Jarrest', cp: '69510' },
	'mornant': { slug: 'mornant', name: 'Mornant', prep: 'à', prepArticle: 'à Mornant', cp: '69440' },
	'craponne': { slug: 'craponne', name: 'Craponne', prep: 'à', prepArticle: 'à Craponne', cp: '69290' },
	'brignais': { slug: 'brignais', name: 'Brignais', prep: 'à', prepArticle: 'à Brignais', cp: '69530' },
	'pollionnay': { slug: 'pollionnay', name: 'Pollionnay', prep: 'à', prepArticle: 'à Pollionnay', cp: '69290' },
	'grezieu-la-varenne': { slug: 'grezieu-la-varenne', name: 'Grézieu-la-Varenne', prep: 'à', prepArticle: 'à Grézieu-la-Varenne', cp: '69290' },
	'saint-laurent-dagny': { slug: 'saint-laurent-dagny', name: "Saint-Laurent-d'Agny", prep: 'à', prepArticle: "à Saint-Laurent-d'Agny", cp: '69440' },
	'oullins': { slug: 'oullins', name: 'Oullins', prep: 'à', prepArticle: 'à Oullins', cp: '69600' },
	'saint-genis-laval': { slug: 'saint-genis-laval', name: 'Saint-Genis-Laval', prep: 'à', prepArticle: 'à Saint-Genis-Laval', cp: '69230' },
	'messimy': { slug: 'messimy', name: 'Messimy', prep: 'à', prepArticle: 'à Messimy', cp: '69510' },
	'saint-symphorien-sur-coise': { slug: 'saint-symphorien-sur-coise', name: 'Saint-Symphorien-sur-Coise', prep: 'à', prepArticle: 'à Saint-Symphorien-sur-Coise', cp: '69590' }
};

export const mainStudioVille = villesSEO['thurins'];
