<script setup>
const vieInternat = [
    {
        title: "Un « chez soi » loin de chez soi",
        text: "Loin d’être un simple dortoir, l’internat du Sacré Cœur est un véritable lieu de vie. Les enfants y ont leurs habitudes, leurs repas partagés, leurs soirées encadrées, leurs espaces pour souffler. Les équipes veillent à ce que chaque élève se sente accueilli, accompagné et en sécurité. L’internat, c’est aussi apprendre à vivre avec les autres : partager l’espace, respecter les règles, prendre soin de ses camarades.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1780047955/received_1570690504155646_vzps7e.jpg"


    },
    {
        title: "Un levier de réussite scolaire",
        text: "La régularité du rythme internat — repas à heures fixes, études encadrées, coucher structuré — est souvent ce qui fait basculer un parcours scolaire dans le bon sens. Loin des distractions et accompagnés par des adultes disponibles, les élèves internats travaillent mieux, dorment mieux et arrivent en classe plus dispos. Pour beaucoup, c’est un vrai déclencheur de progrès.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1780047955/internat_etude_1_fsemgt.png"


    },
    {
        title: "Accessible dès le CE2 — une opportunité rare",
        text: "L’internat du Sacré Cœur est l’un des rares à accueillir des enfants dès le CE2. C’est une opportunité précieuse pour les familles éloignées géographiquement, les parents aux horaires décalés, ou ceux qui cherchent pour leur enfant un cadre plus structurant et stimulant. L’accueil y est adapté à l’âge : les plus jeunes bénéficient d’une attention particulière et d’un encadrement resserré.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258799/noel_internat_pns38p.png"
    }
]
</script>

<template>
    <section class="py-24 bg-brand-warm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Expérience</p>
                <h2 class="text-3xl font-serif text-brand-primary">La vie à l'internat</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="item in vieInternat" :key="item.title"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <div class="h-64 overflow-hidden relative">
                        <NuxtImg :src="item.image" :alt="item.title" format="webp" quality="80" loading="lazy"
                            sizes="100vw md:400px"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3
                        class="text-xl font-serif text-brand-primary mb-3 group-hover:text-brand-gold transition-colors">
                        {{ item.title }}
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ item.text }}</p>
                </Card>
            </div>
        </div>
    </section>
</template>
