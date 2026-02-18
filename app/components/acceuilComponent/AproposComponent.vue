<script setup>
import { MailIcon, MapIcon, PhoneIcon } from 'lucide-vue-next';

</script>

<template>
    <section class="bg-[#1C1C1C] text-[#E5E5E5] py-16 px-4 lg:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
                <NuxtImg src="logo4.png" alt="Logo" class="lg:w-52 lg:h-52 w-24 h-24 object-contain " />
            </div>
            <!-- Colonne 1: Sacré-Cœur Breteuil (User's Elements) -->
            <div class="space-y-8">
                <h2 class="text-[#C4A55F] text-[28px] font-serif font-bold leading-tight">Notre institution</h2>
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
                <h2 class="text-[#C4A55F] text-[28px] font-serif font-bold leading-tight">Nous contacter</h2>
                <ul class="space-y-4 text-[15px] font-light opacity-90">
                    <li class="flex items-center gap-4">
                        <MailIcon class="w-6 h-6" />
                        <a href="mailto:administration@sacrecoeur-breteuil.fr">administration@sacrecoeur-breteuil.fr</a>
                    </li>
                    <li class="flex items-center gap-4">
                        <PhoneIcon class="w-6 h-6" />03 44 80 22 50
                    </li>

                </ul>
            </div>

            <!-- Colonne 3: Formations -->
            <div class="space-y-8">
                <h2 class="text-[#C4A55F] text-[28px] font-serif font-bold leading-tight">Nous localiser</h2>
                <ul class="space-y-4 text-[15px] font-light opacity-90">
                    <li>
                        <div class="flex items-center gap-4">
                            <MapIcon class="w-6 h-6" />
                            <p>21, Rue des Écoles</p>
                        </div>
                        <p class="ml-10">BP 60104</p>
                        <p class="ml-10">60120 BRETEUIL CEDEX</p>
                    </li>

                </ul>
            </div>

            <!-- Colonne 4: Informations -->
            <div class="space-y-8">
                <h2 class="text-[#C4A55F] text-[28px] font-serif font-bold leading-tight">Nos liens utiles</h2>
                <ul class="space-y-2 text-[15px] font-light opacity-90">
                    <li>
                        <NuxtLink to="/" class="hover:text-[#C4A55F] transition-colors">Inscriptions</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" target="_blank" class="hover:text-[#C4A55F] transition-colors">Ecole directe
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" target="_blank" class="hover:text-[#C4A55F] transition-colors">E-Sidoc
                        </NuxtLink>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-serif {
    font-family: var(--font-serif, serif);
}
</style>