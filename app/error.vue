<script setup>
import Button from '~/components/ui/button/Button.vue';

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="min-h-[80vh] flex flex-col items-center justify-center bg-brand-warm px-4 py-20">
      <div class="text-center max-w-2xl mx-auto space-y-6">
        <h1 class="text-8xl md:text-9xl font-serif text-brand-primary opacity-20 relative font-black">
          {{ error?.statusCode || '404' }}
        </h1>

        <div class="relative z-10 -mt-12 md:-mt-16">
          <h2 class="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            {{ error?.statusCode === 404 ? 'Oups ! Page introuvable' : 'Une erreur est survenue' }}
          </h2>

          <p class="text-lg text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
            <template v-if="error?.statusCode === 404">
              La page que vous recherchez semble avoir été déplacée, supprimée ou n'a peut-être jamais existé.
            </template>
            <template v-else>
              Nous sommes désolés, une erreur inattendue s'est produite lors de la navigation.
            </template>
          </p>

          <Button
            class="bg-brand-primary text-white py-6 px-10 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5a171d] transition-all rounded-sm shadow-lg shadow-brand-primary/10"
            @click="handleError">
            Retourner à l'accueil
          </Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
