<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon_studio.png" />
</svelte:head>

<Header />
<main style="min-height: calc(100vh - 70px);">
	{@render children()}
</main>
<Footer />
