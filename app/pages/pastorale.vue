<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import PastoraleActionsComponent from '~/components/pastoraleComponents/PastoraleActionsComponent.vue';
import PastoraleHeroComponent from '~/components/pastoraleComponents/PastoraleHeroComponent.vue';
import PastoralePresentationComponent from '~/components/pastoraleComponents/PastoralePresentationComponent.vue';

</script>

<template>
    <div class="min-h-screen bg-background text-foreground font-sans">
        <PastoraleHeroComponent />
        <PastoralePresentationComponent />
        <PastoraleActionsComponent />
        <CtaComponent />
    </div>
</template>

<style scoped>
/* Added to prevent Vite/Tailwind parsing issues when no style block is present */
</style>