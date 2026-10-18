<script setup>
defineProps({
  nom: String,
  descripcio: String
})
</script>

<template>
  <article class="recipe-card">
    <span class="recipe-icon" aria-hidden="true">🍲</span>
    <div class="recipe-content">
      <h2 class="recipe-title">{{ nom }}</h2>
      <p class="recipe-description">{{ descripcio }}</p>
    </div>
  </article>
</template>

<style scoped>
.recipe-card {
  display: flex;
  width: 100%;
  max-width: 1100px;
  align-items: flex-start;
  gap: clamp(1.25rem, 4vw, 2.5rem);
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgb(108 99 255 / 12%);
  border-left: 5px solid #00c896;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 12px 32px rgb(45 55 72 / 8%);
}

.recipe-icon {
  display: grid;
  width: clamp(3.75rem, 9vw, 5rem);
  height: clamp(3.75rem, 9vw, 5rem);
  flex: 0 0 auto;
  place-items: center;
  border-radius: 18px;
  background: #e6faf5;
  font-size: clamp(2.25rem, 5vw, 3rem);
  line-height: 1;
}

.recipe-content {
  min-width: 0;
  flex: 1;
}

.recipe-title {
  margin: 0 0 0.75rem;
  color: #2d3748;
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  line-height: 1.3;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.recipe-description {
  width: 100%;
  max-width: 100%;
  margin: 0;
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.6;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-line;
}

@media (max-width: 480px) {
  .recipe-card {
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
  }

  .recipe-icon {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 14px;
    font-size: 2rem;
  }

  .recipe-description {
    font-size: 1rem;
  }
}
</style>
