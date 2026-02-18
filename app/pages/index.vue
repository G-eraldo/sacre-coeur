<script setup lang="ts">
import ActualiteComponent from '~/components/acceuilComponent/ActualiteComponent.vue';
import AproposComponent from '~/components/acceuilComponent/AproposComponent.vue';
import CarnetDeVoyageComponent from '~/components/acceuilComponent/CarnetDeVoyageComponent.vue';
import CarouselComponent from '~/components/acceuilComponent/CarouselComponent.vue';
import EtudeComponent from '~/components/acceuilComponent/EtudeComponent.vue';
import InstitutionComponent from '~/components/acceuilComponent/InstitutionComponent.vue';


</script>

<template>
    <main class="relative w-full">
        <CarouselComponent />
        <InstitutionComponent />
        <ActualiteComponent />
        <EtudeComponent />
        <CarnetDeVoyageComponent />
        <AproposComponent />

    </main>
</template>

<style scoped>
.font-serif {
    font-family: var(--font-serif), serif;
}
</style>