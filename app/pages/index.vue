<script setup>
import ActualiteComponent from '~/components/acceuilComponent/ActualiteComponent.vue';
import AproposComponent from '~/components/acceuilComponent/AproposComponent.vue';
import CarnetDeVoyageComponent from '~/components/acceuilComponent/CarnetDeVoyageComponent.vue';
import CarouselComponent from '~/components/acceuilComponent/CarouselComponent.vue';
import DocumentsComponent from '~/components/acceuilComponent/DocumentsComponent.vue';
import EtudeComponent from '~/components/acceuilComponent/EtudeComponent.vue';
import InstitutionComponent from '~/components/acceuilComponent/InstitutionComponent.vue';
import VideoComponent from '~/components/acceuilComponent/VideoComponent.vue';
</script>

<template>
    <main id="main-content" aria-label="Contenu principal" class="relative w-full">
        <h1 class="sr-only">Sacré-Cœur de Breteuil</h1>
        <CarouselComponent />
        <InstitutionComponent />
        <ActualiteComponent />
        <VideoComponent />
        <EtudeComponent />
        <CarnetDeVoyageComponent />
        <DocumentsComponent />
        <AproposComponent />
    </main>
</template>
