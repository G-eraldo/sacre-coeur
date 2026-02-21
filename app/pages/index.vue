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
    <main class="relative w-full">
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

<style scoped>
.font-serif {
    font-family: var(--font-serif), serif;
}
</style>