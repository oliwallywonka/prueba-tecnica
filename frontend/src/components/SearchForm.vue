<template>
    <form @submit="handleSubmit">
        <input placeholder="Buscar por titulo">
        <button>Buscar</button>
    </form>
</template>

<script setup lang="ts">
interface FormProps {
    handleSubmit: (e: Event) => void;
}

const { handleSubmit } = defineProps<FormProps>();
</script>

<style>
form {
    display: flex;
    padding: 2rem 0;
}
</style>