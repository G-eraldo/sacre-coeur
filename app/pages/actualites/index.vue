<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    console.log('Page Actualités montée');
});
</script>

<template>
    <div class="min-h-screen pt-100 px-6 max-w-7xl mx-auto bg-brand-warm">
        <h1 class="text-3xl font-bold text-brand-primary">Actualités</h1>
        <p class="mt-4">Si vous voyez ce message, la page est bien chargée.</p>
    </div>
</template>

<style scoped></style>