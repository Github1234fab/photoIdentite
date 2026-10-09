<!-- src/lib/components/LocalDetails.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';

  let city = $derived(seoStore.city);
  let intention = $derived(seoStore.intention);
</script>

{#if city}
<section class="local-details-section">
  <div class="container">
    <div class="local-grid">
      
      <!-- Card 1: Accès & Proximité -->
      <div class="local-card">
        <div class="card-icon">
          <i class="fa-solid fa-route"></i>
        </div>
        <h3>Venir depuis {city.name} ({city.cp})</h3>
        <p class="card-lead">{city.localContext}</p>
        <ul class="details-list">
          <li>
            <i class="fa-solid fa-car"></i>
            <div>
              <strong>Trajet & Itinéraire :</strong>
              <span>{city.routeInfo}</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-square-parking"></i>
            <div>
              <strong>Stationnement :</strong>
              <span>Parking gratuit disponible juste en face du studio.</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-stopwatch"></i>
            <div>
              <strong>Rapidité :</strong>
              <span>Prise de vue et impression en 5 minutes chrono sur place.</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Card 2: Démarches Mairie & Conformité -->
      <div class="local-card highlight-card">
        <div class="card-icon accent-icon">
          <i class="fa-solid fa-building-columns"></i>
        </div>
        <h3>Démarches Mairie près de {city.name}</h3>
        <p class="card-lead">
          Où déposer votre demande de carte d'identité ou passeport après vos photos ?
        </p>
        <ul class="details-list">
          <li>
            <i class="fa-solid fa-landmark"></i>
            <div>
              <strong>Mairie équipée DR proche :</strong>
              <span>{city.mairieRecueil}</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-check-double"></i>
            <div>
              <strong>Garantie de conformité OACI :</strong>
              <span>100% validées en mairie ou refaites gratuitement immédiatement.</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-qrcode"></i>
            <div>
              <strong>Format numérique ANTS :</strong>
              <span>Code e-photo et signature dématérialisée transmis par SMS/e-mail.</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Card 3: Pourquoi le Studio plutôt que la Cabine Automatique -->
      <div class="local-card">
        <div class="card-icon">
          <i class="fa-solid fa-camera-retro"></i>
        </div>
        <h3>Pourquoi éviter la cabine automatique à {city.name} ?</h3>
        <p class="card-lead">
          Les photomatons automatiques génèrent un taux de rejet élevé en mairie pour non-conformité.
        </p>
        <ul class="details-list">
          <li>
            <i class="fa-solid fa-shield-xmark"></i>
            <div>
              <strong>Moins de rejets :</strong>
              <span>Contrôle humain du cadrage, de la lumière et des yeux dégagés.</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-baby"></i>
            <div>
              <strong>Spécialiste Bébés & Enfants :</strong>
              <span>Impossible en cabine automatique, nous prenons le temps nécessaire.</span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-heart-pulse"></i>
            <div>
              <strong>Accueil personnalisé :</strong>
              <span>Photographe professionnel patient et à votre écoute sur RDV.</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/if}

<style>
  .local-details-section {
    padding: 70px 0;
    background-color: #ffffff;
    border-top: 1px solid var(--border-color, #e2e8f0);
    border-bottom: 1px solid var(--border-color, #e2e8f0);
  }

  .local-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .local-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .local-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  .highlight-card {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
    border-color: rgba(197, 168, 128, 0.4);
  }

  .highlight-card h3 {
    color: white;
  }

  .highlight-card .card-lead {
    color: rgba(255, 255, 255, 0.8);
  }

  .highlight-card .details-list span {
    color: rgba(255, 255, 255, 0.85);
  }

  .highlight-card .details-list strong {
    color: white;
  }

  .card-icon {
    width: 52px;
    height: 52px;
    background-color: rgba(15, 23, 42, 0.06);
    color: var(--primary-color, #0f172a);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .accent-icon {
    background-color: rgba(197, 168, 128, 0.2);
    color: var(--accent-color, #c5a880);
  }

  .local-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--primary-color, #0f172a);
  }

  .card-lead {
    font-size: 0.95rem;
    color: var(--text-light, #64748b);
    line-height: 1.5;
    margin-bottom: 24px;
  }

  .details-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .details-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.9rem;
  }

  .details-list i {
    color: var(--accent-color, #c5a880);
    font-size: 1.1rem;
    margin-top: 3px;
    flex-shrink: 0;
  }

  .details-list strong {
    display: block;
    color: var(--primary-color, #0f172a);
    margin-bottom: 2px;
  }

  .details-list span {
    color: var(--text-light, #64748b);
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .local-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
