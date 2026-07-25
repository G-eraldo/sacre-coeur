<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import AtoutComponent from '~/components/collegeComponents/AtoutComponent.vue';
import EnseignantsComponent from '~/components/collegeComponents/EnseignantsComponent.vue';
import HeroComponent from '~/components/collegeComponents/HeroComponent.vue';
import PedagogieComponent from '~/components/collegeComponents/PedagogieComponent.vue';
import PresentationComponent from '~/components/collegeComponents/PresentationComponent.vue';

useSeoMeta({
    title: 'Le Collège',
    description: 'Découvrez le collège de l\'Institution du Sacré Cœur à Breteuil : notre projet pédagogique, nos enseignants et les atouts de notre établissement.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — Le Collège',
    ogDescription: 'Découvrez le collège de l\'Institution du Sacré Cœur à Breteuil.',
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
