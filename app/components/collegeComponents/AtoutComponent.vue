<script setup>
const atouts = [
    {
        title: "Classe Bilangue",
        text: "Dès la 6ème, nos élèves peuvent choisir la classe bilangue pour un apprentissage renforcé des langues étrangères.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
    },
    {
        title: "Inclusion & ULIS",
        text: "Un dispositif dédié pour accompagner jusqu'à 12 élèves en situation de handicap, favorisant une scolarité inclusive.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "CDI & E-Sidoc",
        text: "Un centre de documentation moderne avec accès au portail E-Sidoc pour la recherche et la culture.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    }
]
</script>

<template>
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Nos petits plus</p>
                <h2 class="text-3xl font-serif text-brand-primary">Les atouts de l'école</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="atout in atouts" :key="atout.title"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <div class="h-64 overflow-hidden relative">
                        <NuxtImg :src="atout.image" :alt="atout.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-8">
                        <h3 class="text-xl font-serif text-brand-primary mb-4">{{ atout.title }}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ atout.text }}</p>
                    </div>
                </Card>
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