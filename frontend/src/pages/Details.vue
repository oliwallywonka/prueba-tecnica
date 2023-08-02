<template>
    <h1>Detalle</h1>
    <router-link to="/">Volver</router-link>
    <span v-if="isLoading">....Cargando</span>
    <MovieCard v-if="movie" :key="movie?.id" :movie="movie"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useMovie } from '../composables/useMovie';

import MovieCard from '../components/MovieCard.vue'

const route = useRoute();
const id = ref('')
const { movie, isLoading, loadDetails } = useMovie()
onMounted(async () => {
    id.value = route.params.movieId as string;
    await loadDetails(id.value);
    console.log(movie.value);
})
</script>