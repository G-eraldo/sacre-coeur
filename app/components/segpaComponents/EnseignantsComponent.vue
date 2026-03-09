<script setup>
import { LucideClock, LucideUsers } from 'lucide-vue-next';

const enseignants = [
    { class: "Coordination", teacher: "Madame LEFÈVRE Clarisse" },
    { class: "Anglais", teacher: "Madame BOURGY" },
    { class: "EPS", teacher: "Monsieur MERCIER" },
    { class: "Histoire Géo", teacher: "Monsieur SECQ" },
    { class: "Physique Chimie", teacher: "Madame LOULIA" },
    { class: "Technologie", teacher: "Monsieur BOUCHER" },
    { class: "SVT", teacher: "Mme DESGROUX" },
    { class: "Arts Plastiques", teacher: "Mme MERCURI" },
]

const horaires = {
    cours: "8h35 à 12h30 et 13h50 à 16h45",
    pro: "Le mardi au Lycée St Vincent de Paul",
    jours: "Lundi, mardi, jeudi et vendredi"
}
</script>

<template>
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
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
                                Cours</p>
                            <p class="text-lg font-serif">{{ horaires.cours }}</p>
                        </div>
                        <div class="pt-6 border-t border-white/10">
                            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                                Enseignement Pro</p>
                            <p class="text-lg font-serif">{{ horaires.pro }}</p>
                        </div>
                        <div class="pt-6 border-t border-white/10">
                            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                                Jours de classe</p>
                            <p class="text-lg font-serif">{{ horaires.jours }}</p>
                        </div>
                    </div>
                </div>
            </Card>

            <div class="flex flex-col justify-center">
                <div class="flex items-center gap-4 mb-10">
                    <div class="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center">
                        <LucideUsers class="w-6 h-6 text-brand-primary" />
                    </div>
                    <h2 class="text-3xl font-serif text-brand-primary">L'Équipe Pédagogique</h2>
                </div>
                <div class="space-y-2">
                    <div v-for="prof in enseignants" :key="prof.teacher"
                        class="py-4 flex items-center justify-between group hover:bg-brand-warm transition-all px-6 rounded-sm border-b border-[#f0ebe3]">
                        <span class="font-bold text-brand-gold tracking-wide text-sm">{{ prof.class }}</span>
                        <span class="text-gray-700 font-serif">{{ prof.teacher }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
