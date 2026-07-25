<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import AtoutComponent from '~/components/ecoleComponents/AtoutComponent.vue';
import EnseignantsComponent from '~/components/ecoleComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/ecoleComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/ecoleComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/ecoleComponents/PresentationComponent.vue';

useSeoMeta({
    title: 'L\'école',
    description: 'Découvrez l\'école de l\'Institution du Sacré Cœur à Breteuil : sa pédagogie, son équipe enseignante et son cadre de vie.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — L\'école',
    ogDescription: 'Découvrez l\'école de l\'Institution du Sacré Cœur à Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
</script>

<template>
    <div class="min-h-screen bg-background text-foreground font-sans">
        <HeroComponent />
        <PresentationComponent />
        <PedagogieComponent />
        <AtoutComponent />
        <!-- <VieComponent /> -->
        <EnseignantsComponent />
        <CtaComponent />
    </div>
</template>
