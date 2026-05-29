<script setup>
import { CheckCircle2 } from 'lucide-vue-next';

const educationLevels = [
    {
        title: "Ecole",
        highlights: [
            "Éveil à la foi et pastorale",
            "Préparation au Cambridge proposé dès le CM2",
            "Classe dehors en toute petite section",
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/MS_htkcoz.png",
        url: "/l-ecole"
    },
    {
        title: "Collège",
        highlights: [
            "Un parcours continu, sans rupture",
            "Une ouverture sur le monde",
            "Une taille humaine qui change tout"
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258799/Labo_ayjyxv.png",
        url: "/college"
    },
    {
        title: "Segpa",
        highlights: [
            "Un tremplin, pas une voie de garage",
            "Des ateliers concrets qui révèlent des talents",
            "Une inclusion réelle dans l’établissement",
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/Segpa_a%CC%80_Saint_Vincent_de_Paul_rzfly7.jpg",
        url: "/segpa"
    },
    {
        title: "Internat",
        highlights: [
            "Un « chez soi » loin de chez soi",
            "Un levier de réussite scolaire",
            "Accessible dès le CE2 — une opportunité rare",
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779261762/internat_loyev7.png",
        url: "/internat"
    }
]
</script>

<template>
    <section class="w-full bg-brand-warm py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col">
                <div class="mb-12">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                        Étudier au Sacré-Cœur
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card v-for="(level, index) in educationLevels" :key="index"
                        class="w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <CardHeader class="pb-4">
                            <CardTitle class="text-2xl font-serif text-brand-primary">
                                {{ level.title }}
                            </CardTitle>
                        </CardHeader>
                        <CardContent class="grow space-y-6">
                            <ul class="space-y-3">
                                <li v-for="point in level.highlights" :key="point"
                                    class="flex items-start gap-3 text-gray-700 text-sm">
                                    <CheckCircle2 class="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                    <span>{{ point }}</span>
                                </li>
                            </ul>

                            <NuxtImg :src="level.image" :alt="level.title" format="webp" quality="80" loading="lazy"
                                sizes="320px md:384px lg:384px"
                                class="w-full h-48 lg:h-56 object-cover rounded-sm border border-gray-50" />
                        </CardContent>
                        <CardFooter class="pt-2 pb-8 flex justify-center mt-auto">
                            <Button as-child
                                class="bg-brand-primary hover:bg-[#5a171d] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-lg shadow-brand-primary/5">
                                <NuxtLink :to="level.url" :aria-label="`Découvrir la section : ${level.title}`">
                                    En savoir plus
                                </NuxtLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>
