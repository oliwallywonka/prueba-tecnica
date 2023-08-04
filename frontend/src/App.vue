<template>
  <div class="container">
    <h1>Buscador de peliculas</h1>
    <p v-if="user">Bienvenido: {{ user?.nombres }} {{ user?.primerApellido }}</p>
    <Login />
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link v-if="user" to="/favoritos">Favoritos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from './composables/useAuth';
import Login from './pages/Login.vue';
const { user } = useAuth()
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
  justify-content: space-evenly;
  width: 100%;
}
</style>
