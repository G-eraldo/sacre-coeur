<script setup>
import { onMounted } from 'vue';
import Alert from '~/components/ui/alert/Alert.vue';
import AlertDescription from '~/components/ui/alert/AlertDescription.vue';
import Skeleton from '~/components/ui/skeleton/Skeleton.vue';

useSeoMeta({
    title: 'Actualités',
    description: 'Suivez les dernières actualités et événements de l\'Institution du Sacré-Cœur à Breteuil.',
    ogTitle: 'Institution du Sacré-Cœur à Breteuil — Actualités',
    ogDescription: 'Retrouvez toutes les actualités du Sacré-Cœur.',
    ogImage: '/logo4.png',
    ogType: 'website',
})

onMounted(() => {
    console.log('Page Actualités montée');
});

const { find } = useStrapi()

const { data: actualites, pending, error } = await useAsyncData('actualites-list', () =>
    find('actualites', {
        fields: ['titre', 'description', 'publishedAt', 'slug'],
        populate: {
            images: { fields: ['url', 'alternativeText'] }
        },
        filters: { publishedAt: { $notNull: true } },
        sort: ['publishedAt:desc']
    })
)

function formatDate(dateStr) {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).toUpperCase()
}
</script>

<template>
    <section class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Actualités</p>
                <h2 class="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Les actualités de notre communauté
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les actualités de notre communauté.</p>
            </div>

            <!-- Loading -->
            <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Skeleton v-for="i in 3" :key="i" class="h-96 w-full rounded-lg" />
            </div>

            <!-- Erreur -->
            <Alert v-else-if="error" variant="destructive" class="max-w-xl mx-auto">
                <AlertDescription>Impossible de charger les actualités.</AlertDescription>
            </Alert>

            <!-- Liste -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="item in actualites?.data" :key="item.id"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <CardHeader>
                        <div class="flex items-start justify-between gap-2 mb-1">
                            <CardTitle class="font-sans">{{ item.titre }}</CardTitle>
                            <span
                                class="bg-brand-primary text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm shrink-0 whitespace-nowrap">
                                {{ formatDate(item.publishedAt) }}
                            </span>
                        </div>
                        <CardDescription class="h-24">{{ item.description }}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <NuxtImg v-if="item.images?.[0]" :src="item.images[0].url"
                            :alt="item.images[0].alternativeText || item.titre" format="webp" quality="80"
                            loading="lazy" sizes="320px md:384px lg:384px"
                            class="w-full h-48 object-cover rounded-lg" />
                    </CardContent>

                    <CardFooter class="flex justify-center">
                        <Button as-child variant="link"
                            class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn">
                            <NuxtLink :to="`/actualites/${item.slug}`" class="flex items-center gap-2">
                                Lire la suite
                                <span class="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </NuxtLink>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div class="flex justify-center mt-4">
                <Button as-child
                    class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
                </Button>
            </div>
        </div>
    </section>
</template>