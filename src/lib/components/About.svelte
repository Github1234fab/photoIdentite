<!-- src/lib/components/About.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
</script>

<section class="about-section" id="about">
  <div class="container about-grid">
    <div class="about-details">
      <h2>Un photographe professionnel à votre écoute</h2>
      <p class="highlight">
        Finies les cabines automatiques froides et les photos rejetées par la préfecture. Au studio de Thurins, nous prenons le temps d'obtenir un cliché conforme et flatteur.
      </p>
      <p>
        Photographe expérimenté basé à Thurins, j'accueille les habitants des Monts du Lyonnais pour réaliser leurs photos d'identité officielles. Grâce à un équipement d'éclairage professionnel et une validation logicielle instantanée aux normes ISO, vous avez l'assurance que votre photo sera acceptée à 100% par la mairie.
      </p>
      
      <div class="perks-list">
        <div class="perk-card">
          <div class="perk-icon"><i class="fa-solid fa-face-smile"></i></div>
          <div>
            <h4>Idéal pour les bébés et enfants</h4>
            <p>La patience d'un professionnel pour capter le regard des plus jeunes (dès quelques mois) en toute confiance.</p>
          </div>
        </div>
        
        <div class="perk-card">
          <div class="perk-icon"><i class="fa-solid fa-wheelchair"></i></div>
          <div>
            <h4>Studio accessible et convivial</h4>
            <p>Accueil chaleureux à Thurins avec stationnement facile et accès adapté.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-stats-card">
      <div class="stat-box">
        <span class="number">100%</span>
        <span class="label">Taux d'acceptation garanti</span>
      </div>
      <div class="stat-box">
        <span class="number">5 min</span>
        <span class="label">Impression & découpe immédiate</span>
      </div>
      <div class="stat-box">
        <span class="number">ANTS</span>
        <span class="label">Agrément officiel e-photo</span>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    padding: 100px 0;
    background-color: white;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 80px;
    align-items: center;
  }

  .about-details h2 {
    font-size: 2.2rem;
    margin-bottom: 24px;
  }

  .highlight {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primary-light);
    margin-bottom: 20px;
  }

  .about-details p {
    color: var(--text-light);
    margin-bottom: 30px;
  }

  .perks-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .perk-card {
    display: flex;
    gap: 16px;
  }

  .perk-icon {
    width: 48px;
    height: 48px;
    background-color: rgba(197, 168, 128, 0.1);
    color: var(--accent-hover);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .perk-card h4 {
    font-size: 1rem;
    margin-bottom: 4px;
  }

  .perk-card p {
    font-size: 0.85rem;
    margin-bottom: 0;
  }

  .about-stats-card {
    background-color: var(--primary-color);
    color: white;
    padding: 48px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-shadow: var(--shadow-premium);
  }

  .stat-box {
    display: flex;
    flex-direction: column;
    border-left: 3px solid var(--accent-color);
    padding-left: 20px;
  }

  .stat-box .number {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--accent-color);
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-box .label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 960px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
</style>
