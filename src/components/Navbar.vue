<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="site-navbar" aria-label="Navegació principal">
    <div class="navbar-content">
      <RouterLink class="nav-link" to="/">Inici</RouterLink>
      <RouterLink class="nav-link" to="/receptes">Receptes</RouterLink>
      <RouterLink class="nav-link" to="/sobre">Sobre nosaltres</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.site-navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background: #e67e22;
  box-shadow: 0 3px 12px rgb(74 42 17 / 16%);
}

.navbar-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 1100px;
  min-height: 68px;
  margin: 0 auto;
  padding: 0.5rem 1.25rem;
}

.nav-link {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.nav-link:hover {
  background: rgb(255 255 255 / 16%);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background: #fff;
  color: #a94f0b;
}

.nav-link:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .navbar-content {
    min-height: 60px;
    gap: 0.15rem;
    padding: 0.4rem 0.5rem;
  }

  .nav-link {
    padding: 0.65rem 0.7rem;
    font-size: 0.9rem;
  }
}
</style>