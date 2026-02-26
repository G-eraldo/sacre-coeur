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
const selectedVideo = ref(null)

watchEffect(() => {
    if (!selectedVideo.value && videos.value.length > 0) {
        selectedVideo.value = videos.value[0]
    }
})
</script>

<template>
    <section class="w-full py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col">
                <div class="mb-8">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                        Nos Témoignages
                    </h2>
                </div>

                <!-- Error state -->
                <div v-if="videosError" class="text-gray-500 text-center py-12">
                    <p>Les témoignages ne sont pas disponibles pour le moment.</p>
                </div>

                <!-- Empty state -->
                <div v-else-if="videos.length === 0" class="text-gray-500 text-center py-12">
                    <p>Aucun témoignage disponible.</p>
                </div>

                <div v-else class="flex flex-col lg:flex-row gap-6">
                    <!-- Vidéo principale -->
                    <div class="flex-1">
                        <div class="rounded-xl overflow-hidden bg-black shadow-lg">
                            <video v-if="selectedVideo?.video?.length > 0" :key="selectedVideo.id"
                                :src="selectedVideo.video[0].url" controls playsinline preload="metadata"
                                :aria-label="`Témoignage vidéo : ${selectedVideo.title}`"
                                class="w-full aspect-video object-cover" />
                        </div>
                        <h3 class="mt-4 text-xl font-serif text-brand-primary">
                            {{ selectedVideo?.title }}
                        </h3>
                    </div>

                    <!-- Liste des miniatures -->
                    <div
                        class="flex lg:flex-col flex-row gap-4 lg:w-64 overflow-x-auto lg:overflow-y-auto lg:max-h-100">
                        <div v-for="video in videos.filter(v => v.id !== selectedVideo?.id)" :key="video.id"
                            class="shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200"
                            :class="selectedVideo?.id === video.id
                                ? 'border-brand-primary shadow-md scale-105 rounded-lg'
                                : 'border-transparent hover:border-brand-gold opacity-70 hover:opacity-100'"
                            role="button" tabindex="0" :aria-label="`Visionner le témoignage : ${video.title}`"
                            @click="selectedVideo = video" @keydown.enter="selectedVideo = video"
                            @keydown.space.prevent="selectedVideo = video">
                            <div class="relative bg-black lg:w-64 w-40">
                                <video v-if="video.video?.length > 0" :src="video.video[0].url" preload="none"
                                    class="w-full aspect-video object-cover pointer-events-none" aria-hidden="true" />
                                <!-- Overlay play -->
                                <div class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors"
                                    aria-hidden="true">
                                    <svg class="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-xs font-sans p-2 bg-white truncate">{{ video.title }}</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-10">
                    <Button as-child
                        class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                        <NuxtLink to="/">Voir toutes les vidéos</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
