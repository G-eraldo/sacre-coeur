<script setup>
defineProps({
    title: {
        type: String,
        default: 'Institution du Sacré-Cœur'
    },
    description: {
        type: String,
        default: 'Découvrez notre établissement à Breteuil.'
    }
})
</script>

<template>
    <div class="w-full h-full flex flex-col justify-end bg-slate-900 p-16 relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 transform rotate-12" />
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full -ml-48 -mb-48" />

        <div class="flex items-center gap-6 mb-8">
            <NuxtImg src="/logo4.png" width="80" height="100" class="object-contain" />
            <div class="h-12 w-1 bg-brand-gold/30" />
            <div class="text-white/60 text-3xl font-serif">Institution du Sacré-Cœur</div>
        </div>

        <h1 class="text-white text-6xl font-bold leading-tight mb-6 font-serif">
            {{ title }}
        </h1>

        <p class="text-white/80 text-3xl max-w-4xl line-clamp-2">
            {{ description }}
        </p>

        <div class="mt-12 flex items-center gap-4">
            <div class="px-4 py-2 bg-brand-primary text-white text-xl font-bold uppercase tracking-widest rounded-sm">
                Breteuil
            </div>
            <div class="text-white/40 text-xl italic">demo-sacre-coeur.vercel.app</div>
        </div>
    </div>
</template>

<style scoped>
.font-serif {
    font-family: 'Merriweather', serif;
}
</style>
