<script setup>
useSeoMeta({ title: "Tarifs — Bientôt disponible", ogImage: '/logo4.png' })
</script>

<template>
    <main id="main-content" class="pt-40 lg:pt-56 pb-20 min-h-screen bg-brand-warm flex items-center justify-center">
        <div class="text-center px-6">
            <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Bientôt disponible</p>
            <h1 class="text-4xl lg:text-5xl font-serif text-brand-primary mb-6">Tarifs</h1>
            <p class="text-gray-600 mb-8 max-w-md mx-auto">Les informations tarifaires seront disponibles prochainement. Pour toute demande, contactez-nous.</p>
            <Button as-child class="bg-brand-primary text-white hover:bg-brand-primary-dark rounded-sm text-xs font-bold uppercase tracking-widest px-8 py-4">
                <NuxtLink to="/contact">Nous contacter</NuxtLink>
            </Button>
        </div>
    </main>
</template>
