<script setup>
const presentation = {
    title: "Le Projet Pastoral",
    description: "Notre établissement est ouvert à tous, sans discrimination. Nous avons pour mission d'évangéliser au cœur de l'acte éducatif qui humanise, en contribuant à la formation intégrale de chacun.",
    values: [
        "Vivre le respect, la tolérance, le partage et la fraternité",
        "Éveil à la foi partagé au sein de chaque classe",
        "Célébrations rassemblant toute la communauté éducative",
        "Thème de l'année : La Famille (découverte de Louis et Zélie Martin)"
    ],
    themeText: "En explorant la famille de Louis et Zélie Martin, les jeunes découvrent une famille qui place la confiance au centre de ses convictions, tout en abordant les thèmes de la différence et de l'estime de soi."
}
</script>

<template>
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
                <h2 class="text-3xl lg:text-4xl font-serif text-brand-primary">
                    {{ presentation.title }}
                </h2>
                <div class="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>{{ presentation.description }}</p>
                    <div class="grid gap-4">
                        <div v-for="item in presentation.values" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600">{{ item }}</span>
                        </div>
                    </div>
                    <p class="italic text-brand-primary/80 mt-6">{{ presentation.themeText }}</p>
                </div>
            </div>
            <div class="relative">
                <div
                    class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold opacity-20 transform -translate-x-2 -translate-y-2" />
                <NuxtImg src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/pasto_eglise_prrfd8.png"
                    alt="Bâtiment Sacré Cœur" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                    class="hidden lg:block relative z-10 w-full h-125 object-cover rounded-sm shadow-xl" />
            </div>
        </div>
    </section>
</template>
