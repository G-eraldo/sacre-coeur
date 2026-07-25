<script setup>
import CtaComponent from '~/components/aProposComponents/CtaComponent.vue';
import PastoraleActionsComponent from '~/components/pastoraleComponents/PastoraleActionsComponent.vue';
import PastoraleHeroComponent from '~/components/pastoraleComponents/PastoraleHeroComponent.vue';
import PastoralePresentationComponent from '~/components/pastoraleComponents/PastoralePresentationComponent.vue';

useSeoMeta({
    title: 'La Pastorale',
    description: 'Découvrez l\'animation pastorale à l\'Institution du Sacré Cœur : nos engagements, nos actions et le projet d\'animation.',
    ogTitle: 'Institution du Sacré Cœur à Breteuil — La Pastorale',
    ogDescription: 'Découvrez l\'animation pastorale à l\'Institution du Sacré Cœur.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
</script>

<template>
    <div class="min-h-screen bg-background text-foreground font-sans">
        <PastoraleHeroComponent />
        <PastoralePresentationComponent />
        <PastoraleActionsComponent />
        <CtaComponent />
    </div>
</template>
