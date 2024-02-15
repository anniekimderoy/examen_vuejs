<script setup>
import { RouterView } from 'vue-router';
import MainNav from './components/Nav.vue';
import MainFooter from './components/Footer.vue';
</script>

<template>
    <main-nav />
    <RouterView />
    <footer>
        <main-footer />
    </footer>
</template>
