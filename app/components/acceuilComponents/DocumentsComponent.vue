<script setup>
import { Download, Eye, FileText } from 'lucide-vue-next';

const { find } = useStrapi()

const { data: pdfsData, error: pdfsError } = await useAsyncData(
    'pdfs',
    async () => {
        try {
            return await find("pdfs", { populate: "*" })
        } catch {
            return { data: [] }
        }
    }
)

const pdfs = computed(() => pdfsData.value?.data ?? [])

function getViewerUrl(url) {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=false`
}

function getPdfPreview(url) {
    return url.replace('/image/upload/', '/image/upload/pg_1,w_400,f_jpg/')
}
</script>

<template>
    <section class="pt-32 lg:pt-56 pb-20 bg-brand-warm relative overflow-hidden text-center border-y border-[#ede8e0]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col items-center">
                <div class="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
                    <span class="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 inline-block">
                        Ressources & Informations
                    </span>
                    <h2 class="text-4xl lg:text-6xl font-serif text-brand-primary mb-6 leading-tight">
                        Nos Documents
                    </h2>
                    <div class="w-20 h-px bg-brand-gold mx-auto mb-6" />
                    <p class="text-gray-600 font-sans text-lg">
                        Consultez et téléchargez les documents officiels, formulaires et brochures de
                        l'Institution du Sacré-Cœur.
                    </p>
                </div>

                <div v-if="pdfsError"
                    class="w-full max-w-md bg-white p-8 rounded-sm shadow-sm border border-red-100 text-center">
                    <p class="text-gray-500 italic">
                        Les documents ne sont pas accessibles pour le moment. Veuillez réessayer ultérieurement.
                    </p>
                </div>

                <div v-else-if="pdfs.length === 0"
                    class="w-full max-w-md bg-white p-8 rounded-sm shadow-sm border border-gray-100 text-center">
                    <p class="text-gray-400 italic">Aucun document disponible dans cette catégorie.</p>
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
                    <Card v-for="pdf in pdfs" :key="pdf.id"
                        class="bg-white border border-[#ede8e0] rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden flex flex-col hover:scale-[1.02]">

                        <div class="relative overflow-hidden aspect-4/3 bg-gray-50">
                            <NuxtLink :to="getViewerUrl(pdf.document[0].url)" target="_blank" external
                                :aria-label="`Aperçu du document : ${pdf.title}`" class="block w-full h-full">
                                <NuxtImg :src="getPdfPreview(pdf.document[0].url)"
                                    :alt="`Aperçu du document : ${pdf.title}`" format="webp" quality="80" loading="lazy"
                                    sizes="320px md:384px lg:384px"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                <div
                                    class="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div
                                        class="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <Eye class="w-6 h-6 text-brand-primary" />
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>

                        <CardHeader class="pt-6 px-6 pb-0">
                            <div class="flex items-start justify-between gap-4">
                                <CardTitle class="font-serif text-xl text-brand-primary mb-2 leading-snug">
                                    {{ pdf.title }}
                                </CardTitle>
                                <FileText class="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                            </div>
                        </CardHeader>

                        <CardContent class="px-6 grow">
                            <p class="text-sm text-gray-500 uppercase tracking-widest font-bold text-[10px]">
                                Document PDF
                            </p>
                        </CardContent>

                        <CardFooter class="p-6 pt-0 mt-auto">
                            <div class="w-full">
                                <Button as-child
                                    class="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-all rounded-sm py-5 shadow-sm hover:shadow-md">
                                    <NuxtLink :to="pdf.document[0].url" download target="_blank"
                                        class="flex items-center gap-2">
                                        <Download class="w-3 h-3" />
                                        Télécharger
                                    </NuxtLink>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
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
