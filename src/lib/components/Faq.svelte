<!-- src/lib/components/Faq.svelte -->
<section class="faq-section" id="faq">
  <div class="container">
    <div class="section-header">
      <h2>Les normes officielles de conformité</h2>
      <p>Pour être acceptées en mairie ou en préfecture, vos photos d'identité doivent respecter des critères stricts (Norme ISO/IEC 19794-5).</p>
    </div>

    <div class="faq-grid">
      <div class="faq-item">
        <h4><i class="fa-solid fa-circle-info"></i> Quel est le format obligatoire ?</h4>
        <p>Pour la France, la photo doit mesurer 35 mm de large sur 45 mm de haut. Le visage doit occuper entre 32 et 36 mm (du bas du menton au sommet du crâne).</p>
      </div>

      <div class="faq-item">
        <h4><i class="fa-solid fa-circle-info"></i> Quelle expression de visage adopter ?</h4>
        <p>Le visage doit être neutre, la bouche fermée, sans sourire. Les yeux doivent être ouverts et fixer l'objectif.</p>
      </div>

      <div class="faq-item">
        <h4><i class="fa-solid fa-circle-info"></i> Les lunettes sont-elles autorisées ?</h4>
        <p>Oui, mais la monture ne doit pas masquer les yeux, et il ne doit y avoir aucun reflet sur les verres. Les verres teintés ou colorés sont interdits. Il est souvent conseillé de les retirer.</p>
      </div>

      <div class="faq-item">
        <h4><i class="fa-solid fa-circle-info"></i> Quelle doit être la coiffure et le fond ?</h4>
        <p>La tête doit être nue (pas de chapeau, serre-tête, ou foulard). Les cheveux ne doivent pas masquer le visage. Le fond doit être uni, de couleur claire (bleu clair ou gris clair), mais pas blanc.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .faq-section {
    padding: 100px 0;
    background-color: white;
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

  .faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .faq-item {
    background-color: var(--bg-main);
    padding: 32px;
    border-radius: 16px;
    border: 1px solid var(--border-color);
  }

  .faq-item h4 {
    font-size: 1.1rem;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-color);
  }

  .faq-item h4 i {
    color: var(--accent-color);
  }

  .faq-item p {
    font-size: 0.95rem;
    color: var(--text-light);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .faq-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
</style>
