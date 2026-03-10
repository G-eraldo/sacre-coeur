<script setup>
import Alert from '~/components/ui/alert/Alert.vue'
import AlertDescription from '~/components/ui/alert/AlertDescription.vue'

const route = useRoute()
const { find } = useStrapi()

const { data: articles, error } = await useAsyncData(
    `actualite-${route.params.slug}`,
    () => find('actualites', {
        filters: { slug: { $eq: route.params.slug } },
        populate: {
            images: { populate: '*' },
            contenu: {
                populate: '*'
            }
        },
        pagination: { pageSize: 1 }
    })
)

const article = computed(() => articles.value?.data?.[0] ?? null)

if (!article.value && !error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Actualité non trouvée' })
}

useSeoMeta({
    title: () => article.value?.titre ?? 'Actualité',
    description: () => article.value?.description ?? '',
    ogTitle: () => `Institution du Sacré-Cœur — ${article.value?.titre ?? ''}`,
    ogDescription: () => article.value?.description ?? '',
    ogImage: () => article.value?.images?.[0]?.url ?? '/logo4.png',
    ogType: 'article',
})

function formatDate(dateStr) {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).toUpperCase()
}
</script>

<template>
    <section class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">

        <!-- Erreur -->
        <Alert v-if="error" variant="destructive" class="max-w-xl mx-auto">
            <AlertDescription>Impossible de charger cette actualité.</AlertDescription>
        </Alert>

        <Card v-else-if="article" class="max-w-7xl mx-auto px-6 py-12">

            <!-- En-tête -->
            <div class="mb-10">
                <span
                    class="bg-brand-primary text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {{ formatDate(article.publishedAt) }}
                </span>
                <h1 class="text-4xl md:text-5xl font-serif text-brand-primary mt-4 mb-3">{{ article.titre }}</h1>
                <p class="text-lg text-gray-600">{{ article.description }}</p>
            </div>

            <!-- Galerie photos -->
            <div v-if="article.images?.length"
                :class="article.images.length === 1 ? 'w-full' : 'grid grid-cols-1 md:grid-cols-2 gap-4'" class="mb-12">
                <NuxtImg v-for="img in article.images" :key="img.url" :src="img.url"
                    :alt="img.alternativeText || article.titre" format="webp" quality="80" loading="lazy"
                    class="w-full rounded-lg object-cover aspect-video" />
            </div>

            <!-- Sections dynamiques (optionnelles) -->
            <div v-if="article.contenu?.length" class="space-y-10">
                <div v-for="(section, i) in article.contenu" :key="i" class="space-y-4">
                    <h2 v-if="section.titre_section" class="text-2xl md:text-3xl font-serif text-brand-primary">
                        {{ section.titre_section }}
                    </h2>
                    <StrapiBlocksRenderer v-if="section.paragraphe" :blocks="section.paragraphe"
                        class="prose prose-gray max-w-none" />
                </div>
            </div>

            <!-- Retour -->
            <div class="mt-16 border-t pt-8">
                <Button as-child variant="link"
                    class="p-0 h-auto font-bold text-brand-primary hover:text-brand-gold group/btn transition-colors">
                    <NuxtLink to="/actualites" class="flex items-center gap-2">
                        <span class="group-hover/btn:-translate-x-1 transition-transform">←</span>
                        Retour aux actualités
                    </NuxtLink>
                </Button>
            </div>

        </Card>
    </section>
</template>