<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
  import Hero from '$lib/components/Hero.svelte';
  import LocalDetails from '$lib/components/LocalDetails.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import Access from '$lib/components/Access.svelte';
  import IdidemBanner from '$lib/components/IdidemBanner.svelte';
  import LocalHub from '$lib/components/LocalHub.svelte';

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
  <link rel="canonical" href={data.seo.canonical} />
</svelte:head>

<Hero city={data.ville} intention={data.intention} />
<LocalDetails city={data.ville} intention={data.intention} />
<About />
<Services />
<IdidemBanner />
<LocalHub city={data.ville} intention={data.intention} />
<Faq />
<Access />
