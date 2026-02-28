<script setup>
import { LucideClipboardCheck, LucideCompass, LucideUserCheck } from 'lucide-vue-next';
const projetPedagogique = {
    title: "Notre Projet Pédagogique",
    pillars: [
        { name: "Rigueur et travail", icon: LucideClipboardCheck },
        { name: "Eveil et découverte", icon: LucideCompass },
        { name: "Autonomie", icon: LucideUserCheck }
    ],
    description: "L'établissement du Sacré-Cœur propose un accompagnement pédagogique personnalisé renforcé. Ces études dirigées visent à donner aux élèves les moyens d'apprendre à apprendre."
}
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <h2 class="text-4xl font-serif text-brand-primary mb-4">{{ projetPedagogique.title }}</h2>
                <p class="text-gray-600 font-sans uppercase tracking-widest text-xs font-bold">
                    Trois piliers fondamentaux
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
                        {{ projetPedagogique.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-serif {
    font-family: var(--font-serif, serif);
}

.font-sans {
    font-family: var(--font-sans, sans-serif);
}
</style>