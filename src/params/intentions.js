// src/params/intentions.js

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return [
		'photo-identite-ants',
		'photo-passeport',
		'photo-carte-identite',
		'photo-permis-de-conduire',
		'photo-identite-bebe-enfant',
		'photo-visa'
	].includes(param);
}
