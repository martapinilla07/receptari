<script setup>
defineProps({
  nom: String,
  descripcio: String
})
</script>

<template>
  <article class="recipe-card" tabindex="0">
    <div class="recipe-card-inner">
      <div class="recipe-card-face recipe-card-front">
        <h2 class="recipe-title">{{ nom }}</h2>
        <span class="recipe-icon" aria-hidden="true">🍲</span>
        <p class="recipe-hint">Passa-hi per veure els detalls</p>
      </div>
      <div class="recipe-card-face recipe-card-back">
        <h2 class="recipe-title">{{ nom }}</h2>
        <p class="recipe-description">{{ descripcio }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.recipe-card {
  width: 100%;
  max-width: 360px;
  height: 200px;
  border-radius: 16px;
  perspective: 1000px;
}

.recipe-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transform-style: preserve-3d;
  transition: transform 700ms cubic-bezier(0.2, 0.7, 0.25, 1);
}

.recipe-card:hover .recipe-card-inner,
.recipe-card:focus .recipe-card-inner {
  transform: rotateY(180deg);
}

.recipe-card-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgb(230 126 34 / 10%);
  border-radius: inherit;
  background: #fff;
  box-shadow: 0 8px 24px rgb(74 42 17 / 10%);
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.recipe-card-front {
  background: linear-gradient(145deg, #fff 55%, #fff2e5);
}

.recipe-card-front .recipe-title {
  font-size: 1.3rem;
}

.recipe-icon {
  margin: 0.25rem 0;
  font-size: 3.75rem;
  line-height: 1.15;
}

.recipe-hint {
  margin: 0.25rem 0 0;
  color: #a94f0b;
  font-size: 0.85rem;
  font-weight: 600;
}

.recipe-title {
  margin: 0;
  color: #333;
  font-size: 1.45rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.recipe-card-back {
  transform: rotateY(180deg);
}

.recipe-card-back .recipe-title {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.recipe-description {
  flex: 0 1 auto;
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: #5e5148;
  font-size: 1rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

.recipe-card:focus-visible {
  outline: 3px solid #e67e22;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .recipe-card-inner {
    transition-duration: 1ms;
  }
}
</style>
