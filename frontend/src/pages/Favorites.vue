<template>
    <div class="grid">
        <div v-for="movie of movies">
            <MovieCard :key="movie.id" :movie="movie" />
            <button @click="removeFromFavorite(movie.id)"> Eliminar de favoritos</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import { useFavorites } from '../composables/useFavorites';
import { useAuth } from '../composables/useAuth';
const { movies, removeFromFavorite, loadFavorites  } = useFavorites();
const { user, token } = useAuth();
onMounted(() => {
    loadFavorites(String(user.value!.id), token.value!)
})
</script>