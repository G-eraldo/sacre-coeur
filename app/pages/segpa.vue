<script setup lang="ts">
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import EnseignantsComponent from '~/components/segpaComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/segpaComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/segpaComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/segpaComponents/PresentationComponent.vue';

</script>



<template>
    <div class="min-h-screen bg-background text-foreground font-sans">

        <HeroComponent />
        <PresentationComponent />
        <PedagogieComponent />
        <EnseignantsComponent />
        <CtaComponent />
    </div>
</template>

<style scoped>
.font-serif {
    font-family: 'Merriweather', serif;
}

.font-sans {
    font-family: 'Poppins', sans-serif;
}
</style>