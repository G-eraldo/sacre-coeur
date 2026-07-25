<script setup>

import ContactComponent from '~/components/aProposComponents/ContactComponent.vue';
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import HeroComponent from '~/components/aProposComponents/HeroComponent.vue';
import PresentationComponent from '~/components/aProposComponents/PresentationComponent.vue';
import ValueComponent from '~/components/aProposComponents/ValueComponent.vue';

useSeoMeta({
    title: 'À Propos',
    description: 'En savoir plus sur l\'Institution du Sacré Cœur à Breteuil : notre histoire, nos valeurs et notre projet d\'établissement.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — À Propos',
    ogDescription: 'Découvrez l\'histoire et les valeurs de l\'Institution du Sacré Cœur.',
    ogImage: '/logo4.png',
    ogType: 'website',
})

</script>

<template>
    <main class="min-h-screen">
        <HeroComponent />
        <PresentationComponent />
        <ValueComponent />
        <ContactComponent />
        <CtaComponent />
    </main>
</template>
