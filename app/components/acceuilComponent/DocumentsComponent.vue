<script setup>
const { find } = useStrapi()
const pdfs = await find("pdfs", { populate: "*" })

const selectedPdf = ref(null)

// Génère une preview image de la 1ère page du PDF via Cloudinary
function getPdfPreview(url) {
    // Transforme l'URL cloudinary pour extraire une image de la 1ère page
    return url.replace('/image/upload/', '/image/upload/pg_1,w_400,f_jpg/')
}
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 py-10 lg:py-8 bg-[#F9F7F4] rounded-lg">
        <div class="flex flex-col">
            <div class="mb-12">
                <h2 class="text-4xl lg:text-5xl font-serif text-[#6C1C23] tracking-tight">
                    Nos Documents
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3">
                <Card v-for="pdf in pdfs.data" :key="pdf.id"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer"
                    @click="selectedPdf = pdf">
                    <CardHeader>
                        <CardTitle class="font-mono">{{ pdf.title }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <NuxtLink :to="pdf.document[0].url" target="_blank">
                            <NuxtImg :src="getPdfPreview(pdf.document[0].url)" :alt="pdf.title"
                                class="w-full h-48 object-cover rounded-lg border border-gray-100" />
                        </NuxtLink>
                    </CardContent>
                    <CardFooter class="flex justify-center">
                        <Button
                            class="bg-[#6C1C23] hover:bg-[#C4A55F] text-white px-8 py-4 text-xs font-bold uppercase rounded-sm"
                            @click.stop>
                            <NuxtLink :to="pdf.document[0].url" target="_blank">Apercu</NuxtLink>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div class="flex justify-center">
                <Button
                    class="bg-[#6C1C23] hover:bg-[#C4A55F] text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Voir tous nos documents</NuxtLink>
                </Button>
            </div>
        </div>
    </section>
</template>