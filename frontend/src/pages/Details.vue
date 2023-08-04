<template>
    <h1>Detalle</h1>
    <router-link to="/">Volver</router-link>
    <span v-if="isLoading">....Cargando</span>
    <MovieCard v-if="movie" :key="movie?.id" :movie="movie"/>
    <button v-if="user && movie" v-bind:disabled="isLoading" @click="addToFavorite(String(user?.id), token, movie)"> añadir</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useMovie } from '../composables/useMovie';

import MovieCard from '../components/MovieCard.vue'
import { useFavorites } from '../composables/useFavorites';
import { useAuth } from '../composables/useAuth';

const route = useRoute();
const id = ref('')
const { movie, isLoading, loadDetails } = useMovie()
const { addToFavorite } = useFavorites();
const { user, token } = useAuth();
onMounted(async () => {
    id.value = route.params.movieId as string;
    await loadDetails(id.value);
    console.log(movie.value);
})
</script>