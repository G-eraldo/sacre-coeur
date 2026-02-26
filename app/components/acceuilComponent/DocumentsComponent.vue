<script setup>
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
    <section class="w-full bg-brand-warm py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col">
                <div class="mb-12">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                        Nos Documents
                    </h2>
                </div>

                <!-- Error state -->
                <div v-if="pdfsError" class="text-gray-500 text-center py-12">
                    <p>Les documents ne sont pas disponibles pour le moment.</p>
                </div>

                <!-- Empty state -->
                <div v-else-if="pdfs.length === 0" class="text-gray-500 text-center py-12">
                    <p>Aucun document disponible.</p>
                </div>

                <div v-else class="grid grid-cols-1 lg:grid-cols-3">
                    <Card
                        v-for="pdf in pdfs"
                        :key="pdf.id"
                        class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <CardHeader>
                            <CardTitle class="font-sans">{{ pdf.title }}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <NuxtLink :to="getViewerUrl(pdf.document[0].url)" target="_blank" external>
                                <NuxtImg
                                    :src="getPdfPreview(pdf.document[0].url)"
                                    :alt="`Aperçu du document : ${pdf.title}`"
                                    class="w-full h-48 object-cover rounded-lg border border-gray-100 hover:opacity-80 transition-opacity" />
                            </NuxtLink>
                        </CardContent>
                        <CardFooter class="flex justify-center">
                            <Button as-child class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                                <NuxtLink :to="getViewerUrl(pdf.document[0].url)" target="_blank" external>
                                    Aperçu du document
                                </NuxtLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div class="flex justify-center">
                    <Button as-child class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                        <NuxtLink to="/">Voir tous nos documents</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>
