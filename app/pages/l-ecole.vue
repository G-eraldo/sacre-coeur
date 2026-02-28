<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import AtoutComponent from '~/components/ecoleComponents/AtoutComponent.vue';
import EnseignantsComponent from '~/components/ecoleComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/ecoleComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/ecoleComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/ecoleComponents/PresentationComponent.vue';
import VieComponent from '~/components/ecoleComponents/VieComponent.vue';
</script>

<template>
    <div class="min-h-screen bg-background text-foreground font-sans">
        <HeroComponent />
        <PresentationComponent />
        <PedagogieComponent />
        <AtoutComponent />
        <VieComponent />
        <EnseignantsComponent />
        <CtaComponent />
    </div>
</template>

<style scoped>
/* Added to prevent Vite/Tailwind parsing issues when no style block is present */
</style>
