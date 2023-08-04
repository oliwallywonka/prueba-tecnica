<template>
    <button v-bind:disabled="isLoading" @click="toggleLoginLogout()">
        {{ !token ? "iniciar sesion" : "cerrar sesion" }}
    </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
const user = {
    password: "123",
    user: "alex",
}
const { token, isLoading, login, logout } = useAuth();
const router = useRouter();
const toggleLoginLogout = async () => {
    if (token.value === '') {
        await login(user.user, user.password);
    } else {
        logout();
        router.push("/")
    }
}
</script>