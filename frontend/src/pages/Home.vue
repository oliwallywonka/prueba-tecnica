<template>
    <SearchForm :handleFunction="handleSubmit" />
    <div class="grid">
        <div v-for="movie of movies">
            <MovieCard :key="movie.id" :movie="movie" />
            <button @click="handleDetails(movie.id)"> detalles </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import MovieCard from "../components/MovieCard.vue";
import SearchForm from "../components/SearchForm.vue"
import { useMovie } from "../composables/useMovie";

const { loadMovies, movies } = useMovie();

const router = useRouter();

const handleSubmit = async (title: string) => {
    console.log("works")
    await loadMovies(title);
}

const handleDetails = (movieId: string) => {
    router.push(`/${movieId}`)
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