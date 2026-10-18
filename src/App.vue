<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="app-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
  margin: 0;
}

body {
  color: #2d3748;
  background: #f4f7ff;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.app-layout {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  flex-direction: column;
}

.app-content {
  width: 100%;
  min-width: 0;
  flex: 1;
}
</style>
