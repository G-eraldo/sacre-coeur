<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { Home, PlayCircle, School } from 'lucide-vue-next'

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

const visiteTarget = ref(null)
const internatTarget = ref(null)
const isVisiteLoaded = ref(false)
const isInternatLoaded = ref(false)

useIntersectionObserver(
    visiteTarget,
    ([{ isIntersecting }]) => {
        if (isIntersecting) isVisiteLoaded.value = true
    },
    { threshold: 0.1 }
)

useIntersectionObserver(
    internatTarget,
    ([{ isIntersecting }]) => {
        if (isIntersecting) isInternatLoaded.value = true
    },
    { threshold: 0.1 }
)

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

            <div class="flex gap-1 mb-8 border-b border-gray-200 overflow-x-auto scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0"
                role="tablist" aria-label="Contenu multimédia : Visites virtuelles et Témoignages">
                <button id="tab-visite"
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    role="tab" :aria-selected="activeTab === 'visite'" aria-controls="panel-visite" :class="activeTab === 'visite'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600  hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'visite'">
                    <School class="w-4 h-4" />
                    Visite de l'école
                </button>
                <button id="tab-internat"
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    role="tab" :aria-selected="activeTab === 'internat'" aria-controls="panel-internat" :class="activeTab === 'internat'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600  hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'internat'">
                    <Home class="w-4 h-4" />
                    Visite de l'internat
                </button>
                <button id="tab-temoignages"
                    class="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px cursor-pointer shrink-0 whitespace-nowrap"
                    role="tab" :aria-selected="activeTab === 'temoignages'" aria-controls="panel-temoignages" :class="activeTab === 'temoignages'
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600 hover:text-brand-primary hover:border-brand-gold'"
                    @click="activeTab = 'temoignages'">
                    <PlayCircle class="w-4 h-4" />
                    Témoignages
                </button>
            </div>

            <div v-show="activeTab === 'temoignages'" id="panel-temoignages" role="tabpanel"
                aria-labelledby="tab-temoignages">
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

            <div v-if="activeTab === 'visite'" id="panel-visite" ref="visiteTarget" role="tabpanel"
                aria-labelledby="tab-visite">
                <div class="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-auto">
                    <ClientOnly>
                        <iframe v-if="isVisiteLoaded" src="/visite/app-files/index.html"
                            class="w-full h-112.5 sm:h-137.5 lg:h-162.5" style="border:none; display:block;"
                            title="Visite virtuelle de l'Institution Sacré Cœur" allowfullscreen />
                        <template #fallback>
                            <div class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                                <p class="text-gray-400">Chargement de la visite...</p>
                            </div>
                        </template>
                        <div v-if="!isVisiteLoaded" class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                            <p class="text-gray-400 italic">Défilez pour charger la visite virtuelle</p>
                        </div>
                    </ClientOnly>
                </div>
                <p class="text-sm text-gray-600 text-center mt-3 italic">
                    Cliquez et faites glisser pour explorer — cliquez sur les flèches pour vous déplacer
                </p>
            </div>

            <div v-if="activeTab === 'internat'" id="panel-internat" ref="internatTarget" role="tabpanel"
                aria-labelledby="tab-internat">
                <div class="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-auto">
                    <ClientOnly>
                        <iframe v-if="isInternatLoaded" src="/internat/app-files/index.html"
                            class="w-full h-112.5 sm:h-137.5 lg:h-162.5" style="border:none; display:block;"
                            title="Visite virtuelle de l'internat de l'Institution Sacré Cœur" allowfullscreen />
                        <template #fallback>
                            <div class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                                <p class="text-gray-400">Chargement de la visite...</p>
                            </div>
                        </template>
                        <div v-if="!isInternatLoaded"
                            class="w-full h-112.5 bg-gray-100 flex items-center justify-center">
                            <p class="text-gray-400 italic">Défilez pour charger la visite virtuelle</p>
                        </div>
                    </ClientOnly>
                </div>
                <p class="text-sm text-gray-600 text-center mt-3 italic">
                    Cliquez et faites glisser pour explorer — cliquez sur les flèches pour vous déplacer
                </p>
            </div>
        </div>
    </section>
</template>