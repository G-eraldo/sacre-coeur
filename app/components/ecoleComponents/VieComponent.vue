<script setup>
const vieEcole = [
    {
        title: "Exposition Handicap",
        date: "12 Mai 2022",
        slug: "exposition-handicap",
        text: "Intervention de l'APEL OISE autour de l'exposition 'C'est pas juste une exposition sur le handicap'.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Célébration",
        date: "5 Mai 2022",
        slug: "celebration",
        text: "Belle célébration avec le Père Florent Mongengo, réunissant maternelle et primaire.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Temps de partage",
        date: "Mars 2022",
        slug: "temps-de-partage",
        text: "Moments forts de partage entre les classes et les intervenants extérieurs.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
]
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">La vie à l'école</p>
                <h2 class="text-3xl font-serif text-brand-primary">Actualités & Événements</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-12">
                <div v-for="item in vieEcole" :key="item.title" class="group">
                    <div class="relative mb-6 overflow-hidden rounded-sm shadow-md">
                        <NuxtImg :src="item.image" :alt="item.title"
                            class="w-full aspect-4/5 object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div
                            class="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm">
                            {{ item.date }}
                        </div>
                    </div>
                    <h3
                        class="text-xl font-serif text-brand-primary mb-3 group-hover:text-brand-gold transition-colors">
                        {{ item.title }}
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">{{ item.text }}</p>
                    <Button as-child variant="link"
                        class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn">
                        <NuxtLink :to="`/actualites/${item.slug}`" class="flex items-center gap-2">
                            Lire la suite
                            <span class="group-hover/btn:translate-x-1 transition-transform">→</span>
                        </NuxtLink>
                    </Button>
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