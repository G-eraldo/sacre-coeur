<script setup>
const presentation = {
    title: "Présentation de la SEGPA",
    description: "La Section d'Enseignement Général et Professionnel Adapté (SEGPA) s'adresse à des élèves présentant des difficultés scolaires graves et durables. Intégrée au collège, elle permet aux élèves de suivre une scolarité adaptée tout en participant à la vie de l'établissement.",
    points: [
        "Un enseignement adapté aux rythmes de chacun",
        "Des classes à effectifs réduits (maximum 16 élèves)",
        "Un projet pédagogique tourné vers la réussite",
        "Une inclusion progressive dans les classes du collège"
    ],
    director: "Mme Lefèvre",
    phone: "03.44.80.22.50",
    email: "administration@sacrecoeur-breteuil.fr"
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
                        <div v-for="item in presentation.points" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600 text-base">{{ item }}</span>
                        </div>
                    </div>
                </div>
                <div class="pt-6 border-t border-[#f0ebe3]">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">Responsable SEGPA
                    </p>
                    <p class="text-xl font-serif text-brand-primary">{{ presentation.director }}</p>
                </div>
            </div>
            <div class="relative">
                <div
                    class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold opacity-20 transform -translate-x-2 -translate-y-2" />
                <NuxtImg
                    src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/Segpa_a%CC%80_Saint_Vincent_de_Paul_rzfly7.jpg"
                    alt="Vie en SEGPA" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                    class="hidden lg:block relative z-10 w-full h-125 object-cover rounded-sm shadow-xl" />
            </div>
        </div>
    </section>
</template>
