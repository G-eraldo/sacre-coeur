<script setup>
import { Card } from '~/components/ui/card';

const actions = [
    {
        title: "Temps Forts & Célébrations",
        text: "Des célébrations marquent l'année liturgique (Noël, Pâques), rassemblant élèves, parents et enseignants en lien avec la paroisse.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779265718/IMG_9538_dxb2vc.jpg"
    },
    {
        title: "Première Communion",
        text: "Les élèves de CM1 ont la possibilité de se préparer à leur Première Communion, avec une prise en charge dédiée en dehors du temps scolaire.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779265820/premiereCommunion_oyg9v4.jpg"
    },
    {
        title: "Actions de Solidarité",
        text: "Collectes de livres, visites en maison de retraite et correspondance avec des enfants d'Afrique pour cultiver le partage.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779265941/solidarite_oreb88.jpg"
    }
]
</script>

<template>
    <section class="py-24 pb-6 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">S'engager et célébrer</p>
                <h2 class="text-3xl font-serif text-brand-primary">Nos Actions Pastorales</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="action in actions" :key="action.title"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out border-none shadow-md">
                    <div class="h-64 overflow-hidden relative rounded-t-lg">
                        <NuxtImg :src="action.image" :alt="action.title"
                            class="w-full h-full object-cover transition-transform duration-700" />
                    </div>
                    <div class="p-8">
                        <h3 class="text-xl font-serif text-brand-primary mb-4">{{ action.title }}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">{{ action.text }}</p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
</template>