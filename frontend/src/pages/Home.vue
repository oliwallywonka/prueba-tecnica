<template>
    <SearchForm :handleSubmit="handleSubmit" />
    <div class="grid">
        <div v-for="movie of movies">
            <MovieCard :key="movie.id" :movie="movie"/>
            <button @click="addToFavorite(movie)"> añadir</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import MovieCard from "../components/MovieCard.vue";
import SearchForm from "../components/SearchForm.vue"
import { useFavorites } from "../composables/useFavorites";
import { useMovie } from "../composables/useMovie";

const { loadMovies, movies } = useMovie();
const { addToFavorite } = useFavorites();
const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log("works")
    await loadMovies();
}
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    place-items: center;
    gap: 1rem;
    width: 100%;
}
.grid div {
    display: flex;
    flex-direction: column;
}
</style>