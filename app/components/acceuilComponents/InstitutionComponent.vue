<template>
    <section id="mot-du-directeur" class="w-full py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <!-- Partie Texte (Plus large pour éviter une colonne trop longue) -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="space-y-4">
                        <h2 class="text-3xl lg:text-4xl font-serif text-brand-primary tracking-tight">
                            Mot de la cheffe d'établissement
                        </h2>
                        <div class="w-20 h-1 bg-brand-gold rounded-full" />
                    </div>

                    <div class="space-y-5 text-gray-700 leading-relaxed text-base">
                        <p class="font-bold text-xl text-brand-primary mb-2">
                            Bienvenue à l'Institution du Sacré Cœur de Breteuil.
                        </p>
                        <p>
                            Choisir une école pour son enfant, c'est une décision qui engage. Vous cherchez un endroit
                            où il sera <span class="text-brand-gold font-bold">accueilli</span> pour ce qu'il est,
                            <span class=" text-brand-gold font-bold">accompagné avec soin</span>, et
                            <span class=" text-brand-gold font-bold">encouragé</span>
                            à devenir ce qu'il peut être. C'est la promesse que nous renouvelons chaque rentrée, et que
                            nos
                            équipes s'attachent à tenir chaque jour.
                        </p>
                        <p>
                            L'Institution du Sacré Cœur, c'est <span class="text-brand-gold font-bold">252
                                élèves</span> de la toute petite section à la troisième —
                            une école maternelle et élémentaire, un collège avec dispositif ULIS, une SEGPA et un
                            internat. Un ensemble scolaire complet, <span class="text-brand-gold font-bold">à taille
                                humaine</span>, ancré dans le territoire de l'Oise
                            Picarde.
                        </p>
                        <p>
                            Ce qui nous définit avant tout, c'est <span class="text-brand-gold font-bold">la
                                confiance</span>.
                            La confiance que nous accordons à chaque élève, quels que soient son niveau et son parcours.
                            La confiance que nous entretenons avec les familles, parce qu'un enfant qui grandit bien,
                            c'est une école et des parents qui travaillent ensemble dans le même sens. La confiance,
                            enfin, que nous plaçons dans nos équipes — engagées, attentives, et convaincues que chaque
                            enfant mérite qu'on croit en lui.
                        </p>
                        <p>
                            <span class="text-brand-gold font-bold">L'engagement</span> est au cœur de notre
                            démarche. Nous encourageons nos élèves à s'investir
                            pleinement dans leurs apprentissages, à développer leur curiosité, à prendre leur place dans
                            la classe et dans la vie. Nous leur apprenons à respecter l'autre, à vivre ensemble dans un
                            esprit d'ouverture et de dialogue — des valeurs qui dépassent largement les murs de l'école.
                        </p>
                        <p>
                            Notre internat accueille les élèves du CE2 à la troisième dans un cadre structurant et
                            chaleureux. Loin d'être un simple hébergement, c'est un vrai lieu de vie, où les enfants
                            apprennent l'autonomie, le respect des règles et le plaisir de partager le quotidien avec
                            d'autres. Pour beaucoup d'entre eux, l'internat est un <span
                                class="text-brand-gold font-bold">tremplin</span> vers une plus grande
                            confiance en eux et une meilleure réussite scolaire.
                        </p>
                        <p class="font-medium text-brand-primary">
                            N'hésitez pas à nous contacter ou à venir visiter l'établissement — nous serons ravis de
                            vous accueillir et de répondre à toutes vos questions.
                        </p>

                        <!-- Encart Signature -->
                        <div class="bg-brand-warm/40 p-6 rounded-xl border-l-4 border-brand-gold mt-8 shadow-sm">
                            <p class="italic text-brand-primary mb-4 text-lg font-serif">
                                Avec confiance, engagement et bienveillance,
                            </p>
                            <div>
                                <p class="font-bold text-brand-primary text-lg">Bazelina Voisin</p>
                                <p class="text-sm text-gray-600 mt-1">Cheffe d'établissement coordinatrice École —
                                    Collège — SEGPA — Internat</p>
                                <p class="text-sm text-gray-600">Institution du Sacré Cœur, Breteuil-sur-Noye</p>
                                <p class="text-sm font-bold text-brand-primary mt-1">03 44 80 22 50</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-4 pt-6">
                        <Button as-child
                            class="bg-brand-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-primary-dark transition-colors rounded-sm">
                            <NuxtLink to="/pre-inscription"
                                aria-label="Accéder au formulaire d'inscription pour mon enfant">
                                Pré-inscrire mon enfant</NuxtLink>
                        </Button>
                        <Button as-child variant="outline"
                            class="border-brand-primary text-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all rounded-sm">
                            <NuxtLink to="/a-propos" aria-label="En savoir plus sur l'Institution du Sacré Cœur">En
                                savoir plus</NuxtLink>
                        </Button>
                    </div>
                </div>

                <!-- Partie Image (Sticky pour suivre le scroll) -->
                <div class="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 pb-12">
                    <div class="relative group">
                        <!-- Éléments de décoration -->
                        <div
                            class="absolute -inset-4 border-2 border-brand-gold/30 rounded-xl transition-all duration-500 group-hover:-inset-3" />
                        <div
                            class="absolute inset-0 bg-brand-primary/5 translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

                        <!-- Image Principale -->
                        <div class="relative bg-white p-3 shadow-xl rounded-xl z-10">
                            <NuxtImg
                                src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1779260240/devanture_tg0ajw.png"
                                alt="Campus de l'Institution du Sacré Cœur de Breteuil" format="webp" quality="80"
                                loading="lazy" sizes="100vw lg:600px" class="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
