<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import EnseignantsComponent from '~/components/segpaComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/segpaComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/segpaComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/segpaComponents/PresentationComponent.vue';

useSeoMeta({
    title: 'La SEGPA',
    description: 'Découvrez la Section d\'Enseignement Général et Professionnel Adapté (SEGPA) de l\'Institution du Sacré-Cœur à Breteuil.',
    ogTitle: 'Institution du Sacré-Cœur à Breteuil — La SEGPA',
    ogDescription: 'Découvrez la SEGPA de l\'Institution du Sacré-Cœur à Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
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