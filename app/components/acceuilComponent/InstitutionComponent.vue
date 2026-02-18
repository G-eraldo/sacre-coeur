<script setup>

</script>

<template>
    <section class="max-w-7xl mx-auto px-6 py-10 lg:py-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Left: Text Content -->
            <div class="space-y-8">
                <h2 class="text-4xl lg:text-5xl font-serif text-[#6C1C23] tracking-tight">
                    Sacré-Cœur Breteuil
                </h2>

                <div class="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p class="font-sans">
                        L'Institution du Sacré-Cœur regroupe une école maternelle, une école élémentaire, un collège
                        dont un dispositif ULIS et une SEGPA. Composé de 250 élèves, c'est avant tout un
                        établissement familial accueillant des élèves de la TPS à la 3ème.
                    </p>
                    <p>
                        Nous croyons en la confiance, car elle est le socle sur lequel se construit les relations
                        entre tous les acteurs de notre établissement. L'engagement est au cœur de notre démarche
                        éducative.
                    </p>
                    <p>
                        Le respect et la tolérance sont des valeurs essentielles à nos yeux. La bienveillance guide
                        nos actions au quotidien.
                    </p>
                </div>

                <div class="flex justify-center flex-wrap gap-4 pt-4">
                    <NuxtLink to="/admissions"
                        class="bg-[#6C1C23] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#5a171d] transition-colors rounded-sm">
                        Inscrire mon enfant
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="border border-[#6C1C23] text-[#6C1C23] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#C4A55F] hover:text-white transition-all rounded-sm">
                        En savoir plus
                    </NuxtLink>
                </div>
            </div>

            <div class="hidden lg:block lg:relative">
                <div class="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-[#D4AF37] opacity-40 rounded-sm">
                </div>
                <div class="relative bg-white p-2 shadow-2xl">
                    <NuxtImg
                        src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
                        alt="Sacré-Cœur Breteuil Campus" class="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>
