<!-- src/lib/components/IdidemBanner.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
</script>

<section class="ididem-banner">
  <div class="container">
    <div class="ididem-card">
      <div class="ididem-content">
        <div class="ididem-badge">
          <i class="fa-solid fa-laptop"></i> Service en Ligne Partenaire & Agrée
        </div>
        <h2>Impossible de vous déplacer au studio {#if seoStore.city}{seoStore.city.prepArticle}{:else}à Thurins{/if} ?</h2>
        <p>
          Découvrez notre plateforme partenaire <a href="https://ididem.com" target="_blank" rel="noopener" class="inline-link"><strong>IDidem.com</strong></a> pour réaliser votre 
          <a href="https://ididem.com/e-photo-ants-en-ligne/lyon" target="_blank" rel="noopener" class="inline-link">e-photo ANTS en ligne</a> ou votre 
          <a href="https://ididem.com/photo-identite-en-ligne/lyon" target="_blank" rel="noopener" class="inline-link">photo d'identité officielle en ligne</a> avec validation conforme par un photographe qualifié.
        </p>
        <div class="ididem-features">
          <div class="feature-item">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Agrément ANTS garanti</span>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>Faites la photo avec votre smartphone</span>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-envelope"></i>
            <span>Recevez vos e-photos & code par e-mail</span>
          </div>
        </div>
      </div>
      <div class="ididem-cta">
        <a href="https://ididem.com" target="_blank" rel="noopener" class="btn-ididem">
          Commandez sur IDidem.com <i class="fa-solid fa-arrow-right"></i>
        </a>
        <span class="sub-text">100% Conforme aux exigences OACI / ANTS</span>
      </div>
    </div>
  </div>
</section>

<style>
  .ididem-banner {
    padding: 60px 0;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
  }

  .ididem-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(197, 168, 128, 0.3);
    border-radius: 24px;
    padding: 40px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  }

  .ididem-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(197, 168, 128, 0.2);
    color: #c5a880;
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .ididem-content {
    max-width: 680px;
  }

  .ididem-content h2 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 12px;
  }

  .ididem-content p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .inline-link {
    color: #c5a880;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s;
  }

  .inline-link:hover {
    color: white;
  }

  .ididem-features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
  }

  .feature-item i {
    color: #c5a880;
  }

  .ididem-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
  }

  .btn-ididem {
    background-color: #c5a880;
    color: #0f172a;
    padding: 16px 28px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(197, 168, 128, 0.3);
  }

  .btn-ididem:hover {
    background-color: white;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(255, 255, 255, 0.3);
  }

  .sub-text {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 992px) {
    .ididem-card {
      flex-direction: column;
      text-align: center;
      padding: 30px 24px;
    }

    .ididem-content {
      max-width: 100%;
    }

    .ididem-features {
      justify-content: center;
    }

    .ididem-cta {
      width: 100%;
    }

    .btn-ididem {
      width: 100%;
      justify-content: center;
    }
  }
</style>
