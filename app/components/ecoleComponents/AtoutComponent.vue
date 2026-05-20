<script setup>
const atouts = [
    {
        title: "Le jardin à l'école",
        text: "Séance préparation d'un épouvantail avec les élèves de la garderie. Les élèves sont ravis de reprendre ces moments concernant le jardin.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
    },
    {
        title: "Accompagnement",
        text: "Aide aux devoirs ciblée et soutien scolaire de 17h à 18h, trois jours par semaine.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779266711/aide_cahj31.jpg"
    },
    {
        title: "Estime de Soi",
        text: "Travail mis en place avec une psychologue clinicienne sur l'Estime de Soi et la connaissance de soi.",
        image: "https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779258797/conseil_des_de%CC%81le%CC%81gue%CC%81s_primaires_xseruz.png"
    }
]
</script>

<template>
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Nos petits plus</p>
                <h2 class="text-3xl font-serif text-brand-primary">Les atouts de l'école</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <Card v-for="atout in atouts" :key="atout.title"
                    class="lg:w-96 w-full mx-auto mb-12 p-4 lg:p-6 lg:mb-16 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <div class="h-64 overflow-hidden relative">
                        <NuxtImg :src="atout.image" :alt="atout.title" format="webp" quality="80" loading="lazy"
                            sizes="100vw md:400px"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-8">
                        <h3 class="text-xl font-serif text-brand-primary mb-4">{{ atout.title }}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ atout.text }}</p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
</template>