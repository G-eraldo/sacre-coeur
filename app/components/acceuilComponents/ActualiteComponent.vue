<script setup>
import Alert from '~/components/ui/alert/Alert.vue'
import AlertDescription from '~/components/ui/alert/AlertDescription.vue'
import Skeleton from '~/components/ui/skeleton/Skeleton.vue'

const { find } = useStrapi()

const { data: actualites, pending, error } = useAsyncData('actualites-home', () =>
    find('actualites', {
        fields: ['titre', 'description', 'publishedAt', 'slug'],
        populate: {
            images: { fields: ['url', 'alternativeText'] }
        },
        filters: { publishedAt: { $notNull: true } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 3 }
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
    <section class="w-full bg-brand-warm py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col">
                <div class="mb-12">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                        Nos actualités
                    </h2>
                </div>

                <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <Skeleton v-for="i in 3" :key="i" class="h-96 w-full rounded-lg" />
                </div>

                <div v-else-if="error" class="mb-16">
                    <Alert variant="destructive" class="max-w-xl mx-auto">
                        <AlertDescription>Impossible de charger les actualités.</AlertDescription>
                    </Alert>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card v-for="actualite in actualites?.data" :key="actualite.id"
                        class="relative lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <CardHeader>
                            <div class="flex items-center justify-between gap-2 mb-1">
                                <CardTitle>{{ actualite.titre }}</CardTitle>
                                <span
                                    class="bg-brand-primary text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm shrink-0 whitespace-nowrap">
                                    {{ formatDate(actualite.publishedAt) }}
                                </span>
                            </div>
                            <CardDescription class="line-clamp-3">{{ actualite.description }}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <NuxtImg v-if="actualite.images?.[0]" :src="actualite.images[0].url"
                                :alt="actualite.images[0].alternativeText || actualite.titre" format="webp" quality="80"
                                loading="lazy" sizes="320px md:384px lg:384px"
                                class="w-full h-48 object-cover rounded-lg" />
                        </CardContent>

                        <CardFooter class="flex justify-center">
                            <Button as-child variant="link"
                                class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn">
                                <NuxtLink :to="`/actualites/${actualite.slug}`"
                                    class="flex items-center gap-2 after:absolute after:inset-0 after:z-10 after:content-['']">
                                    Lire la suite
                                    <span class="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </NuxtLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div class="flex justify-center">
                    <Button as-child
                        class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                        <NuxtLink to="/actualites">Voir toutes les actualités</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>