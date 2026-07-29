<!-- src/lib/components/Access.svelte -->
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
</script>

<section class="access-section" id="acces">
  <div class="container access-grid">
    <div class="booking-card glass">
      <h3>Contact & Prise de RDV</h3>
      <p class="intro">Les photos d'identité se font sur rendez-vous rapide. Contactez-moi avant de vous déplacer pour vous assurer d'un passage immédiat et sans attente !</p>
      
      <div class="contact-details">
        <div class="contact-item">
          <div class="icon"><i class="fa-solid fa-phone"></i></div>
          <div>
            <span>Téléphone (Appel ou SMS)</span>
            <p><strong>06 72 90 16 14</strong></p>
          </div>
        </div>

        <div class="contact-item">
          <div class="icon"><i class="fa-solid fa-envelope"></i></div>
          <div>
            <span>E-mail</span>
            <p>id.domicile@gmail.com</p>
          </div>
        </div>
      </div>

      <a href="tel:0672901614" class="btn-rdv">
        <i class="fa-solid fa-phone"></i> Appeler pour convenir d'un RDV
      </a>
    </div>

    <div class="info-card">
      <h2>Venir au Studio</h2>
      <p class="subtitle">Thurins — Monts du Lyonnais</p>
      <p class="address">
        <i class="fa-solid fa-location-dot"></i>
        <span><strong>Studio Photo Fabien Marceau</strong><br />69510 Thurins</span>
      </p>
      <p class="neighborhood-info">
        {#if seoStore.city}
          Idéalement situé à quelques minutes seulement de <strong>{seoStore.city.name}</strong>, le studio à Thurins dispose de places de stationnement gratuites juste devant la porte.
        {:else}
          Idéalement situé pour les habitants de Thurins, Brindas, Vaugneray, Mornant et de l'ouest lyonnais. Stationnement gratuit et facile d'accès.
        {/if}
      </p>

      <div class="hours-box">
        <h3>Horaires d'ouverture</h3>
        <ul>
          <li><span>Lundi</span> <span>09:00 - 19:00</span></li>
          <li><span>Mardi</span> <span>09:00 - 19:00</span></li>
          <li><span>Mercredi</span> <span>09:00 - 19:00</span></li>
          <li><span>Jeudi</span> <span>09:00 - 19:00</span></li>
          <li><span>Vendredi</span> <span>09:00 - 19:00</span></li>
          <li><span>Samedi</span> <span>09:00 - 13:00</span></li>
          <li><span>Dimanche</span> <span class="closed">Fermé</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .access-section {
    padding: 100px 0;
    background-color: var(--bg-main);
  }

  .access-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
    align-items: start;
  }

  .booking-card {
    background-color: white;
    padding: 48px;
    border-radius: 24px;
    box-shadow: var(--shadow-premium);
    border: 1px solid var(--border-color);
  }

  .booking-card h3 {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  .intro {
    color: var(--text-light);
    margin-bottom: 32px;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
  }

  .contact-item {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .contact-item .icon {
    width: 44px;
    height: 44px;
    background-color: rgba(15, 23, 42, 0.03);
    color: var(--accent-color);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }

  .contact-item span {
    font-size: 0.8rem;
    color: var(--text-light);
    display: block;
  }

  .contact-item p {
    font-size: 0.95rem;
    color: var(--text-dark);
    margin: 0;
  }

  .btn-rdv {
    background-color: var(--primary-color);
    color: white;
    padding: 16px 28px;
    border-radius: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.15);
    text-align: center;
  }

  .btn-rdv:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(197, 168, 128, 0.3);
  }

  .info-card h2 {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .address {
    font-size: 1.15rem;
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    color: var(--text-dark);
  }

  .address i {
    color: var(--accent-color);
    font-size: 1.3rem;
    margin-top: 4px;
  }

  .neighborhood-info {
    font-size: 0.95rem;
    color: var(--text-light);
    margin-bottom: 36px;
    line-height: 1.6;
  }

  .hours-box {
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
  }

  .hours-box h3 {
    font-size: 1rem;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 8px;
  }

  .hours-box ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .hours-box li {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .closed {
    color: #ef4444;
    font-weight: 600;
  }

  @media (max-width: 960px) {
    .access-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
</style>
