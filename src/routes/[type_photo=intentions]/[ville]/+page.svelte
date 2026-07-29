<!-- src/routes/[type_photo=intentions]/[ville]/+page.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import Access from '$lib/components/Access.svelte';

  let { data } = $props();

  // Mettre à jour réactivement le store Svelte 5 lors du changement de données
  $effect(() => {
    seoStore.city = data.ville;
    seoStore.intention = data.intention;
  });
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
</svelte:head>

<Hero />
<About />
<Services />
<Faq />
<Access />
