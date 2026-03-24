<script setup>
const { find } = useStrapi()

const activeTab = ref('visite')

const { data: response, error } = useAsyncData('videos-home', () =>
    find('videos', {
        fields: ['titre'],
        populate: {
            video: {
                fields: ['url']
            }
        }
    })
)

const videos = computed(() => response.value?.data ?? [])
const selectedVideo = ref(null)

onMounted(() => {
    if (videos.value.length > 0) {
        selectedVideo.value = videos.value[0]
    }
})
watch(videos, (newVideos) => {
    if (!selectedVideo.value && newVideos.length > 0) {
        selectedVideo.value = newVideos[0]
    }
})
</script>

<template>
    <section class="w-full py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">


            <div class="mb-8">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                    Découvrir l'école
                </h2>
            </div>

            <div
                class="flex gap-1 mb-8 border-b border-gray-200 overflow-x-auto scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
                <button
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    :class="activeTab === 'visite'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600  hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'visite'">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Visite de l'école
                </button>
                <button
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    :class="activeTab === 'internat'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600  hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'internat'">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Visite de l'internat
                </button>
                <button
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    :class="activeTab === 'temoignages'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600 hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'temoignages'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    Témoignages
                </button>
            </div>

            <div v-show="activeTab === 'temoignages'">
                <div v-if="error" class="text-gray-500 text-center py-12">
                    <p>Les témoignages ne sont pas disponibles pour le moment.</p>
                </div>
                <div v-else-if="videos.length === 0" class="text-gray-500 text-center py-12">
                    <p>Aucun témoignage disponible.</p>
                </div>
                <div v-else class="flex flex-col lg:flex-row gap-6">
                    <div class="flex-1">
                        <div class="rounded-xl overflow-hidden bg-black shadow-lg">
                            <video v-if="selectedVideo?.video?.length > 0" :key="selectedVideo.id"
                                :src="selectedVideo.video[0].url" controls playsinline preload="metadata"
                                :aria-label="`Témoignage vidéo : ${selectedVideo.titre}`"
                                class="w-full aspect-video object-cover" />
                        </div>
                        <h3 class="mt-4 text-xl font-serif text-brand-primary">
                            {{ selectedVideo?.titre }}
                        </h3>
                    </div>

                    <div
                        class="flex lg:flex-col flex-row gap-4 lg:w-64 overflow-x-auto lg:overflow-y-auto lg:max-h-100">
                        <div v-for="video in videos.filter(v => v.id !== selectedVideo?.id)" :key="video.id"
                            class="shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200"
                            :class="selectedVideo?.id === video.id
                                ? 'border-brand-primary shadow-md scale-105'
                                : 'border-transparent hover:border-brand-gold opacity-70 hover:opacity-100'"
                            role="button" tabindex="0" :aria-label="`Visionner le témoignage : ${video.titre}`"
                            @click="selectedVideo = video" @keydown.enter="selectedVideo = video"
                            @keydown.space.prevent="selectedVideo = video">
                            <div class="relative bg-black lg:w-64 w-40">
                                <video v-if="video.video?.length > 0" :src="video.video[0].url" preload="none"
                                    class="w-full aspect-video object-cover pointer-events-none" aria-hidden="true" />
                                <div class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors"
                                    aria-hidden="true">
                                    <svg class="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-xs font-sans p-2 bg-white truncate">{{ video.titre }}</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-10">
                    <Button as-child
                        class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                        <NuxtLink to="/videos">Voir toutes les vidéos</NuxtLink>
                    </Button>
                </div>
            </div>

            <div v-show="activeTab === 'visite'">
                <div class="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <ClientOnly>
                        <iframe src="/visite/app-files/index.html" class="w-full h-112.5 sm:h-137.5 lg:h-162.5"
                            style="border:none; display:block;" title="Visite virtuelle de l'Institution Sacré-Cœur"
                            allowfullscreen />
                        <template #fallback>
                            <div class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                                <p class="text-gray-400">Chargement de la visite...</p>
                            </div>
                        </template>
                    </ClientOnly>
                </div>
                <p class="text-sm text-gray-600 text-center mt-3 italic">
                    Cliquez et faites glisser pour explorer — cliquez sur les flèches pour vous déplacer
                </p>
            </div>

            <div v-show="activeTab === 'internat'">
                <div class="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <ClientOnly>
                        <iframe src="/internat/app-files/index.html" class="w-full h-112.5 sm:h-137.5 lg:h-162.5"
                            style="border:none; display:block;"
                            title="Visite virtuelle de l'internat de l'Institution Sacré-Cœur" allowfullscreen />
                        <template #fallback>
                            <div class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                                <p class="text-gray-400">Chargement de la visite...</p>
                            </div>
                        </template>
                    </ClientOnly>
                </div>
                <p class="text-sm text-gray-600 text-center mt-3 italic">
                    Cliquez et faites glisser pour explorer — cliquez sur les flèches pour vous déplacer
                </p>
            </div>
        </div>
    </section>
</template>