src/lib/components/Header.svelte
<script>
  import { seoStore } from '$lib/stores/seoStore.svelte.js';
</script>

<header class="header glass">
  <div class="container nav-wrapper">
    <a href="/" class="logo">
      <i class="fa-solid fa-camera-retro"></i>
      <span>Studio <strong>Thurins</strong></span>
    </a>
    
    <nav class="nav-links">
      <a href="#services">Services</a>
      <a href="#tarifs">Tarifs</a>
      <a href="#faq">Conformité</a>
      <a href="tel:0672901614" class="cta-nav">
        <i class="fa-solid fa-phone"></i> Nous appeler
      </a>
    </nav>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(15, 23, 42, 0.05);
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary-color);
  }

  .logo i {
    color: var(--accent-color);
    font-size: 1.5rem;
  }

  .logo span strong {
    color: var(--accent-color);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .nav-links a:not(.cta-nav) {
    color: var(--text-main);
  }

  .nav-links a:not(.cta-nav):hover {
    color: var(--accent-color);
  }

  .cta-nav {
    background-color: var(--primary-color);
    color: white !important;
    padding: 10px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
  }

  .cta-nav:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(197, 168, 128, 0.3);
  }

  @media (max-width: 640px) {
    .nav-links a:not(.cta-nav) {
      display: none;
    }
  }

  @media (max-width: 375px) {
    .logo {
      font-size: 1.1rem;
    }
    .logo i {
      font-size: 1.25rem;
    }
    .cta-nav {
      padding: 8px 14px;
      font-size: 0.8rem;
      gap: 6px;
    }
  }
</style>
