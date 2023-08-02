<template>
    <form @submit="handleSubmit">
        <input v-model="inputValue" @input="validateInput" placeholder="Buscar por titulo">
        <button v-bind:disabled="!isValidForm">Buscar</button>
    </form>
    <span v-if="inputMessage">{{ inputMessage }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormProps {
    handleFunction: (title: string) => void;
}

const { handleFunction } = defineProps<FormProps>();
const inputValue = ref('');
const inputMessage = ref('');
const isValidForm = ref(false);
const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (inputValue.value.length < 3) {
        inputMessage.value = "El debe ingresar almenos 3 caracteres"
        return;
    }
    if (inputValue.value.length > 2) {
        inputMessage.value = "";
    }
    handleFunction(inputValue.value);

}
const validateInput = () => {
    const value = inputValue.value;
    if (value.length < 3) {
        inputMessage.value = "El debe ingresar almenos 3 caracteres"
        isValidForm.value = false;
    }
    if (value.length > 2) {
        inputMessage.value = "";
        isValidForm.value = true;
    }
}
</script>

<style>
form {
    display: flex;
    padding: 2rem 0;
}

span {
    color: red;
}
</style>