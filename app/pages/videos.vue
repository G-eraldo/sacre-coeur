<script setup>
const { find } = useStrapi()

const { data: videosData, error: videosError } = await useAsyncData(
    'videos',
    async () => {
        try {
            return await find("videos", { populate: "*" })
        } catch {
            return { data: [] }
        }
    }
)
const videos = computed(() => videosData.value?.data ?? [])

useSeoMeta({
    title: 'Témoignages',
    description: 'Écoutez les témoignages de notre communauté autour du Sacré-Cœur de Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})
</script>

<template>
    <main id="main-content" class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Témoignages</p>
                <h1 class="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
                    Écoutez les voix de notre communauté
                </h1>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Découvrez comment le Sacré-Cœur a touché la vie de nos paroissiens.
                    Des histoires authentiques de foi, de transformation et d'espérance.
                </p>
            </div>

            <!-- Error state -->
            <div v-if="videosError" class="text-gray-500 text-center py-12">
                <p>Les témoignages ne sont pas disponibles pour le moment.</p>
            </div>

            <!-- Empty state -->
            <div v-else-if="videos.length === 0" class="text-gray-500 text-center py-12">
                <p>Aucun témoignage disponible.</p>
            </div>

            <!-- Videos grid -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div v-for="video in videos" :key="video.id" class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="relative pb-[56.25%] h-0">
                        <video v-if="video.video?.length > 0" class="w-full h-full object-cover absolute inset-0"
                            :src="video.video[0].url" controls preload="metadata" />
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-brand-primary mb-2">{{ video.title }}</h2>
                        <p v-if="video.description" class="text-gray-600 text-sm">{{ video.description }}</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <Button as-child
                    class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
                </Button>
            </div>
        </div>
    </main>
</template>
