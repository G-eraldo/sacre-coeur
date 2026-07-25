<script setup>
const presentation = {
    title: "Vivre et apprendre ensemble au Collège",
    description: "Le collège du Sacré Cœur, c’est quatre années décisives dans un cadre que les élèves connaissent et où ils se sentent attendus. La continuité avec l’école primaire, la taille humaine de l’établissement et l’engagement de chaque enseignant font du collège un lieu où chaque jeune peut construire son parcours en confiance, sans jamais se sentir perdu dans la masse.",
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
                <div class="space-y-6 text-gray-700 leading-relaxed text-m">
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

                <div class="bg-brand-warm/40 p-6 rounded-xl border-l-4 border-brand-gold mt-8 shadow-sm">
                    <p class="italic text-brand-primary mb-4 text-lg font-serif">
                        « On ne laisse pas un élève décrocher sans réagir. L’équipe se parle, se concerte, et agit ensemble.
                        »
                    </p>
                    <div>
                        <p class="font-bold text-brand-primary text-lg">Un enseignant du collège</p>
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
                            src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258799/Labo_ayjyxv.png"
                            alt="Intérieur de l'école" format="webp" quality="80"
                            loading="lazy" sizes="100vw lg:800px" class="w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>