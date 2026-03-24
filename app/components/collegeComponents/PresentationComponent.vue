<script setup>
const presentation = {
    title: "Vivre et apprendre ensemble au Collège",
    description: "Le Collège du Sacré-Cœur accueille les élèves dans un cadre structuré et bienveillant. Établissement privé catholique sous contrat d'État, nous proposons un parcours d'excellence accessible à tous, favorisant l'autonomie et le respect mutuel.",
    classes: [
        "Classes de la 6ème à la 3ème",
        "Section d'Enseignement Général et Professionnel Adapté (SEGPA)",
        "Dispositif ULIS (Unité Localisée pour l'Inclusion Scolaire)",
        "Classe Bilangue dès la 6ème"
    ],
    director: "Mme Voisin Bazélina",
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
                        <div v-for="item in presentation.classes" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600">{{ item }}</span>
                        </div>
                    </div>
                </div>
                <div class="pt-6 border-t border-[#f0ebe3]">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">Direction</p>
                    <p class="text-xl font-serif text-brand-primary">{{ presentation.director }}</p>
                </div>
            </div>
            <div class="relative">
                <div
                    class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold opacity-20 transform -translate-x-2 -translate-y-2" />
                <NuxtImg
                    src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg"
                    alt="Intérieur de l'école" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                    class="hidden lg:block relative z-10 w-full h-125 object-cover rounded-sm shadow-xl" />
            </div>
        </div>
    </section>
</template>