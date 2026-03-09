<script setup>

</script>

<template>
    <section class="py-24 px-6 bg-brand-warm">
        <div class="max-w-5xl mx-auto">
            <div class="relative bg-brand-primary rounded-sm overflow-hidden shadow-2xl">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
                <div
                    class="relative z-10 px-12 py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div class="text-center lg:text-left flex-1">
                        <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">
                            Rejoignez-nous</p>
                        <h2 class="text-3xl lg:text-4xl font-serif text-white mb-5 leading-tight">
                            Vous souhaitez<br>nous rejoindre ?
                        </h2>
                        <p class="text-white/70 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Inscriptions ouvertes pour l'année scolaire prochaine. Rencontrez notre équipe lors d'un
                            rendez-vous personnalisé.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                        <Button as-child variant="outline"
                            class="border-brand-primary text-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all rounded-sm">
                            <NuxtLink to="/pre-inscription"
                                aria-label="Accéder au formulaire d'inscription pour mon enfant">
                                Pré-inscrire mon enfant</NuxtLink>
                        </Button>
                        <Button as-child variant="outline"
                            class="border-brand-primary text-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all rounded-sm">
                            <NuxtLink to="/contact" aria-label="En savoir plus sur l'Institution du Sacré-Cœur">Nous
                                contacter</NuxtLink>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
