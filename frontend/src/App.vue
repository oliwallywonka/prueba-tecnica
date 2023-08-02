<template>
  <div class="container">
    <h1>Buscador de peliculas</h1>
    <Login />
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/favoritos">Favoritos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Login from './pages/Login.vue';

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
}
</style>
