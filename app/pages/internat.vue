<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import HeroInternat from '~/components/internatComponents/HeroInternat.vue';
import InfosInternat from '~/components/internatComponents/InfosInternat.vue';
import PresentationInternat from '~/components/internatComponents/PresentationInternat.vue';
import VieInternat from '~/components/internatComponents/VieInternat.vue';

</script>

<template>
    <div class="min-h-screen bg-background text-foreground font-sans">
        <HeroInternat />
        <PresentationInternat />
        <VieInternat />
        <InfosInternat />
        <CtaComponent />
    </div>
</template>

<style scoped>
/* Added to prevent Vite/Tailwind parsing issues when no style block is present */
</style>