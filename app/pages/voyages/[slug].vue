<script setup>
import { Music } from 'lucide-vue-next'
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
    ogImage: () => voyage.value?.images?.find(img => img.mime?.startsWith('image/'))?.url ?? '/logo4.png',
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

const selectedMedia = ref(null)

watch(() => voyage.value, (newVoyage) => {
    if (newVoyage?.images?.length > 0) {
        selectedMedia.value = newVoyage.images[0]
    }
}, { immediate: true })
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
                <video v-if="voyage.images[0].mime?.startsWith('video/')" :src="voyage.images[0].url" controls
                    playsinline preload="metadata" class="w-full rounded-lg object-cover aspect-video bg-black" />
                <div v-else-if="voyage.images[0].mime?.startsWith('audio/')"
                    class="w-full rounded-lg flex flex-col items-center justify-center gap-4 aspect-video bg-brand-primary/5 border border-brand-primary/10 p-6">
                    <div class="p-4 bg-brand-primary/10 rounded-full text-brand-primary">
                        <Music class="w-12 h-12" />
                    </div>
                    <p class="text-sm font-medium text-brand-primary">{{ voyage.images[0].alternativeText ||
                        voyage.images[0].name || 'Lecture audio' }}</p>
                    <audio :src="voyage.images[0].url" controls class="w-full max-w-md" />
                </div>
                <NuxtImg v-else :src="voyage.images[0].url" :alt="voyage.images[0].alternativeText || voyage.titre"
                    format="webp" quality="80" loading="lazy" class="w-full rounded-lg object-cover aspect-video" />
            </div>
            <div v-else class="flex flex-col lg:flex-row gap-6 mb-8">
                <!-- Lecteur principal à gauche -->
                <div class="flex-1">
                    <div class="rounded-xl overflow-hidden bg-black shadow-lg">
                        <!-- Vidéo -->
                        <video v-if="selectedMedia?.mime?.startsWith('video/')" :key="`video-${selectedMedia.id}`"
                            :src="selectedMedia.url" controls playsinline preload="metadata"
                            class="w-full aspect-video object-cover" />
                        <!-- Audio -->
                        <div v-else-if="selectedMedia?.mime?.startsWith('audio/')" :key="`audio-${selectedMedia.id}`"
                            class="w-full rounded-lg flex flex-col items-center justify-center gap-4 aspect-video bg-brand-primary/5 border border-brand-primary/10 p-6">
                            <div class="p-4 bg-brand-primary/10 rounded-full text-brand-primary">
                                <Music class="w-12 h-12" />
                            </div>
                            <p class="text-sm font-medium text-brand-primary">{{ selectedMedia.alternativeText ||
                                selectedMedia.name || 'Lecture audio' }}</p>
                            <audio :src="selectedMedia.url" controls class="w-full max-w-md" />
                        </div>
                        <!-- Image -->
                        <NuxtImg v-else :key="`image-${selectedMedia.id}`" :src="selectedMedia.url"
                            :alt="selectedMedia.alternativeText || voyage.titre" format="webp" quality="80"
                            class="w-full aspect-video object-cover" />
                    </div>
                    <h3 v-if="selectedMedia?.alternativeText" class="mt-4 text-xl font-serif text-brand-primary">
                        {{ selectedMedia.alternativeText }}
                    </h3>
                </div>

                <!-- Liste des vignettes à droite -->
                <div
                    class="flex lg:flex-col flex-row gap-4 lg:w-64 overflow-x-auto lg:overflow-y-auto lg:max-h-125 shrink-0">
                    <div v-for="media in voyage.images" :key="media.id"
                        class="shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200"
                        :class="selectedMedia?.id === media.id
                            ? 'border-brand-primary shadow-md scale-[1.02]'
                            : 'border-transparent hover:border-brand-gold opacity-70 hover:opacity-100'" role="button"
                        tabindex="0"
                        :aria-label="`Sélectionner le média : ${media.alternativeText || media.name || 'Média'}`"
                        @click="selectedMedia = media" @keydown.enter="selectedMedia = media"
                        @keydown.space.prevent="selectedMedia = media">

                        <div class="relative bg-black lg:w-60 w-36 aspect-video flex items-center justify-center">
                            <!-- Si c'est une vidéo -->
                            <template v-if="media.mime?.startsWith('video/')">
                                <video :src="media.url" preload="none"
                                    class="w-full aspect-video object-cover pointer-events-none" aria-hidden="true" />
                                <div class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors"
                                    aria-hidden="true">
                                    <svg class="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </template>
                            <!-- Si c'est de l'audio -->
                            <template v-else-if="media.mime?.startsWith('audio/')">
                                <div
                                    class="w-full h-full flex flex-col items-center justify-center bg-brand-primary/5 border border-brand-primary/10">
                                    <Music class="w-8 h-8 text-brand-primary" />
                                </div>
                            </template>
                            <!-- Si c'est une image -->
                            <template v-else>
                                <NuxtImg :src="media.url" :alt="media.alternativeText || 'Aperçu'" format="webp"
                                    quality="50" class="w-full aspect-video object-cover" />
                            </template>
                        </div>
                        <p class="text-[11px] font-sans p-2 bg-white truncate lg:w-60 w-36">{{ media.alternativeText ||
                            media.name || 'Image' }}
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-sm text-gray-400 text-center italic lg:hidden mb-8">
                Faites défiler horizontalement pour voir tous les médias
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