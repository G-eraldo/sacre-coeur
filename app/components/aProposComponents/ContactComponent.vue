<script setup>
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-vue-next';
</script>

<template>
    <section id="liens-utiles" class="relative py-24 overflow-hidden">

        <div class="max-w-7xl mx-auto px-6 relative z-10">


            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Restons en contact</p>
                <h2 class="text-3xl font-serif text-brand-primary">Tout ce dont vous avez besoin</h2>
                <div class="w-16 h-px bg-brand-gold mx-auto mt-5" />
            </div>

            <div class="grid md:grid-cols-3 gap-8">


                <Card
                    class="bg-white rounded-sm shadow-sm border border-[#ede8e0] p-8 hover:shadow-md transition-shadow duration-300">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                            <Phone class="w-4 h-4 text-brand-primary" />
                        </div>
                        <h3 class="text-lg font-serif text-brand-primary">Nous contacter</h3>
                    </div>

                    <ul class="space-y-6">
                        <li>
                            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">Email
                            </p>
                            <NuxtLink to="mailto:administration@sacrecoeur-breteuil.fr"
                                class="text-sm text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                <Mail
                                    class="w-4 h-4 text-gray-400 group-hover:text-brand-primary transition-colors shrink-0" />
                                administration@sacrecoeur-breteuil.fr
                            </NuxtLink>
                        </li>
                        <li class="pt-6 border-t border-[#f0ebe3]">
                            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">
                                Téléphone</p>
                            <NuxtLink to="tel:0344802250"
                                class="text-sm text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                <Phone
                                    class="w-4 h-4 text-gray-400 group-hover:text-brand-primary transition-colors shrink-0" />
                                03 44 80 22 50
                            </NuxtLink>
                        </li>
                        <Button as-child variant="outline"
                            class="bg-brand-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#5a171d] transition-colors rounded-sm">
                            <NuxtLink to="/contact" aria-label="En savoir plus sur l'Institution du Sacré-Cœur"
                                class="hover:text-brand-gold">Nous
                                contacter</NuxtLink>
                        </Button>
                    </ul>
                </Card>


                <Card class="bg-brand-primary rounded-sm shadow-sm p-8 text-white relative overflow-hidden">
                    <div class="flex items-center gap-3 mb-8 relative z-10">
                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <MapPin class="w-4 h-4 text-white" />
                        </div>
                        <h3 class="text-lg font-serif text-white">Nous localiser</h3>
                    </div>

                    <div class="relative z-10">
                        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Adresse
                            postale</p>
                        <address class="not-italic text-white/90 leading-8 text-sm">
                            21, Rue des Écoles<br>
                            BP 60104<br>
                            60120 BRETEUIL CEDEX
                        </address>


                        <NuxtLink to="https://maps.google.com/?q=21+Rue+des+Ecoles+60120+Breteuil" target="_blank"
                            class="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest
                            text-brand-gold hover:text-white transition-colors group">
                            Ouvrir dans Maps
                            <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </NuxtLink>
                    </div>
                </Card>

                <Card
                    class="bg-white rounded-sm shadow-sm border border-[#ede8e0] p-8 hover:shadow-md transition-shadow duration-300">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                            <ExternalLink class="w-4 h-4 text-brand-primary" />
                        </div>
                        <h3 class="text-lg font-serif text-brand-primary">Liens utiles</h3>
                    </div>

                    <ul class="space-y-2">
                        <li v-for="(link, i) in [
                            { label: 'Pré-inscriptions', to: '/pre-inscription', external: false },
                            { label: 'Ecole directe', to: 'https://www.ecoledirecte.com/login?cameFrom=%2FAccueil', external: true },
                            { label: 'E-Sidoc', to: 'https://0601153c.esidoc.fr/', external: true },
                            { label: 'Apel', to: 'https://www.apel.fr/', external: true },
                        ]" :key="i">
                            <NuxtLink :to="link.to" :target="link.external ? '_blank' : undefined"
                                class="flex items-center justify-between px-4 py-3 rounded-sm text-sm text-gray-600 hover:bg-brand-primary hover:text-white group transition-all duration-200">
                                <span>{{ link.label }}</span>
                                <span
                                    class="text-brand-gold group-hover:text-white group-hover:translate-x-1 transition-all duration-200">→</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    </section>
</template>