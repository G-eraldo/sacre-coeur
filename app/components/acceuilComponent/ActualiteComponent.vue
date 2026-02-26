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
    <section class="w-full bg-brand-warm py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col">
                <div class="mb-12">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
                        Nos actualités
                    </h2>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <Card
                        v-for="(item, index) in actualite"
                        :key="index"
                        class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <CardHeader>
                            <CardTitle class="font-sans">{{ item.title }}</CardTitle>
                            <CardDescription class="h-24">{{ item.description }}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <NuxtImg :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-lg" />
                        </CardContent>
                        <CardFooter class="flex justify-center">
                            <Button as-child class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                                <NuxtLink to="/">Savoir plus</NuxtLink>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div class="flex justify-center">
                    <Button as-child class="bg-brand-primary hover:bg-brand-gold text-white px-8 py-4 text-xs font-bold uppercase rounded-sm">
                        <NuxtLink to="/">Voir toutes les actualités</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
