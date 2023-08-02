<template>
    <div class="card">
        <img v-bind:src="movie.imgUrl" v-bind:title="movie.title">
        <h5>{{ movie.title }}</h5>
        <p>{{ movie.year }}</p>
    </div>
</template>

<script setup lang="ts">
import { Movie } from '../interfaces/Movie';

interface MovieCardProps {
    movie: Movie;
}
const { movie } = defineProps<MovieCardProps>()
</script>

<style>
.card {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card:hover {
    opacity: 10;
}
</style>