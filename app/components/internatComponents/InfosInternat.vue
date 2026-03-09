<script setup>
import { LucideClock, LucideUsers } from 'lucide-vue-next';

const { find } = useStrapi()

const { data: response, pending, error } = await useAsyncData('internats', () =>
    find('internats', {
        fields: ['nom', 'personnel'],
    })
)

const liste = computed(() => response.value?.data || [])
</script>

<template>
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
            <!-- Horaire et Situation -->
            <Card class="bg-brand-primary rounded-sm shadow-sm p-10 text-white relative overflow-hidden">
                <div class="flex items-center gap-4 mb-4">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
                    <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <LucideClock class="w-5 h-5 text-brand-gold" />
                    </div>
                    <h2 class="text-2xl font-serif text-white">Horaire et situation</h2>
                </div>

                <div class="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">Adresse</p>
                        <p class="text-lg font-serif text-white">34 T rue de Paris, 60120 Breteuil</p>
                    </div>
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">Horaires
                            d'ouverture</p>
                        <p class="text-lg font-serif text-white">Du Lundi 8h35 au Vendredi 16h45</p>
                    </div>
                </div>
            </Card>

            <!-- L'Equipe -->
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

                <!-- Erreur -->
                <div v-else-if="error" class="text-red-500 text-sm p-4">
                    Impossible de charger les classes. ({{ error?.statusCode }})
                </div>
                <div v-else class="space-y-4 text-gray-700 leading-relaxed">
                    <div v-for="personnel in liste" :key="personnel.id"
                        class="py-5 flex items-center justify-between group hover:bg-brand-warm transition-all px-6 rounded-sm border-b border-[#f0ebe3]">
                        <span class=" font-bold text-brand-gold tracking-wide">{{ personnel.nom }}</span>
                        <span class="text-gray-700 font-serif">{{ personnel.personnel }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-serif {
    font-family: var(--font-serif, serif);
}
</style>
