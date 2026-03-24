<script setup>
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';
useHead({
  link: [
    { rel: 'preconnect', href: 'https://res.cloudinary.com' }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster />
  </div>
</template>
