<script setup>
const { find } = useStrapi()
const videos = await find("videos", { populate: "*" })

const selectedVideo = ref(videos.data[0])
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 py-10 lg:py-8 rounded-lg">
        <div class="flex flex-col">
            <div class="mb-8">
                <h2 class="text-4xl lg:text-5xl font-serif text-[#6C1C23] tracking-tight">
                    Nos Témoignages
                </h2>
            </div>

            <div class="flex flex-col lg:flex-row gap-6">
                <!-- Vidéo principale -->
                <div class="flex-1">
                    <div class="rounded-xl overflow-hidden bg-black shadow-lg">
                        <video v-if="selectedVideo?.video?.length > 0" :key="selectedVideo.id"
                            :src="selectedVideo.video[0].url" controls autoplay playsinline
                            class="w-full aspect-video object-cover" />
                    </div>
                    <h3 class="mt-4 text-xl font-serif text-[#6C1C23]">
                        {{ selectedVideo?.title }}
                    </h3>
                </div>

                <!-- Liste des miniatures -->
                <div class="flex lg:flex-col flex-row gap-4 lg:w-64 overflow-x-auto lg:overflow-y-auto lg:max-h-100">
                    <div v-for="video in videos.data.filter(v => v.id !== selectedVideo?.id)" :key="video.id"
                        class="shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200"
                        :class="selectedVideo?.id === video.id
                            ? 'border-[#6C1C23] shadow-md scale-105 rounded-lg'
                            : 'border-transparent hover:border-[#C4A55F] opacity-70 hover:opacity-100'"
                        @click="selectedVideo = video">
                        <div class="relative bg-black lg:w-64 w-40">
                            <video v-if="video.video?.length > 0" :src="video.video[0].url"
                                class="w-full aspect-video object-cover pointer-events-none" />
                            <!-- Overlay play -->
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
                                <svg class="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-xs font-mono p-2 bg-white truncate">{{ video.title }}</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-10">
                <Button
                    class="bg-[#6C1C23] hover:bg-[#C4A55F] text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Voir toutes les vidéos</NuxtLink>
                </Button>
            </div>
        </div>
    </section>
</template>

<style scoped></style>