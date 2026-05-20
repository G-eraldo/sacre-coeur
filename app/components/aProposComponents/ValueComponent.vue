<script setup>
import { Heart, ShieldCheck, Target, Users } from 'lucide-vue-next';
const values = [
    {
        title: "Apprendre, s’ouvrir au monde et s’épanouir",
        description: "Faire l’expérience de la réussite pour gagner en confiance. Découvrir ses talents, cultiver ses forces et travailler avec détermination dans un esprit ouvert aux multiples possibilités du monde. Amener chaque élève à son excellence.",
        icon: ShieldCheck
    },
    {
        title: "Écouter, accompagner et grandir",
        description: "Favoriser l’épanouissement et le bien-être de tous. Aider les jeunes à distinguer ce qui est acceptable dans leurs relations aux autres et au monde. Développer la confiance entre les familles, la communauté éducative et les élèves, par une communication de qualité et un suivi attentif.",
        icon: Target
    },
    {
        title: "Vivre et témoigner de l’Évangile",
        description: "Faire de l’école un chemin de vie guidé par l’exemplarité fraternelle. Accueillir l’autre avec bienveillance. Favoriser l’intériorité et la spiritualité en s’appuyant sur les échanges et les valeurs de l’Évangile.",
        icon: Users
    },
    {
        title: "S’engager et construire ensemble",
        description: "Encourager le sens du collectif et la culture du bien-être commun, à travers une responsabilité partagée vers la réussite des élèves. Associer pratiques pédagogiques et familiales, avec tolérance. Relire et évaluer les actions ensemble.",
        icon: Heart
    }
]
</script>

<template>
    <section class="py-20 lg:py-32 bg-brand-warm">
        <div class="max-w-350 mx-auto px-6">
            <div class="text-center mb-16 lg:mb-24">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-primary mb-6 tracking-tight">Notre
                    Projet Educatif</h2>
                <p class="text-gray-500 font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                    Quatre piliers fondamentaux
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div v-for="val in values" :key="val.title"
                    class="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-brand-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">

                    <div
                        class="w-14 h-14 bg-brand-warm/80 flex items-center justify-center mb-8 rounded-xl group-hover:bg-brand-primary transition-colors duration-300 shadow-sm">
                        <component :is="val.icon"
                            class="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 class="text-2xl font-serif text-brand-primary mb-4 leading-snug">{{ val.title }}</h3>

                    <p class="text-gray-600 leading-relaxed text-[15px] flex-grow">
                        {{ val.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>