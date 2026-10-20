<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';

  let { city = null, intention = null } = $props();

  let activeCity = $derived(city ?? seoStore.city);
  let activeIntention = $derived(intention ?? seoStore.intention);
</script>

<section class="hero-section">
  <div class="container hero-container animate-fade-in">
    <div class="hero-content">
      <span class="badge">
        <i class="fa-solid fa-certificate"></i> Conforme ou Remboursé à 100%
      </span>
      
      <h1>
        {#if activeIntention}
          {activeIntention.name}
        {:else}
          Photos d'identité officielles
        {/if}
        <span>
          {#if activeCity}
            {#if !activeCity.isMainStudio}
              {activeCity.prepArticle} — Studio Thurins
            {:else}
              {activeCity.prepArticle}
            {/if}
          {:else}
            à Thurins
          {/if}
        </span>
      </h1>
      
      <p class="description">
        {#if activeIntention}
          {activeIntention.description}
        {:else}
          Vos e-photos ANTS et photos d'identité conformes pour passeport, carte d'identité (CNI), permis ou visa. Prise de vue professionnelle au studio à Thurins.
        {/if}
      </p>

      <div class="hero-actions">
        <a href="tel:0672901614" class="btn-primary">
          <i class="fa-solid fa-phone"></i> Appeler pour un RDV
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
      <div class="hero-card-container">
        <div class="hero-image-frame">
          <img 
            src="/planche_HeroBanner.jpeg" 
            alt="Planche d'identité officielle ANTS et Passeport - Studio Fabien Marceau à Thurins" 
            class="hero-img"
            loading="eager"
          />
          <div class="status-indicator-badge">
            <span class="dot"></span> Ouvert aux réservations
          </div>
        </div>

        <div class="studio-floating-tag glass">
          <div class="tag-header">
            <div class="tag-icon">
              <i class="fa-solid fa-camera"></i>
            </div>
            <div>
              <h3>Studio Photo Fabien Marceau</h3>
              <p>Thurins (69510) — Monts du Lyonnais</p>
            </div>
          </div>
          <div class="address-box">
            <i class="fa-solid fa-location-dot"></i>
            <span>Service ultra-local pour {activeCity ? activeCity.name : 'Thurins'} et communes voisines.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    padding: 160px 0 100px 0;
    background: 
      radial-gradient(ellipse at 85% 25%, rgba(186, 142, 98, 0.28) 0%, transparent 55%),
      radial-gradient(ellipse at 15% 20%, rgba(255, 251, 245, 0.95) 0%, transparent 60%),
      linear-gradient(180deg, #f8f1e7 0%, #e8dbcc 100%);
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
    font-size: clamp(2.4rem, 4vw, 3.8rem);
    line-height: 1.15;
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

  .hero-card-container {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  .hero-image-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-premium, 0 20px 40px rgba(0, 0, 0, 0.12));
    background-color: var(--primary-color);
    aspect-ratio: 16 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    transform: scale(1.32);
    transition: transform 0.5s ease;
  }

  .hero-image-frame:hover .hero-img {
    transform: scale(1.38);
  }

  .status-indicator-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #ffffff;
    background: linear-gradient(135deg, #10b981 0%, #047857 100%);
    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.45);
    padding: 7px 15px;
    border-radius: 50px;
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    letter-spacing: 0.01em;
    z-index: 2;
  }

  .status-indicator-badge .dot {
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 8px #ffffff;
    animation: pulse-dot 1.8s infinite ease-in-out;
  }

  @keyframes pulse-dot {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.45;
      transform: scale(0.8);
    }
  }

  .studio-floating-tag {
    padding: 20px 24px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    border: 1.5px solid rgba(197, 168, 128, 0.25);
    background: white;
  }

  .tag-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  .tag-icon {
    width: 44px;
    height: 44px;
    background-color: var(--primary-color);
    color: var(--accent-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .studio-floating-tag h3 {
    font-size: 1.15rem;
    margin: 0 0 2px 0;
    color: var(--primary-color);
  }

  .studio-floating-tag p {
    font-size: 0.85rem;
    color: var(--text-light);
    margin: 0;
  }

  .address-box {
    display: flex;
    gap: 10px;
    text-align: left;
    background-color: rgba(15, 23, 42, 0.03);
    padding: 12px 14px;
    border-radius: 12px;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .address-box i {
    color: var(--accent-color);
    font-size: 1rem;
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
    .hero-content h1 {
      font-size: 2.1rem;
    }
    .description{
      font-size: 14px;
    }
    .hero-actions {
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }
    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
      padding: 14px 20px;
    }
    .info-strip {
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
