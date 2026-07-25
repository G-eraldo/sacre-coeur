<script setup>
const presentation = {
    title: "Présentation de la SEGPA",
    description: "La SEGPA du Sacré Cœur, c’est un dispositif qui croit en chaque élève — y compris et surtoutceux que le système scolaire traditionnel a parfois blessés. Ici, on repart des forces de chaquejeune. On lui redonne le goût d’apprendre, le plaisir de réussir, et on lui ouvre des perspectivesconcrètes et valorisantes.",
    points: [
        "Un enseignement adapté aux rythmes de chacun",
        "Des classes à effectifs réduits (maximum 16 élèves)",
        "Un projet pédagogique tourné vers la réussite",
        "Une inclusion progressive dans les classes du collège"
    ],
    director: "Mme Lefèvre",
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
                        <div v-for="item in presentation.points" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600 text-base">{{ item }}</span>
                        </div>
                    </div>
                </div>
                <div class="pt-6 border-t border-[#f0ebe3]">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">Responsable SEGPA
                    </p>
                    <p class="text-xl font-serif text-brand-primary">{{ presentation.director }}</p>
                </div>

                <div class="bg-brand-warm/40 p-6 rounded-xl border-l-4 border-brand-gold mt-8 shadow-sm">
                    <p class="italic text-brand-primary mb-4 text-lg font-serif">
                        « Ici, on nous fait confiance. On ne nous regarde pas comme si on était moins que les autres. On
                        nous donne envie d’essayer. »
                    </p>
                    <div>
                        <p class="font-bold text-brand-primary text-lg">Un élève de SEGPA</p>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block lg:sticky lg:top-32 pb-12">
                <div class="relative group">
                    <!-- Éléments de décoration -->
                    <div
                        class="absolute -inset-4 border-2 border-brand-gold/30 rounded-xl transition-all duration-500 group-hover:-inset-3" />
                    <div
                        class="absolute inset-0 bg-brand-primary/5 translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

                    <!-- Image Principale -->
                    <div class="relative bg-white p-3 shadow-xl rounded-xl z-10">
                        <NuxtImg
                            src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/Segpa_a%CC%80_Saint_Vincent_de_Paul_rzfly7.jpg"
                            alt="Intérieur de l'école" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                            class="w-full h-125 object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
