<script setup>
const atouts = [
    {
        title: "Un parcours continu, sans rupture",
        text: "Au Sacré Cœur, l’entrée en 6ème n’est pas un saut dans l’inconnu. Les élèves qui ont grandi dans notre école primaire retrouvent des adultes qui les connaissent, un environnement familier et une communauté soudée. Pour les familles qui nous rejoignent en collège, l’accueil est personnalisé et le suivi immédiat.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1780047956/received_1389681735871320_itapmp.jpg"
    },
    {
        title: "Une ouverture sur le monde",
        text: "Le collège prépare des jeunes capables de s’orienter dans un monde complexe. La certification Cambridge ouvre les portes des langues et de l’international. Les voyages scolaires, les projets interdisciplinaires et les partenariats locaux permettent aux élèves de dépasser les murs de la classe. Apprendre ici, c’est apprendre à se situer dans le monde.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1780047957/Cambridge_jiac6g.jpg"
    },
    {
        title: "Une taille humaine qui change tout",
        text: "Avec 252 élèves au total, notre collège est à l’échelle juste. Les professeurs connaissent leurs élèves, les suivent dans la durée et adaptent leur accompagnement. Les difficultés sont repérées tôt, les progrès célébrés. Un élève qui a du potentiel mais manque de confiance trouvera ici le cadre pour le révéler. Un élève brillant sera poussé vers l’excellence.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1780047957/espagne_2025_g7v4c0.jpg"
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
                        <NuxtImg :src="atout.image" :alt="atout.title" format="webp" quality="80" loading="lazy"
                            sizes="100vw md:400px"
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