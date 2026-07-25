<script setup>
import ActualiteComponent from '~/components/acceuilComponents/ActualiteComponent.vue';
import AproposComponent from '~/components/acceuilComponents/AproposComponent.vue';
import CarnetDeVoyageComponent from '~/components/acceuilComponents/CarnetDeVoyageComponent.vue';
import CarouselComponent from '~/components/acceuilComponents/CarouselComponent.vue';
import EtudeComponent from '~/components/acceuilComponents/EtudeComponent.vue';
import InstitutionComponent from '~/components/acceuilComponents/InstitutionComponent.vue';
import VideoComponent from '~/components/acceuilComponents/VideoComponent.vue';

useSeoMeta({
    title: 'Accueil',
    description: 'Bienvenue sur le site officiel de l\'Institution du Sacré Cœur à Breteuil. Découvrez notre école, notre collège avec section SEGPA et notre internat.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — Accueil',
    ogDescription: 'Bienvenue sur le site officiel de l\'Institution du Sacré Cœur à Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
</script>

<template>
    <main id="main-content" aria-label="Contenu principal" class="relative w-full">
        <h1 class="sr-only">Sacré Cœur de Breteuil</h1>
        <CarouselComponent />
        <InstitutionComponent />
        <ActualiteComponent />
        <VideoComponent />
        <EtudeComponent />
        <CarnetDeVoyageComponent />
        <AproposComponent />
    </main>
</template>
