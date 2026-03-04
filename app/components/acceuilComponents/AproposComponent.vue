<script setup>
import { MailIcon, MapIcon, PhoneIcon } from 'lucide-vue-next';

</script>

<template>
    <section class="bg-brand-dark text-[#E5E5E5] py-16 px-4 lg:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
                <NuxtImg src="/logo4.png" alt="Logo Sacré-Cœur de Breteuil"
                    class="lg:w-52 lg:h-52 w-24 h-24 object-contain " />
            </div>
            <!-- Colonne 1: Sacré-Cœur Breteuil (User's Elements) -->
            <div class="space-y-8">
                <h2 class="text-brand-gold text-[28px] font-serif font-bold leading-tight">Notre institution</h2>
                <div class="space-y-6 text-[15px] leading-relaxed font-light opacity-90">
                    <p>
                        Institution privée catholique sous contrat avec l'État, ouverte à tous, sans discrimination
                        sociale
                        ou ethnique.
                    </p>
                </div>
            </div>

            <!-- Colonne 2: L'établissement -->
            <div class="space-y-8">
                <h2 class="text-brand-gold text-[28px] font-serif font-bold leading-tight">Nous contacter</h2>
                <ul class="space-y-4 text-[15px] font-light opacity-90">
                    <li class="flex items-center gap-4">
                        <MailIcon class="w-6 h-6" />
                        <NuxtLink to="mailto:administration@sacrecoeur-breteuil.fr">
                            administration@sacrecoeur-breteuil.fr</NuxtLink>
                    </li>
                    <li class="flex items-center gap-4">
                        <PhoneIcon class="w-6 h-6" />
                        <NuxtLink to="tel:0344802250">03 44 80 22 50</NuxtLink>
                    </li>

                </ul>
            </div>

            <!-- Colonne 3: Formations -->
            <div class="space-y-8">
                <h2 class="text-brand-gold text-[28px] font-serif font-bold leading-tight">Nous localiser</h2>
                <ul class="space-y-4 text-[15px] font-light opacity-90">
                    <li>
                        <div class="flex items-center gap-4">
                            <MapIcon class="w-6 h-6" />
                            <NuxtLink to="https://www.google.com/maps/place/21+Rue+des+Écoles+60120+Breteuil"
                                target="_blank" rel="noopener noreferrer">
                                21, Rue des Écoles
                            </NuxtLink>
                        </div>
                        <p class="ml-10">BP 60104</p>
                        <p class="ml-10">60120 BRETEUIL CEDEX</p>
                    </li>

                </ul>
            </div>

            <!-- Colonne 4: Informations -->
            <div class="space-y-8">
                <h2 class="text-brand-gold text-[28px] font-serif font-bold leading-tight">Nos liens utiles</h2>
                <ul class="space-y-2 text-[15px] font-light opacity-90">
                    <li>
                        <NuxtLink to="/" class="hover:text-brand-gold transition-colors">Inscriptions</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors">Ecole directe
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors">E-Sidoc
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.apel.fr/" target="_blank" rel="noopener noreferrer"
                            class="hover:text-brand-gold transition-colors">Apel
                        </NuxtLink>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>
