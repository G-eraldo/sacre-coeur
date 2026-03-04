<script setup>
const presentation = {
    title: "Vivre au Sacré-Cœur",
    description: "L'internat du Sacré-Cœur est un lieu de vie, d'étude et d'épanouissement. Situé au cœur de Breteuil, il accueille les élèves du primaire et du collège dans un environnement familial et sécurisant, favorisant la réussite scolaire et l'apprentissage de l'autonomie.",
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
                <div class="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>{{ presentation.description }}</p>
                    <div class="grid gap-4">
                        <div v-for="item in presentation.points" :key="item" class="flex items-center gap-3">
                            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            <span class="text-gray-600">{{ item }}</span>
                        </div>
                    </div>
                </div>

                <!-- Bloc Pourquoi choisir l'internat -->
                <div class="p-8 bg-brand-warm rounded-sm border border-brand-gold/20 mt-8">
                    <h3 class="text-xl font-serif text-brand-primary mb-4">{{ presentation.highlight.title }}</h3>
                    <p class="text-gray-600 leading-relaxed italic">"{{ presentation.highlight.text }}"</p>
                </div>
            </div>

            <div class="hidden lg:block lg:relative lg:mt-12">
                <div
                    class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold opacity-20 transform -translate-x-2 -translate-y-2" />
                <NuxtImg
                    src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg"
                    alt="Vie à l'internat" class="relative z-10 w-full h-125 object-cover rounded-sm shadow-xl" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>
