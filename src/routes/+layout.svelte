<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon_studio.png" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": ["LocalBusiness", "Photographer"],
			"name": "Studio Photo Fabien Marceau",
			"image": "https://gist.githubusercontent.com/Github1234fab/f41bd73e7b57d72e196c1b576654b37e/raw/logoIdidem_1024.png",
			"@id": "https://photo-identite-thurins.fr/#photographer",
			"url": "https://photo-identite-thurins.fr",
			"telephone": "+33672901614",
			"email": "id.domicile@gmail.com",
			"priceRange": "€€",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "69510 Thurins",
				"addressLocality": "Thurins",
				"postalCode": "69510",
				"addressCountry": "FR"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 45.6833,
				"longitude": 4.6333
			},
			"openingHoursSpecification": [
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday"
					],
					"opens": "09:00",
					"closes": "19:00"
				},
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": [
						"Saturday"
					],
					"opens": "09:00",
					"closes": "13:00"
				}
			],
			"sameAs": [
				"https://ididem.com"
			]
		}
	</script>
</svelte:head>

<Header />
<main style="min-height: calc(100vh - 70px);">
	{@render children()}
</main>
<Footer />
