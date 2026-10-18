<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">Cuina, comparteix i gaudeix</p>
      <h1 id="hero-title">Benvingut al Receptari</h1>

      <p class="hero-subtitle">
        Descobreix receptes fàcils, saludables i delicioses per al teu dia a dia.
      </p>

      <p class="hero-description">
        Explora plats guardats a Firebase Firestore i troba inspiració per a la
        teva propera aventura a la cuina.
      </p>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  display: grid;
  min-height: 68vh;
  place-items: center;
  padding: 4rem 1.5rem;
  background:
    radial-gradient(ellipse at top, rgb(108 99 255 / 12%), transparent 60%),
    #f4f7ff;
}

.hero {
  width: min(100%, 760px);
  text-align: center;
}

.eyebrow {
  margin: 0 0 1rem;
  color: #ff6584;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  color: #2d3748;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  letter-spacing: -0.045em;
  line-height: 1.08;
}

.hero-subtitle {
  max-width: 620px;
  margin: 1.5rem auto 0;
  color: #4a5568;
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  line-height: 1.6;
}

.hero-description {
  max-width: 570px;
  margin: 1rem auto 0;
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.8;
}
</style>