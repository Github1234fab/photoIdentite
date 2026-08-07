 <!-- src/lib/components/Footer.svelte -->
<footer class="footer">
  <div class="container footer-grid">
    <div class="brand">
      <h3>Studio Thurins</h3>
      <p>Photos d'identité professionnelles et conformes garanties à 100%.</p>
    </div>
    
    <div class="links">
      <h4>Navigation</h4>
      <a href="#about">À propos</a>
      <a href="#services">Prestations</a>
      <a href="#faq">Réglementation</a>
      <a href="#acces">Prendre RDV</a>
    </div>

    <div class="links">
      <h4>Zone d'intervention</h4>
      <div class="villes-list">
        <a href="/photo-carte-identite/thurins">Thurins</a>
        <a href="/photo-carte-identite/brindas">Brindas</a>
        <a href="/photo-carte-identite/vaugneray">Vaugneray</a>
        <a href="/photo-carte-identite/saint-martin-en-haut">St-Martin-en-Haut</a>
        <a href="/photo-carte-identite/soucieu-en-jarrest">Soucieu-en-Jarrest</a>
        <a href="/photo-carte-identite/mornant">Mornant</a>
        <a href="/photo-carte-identite/craponne">Craponne</a>
        <a href="/photo-carte-identite/brignais">Brignais</a>
        <a href="/photo-carte-identite/grezieu-la-varenne">Grézieu-la-Varenne</a>
        <a href="/photo-carte-identite/saint-laurent-dagny">St-Laurent-d'Agny</a>
        <a href="/photo-carte-identite/oullins">Oullins</a>
        <a href="/photo-carte-identite/saint-genis-laval">St-Genis-Laval</a>
        <a href="/photo-carte-identite/messimy">Messimy</a>
        <a href="/photo-carte-identite/saint-symphorien-sur-coise">St-Symphorien-sur-Coise</a>
      </div>
    </div>

    <div class="legal">
      <h4>Mentions Légales</h4>
      <p>© 2026 Studio Photo Fabien Marceau. Tous droits réservés.</p>
      <p>Studio à Thurins (69510) — Monts du Lyonnais.</p>
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
