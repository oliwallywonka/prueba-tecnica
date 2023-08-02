<template>
    <div class="grid">
        <div v-for="movie of movies">
            <MovieCard :key="movie.id" :movie="movie" />
            <button @click="removeFromFavorite(movie.id)"> Eliminar de favoritos</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue';
import { useFavorites } from '../composables/useFavorites';
const { movies, removeFromFavorite } = useFavorites();
</script>