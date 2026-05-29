<script setup>
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import Alert from '~/components/ui/alert/Alert.vue'
import AlertDescription from '~/components/ui/alert/AlertDescription.vue'

const route = useRoute()
const { find } = useStrapi()

const { data: voyages, error } = await useAsyncData(
    `voyages-${route.params.slug}`,
    () => find('voyages', {
        filters: { slug: { $eq: route.params.slug } },
        populate: {
            images: { populate: '*' },
            contenu: {
                populate: '*'
            }
        },
        pagination: { pageSize: 1 }
    })
)

const voyage = computed(() => {
    const item = voyages.value?.data?.[0] ?? null
    if (item && item.slug !== route.params.slug) return null
    return item
})

if (!voyage.value && !error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Voyage non trouvé' })
}

useSeoMeta({
    title: () => `Voyage : ${voyage.value.titre}`,
    description: () => `Découvrez le voyage "${voyage.value.titre}" de l'Institution du Sacré-Cœur.`,
    ogTitle: () => `Institution du Sacré-Cœur — ${voyage.value.titre}`,
    ogDescription: () => voyage.value?.description ?? '',
    ogImage: () => voyage.value?.images?.[0]?.url ?? '/logo4.png',
    ogType: 'article',
})

function formatDate(dateStr) {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).toUpperCase()
}

const currentSlideIndex = ref(0)
function onSetApi(api) {
    api.on('select', () => {
        currentSlideIndex.value = api.selectedScrollSnap()
    })
}
</script>

<template>
    <section class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">


        <Alert v-if="error" variant="destructive" class="max-w-xl mx-auto">
            <AlertDescription>Impossible de charger ce voyage.</AlertDescription>
        </Alert>

        <Card v-else-if="voyage" class="max-w-7xl mx-auto px-6 py-12">

            <div class="mb-10">
                <span
                    class="bg-brand-primary text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {{ formatDate(voyage.date_evenement) }}
                </span>
                <h1 class="text-4xl md:text-5xl font-serif text-brand-primary mt-4 mb-3">{{ voyage.titre }}</h1>
                <p class="text-lg text-gray-600">{{ voyage.description }}</p>
            </div>

            <div v-if="voyage.images?.length === 1">
                <NuxtImg :src="voyage.images[0].url" :alt="voyage.images[0].alternativeText || voyage.titre"
                    format="webp" quality="80" loading="lazy" class="w-full rounded-lg object-cover aspect-video" />
            </div>
            <Carousel v-else class="w-full lg:mb-8" :opts="{ loop: true }" :set-api="onSetApi">
                <div class="sr-only" aria-live="polite" aria-atomic="true">
                    Diapositive {{ currentSlideIndex + 1 }} sur {{ voyage.images.length }} : {{ voyage.titre }}
                </div>
                <CarouselContent>
                    <CarouselItem v-for="img in voyage.images" :key="img.id">
                        <NuxtImg :src="img.url" :alt="img.alternativeText || voyage.titre" format="webp" quality="80"
                            loading="lazy" class="w-full rounded-lg object-cover aspect-video" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="hidden md:flex">
                    <ArrowLeft class="size-6" />
                    <span class="sr-only">Diapositive précédente</span>
                </CarouselPrevious>
                <CarouselNext class="hidden md:flex">
                    <ArrowRight class="size-6" />
                    <span class="sr-only">Diapositive suivante</span>
                </CarouselNext>
            </Carousel>
            <p class="text-sm text-gray-400 text-center italic lg:hidden">
                Glissez pour explorer les photos du voyage
            </p>

            <div v-if="voyage.contenu?.length" class="space-y-10">
                <div v-for="(section, i) in voyage.contenu" :key="i" class="space-y-4">
                    <h2 v-if="section.titre_section" class="text-2xl md:text-3xl font-serif text-brand-primary">
                        {{ section.titre_section }}
                    </h2>
                    <StrapiBlocksRenderer v-if="section.paragraphe" :blocks="section.paragraphe"
                        class="prose prose-gray max-w-none" />
                </div>
            </div>

            <div class="mt-16 border-t pt-8">
                <Button as-child variant="link"
                    class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn transition-colors">
                    <NuxtLink to="/voyages" class="flex items-center gap-2">
                        <span class="group-hover/btn:-translate-x-1 transition-transform">←</span>
                        Retour aux voyages
                    </NuxtLink>
                </Button>
            </div>
        </Card>
    </section>
</template>