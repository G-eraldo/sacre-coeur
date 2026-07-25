<script setup>
const presentation = {
    title: "Vivre au Sacré Cœur",
    description: "L’internat Louis et Zélie Martin accueille les élèves du CE2 à la 3ème dans un cadre structurant, chaleureux et exigeant. C’est un lieu de vie à part entière, où les enfants grandissent, apprennent à vivre ensemble et gagnent en autonomie. Pour de nombreuses familles, l’internat est une solution pratique. Pour les élèves, c’est souvent bien plus : une expérience qui les construit.",
    points: [
        "Un accueil mixte pour garçons et filles",
        "Encadrement par une équipe éducative dédiée",
        "Aide aux devoirs et étude accompagnée",
        "Activités sportives, culturelles et spirituelles"
    ],
    highlight: {
        title: "Pourquoi l'internat ?",
        text: "Offrir à son enfant un cadre structuré, propice à la concentration et aux échanges, tout en développant le sens de la vie en communauté."
    }
}
</script>

<template>
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div class="space-y-8">
                <h2 class="text-3xl lg:text-4xl font-serif text-brand-primary">
                    {{ presentation.title }}
                </h2>
                <div class="space-y-6 text-gray-700 leading-relaxed text-m">
                    <p>{{ presentation.description }}</p>
                    <div class="grid gap-4">
                        <div v-for="item in presentation.points" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600">{{ item }}</span>
                        </div>
                    </div>
                </div>

                <div class="bg-brand-warm/40 p-6 rounded-xl border-l-4 border-brand-gold shadow-sm">
                    <p class="italic text-brand-primary mb-4 text-lg font-serif">
                        «Mon fils était timide, peu sûr de lui. Après un an à l’internat, il est revenu transformé.
                        Plus autonome, plus épanoui, plus confiant.»
                    </p>
                    <div>
                        <p class="font-bold text-brand-primary text-lg">Une maman d’interne</p>
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
                        <NuxtImg src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779261762/internat_loyev7.png"
                            alt="Intérieur de l'école" format="webp" quality="80" loading="lazy" sizes="100vw lg:800px"
                            class="w-full h-125 object-cover rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
