<template>
    <button @click="toggleLoginLogout()">{{ !token ? "login" : "logout" }}</button>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
const user = {
    password: "123",
    user: "123",
}
const { token, login, logout } = useAuth();
const toggleLoginLogout = async () => {
    if (!token) {
        console.log(token)
        await login(user.user, user.password)
    } else {
        logout();
    }
}
</script>