<script setup>
const actualite = [
    {
        title: "Actualité 1",
        description: "Description 1",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
    },
    {
        title: "Actualité 2",
        description: "Description 2",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-477206590-612x612_fykq0x.jpg"
    },
    {
        title: "Actualité 3",
        description: "Description 3",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg"
    }
]
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 py-10 lg:py-8 bg-[#F9F7F4] rounded-lg">
        <div class="flex flex-col">
            <div class="mb-12">
                <h2 class="text-4xl lg:text-5xl font-serif text-[#6C1C23] tracking-tight ">
                    Nos actualités
                </h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <Card v-for="(item, index) in actualite" :key="index"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-102 transition-transform duration-300 ease-in-out">
                    <CardHeader id="commander">
                        <CardTitle class="font-mono">{{ item.title }}</CardTitle>
                        <CardDescription class="h-24">{{ item.description }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <NuxtImg :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-lg" />
                        <!-- <NuxtImg :src="pizzas.pictures?.[0]?.formats?.small?.url" :alt="pizzas.title"
                    class="w-full h-48 object-cover rounded-lg" /> -->
                    </CardContent>
                    <CardFooter class="flex justify-center">
                        <div>
                            <Button
                                class="bg-[#6C1C23] hover:bg-[#C4A55F] text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                                <NuxtLink to="/">Savoir plus</NuxtLink>
                            </Button>
                        </div>

                    </CardFooter>
                </Card>

            </div>
            <div class="flex justify-center">
                <Button
                    class="bg-[#6C1C23] hover:bg-[#C4A55F]  text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                    <NuxtLink to="/">Voir toutes les actualités</NuxtLink>
                </Button>
            </div>
        </div>
    </section>
</template>

<style scoped></style>