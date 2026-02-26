<script setup>
import { Heart, ShieldCheck, Target, Users } from 'lucide-vue-next';
const values = [
    {
        title: "Confiance",
        description: "Socle de l'épanouissement, elle guide les relations entre élèves, parents et équipe éducative.",
        icon: ShieldCheck
    },
    {
        title: "Engagement",
        description: "Placé au cœur de notre démarche pour amener chaque enfant vers sa propre excellence.",
        icon: Target
    },
    {
        title: "Respect",
        description: "Valeur fondamentale pour apprendre à vivre ensemble dans la tolérance et l'écoute.",
        icon: Users
    },
    {
        title: "Bienveillance",
        description: "Un regard positif qui encourage et valorise les efforts et les progrès de chacun.",
        icon: Heart
    }
]
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-serif text-brand-primary mb-4">Notre Projet Éducatif</h2>
                <p class="text-gray-600 font-sans uppercase tracking-widest text-xs font-bold">Quatre piliers
                    fondamentaux</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="val in values" :key="val.title"
                    class="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300 group">
                    <div
                        class="w-14 h-14 bg-brand-warm flex items-center justify-center mb-8 rounded-sm group-hover:bg-brand-primary transition-colors">
                        <component :is="val.icon"
                            class="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 class="text-xl font-serif text-brand-primary mb-4">{{ val.title }}</h3>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        {{ val.description }}
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