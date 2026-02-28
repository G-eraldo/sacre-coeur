<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import AtoutComponent from '~/components/collegeComponents/AtoutComponent.vue';
import EnseignantsComponent from '~/components/collegeComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/collegeComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/collegeComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/collegeComponents/PresentationComponent.vue';
import VieComponent from '~/components/collegeComponents/VieComponent.vue';
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
