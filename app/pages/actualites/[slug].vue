<script setup>
const route = useRoute();
const slug = computed(() => route.params.slug);
</script>

<template>
    <div class="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
        <h1 class="text-4xl font-serif text-brand-primary mb-8">Article: {{ slug }}</h1>
        <div class="bg-brand-warm p-12 rounded-sm shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                Cette page affichera bientôt le contenu dynamique de l'article récupéré via Strapi pour le slug :
                <strong>{{ slug }}</strong>.
            </p>
            <Button as-child variant="link" class="p-0 text-brand-primary font-bold">
                <NuxtLink to="/actualites">← Retour aux articles</NuxtLink>
            </Button>
        </div>
    </div>
</template>

<style scoped>
/* Article styles */
</style>
