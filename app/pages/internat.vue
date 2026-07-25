<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import HeroInternat from '~/components/internatComponents/HeroInternat.vue';
import InfosInternat from '~/components/internatComponents/InfosInternat.vue';
import PresentationInternat from '~/components/internatComponents/PresentationInternat.vue';
import VieInternat from '~/components/internatComponents/VieInternat.vue';

useSeoMeta({
    title: 'L\'Internat',
    description: 'Découvrez l\'internat de l\'Institution du Sacré Cœur à Breteuil : un lieu de vie, d\'étude et d\'épanouissement pour nos élèves.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — L\'Internat',
    ogDescription: 'Découvrez l\'internat de l\'Institution du Sacré Cœur à Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
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
