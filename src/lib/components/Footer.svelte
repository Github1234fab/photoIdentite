 <!-- src/lib/components/Footer.svelte -->

<script>
  import { villesSEO } from '$lib/data/villes.js';
  
  // Séparer les 10 villes prioritaires et les autres
  const priorityVilles = Object.values(villesSEO).filter(v => v.isPriority).sort((a, b) => a.name.localeCompare(b.name));
  const secondaryVilles = Object.values(villesSEO).filter(v => !v.isPriority).sort((a, b) => a.name.localeCompare(b.name));
  
  let showAllVilles = $state(false);
</script>

<footer class="footer">
  <div class="container footer-grid">
    <div class="brand">
      <h3>Studio Thurins</h3>
      <p>Photos d'identité professionnelles et conformes garanties à 100%.</p>
      <div class="ididem-footer-link">
        <i class="fa-solid fa-laptop"></i> Service en ligne : <a href="https://ididem.com" target="_blank" rel="noopener">IDidem.com</a>
      </div>
    </div>
    
    <div class="links">
      <h4>Navigation</h4>
      <a href="/#about">À propos</a>
      <a href="/#services">Prestations</a>
      <a href="/#faq">Réglementation</a>
      <a href="/#acces">Prendre RDV</a>
      <a href="https://ididem.com" target="_blank" rel="noopener" class="external-link">IDidem.com (e-Photo)</a>
    </div>

    <div class="links priority-villes-col">
      <h4>Top Communes (Studio Thurins)</h4>
      <div class="villes-list priority-list">
         {#each priorityVilles as ville}
          <a href="/photo-carte-identite/{ville.slug}" class="priority-link">
            {ville.name} <span class="dist-badge">{ville.dist}</span>
          </a>
         {/each}
      </div>
      <button class="btn-toggle-villes" onclick={() => showAllVilles = !showAllVilles}>
        {showAllVilles ? 'Masquer autres communes' : 'Voir les 39 communes desservies (+)'}
      </button>

      {#if showAllVilles}
        <div class="villes-list secondary-list">
          {#each secondaryVilles as ville}
            <a href="/photo-carte-identite/{ville.slug}">{ville.name}</a>
          {/each}
        </div>
      {/if}
    </div>

    <div class="legal">
      <h4>Mentions Légales</h4>
      <p>© 2026 Studio Photo Fabien Marceau. Tous droits réservés.</p>
      <p>Studio à Thurins (69510) — Monts du Lyonnais.</p>
      <p class="partner-note">Site affilié : <a href="https://ididem.com" target="_blank" rel="noopener">https://ididem.com</a></p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--primary-color);
    color: white;
    padding: 60px 0 40px 0;
    border-top: 1.5px solid rgba(197, 168, 128, 0.2);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr 1.2fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .villes-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
  }

  .villes-list a {
    font-size: 0.85rem !important;
    white-space: nowrap;
  }

  .brand h3 {
    color: var(--accent-color);
    margin-bottom: 12px;
  }

  .brand p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 280px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .links h4 {
    color: white;
    font-size: 0.95rem;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .links a {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .links a:hover {
    color: var(--accent-color);
    padding-left: 4px;
  }

  .legal h4 {
    color: white;
    font-size: 0.95rem;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .legal p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
  }

  .ididem-footer-link {
    margin-top: 16px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .ididem-footer-link a {
    color: var(--accent-color);
    font-weight: 600;
    text-decoration: underline;
  }

  .priority-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .dist-badge {
    font-size: 0.7rem;
    background: rgba(197, 168, 128, 0.2);
    color: var(--accent-color);
    padding: 1px 6px;
    border-radius: 4px;
  }

  .btn-toggle-villes {
    background: transparent;
    border: none;
    color: var(--accent-color);
    font-size: 0.8rem;
    text-align: left;
    cursor: pointer;
    padding: 6px 0;
    margin-top: 4px;
    text-decoration: underline;
  }

  .btn-toggle-villes:hover {
    color: white;
  }

  .secondary-list {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px dashed rgba(255, 255, 255, 0.15);
  }

  .partner-note a {
    color: var(--accent-color);
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
</style> 
