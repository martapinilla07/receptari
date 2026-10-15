<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'
import ReceptaCard from '../components/ReceptaCard.vue'

const receptes = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'receptes'))

    querySnapshot.forEach((doc) => {
      receptes.value.push({
        id: doc.id,
        ...doc.data()
      })
    })
  } catch (err) {
    error.value = true
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="recipes-page">
    <h1 class="page-title">Les meves receptes</h1>

    <p v-if="loading" class="recipes-message">Carregant receptes...</p>

    <p v-else-if="error" class="recipes-message recipes-error">
      Error carregant les receptes.
    </p>

    <p v-else-if="receptes.length === 0" class="recipes-message">
      No hi ha receptes disponibles.
    </p>

    <section v-else class="recipe-grid" aria-label="Llista de receptes">
      <ReceptaCard
        v-for="recepta in receptes"
        :key="recepta.id"
        :nom="recepta.nom"
        :descripcio="recepta.descripcio"
      />
    </section>
  </main>
</template>

<style scoped>
.recipes-page {
  min-height: 68vh;
  padding: 3.5rem 1.5rem 4rem;
  background: #fff8f0;
}

.page-title {
  margin: 0 auto 2.5rem;
  color: #333;
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: -0.035em;
  line-height: 1.15;
  text-align: center;
}

.recipe-grid {
  display: grid;
  width: min(100%, 1100px);
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.recipes-message {
  margin: 3rem auto;
  color: #71645b;
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: center;
}

.recipes-error {
  color: #a33324;
}

@media (max-width: 640px) {
  .recipes-page {
    padding: 2.75rem 1rem 3rem;
  }

  .page-title {
    margin-bottom: 2rem;
  }

  .recipe-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
  }
}
</style>
