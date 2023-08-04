<template>
    <button 
        v-bind:disabled="isLoading" 
        @click="toggleLoginLogout()">
        {{ !token ? "iniciar sesion" : "cerrar sesion" }}
    </button>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
const user = {
    password: "123",
    user: "alex",
}
const { token, isLoading, login, logout } = useAuth();
const toggleLoginLogout = async () => {
    if (token.value === '') {
        console.log(token.value);
        await login(user.user, user.password);
    } else {
        logout();
    }
}
</script>