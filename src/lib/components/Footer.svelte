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
    grid-template-columns: 1.2fr 0.8fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
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

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
</style>
