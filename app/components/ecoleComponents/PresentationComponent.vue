<script setup>
const presentation = {
    title: "Présentation de l'école",
    description: "L’Institution du Sacré Cœur accueille les enfants de la Toute Petite Section au CM2 dans un cadre bienveillant, familial et porteur des valeurs de l’Enseignement catholique. Établissement privé catholique sous contrat avec l’État, notre école est ouverte à tous, dans le respect des convictions de chacun, de la diversité et du vivre-ensemble.",
    description2: "Notre équipe éducative accompagne chaque élève avec attention afin de favoriser son épanouissement personnel, scolaire et humain.",
    classes: [
        "3 classes de maternelle : TPS/PS, MS et GS",
        "5 classes de primaire : du CP au CM2",
        "1 dispositif ULIS, permettant l’accompagnement d’élèves à besoins éducatifs particuliers",
        "1 réseau d’aide, au service de la réussite et du suivi des élèves"
    ],
    description3: "À travers des projets pédagogiques, culturels, sportifs, pastoraux et solidaires, l’Institution du Sacré Cœur souhaite faire grandir chaque enfant dans un climat de confiance, d’exigence et de bienveillance.",
    director: "Mme Voisin Bazélina",
    phone: "03.44.80.22.50",
    email: "primaire@sacrecoeur-breteuil.fr"
}
</script>

<template>
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
                <h2 class="text-3xl lg:text-4xl font-serif text-brand-primary">
                    {{ presentation.title }}
                </h2>
                <div class="space-y-6 text-gray-700 leading-relaxed text-m">
                    <p>{{ presentation.description }}</p>
                    <p>{{ presentation.description2 }}</p>
                    <div class="grid gap-4">
                        <div v-for="item in presentation.classes" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600">{{ item }}</span>
                        </div>
                    </div>
                    <p>{{ presentation.description3 }}</p>
                </div>
                <div class="pt-6 border-t border-[#f0ebe3]">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">Direction</p>
                    <p class="text-xl font-serif text-brand-primary">{{ presentation.director }}</p>
                </div>
            </div>
            <div class="relative">
                <div
                    class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold opacity-20 transform -translate-x-2 -translate-y-2" />
                <NuxtImg src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/MS_htkcoz.png"
                    alt="Intérieur de l'école" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                    class="hidden lg:block relative z-10 w-full h-125 object-cover rounded-sm shadow-xl" />
            </div>
        </div>
    </section>
</template>
