<template>
    <section class="w-full py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="space-y-8">
                    <h2 class="text-4xl lg:text-5xl font-serif text-brand-primary tracking-tight">
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
                        <Button as-child
                            class="bg-brand-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-primary-dark transition-colors rounded-sm">
                            <NuxtLink to="/pre-inscription"
                                aria-label="Accéder au formulaire d'inscription pour mon enfant">
                                Pré-inscrire mon enfant</NuxtLink>
                        </Button>
                        <Button as-child variant="outline"
                            class="border-brand-primary text-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all rounded-sm">
                            <NuxtLink to="/a-propos" aria-label="En savoir plus sur l'Institution du Sacré-Cœur">En
                                savoir plus</NuxtLink>
                        </Button>
                    </div>
                </div>

                <div class="hidden lg:block lg:relative">
                    <div
                        class="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-brand-gold opacity-40 rounded-sm" />
                    <div class="relative bg-white p-2 shadow-2xl">
                        <NuxtImg
                            src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770720141/pexels-pixabay-265076_bden5m.jpg"
                            alt="Campus de l'Institution du Sacré-Cœur de Breteuil" format="webp" quality="80"
                            loading="lazy" sizes="100vw lg:800px" class="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
