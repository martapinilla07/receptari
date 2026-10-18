<template>
  <main class="about-page">
    <article class="about-content">
      <p class="eyebrow">El projecte</p>
      <h1>Sobre nosaltres</h1>

      <p>
        Receptari és un projecte acadèmic de web dinàmica pensat per reunir i
        presentar receptes de manera clara i agradable. L'objectiu és fer que
        trobar inspiració per al proper àpat sigui senzill.
      </p>

      <p>
        La interfície està construïda amb <strong>Vue 3</strong>, que permet
        organitzar l'aplicació en components reutilitzables. La navegació entre
        les pàgines es gestiona amb <strong>Vue Router</strong>.
      </p>

      <p>
        Les receptes es llegeixen des de <strong>Firebase</strong>, amb
        <strong>Firestore</strong> com a base de dades. Això permet obtenir i
        mostrar el contingut de manera dinàmica dins del receptari.
      </p>
    </article>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 68vh;
  padding: 4rem 1.5rem;
  background: #f4f7ff;
}

.about-content {
  width: min(100%, 800px);
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 3rem);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 8px 28px rgb(45 55 72 / 8%);
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: #6c63ff;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about-content h1 {
  margin: 0 0 1.5rem;
  color: #2d3748;
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.about-content p:not(.eyebrow) {
  margin: 0 0 1rem;
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.85;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.about-content strong {
  color: #ff6584;
}
</style>
