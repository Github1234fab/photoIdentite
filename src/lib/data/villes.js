// src/lib/data/villes.js

/**
 * @typedef {Object} VilleSEO
 * @property {string} slug - Le paramètre d'URL (ex: 'brindas')
 * @property {string} name - Le nom propre de la commune (ex: 'Brindas')
 * @property {string} prep - La préposition simple (ex: 'à')
 * @property {string} prepArticle - Préposition + article combinés (ex: 'à Brindas')
 * @property {string} cp - Le code postal (ex: '69126')
 * @property {boolean} [isMainStudio] - Indique si c'est la commune d'accueil du studio
 * @property {boolean} [isPriority] - Indique si la commune est dans le top 10 prioritaire
 * @property {string} [dist] - Temps de trajet indicatif depuis le studio
 * @property {string} [routeInfo] - Itinéraire indicatif depuis la commune
 * @property {string} [mairieRecueil] - Mairie équipée du dispositif de recueil (DR) la plus proche
 * @property {string} [localContext] - Description personnalisée de l'accès local
 */

/** @type {Record<string, VilleSEO>} */
export const villesSEO = {
	'aveize': { 
		slug: 'aveize', name: 'Aveize', prep: 'à', prepArticle: 'à Aveize', cp: '69610',
		routeInfo: 'Accès via la D311 en traversant Sainte-Foy-l\'Argentière et Vaugneray.',
		mairieRecueil: 'Mairie de Saint-Martin-en-Haut ou Vaugneray',
		localContext: 'Pour les habitants d\'Aveize recherchant un studio professionnel dans les Monts du Lyonnais.'
	},
	'beauvallon': { 
		slug: 'beauvallon', name: 'Beauvallon', prep: 'à', prepArticle: 'à Beauvallon', cp: '69700',
		routeInfo: 'Accès rapide par la D342 en remontant vers Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Mornant ou Brignais',
		localContext: 'Accès très simple depuis Beauvallon sans subir la circulation lyonnaise.'
	},
	'bessenay': { 
		slug: 'bessenay', name: 'Bessenay', prep: 'à', prepArticle: 'à Bessenay', cp: '69690',
		routeInfo: 'Accès par la D489 via Vaugneray.',
		mairieRecueil: 'Mairie de Vaugneray ou l\'Arbresle',
		localContext: 'Studio de proximité idéal pour Bessenay et la vallée de la Brévenne.'
	},
	'brignais': { 
		slug: 'brignais', name: 'Brignais', prep: 'à', prepArticle: 'à Brignais', cp: '69530', isPriority: true, dist: '12 min',
		routeInfo: 'À seulement 12 minutes de Brignais par la D342 puis la route de Soucieu / Thurins.',
		mairieRecueil: 'Mairie de Brignais (Guichet Titres d\'Identité sur RDV)',
		localContext: 'Évitez les files d\'attente des photomatons de centres commerciaux à Brignais. Le studio de Thurins vous garantit une prise de vue conforme en 5 minutes avec stationnement gratuit au pied du studio.'
	},
	'brindas': { 
		slug: 'brindas', name: 'Brindas', prep: 'à', prepArticle: 'à Brindas', cp: '69126', isPriority: true, dist: '8 min',
		routeInfo: 'Liaison directe depuis le centre de Brindas via la D311 en 8 minutes.',
		mairieRecueil: 'Mairie de Vaugneray ou Craponne',
		localContext: 'Habitants de Brindas, profitez de la très grande proximité du studio de Thurins. Idéal pour réaliser vos photos d\'identité ou e-photos ANTS rapidement avant le dépôt en mairie.'
	},
	'chaponost': { 
		slug: 'chaponost', name: 'Chaponost', prep: 'à', prepArticle: 'à Chaponost', cp: '69630', isPriority: true, dist: '10 min',
		routeInfo: 'Accès rapide depuis Chaponost par la D311 en passant par Messimy.',
		mairieRecueil: 'Mairie de Chaponost (Station Biométrique)',
		localContext: 'À 10 minutes de Chaponost, le studio vous offre un accueil calme et sur mesure, tout particulièrement apprécié pour les bébés et jeunes enfants.'
	},
	'charly': { 
		slug: 'charly', name: 'Charly', prep: 'à', prepArticle: 'à Charly', cp: '69390',
		routeInfo: 'Accès par Brignais et Soucieu-en-Jarrest via la D342.',
		mairieRecueil: 'Mairie de Saint-Genis-Laval ou Brignais',
		localContext: 'Alternative rapide et conviviale pour les habitants de Charly.'
	},
	'chaussan': { 
		slug: 'chaussan', name: 'Chaussan', prep: 'à', prepArticle: 'à Chaussan', cp: '69440',
		routeInfo: 'Direct par Rontalon ou Saint-Laurent-d\'Agny.',
		mairieRecueil: 'Mairie de Mornant',
		localContext: 'À quelques kilomètres seulement de Chaussan.'
	},
	'chevinay': { 
		slug: 'chevinay', name: 'Chevinay', prep: 'à', prepArticle: 'à Chevinay', cp: '69210',
		routeInfo: 'Descente vers Vaugneray puis D311 jusqu\'à Thurins.',
		mairieRecueil: 'Mairie de Vaugneray',
		localContext: 'Proximité immédiate du studio pour le canton de Vaugneray.'
	},
	'courzieu': { 
		slug: 'courzieu', name: 'Courzieu', prep: 'à', prepArticle: 'à Courzieu', cp: '69690',
		routeInfo: 'Accès par la D489 via Vaugneray.',
		mairieRecueil: 'Mairie de Vaugneray',
		localContext: 'Service photo sur rendez-vous pour la commune de Courzieu.'
	},
	'craponne': { 
		slug: 'craponne', name: 'Craponne', prep: 'à', prepArticle: 'à Craponne', cp: '69290', isPriority: true, dist: '11 min',
		routeInfo: 'Accès direct depuis la D489 puis D311 en passant par Brindas.',
		mairieRecueil: 'Mairie de Craponne (Espace Citoyen Titres)',
		localContext: 'Depuis Craponne, rejoignez le studio de Thurins en 11 minutes seulement. Bénéficiez d\'une prestation sur rendez-vous sans attente et d\'une vérification rigoureuse des normes OACI.'
	},
	'duerne': { 
		slug: 'duerne', name: 'Duerne', prep: 'à', prepArticle: 'à Duerne', cp: '69850',
		routeInfo: 'Trajet par Saint-Martin-en-Haut puis descente vers Thurins.',
		mairieRecueil: 'Mairie de Saint-Martin-en-Haut',
		localContext: 'Studio de référence dans les Monts du Lyonnais pour Duerne.'
	},
	'francheville': { 
		slug: 'francheville', name: 'Francheville', prep: 'à', prepArticle: 'à Francheville', cp: '69340',
		routeInfo: 'Accès par Craponne puis D311.',
		mairieRecueil: 'Mairie de Francheville ou Craponne',
		localContext: 'Fuyez les embouteillages du centre métropolitain en venant à Thurins.'
	},
	'grezieu-la-varenne': { 
		slug: 'grezieu-la-varenne', name: 'Grézieu-la-Varenne', prep: 'à', prepArticle: 'à Grézieu-la-Varenne', cp: '69290',
		routeInfo: 'Accès rapide par Vaugneray ou Brindas.',
		mairieRecueil: 'Mairie de Craponne ou Vaugneray',
		localContext: 'Idéal pour Grézieu-la-Varenne, à moins de 10 minutes du studio.'
	},
	'grigny': { 
		slug: 'grigny', name: 'Grigny', prep: 'à', prepArticle: 'à Grigny', cp: '69520',
		routeInfo: 'Accès par Brignais puis Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Givors ou Brignais',
		localContext: 'Studio photo disponible sur RDV pour Grigny.'
	},
	'irigny': { 
		slug: 'irigny', name: 'Irigny', prep: 'à', prepArticle: 'à Irigny', cp: '69540',
		routeInfo: 'Liaison par Saint-Genis-Laval et Brignais.',
		mairieRecueil: 'Mairie de Saint-Genis-Laval',
		localContext: 'Alternative calme et rapide pour la commune d\'Irigny.'
	},
	'la-chapelle-sur-coise': { 
		slug: 'la-chapelle-sur-coise', name: 'La Chapelle-sur-Coise', prep: 'à', prepArticle: 'à La Chapelle-sur-Coise', cp: '69590',
		routeInfo: 'Accès par Saint-Martin-en-Haut et D311.',
		mairieRecueil: 'Mairie de Saint-Martin-en-Haut',
		localContext: 'Photographe spécialisé au cœur des Monts du Lyonnais.'
	},
	'marcy-letoile': { 
		slug: 'marcy-letoile', name: "Marcy-l'Étoile", prep: 'à', prepArticle: "à Marcy-l'Étoile", cp: '69280',
		routeInfo: 'Accès par Sainte-Consorce, Craponne puis D311.',
		mairieRecueil: 'Mairie de Craponne ou Tassin-la-Demi-Lune',
		localContext: 'Prise de vue rapide pour les résidents de Marcy-l\'Étoile.'
	},
	'messimy': { 
		slug: 'messimy', name: 'Messimy', prep: 'à', prepArticle: 'à Messimy', cp: '69510', isPriority: true, dist: '3 min',
		routeInfo: 'Commune limitrophe ! À 3 minutes seulement par la D311.',
		mairieRecueil: 'Mairie de Vaugneray ou Mornant',
		localContext: 'Voisins de Messimy, le studio de Thurins est votre solution de proximité immédiate. Réalisez vos e-photos ANTS ou photos de passeport en 5 minutes avec stationnement facile en face du studio.'
	},
	'montagny': { 
		slug: 'montagny', name: 'Montagny', prep: 'à', prepArticle: 'à Montagny', cp: '69700',
		routeInfo: 'Accès par Millery, Charly et Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Brignais ou Mornant',
		localContext: 'Studio de proximité pour les habitants de Montagny.'
	},
	'mornant': { 
		slug: 'mornant', name: 'Mornant', prep: 'à', prepArticle: 'à Mornant', cp: '69440', isPriority: true, dist: '12 min',
		routeInfo: 'Accès direct via la D25 / D342 en 12 minutes depuis le centre de Mornant.',
		mairieRecueil: 'Mairie de Mornant (Service Titres d\'Identité)',
		localContext: 'Pour vos démarches à la Mairie de Mornant ou à la COPAMO, effectuez vos photos d\'identité au studio de Thurins. Garantie de conformité administrative OACI à 100%.'
	},
	'orlienas': { 
		slug: 'orlienas', name: 'Orliénas', prep: 'à', prepArticle: 'à Orliénas', cp: '69530',
		routeInfo: 'Accès rapide par Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Brignais ou Mornant',
		localContext: 'À moins de 8 minutes d\'Orliénas par Soucieu.'
	},
	'oullins': { 
		slug: 'oullins', name: 'Oullins', prep: 'à', prepArticle: 'à Oullins', cp: '69600',
		routeInfo: 'Accès par Saint-Genis-Laval, Brignais puis Soucieu.',
		mairieRecueil: 'Mairie d\'Oullins-Pierre-Bénite',
		localContext: 'Fuyez le tumulte urbain et faites vos photos au calme à Thurins.'
	},
	'pierre-benite': { 
		slug: 'pierre-benite', name: 'Pierre-Bénite', prep: 'à', prepArticle: 'à Pierre-Bénite', cp: '69310',
		routeInfo: 'Accès par l\'A450 vers Brignais puis Soucieu.',
		mairieRecueil: 'Mairie d\'Oullins-Pierre-Bénite',
		localContext: 'Accueil personnalisé sur RDV à quelques minutes de Brignais.'
	},
	'pollionnay': { 
		slug: 'pollionnay', name: 'Pollionnay', prep: 'à', prepArticle: 'à Pollionnay', cp: '69290',
		routeInfo: 'Descente par Vaugneray puis D311 vers Thurins.',
		mairieRecueil: 'Mairie de Vaugneray',
		localContext: 'Idéal pour le canton de Vaugneray et Pollionnay.'
	},
	'rontalon': { 
		slug: 'rontalon', name: 'Rontalon', prep: 'à', prepArticle: 'à Rontalon', cp: '69510',
		routeInfo: 'Commune voisine ! Descente directe sur Thurins en 5 minutes.',
		mairieRecueil: 'Mairie de Mornant ou Vaugneray',
		localContext: 'Rontalonnais, le studio est situé juste au bas de la commune.'
	},
	'saint-genis-laval': { 
		slug: 'saint-genis-laval', name: 'Saint-Genis-Laval', prep: 'à', prepArticle: 'à Saint-Genis-Laval', cp: '69230',
		routeInfo: 'Accès par Brignais puis Soucieu-en-Jarrest via la D342.',
		mairieRecueil: 'Mairie de Saint-Genis-Laval (Hôtel de Ville)',
		localContext: 'Évitez les cabines automatiques souvent en panne dans les galeries marchandes de St-Genis. Bénéficiez d\'un rendu professionnel garanti à Thurins.'
	},
	'saint-laurent-dagny': { 
		slug: 'saint-laurent-dagny', name: "Saint-Laurent-d'Agny", prep: 'à', prepArticle: "à Saint-Laurent-d'Agny", cp: '69440',
		routeInfo: 'Accès direct par Soucieu-en-Jarrest en 7 minutes.',
		mairieRecueil: 'Mairie de Mornant',
		localContext: 'Proximité immédiate pour Saint-Laurent-d\'Agny.'
	},
	'saint-martin-en-haut': { 
		slug: 'saint-martin-en-haut', name: 'Saint-Martin-en-Haut', prep: 'à', prepArticle: 'à Saint-Martin-en-Haut', cp: '69850', isPriority: true, dist: '14 min',
		routeInfo: 'Accès direct par la D311 en 14 minutes.',
		mairieRecueil: 'Mairie de Saint-Martin-en-Haut (Guichet Passeport & CNI)',
		localContext: 'Pour déposer vos titres à la Mairie de Saint-Martin-en-Haut, faites réaliser des photos conformes au studio de Thurins, reconnu pour son savoir-faire avec les nouveau-nés et les aînés.'
	},
	'saint-sorlin': { 
		slug: 'saint-sorlin', name: 'Saint-Sorlin', prep: 'à', prepArticle: 'à Saint-Sorlin', cp: '69440',
		routeInfo: 'Accès par Chaussan et Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Mornant',
		localContext: 'Studio photo de proximité pour Saint-Sorlin.'
	},
	'saint-symphorien-sur-coise': { 
		slug: 'saint-symphorien-sur-coise', name: 'Saint-Symphorien-sur-Coise', prep: 'à', prepArticle: 'à Saint-Symphorien-sur-Coise', cp: '69590',
		routeInfo: 'Accès par Saint-Martin-en-Haut puis D311.',
		mairieRecueil: 'Mairie de Saint-Symphorien-sur-Coise',
		localContext: 'Spécialiste de la photo officielle pour le bassin de la Coise.'
	},
	'sainte-consorce': { 
		slug: 'sainte-consorce', name: 'Sainte-Consorce', prep: 'à', prepArticle: 'à Sainte-Consorce', cp: '69280',
		routeInfo: 'Accès par Marcy-l\'Étoile, Craponne et Brindas.',
		mairieRecueil: 'Mairie de Vaugneray ou Craponne',
		localContext: 'Studio accessible rapidement depuis Sainte-Consorce.'
	},
	'sainte-foy-les-lyon': { 
		slug: 'sainte-foy-les-lyon', name: 'Sainte-Foy-lès-Lyon', prep: 'à', prepArticle: 'à Sainte-Foy-lès-Lyon', cp: '69110',
		routeInfo: 'Accès par Francheville et Craponne.',
		mairieRecueil: 'Mairie de Sainte-Foy-lès-Lyon',
		localContext: 'Un cadre paisible à l\'Ouest de Lyon pour réussir vos photos officielles.'
	},
	'soucieu-en-jarrest': { 
		slug: 'soucieu-en-jarrest', name: 'Soucieu-en-Jarrest', prep: 'à', prepArticle: 'à Soucieu-en-Jarrest', cp: '69510', isPriority: true, dist: '6 min',
		routeInfo: 'Liaison directe par la D25 en 6 minutes seulement.',
		mairieRecueil: 'Mairie de Mornant ou Brignais',
		localContext: 'Habitants de Soucieu-en-Jarrest, le studio de Thurins est à 6 minutes de chez vous. Photos imprimées immédiatement et code e-photo ANTS transmis instantanément.'
	},
	'taluyers': { 
		slug: 'taluyers', name: 'Taluyers', prep: 'à', prepArticle: 'à Taluyers', cp: '69440',
		routeInfo: 'Accès par Saint-Laurent-d\'Agny et Soucieu.',
		mairieRecueil: 'Mairie de Mornant ou Brignais',
		localContext: 'Studio de proximité pour les habitants de Taluyers.'
	},
	'thurins': { 
		slug: 'thurins', name: 'Thurins', prep: 'à', prepArticle: 'à Thurins', cp: '69510', isMainStudio: true, isPriority: true, dist: 'Studio sur place',
		routeInfo: 'Le studio photo Fabien Marceau est implanté au cœur du village de Thurins.',
		mairieRecueil: 'Mairie de Vaugneray, Mornant ou Messimy',
		localContext: 'Votre studio photo local à Thurins. Accueil chaleureux sur rendez-vous du lundi au samedi avec stationnement facile et gratuit.'
	},
	'vaugneray': { 
		slug: 'vaugneray', name: 'Vaugneray', prep: 'à', prepArticle: 'à Vaugneray', cp: '69670', isPriority: true, dist: '7 min',
		routeInfo: 'Accès rapide par la D489 puis D311 en 7 minutes.',
		mairieRecueil: 'Mairie de Vaugneray (Service Passeport & CNI sur RDV)',
		localContext: 'Pour finaliser votre dossier de titre d\'identité à la Mairie de Vaugneray, venez réaliser vos photos au studio de Thurins. Garantie absolue d\'acceptation par l\'administration.'
	},
	'vourles': { 
		slug: 'vourles', name: 'Vourles', prep: 'à', prepArticle: 'à Vourles', cp: '69390',
		routeInfo: 'Accès par Brignais et Soucieu-en-Jarrest.',
		mairieRecueil: 'Mairie de Brignais',
		localContext: 'Studio accessible en une douzaine de minutes depuis Vourles.'
	},
	'yzeron': { 
		slug: 'yzeron', name: 'Yzeron', prep: 'à', prepArticle: 'à Yzeron', cp: '69510',
		routeInfo: 'Descente directe sur Thurins par la D115 et D311.',
		mairieRecueil: 'Mairie de Vaugneray',
		localContext: 'Accès rapide pour Yzeron au bas de la vallée.'
	}
};

export const mainStudioVille = villesSEO['thurins'];
