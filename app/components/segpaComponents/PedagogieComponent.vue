<script setup>
import { LucideBriefcase, LucideHeartHandshake, LucideTrophy } from 'lucide-vue-next';
const projetPedagogique = {
    title: "Notre Projet Pédagogique",
    pillars: [
        {
            name: "Accompagnement",
            icon: LucideHeartHandshake,
            description: "Un suivi individualisé pour redonner confiance à l'élève et valoriser ses compétences."
        },
        {
            name: "Projet Pro",
            icon: LucideBriefcase,
            description: "Dès la 4ème, découverte des champs professionnels et préparation à l'orientation."
        },
        {
            name: "Réussite",
            icon: LucideTrophy,
            description: "Préparation au Certificat de Formation Générale (CFG) et au DNB Pro."
        }
    ]
}
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <h2 class="text-4xl font-serif text-brand-primary mb-4">{{ projetPedagogique.title }}</h2>
                <p class="text-gray-600 font-sans uppercase tracking-widest text-xs font-bold">
                    Trois axes pour grandir
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="pillar in projetPedagogique.pillars" :key="pillar.name"
                    class="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300 group">
                    <div
                        class="w-14 h-14 bg-brand-warm flex items-center justify-center mb-8 rounded-sm group-hover:bg-brand-primary transition-colors">
                        <component :is="pillar.icon"
                            class="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 class="text-xl font-serif text-brand-primary mb-4">{{ pillar.name }}</h3>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        {{ pillar.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>