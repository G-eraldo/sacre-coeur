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
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg",
        url: "/l-ecole"
    },
    {
        title: "Collège",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur."
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716887/istockphoto-1355040546-612x612_o55gfe.jpg",
        url: "/college"
    },
    {
        title: "Segpa",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-477206590-612x612_fykq0x.jpg",
        url: "/segpa"
    },
    {
        title: "Internat",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
        ],
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg",
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
