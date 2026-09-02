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
	'aveize': { slug: 'aveize', name: 'Aveize', prep: 'à', prepArticle: 'à Aveize', cp: '69610' },
	'beauvallon': { slug: 'beauvallon', name: 'Beauvallon', prep: 'à', prepArticle: 'à Beauvallon', cp: '69700' },
	'bessenay': { slug: 'bessenay', name: 'Bessenay', prep: 'à', prepArticle: 'à Bessenay', cp: '69690' },
	'brignais': { slug: 'brignais', name: 'Brignais', prep: 'à', prepArticle: 'à Brignais', cp: '69530' },
	'brindas': { slug: 'brindas', name: 'Brindas', prep: 'à', prepArticle: 'à Brindas', cp: '69126' },
	'chaponost': { slug: 'chaponost', name: 'Chaponost', prep: 'à', prepArticle: 'à Chaponost', cp: '69630' },
	'charly': { slug: 'charly', name: 'Charly', prep: 'à', prepArticle: 'à Charly', cp: '69390' },
	'chaussan': { slug: 'chaussan', name: 'Chaussan', prep: 'à', prepArticle: 'à Chaussan', cp: '69440' },
	'chevinay': { slug: 'chevinay', name: 'Chevinay', prep: 'à', prepArticle: 'à Chevinay', cp: '69210' },
	'courzieu': { slug: 'courzieu', name: 'Courzieu', prep: 'à', prepArticle: 'à Courzieu', cp: '69690' },
	'craponne': { slug: 'craponne', name: 'Craponne', prep: 'à', prepArticle: 'à Craponne', cp: '69290' },
	'duerne': { slug: 'duerne', name: 'Duerne', prep: 'à', prepArticle: 'à Duerne', cp: '69850' },
	'francheville': { slug: 'francheville', name: 'Francheville', prep: 'à', prepArticle: 'à Francheville', cp: '69340' },
	'grezieu-la-varenne': { slug: 'grezieu-la-varenne', name: 'Grézieu-la-Varenne', prep: 'à', prepArticle: 'à Grézieu-la-Varenne', cp: '69290' },
	'grigny': { slug: 'grigny', name: 'Grigny', prep: 'à', prepArticle: 'à Grigny', cp: '69520' },
	'irigny': { slug: 'irigny', name: 'Irigny', prep: 'à', prepArticle: 'à Irigny', cp: '69540' },
	'la-chapelle-sur-coise': { slug: 'la-chapelle-sur-coise', name: 'La Chapelle-sur-Coise', prep: 'à', prepArticle: 'à La Chapelle-sur-Coise', cp: '69590' },
	'marcy-letoile': { slug: 'marcy-letoile', name: "Marcy-l'Étoile", prep: 'à', prepArticle: "à Marcy-l'Étoile", cp: '69280' },
	'messimy': { slug: 'messimy', name: 'Messimy', prep: 'à', prepArticle: 'à Messimy', cp: '69510' },
	'montagny': { slug: 'montagny', name: 'Montagny', prep: 'à', prepArticle: 'à Montagny', cp: '69700' },
	'mornant': { slug: 'mornant', name: 'Mornant', prep: 'à', prepArticle: 'à Mornant', cp: '69440' },
	'orlienas': { slug: 'orlienas', name: 'Orliénas', prep: 'à', prepArticle: 'à Orliénas', cp: '69530' },
	'oullins': { slug: 'oullins', name: 'Oullins', prep: 'à', prepArticle: 'à Oullins', cp: '69600' },
	'pierre-benite': { slug: 'pierre-benite', name: 'Pierre-Bénite', prep: 'à', prepArticle: 'à Pierre-Bénite', cp: '69310' },
	'pollionnay': { slug: 'pollionnay', name: 'Pollionnay', prep: 'à', prepArticle: 'à Pollionnay', cp: '69290' },
	'rontalon': { slug: 'rontalon', name: 'Rontalon', prep: 'à', prepArticle: 'à Rontalon', cp: '69510' },
	'saint-genis-laval': { slug: 'saint-genis-laval', name: 'Saint-Genis-Laval', prep: 'à', prepArticle: 'à Saint-Genis-Laval', cp: '69230' },
	'saint-laurent-dagny': { slug: 'saint-laurent-dagny', name: "Saint-Laurent-d'Agny", prep: 'à', prepArticle: "à Saint-Laurent-d'Agny", cp: '69440' },
	'saint-martin-en-haut': { slug: 'saint-martin-en-haut', name: 'Saint-Martin-en-Haut', prep: 'à', prepArticle: 'à Saint-Martin-en-Haut', cp: '69850' },
	'saint-sorlin': { slug: 'saint-sorlin', name: 'Saint-Sorlin', prep: 'à', prepArticle: 'à Saint-Sorlin', cp: '69440' },
	'saint-symphorien-sur-coise': { slug: 'saint-symphorien-sur-coise', name: 'Saint-Symphorien-sur-Coise', prep: 'à', prepArticle: 'à Saint-Symphorien-sur-Coise', cp: '69590' },
	'sainte-consorce': { slug: 'sainte-consorce', name: 'Sainte-Consorce', prep: 'à', prepArticle: 'à Sainte-Consorce', cp: '69280' },
	'sainte-foy-les-lyon': { slug: 'sainte-foy-les-lyon', name: 'Sainte-Foy-lès-Lyon', prep: 'à', prepArticle: 'à Sainte-Foy-lès-Lyon', cp: '69110' },
	'soucieu-en-jarrest': { slug: 'soucieu-en-jarrest', name: 'Soucieu-en-Jarrest', prep: 'à', prepArticle: 'à Soucieu-en-Jarrest', cp: '69510' },
	'taluyers': { slug: 'taluyers', name: 'Taluyers', prep: 'à', prepArticle: 'à Taluyers', cp: '69440' },
	'thurins': { slug: 'thurins', name: 'Thurins', prep: 'à', prepArticle: 'à Thurins', cp: '69510', isMainStudio: true },
	'vaugneray': { slug: 'vaugneray', name: 'Vaugneray', prep: 'à', prepArticle: 'à Vaugneray', cp: '69670' },
	'vourles': { slug: 'vourles', name: 'Vourles', prep: 'à', prepArticle: 'à Vourles', cp: '69390' },
	'yzeron': { slug: 'yzeron', name: 'Yzeron', prep: 'à', prepArticle: 'à Yzeron', cp: '69510' }
};

export const mainStudioVille = villesSEO['thurins'];
