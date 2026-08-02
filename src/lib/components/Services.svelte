<!-- src/lib/components/Services.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
  import ephotoImg from '$lib/assets/e-photo_site.jpg';
  import identiteImg from '$lib/assets/identite.jpg';
  import enfantImg from '$lib/assets/enfant.jpg';
  import visaImg from '$lib/assets/visa_site.jpg';
  import linkedinImg from '$lib/assets/linkedin.jpg';
   import domicile from '$lib/assets/domicile.jpg';

</script>

<section class="services-section" id="services">
  <div class="container">
    <div class="section-header">
      <h2>Tarifs & Prestations du Studio</h2>
      <p>Des photos d'identité officielles de haute qualité imprimées sur papier thermique professionnel, ou délivrées au format numérique ANTS.</p>
    </div>

    <div class="services-grid">
      <!-- Card 1 -->
      <div class="service-card {seoStore.intention?.slug === 'photo-identite-ants' || seoStore.intention?.slug === 'photo-permis-de-conduire' ? 'active-seo' : ''}">
        <div class="card-image-wrapper">
          <img src={ephotoImg} alt="Planche ANTS" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-signature"></i></div>
            <h3>e-Photo ANTS</h3>
            <p class="subtitle">Permis & Titre de séjour</p>
            <p class="description">Prise de vue + planche de 4 photos papier + transmission numérique signature ANTS.</p>
          </div>
          <div class="price-row">
            <span class="price">16,99 €</span>
            <span class="terms">Prêt en 5 min</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="service-card {seoStore.intention?.slug === 'photo-passeport' || seoStore.intention?.slug === 'photo-carte-identite' ? 'active-seo' : ''}">
        <div class="card-image-wrapper">
          <img src={identiteImg} alt="Identité Officielle" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-passport"></i></div>
            <h3>Identité Officielle</h3>
            <p class="subtitle">Passeport, CNI, Carte Vitale</p>
            <p class="description">Prise de vue + planche de 6 photos papier officielles conformes aux critères mairie (Norme OACI).</p>
          </div>
          <div class="price-row">
            <span class="price">14,99 €</span>
            <span class="terms">Prêt en 5 min</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="service-card {seoStore.intention?.slug === 'photo-identite-bebe-enfant' ? 'active-seo' : ''}">
        <div class="card-image-wrapper">
          <img src={enfantImg} alt="Spécial Bébé & Enfant" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-baby-carriage"></i></div>
            <h3>Spécial Bébé & Enfant</h3>
            <p class="subtitle">Moins de 5 ans</p>
            <p class="description">Créneau dédié de 30 min. Prise de vue calme et patiente pour garantir la conformité.</p>
          </div>
          <div class="price-row">
            <span class="price">19,99 €</span>
            <span class="terms">Séance 30 min</span>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="service-card {seoStore.intention?.slug === 'photo-visa' ? 'active-seo' : ''}">
        <div class="card-image-wrapper">
          <img src={visaImg} alt="Visas Officiels" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-plane-departure"></i></div>
            <h3>Visas Officiels</h3>
            <p class="subtitle">USA, Inde, Chine, Canada...</p>
            <p class="description">Prise de vue et découpe spécifique aux normes des consulats étrangers.</p>
          </div>
          <div class="price-row">
            <span class="price">16,99 €</span>
            <span class="terms">Tous pays</span>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="service-card">
        <div class="card-image-wrapper">
          <img src={linkedinImg} alt="Portrait Pro & CV" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-user-tie"></i></div>
            <h3>Portrait Pro & CV</h3>
            <p class="subtitle">Profil LinkedIn & CV</p>
            <p class="description">Valorisez votre image de marque. Séance de prise de vue en studio avec retouche de qualité.</p>
          </div>
          <div class="price-row">
            <span class="price">89 €</span>
            <span class="terms">1 fichier HD</span>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
       <div class="service-card">
        <div class="card-image-wrapper">
          <img src={domicile} alt="Portrait Pro & CV" class="card-image" />
        </div>
        <div class="card-body-content">
          <div>
            <div class="service-icon"><i class="fa-solid fa-user-tie"></i></div>
            <h3>Studio à domicile</h3>
            <p class="subtitle">Toute photo d'identité</p>
            <p class="description">Vous ne pouvez vous déplacer, optez pour le service à domicile. Déplacement + photo d'identité + impression sur place et remise des photos en main propre immédiatement</p>
          </div>
          <div class="price-row">
            <span class="price">49 €</span>
            <span class="terms">Idéal PMR</span>
          </div>
        </div>
      </div>
    </div>

    
    

    <!-- Options & Conseils -->
    <div class="pricing-tips">
      <div class="tip-card">
        <i class="fa-solid fa-layer-group"></i>
        <div>
          <h4>Planche papier supplémentaire</h4>
          <p>Besoin de plus d'exemplaires ? Profitez d'une planche papier additionnelle pour seulement <strong>+6 €</strong> lors de votre séance.</p>
        </div>
      </div>
      <div class="tip-card">
        <i class="fa-solid fa-credit-card"></i>
        <div>
          <h4>Moyens de paiement acceptés</h4>
          <p>Nous acceptons les règlements en <strong>Espèces, Chèque, Virement bancaire et Wero</strong> (pas de carte bancaire).</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 100px 0;
    background-color: var(--bg-main);
  }

  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 60px auto;
  }

  .section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }

  .section-header p {
    color: var(--text-light);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  .service-card {
    background-color: white;
    border-radius: 20px;
    box-shadow: var(--shadow-premium);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 520px;
    transition: var(--transition-smooth);
    border: 1px solid var(--border-color);
    overflow: hidden;
  }

  .card-image-wrapper {
    width: 100%;
    height: 200px;
padding: 10px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid var(--border-color);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center 20%;
    transition: var(--transition-smooth);
  }

  .service-card:hover .card-image {
    transform: scale(1.05);
  }

  .card-body-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent-color);
  }

  .active-seo {
    border: 2px solid var(--accent-color);
    background: linear-gradient(135deg, white 0%, rgba(197, 168, 128, 0.05) 100%);
  }

  .service-icon {
    width: 56px;
    height: 56px;
    background-color: rgba(15, 23, 42, 0.03);
    color: var(--primary-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 24px;
    transition: var(--transition-smooth);
  }

  .service-card:hover .service-icon {
    background-color: var(--primary-color);
    color: var(--accent-color);
  }

  .service-card h3 {
    font-size: 1.3rem;
    margin-bottom: 6px;
  }

  .subtitle {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
  }

  .service-card .description {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 30px;
    flex-grow: 1;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
  }

  .price {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--primary-color);
  }

  .terms {
    font-size: 0.8rem;
    color: var(--text-light);
    font-weight: 500;
  }

  .pricing-tips {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: var(--shadow-premium);
    border: 1px solid var(--border-color);
  }

  .tip-card {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .tip-card i {
    font-size: 1.8rem;
    color: var(--accent-color);
    margin-top: 4px;
  }

  .tip-card h4 {
    font-size: 1.05rem;
    margin-bottom: 6px;
    color: var(--primary-color);
  }

  .tip-card p {
    font-size: 0.9rem;
    color: var(--text-light);
    margin: 0;
  }

  @media (max-width: 768px) {
    .pricing-tips {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
</style>
