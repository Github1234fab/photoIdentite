<!-- src/lib/components/LocalHub.svelte -->
<script>
  import { villesSEO } from '$lib/data/villes.js';
  import { seoStore } from '$lib/stores/seoStore.svelte.js';

  let { city: propCity = null, intention: propIntention = null } = $props();

  const activeCity = $derived(propCity ?? seoStore.city);
  const activeIntention = $derived(propIntention ?? seoStore.intention);

  // Récupérer les 10 villes prioritaires
  const priorityVilles = Object.values(villesSEO).filter(v => v.isPriority);
  
  // Intention courante ou par défaut
  const currentIntentionSlug = $derived(activeIntention ? activeIntention.slug : 'photo-carte-identite');
  const currentIntentionName = $derived(activeIntention ? activeIntention.name : 'Photo d\'identité');
</script>

<section class="local-hub-section">
  <div class="container">
    <div class="section-header">
      <span class="hub-badge">
        <i class="fa-solid fa-map-location-dot"></i> Proximité Studio Thurins
      </span>
      <h2>{currentIntentionName} autour de chez vous</h2>
      <p>
        Le studio photo Fabien Marceau à Thurins (69510) accueille quotidiennement les habitants des communes environnantes des Monts du Lyonnais et de l'Ouest Lyonnais.
      </p>
    </div>

    <div class="priority-grid">
      {#each priorityVilles as ville}
        <a 
          href="/{currentIntentionSlug}/{ville.slug}" 
          class="priority-card {activeCity?.slug === ville.slug ? 'active-city' : ''}"
        >
          <div class="city-info">
            <div class="city-head">
              <h3>{ville.name}</h3>
              <span class="cp-tag">{ville.cp}</span>
            </div>
            <p class="city-intent">
              {#if ville.isMainStudio}
                <strong>Studio Principal</strong>
              {:else}
                À <strong>{ville.dist}</strong> du studio
              {/if}
            </p>
          </div>
          <span class="card-arrow">
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        </a>
      {/each}
    </div>

    <div class="hub-footer-note">
      <p>
        <i class="fa-solid fa-circle-info"></i> Prise de vue rapide en 5 minutes sur rendez-vous. Parking gratuit sur place.
      </p>
    </div>
  </div>
</section>

<style>
  .local-hub-section {
    padding: 80px 0;
    background-color: var(--bg-main, #eee4d7);
    border-top: 1px solid var(--border-color, #dcc8b2);
  }

  .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px auto;
  }

  .hub-badge {
    background-color: rgba(197, 168, 128, 0.15);
    color: var(--accent-hover, #a68a5b);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 12px;
    color: var(--primary-color, #0f172a);
  }

  .section-header p {
    color: var(--text-light, #64748b);
    font-size: 1rem;
    line-height: 1.5;
  }

  .priority-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .priority-card {
    background: white;
    border-radius: 16px;
    padding: 20px 24px;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.25s ease;
    text-decoration: none;
    color: inherit;
  }

  .priority-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(197, 168, 128, 0.2);
    border-color: var(--accent-color, #c5a880);
  }

  .active-city {
    border: 2px solid var(--accent-color, #c5a880);
    background: linear-gradient(135deg, white 0%, rgba(197, 168, 128, 0.08) 100%);
  }

  .city-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
  }

  .city-head h3 {
    font-size: 1.15rem;
    color: var(--primary-color, #0f172a);
    margin: 0;
  }

  .cp-tag {
    font-size: 0.75rem;
    background: rgba(15, 23, 42, 0.06);
    color: var(--text-light, #64748b);
    padding: 2px 8px;
    border-radius: 6px;
    font-weight: 600;
  }

  .city-intent {
    font-size: 0.85rem;
    color: var(--text-light, #64748b);
    margin: 0;
  }

  .card-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    color: var(--primary-color, #0f172a);
    transition: all 0.2s ease;
  }

  .priority-card:hover .card-arrow {
    background-color: var(--primary-color, #0f172a);
    color: var(--accent-color, #c5a880);
  }

  .hub-footer-note {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-light, #64748b);
  }

  .hub-footer-note i {
    color: var(--accent-color, #c5a880);
    margin-right: 6px;
  }

  @media (max-width: 640px) {
    .priority-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
