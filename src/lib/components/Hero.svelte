<!-- src/lib/components/Hero.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
</script>

<section class="hero-section">
  <div class="container hero-container animate-fade-in">
    <div class="hero-content">
      <span class="badge">
        <i class="fa-solid fa-certificate"></i> Conforme ou Remboursé à 100%
      </span>
      
      <h1>
        {#if seoStore.intention}
          {seoStore.intention.name}
        {:else}
          Photos d'identité officielles
        {/if}
        <span>
          {#if seoStore.city}
            {seoStore.city.prepArticle}
          {:else}
            à Thurins
          {/if}
        </span>
      </h1>
      
      <p class="description">
        {#if seoStore.intention}
          {seoStore.intention.description}
        {:else}
          Vos e-photos ANTS et photos d'identité conformes pour passeport, carte d'identité (CNI), permis ou visa. Prise de vue professionnelle au studio à Thurins.
        {/if}
      </p>

      <div class="hero-actions">
        <a href="#acces" class="btn-primary">
          <i class="fa-regular fa-calendar-days"></i> Prendre rendez-vous au studio
        </a>
        <a href="#services" class="btn-secondary">Découvrir nos tarifs</a>
      </div>

      <div class="info-strip">
        <div class="info-item">
          <i class="fa-solid fa-clock"></i>
          <span>Sur RDV du Lundi au Samedi</span>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-bolt"></i>
          <span>Prêt en 5 minutes</span>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-baby"></i>
          <span>Spécialiste Bébé & Enfant</span>
        </div>
      </div>
    </div>
    
    <div class="hero-image-wrapper">
      <div class="card-studio glass">
        <div class="card-header-icon">
          <i class="fa-solid fa-house-chimney-user"></i>
        </div>
        <h3>Studio Photo Fabien Marceau</h3>
        <p>Thurins (69510) — Monts du Lyonnais</p>
        <span class="status-indicator">
          <span class="dot"></span> Ouvert aux réservations
        </span>
        <div class="address-box">
          <i class="fa-solid fa-location-dot"></i>
          <span>Service ultra-local pour {seoStore.city ? seoStore.city.name : 'Thurins'} et communes voisines.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    padding: 160px 0 100px 0;
    background: radial-gradient(circle at 10% 20%, rgba(197, 168, 128, 0.08) 0%, rgba(15, 23, 42, 0.02) 90%);
    overflow: hidden;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .badge {
    background-color: rgba(197, 168, 128, 0.15);
    color: var(--accent-hover);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .hero-content h1 {
    font-size: 3.8rem;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .hero-content h1 span {
    color: var(--accent-color);
    display: block;
  }

  .description {
    font-size: 1.2rem;
    color: var(--text-light);
    margin-bottom: 36px;
    max-width: 600px;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
    width: 100%;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    padding: 16px 28px;
    border-radius: 12px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.15);
  }

  .btn-primary:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(197, 168, 128, 0.3);
  }

  .btn-secondary {
    border: 1px solid var(--border-color);
    background-color: white;
    color: var(--primary-color);
    padding: 16px 28px;
    border-radius: 12px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
  }

  .btn-secondary:hover {
    background-color: var(--bg-main);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  .info-strip {
    display: flex;
    gap: 24px;
    border-top: 1px solid var(--border-color);
    padding-top: 24px;
    width: 100%;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-main);
  }

  .info-item i {
    color: var(--accent-color);
  }

  .hero-image-wrapper {
    display: flex;
    justify-content: center;
  }

  .card-studio {
    width: 100%;
    max-width: 360px;
    padding: 32px;
    border-radius: 24px;
    box-shadow: var(--shadow-premium);
    text-align: center;
    position: relative;
    border: 1.5px solid rgba(197, 168, 128, 0.2);
  }

  .card-header-icon {
    width: 64px;
    height: 64px;
    background-color: var(--primary-color);
    color: var(--accent-color);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    margin: 0 auto 20px auto;
  }

  .card-studio h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .card-studio p {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 20px;
  }

  .status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--success-color);
    background-color: rgba(16, 185, 129, 0.1);
    padding: 6px 14px;
    border-radius: 50px;
    margin-bottom: 24px;
  }

  .status-indicator .dot {
    width: 8px;
    height: 8px;
    background-color: var(--success-color);
    border-radius: 50px;
    box-shadow: 0 0 10px var(--success-color);
  }

  .address-box {
    display: flex;
    gap: 12px;
    text-align: left;
    background-color: rgba(15, 23, 42, 0.03);
    padding: 16px;
    border-radius: 12px;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .address-box i {
    color: var(--accent-color);
    font-size: 1.1rem;
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .hero-content h1 {
      font-size: 3rem;
    }
    .hero-image-wrapper {
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .hero-actions {
      flex-direction: column;
    }
    .info-strip {
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
