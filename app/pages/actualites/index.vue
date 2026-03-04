<script setup>
import { onMounted } from 'vue';

useSeoMeta({
    title: 'Actualités',
    description: 'Suivez les dernières actualités et événements de l\'Institution du Sacré-Cœur à Breteuil.',
    ogTitle: 'Institution du Sacré-Cœur à Breteuil — Actualités',
    ogDescription: 'Retrouvez toutes les actualités du Sacré-Cœur.',
    ogImage: '/logo4.png',
    ogType: 'website',
})

onMounted(() => {
    console.log('Page Actualités montée');
});

const actualite = [
    {
        title: "Actualité 1",
        description: "Description 1",
        slug: "actualite-1",
        date: "5 Mai 2022",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
    },
    {
        title: "Actualité 2",
        description: "Description 2",
        slug: "actualite-2",
        date: "5 Mai 2022",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-477206590-612x612_fykq0x.jpg"
    },
    {
        title: "Actualité 3",
        description: "Description 3",
        slug: "actualite-3",
        date: "5 Mai 2022",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg"
    }
]
</script>

<template>
    <section class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Actualités</p>
                <h2 class="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Les actualités de notre communauté
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les actualités de notre communauté.</p>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="(item, index) in actualite" :key="index"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <CardHeader>
                        <CardTitle class="font-sans">{{ item.title }}</CardTitle>
                        <CardDescription class="h-24">{{ item.description }}</CardDescription>
                        <div class="relative">
                            <div class="absolute bottom-24 right-2 bg-brand-primary text-white px-3 py-1 rounded-sm text-[10px] font-bold
                uppercase tracking-widest shadow-sm">
                                {{ item.date }}
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <NuxtImg :src="item.image" :alt="item.title" format="webp" quality="80" loading="lazy"
                            sizes="320px md:384px lg:384px" class="w-full h-48 object-cover rounded-lg" />
                    </CardContent>
                    <CardFooter class="flex justify-center">
                        <Button as-child variant="link"
                            class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn">
                            <NuxtLink :to="`/actualites/${item.slug}`" class="flex items-center gap-2">
                                Lire la suite
                                <span class="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </NuxtLink>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div class="flex justify-center">
                <Button as-child
                    class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
                </Button>
            </div>
        </div>

    </section>
</template>

<style scoped></style>