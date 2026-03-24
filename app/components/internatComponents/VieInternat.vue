<script setup>
const vieInternat = [
    {
        title: "L'Internat Garçons & Filles",
        text: "Des ailes séparées pour les garçons et les filles, assurant l'intimité de chacun tout en partageant des moments de convivialité en journée.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"


    },
    {
        title: "Projet Louis & Zélie Martin",
        text: "Inspiré par le couple de saints Louis et Zélie Martin, notre projet pastoral met l'accent sur les valeurs familiales et l'accompagnement attentif de chaque jeune.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"


    },
    {
        title: "Vie Quotidienne & Études",
        text: "Un emploi du temps équilibré entre cours, temps d'étude surveillée pour les devoirs, activités sportives et moments de détente.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    }
]
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Expérience</p>
                <h2 class="text-3xl font-serif text-brand-primary">La vie à l'internat</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="item in vieInternat" :key="item.title"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <div class="h-64 overflow-hidden relative">
                        <NuxtImg :src="item.image" :alt="item.title" format="webp" quality="80" loading="lazy"
                            sizes="100vw md:400px"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3
                        class="text-xl font-serif text-brand-primary mb-3 group-hover:text-brand-gold transition-colors">
                        {{ item.title }}
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ item.text }}</p>
                </Card>
            </div>
        </div>
    </section>
</template>
