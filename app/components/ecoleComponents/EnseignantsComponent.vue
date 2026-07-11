<script setup>
import { LucideClock, LucideUsers } from 'lucide-vue-next'

const { find } = useStrapi()

const { data: response, pending, error } = await useAsyncData('classes', () =>
    find('classes', {
        fields: ['nom', 'enseignant'],
        sort: ['ordre:asc']
    })
)

const liste = computed(() => response.value?.data || [])

const horaires = {
    garderie: "7h30 à 18h30",
    cours: "8h30 à 11h45 (APC 12h15) et 13h30 à 16h30",
    semaine: "Semaine de 4 jours"
}
</script>

<template>
    <section class="bg-brand-warm py-24 px-6 md:px-12">
        <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">

            <div id="horaires" class="lg:sticky lg:top-24">
                <Card class="bg-brand-primary rounded-sm shadow-sm p-10 text-white relative overflow-hidden">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
                    <div class="relative z-10">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <LucideClock class="w-5 h-5 text-brand-gold" />
                            </div>
                            <h2 class="text-2xl font-serif text-white">Horaires et planning</h2>
                        </div>
                        <div class="space-y-8">
                            <div class="pt-6 border-t border-white/10">
                                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                                    Garderie
                                </p>
                                <p class="text-lg font-serif">{{ horaires.garderie }}</p>
                            </div>
                            <div class="pt-6 border-t border-white/10">
                                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">Cours
                                </p>
                                <p class="text-lg font-serif">{{ horaires.cours }}</p>
                            </div>
                            <div class="pt-6 border-t border-white/10">
                                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                                    Organisation</p>
                                <p class="text-lg font-serif">{{ horaires.semaine }}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div class="flex flex-col justify-center">
                <div class="flex items-center gap-4 mb-10">
                    <div class="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center">
                        <LucideUsers class="w-6 h-6 text-brand-primary" />
                    </div>
                    <h2 class="text-3xl font-serif text-brand-primary">L'Équipe Pédagogique</h2>
                </div>

                <div v-if="pending" class="space-y-2">
                    <div v-for="i in 5" :key="i" class="h-16 w-full rounded-sm bg-[#e8e0d5] animate-pulse" />
                </div>
                <div v-else-if="error" class="text-red-500 text-sm p-4">
                    Impossible de charger les classes. ({{ error?.statusCode }})
                </div>

                <div v-else class="grid md:grid-cols-2 gap-x-8 gap-y-0 divide-y divide-[#f0ebe3] md:divide-y-0">
                    <div v-for="classe in liste" :key="classe.id"
                        class="py-5 flex flex-col md:border-b md:border-[#f0ebe3] hover:bg-[#f0ebe3] px-4 -mx-4 rounded-sm transition-all duration-300">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">{{ classe.nom
                        }}</span>
                        <span class="text-gray-700 font-serif">{{ classe.enseignant }}</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>