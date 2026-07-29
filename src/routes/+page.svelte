<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import Access from '$lib/components/Access.svelte';

  onMount(() => {
    seoStore.city = null;
    seoStore.intention = null;
  });
</script>

<svelte:head>
  <title>Photo d'identité Thurins - Studio Photo Fabien Marceau (69)</title>
  <meta name="description" content="Photos d'identité professionnelles et conformes garanties à 100% à Thurins (69510). e-Photo ANTS permis, passeport, carte d'identité, visas." />
</svelte:head>

<Hero />
<About />
<Services />
<Faq />
<Access />
