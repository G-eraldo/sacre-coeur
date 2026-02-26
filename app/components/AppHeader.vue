<!-- eslint-disable vue/first-attribute-linebreak -->
<script setup lang="ts">
import { BedIcon, BookOpenIcon, ChurchIcon, GraduationCapIcon, HomeIcon, InfoIcon, MenuIcon, PhoneIcon, SchoolIcon, XIcon } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const isOpen = ref(false)
const isScrolled = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
    { id: 1, title: 'Accueil', to: '/', icon: HomeIcon },
    { id: 2, title: 'Ecole', to: '/', icon: GraduationCapIcon },
    { id: 3, title: 'Collège', to: '/', icon: SchoolIcon },
    { id: 4, title: 'Segpa', to: '/', icon: BedIcon },
    { id: 5, title: 'Internat', to: '/', icon: BookOpenIcon },
    { id: 6, title: 'A propos', to: '/', icon: InfoIcon },
    { id: 7, title: 'Pastorale', to: '/', icon: ChurchIcon },
    { id: 8, title: 'Contact', to: '/', icon: PhoneIcon },
]
</script>

<template>
    <header class="fixed w-full z-50 transition-all duration-500 ease-in-out">

        <!-- Top Bordeaux Bar -->
        <div class="bg-brand-primary text-white px-4 lg:px-8 py-2 flex justify-between items-center transition-all duration-500"
            :class="isScrolled ? 'h-18' : 'hidden'">
            <div class="flex items-center gap-3" :class="isScrolled ? '' : 'hidden'">
                <NuxtLink to="/" class="flex items-center gap-3">
                    <NuxtImg src="/logo4.png" alt="logo" width="32" height="32" class="bg-white rounded p-0.5" />
                    <span class="text-lg font-serif font-bold tracking-tight sm:block">Sacré-Cœur de Breteuil</span>
                </NuxtLink>
            </div>

            <!-- Scrolled Navigation (visible only when scrolled on desktop) -->
            <nav aria-label="Navigation principale"
                class="hidden lg:flex items-center gap-8 transition-opacity duration-300"
                :class="isScrolled ? 'opacity-100 h-16' : 'opacity-0 pointer-events-none w-0 h-0 overflow-hidden'">
                <NuxtLink v-for="link in navLinks" :key="link.id" class="scroll-link hover:text-brand-gold"
                    :to="link.to">{{ link.title }}</NuxtLink>
            </nav>

            <div class="flex items-center gap-4">
                <!-- Mobile Toggle -->
                <button
                    class="lg:hidden text-white"
                    :aria-label="isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'"
                    :aria-expanded="isOpen"
                    aria-controls="mobile-menu"
                    @click="toggle">
                    <XIcon v-if="isOpen" aria-hidden="true" />
                    <MenuIcon v-else aria-hidden="true" />
                </button>
            </div>
        </div>

        <!-- Middle Branding Bar (White - hides on scroll) -->
        <div class="bg-white overflow-hidden transition-all duration-500 ease-in-out border-b border-gray-100"
            :class="isScrolled ? 'hidden' : 'max-h-32 py-8 lg:py-12 opacity-100'">
            <div class="flex items-center">
                <div class="container mx-auto px-4 text-center">
                    <!-- Visual title only; accessible h1 is in the page -->
                    <p class="text-3xl lg:text-5xl text-black tracking-wide font-serif" aria-hidden="true">
                        Sacré-Cœur de Breteuil
                    </p>
                </div>
                <button
                    class="mr-4 lg:hidden"
                    :aria-label="isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'"
                    :aria-expanded="isOpen"
                    aria-controls="mobile-menu"
                    @click="toggle">
                    <XIcon v-if="isOpen" aria-hidden="true" />
                    <MenuIcon v-else aria-hidden="true" />
                </button>
            </div>
        </div>

        <!-- Desktop Menu Bar (Hides on scroll) -->
        <nav aria-label="Navigation principale"
            class="hidden lg:flex justify-center items-center gap-12 bg-white py-4 border-b border-gray-100 transition-all duration-500 overflow-hidden h-12"
            :class="isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-16 opacity-100'">
            <NuxtLink v-for="link in navLinks" :key="link.id" class="nav-link" :to="link.to">{{ link.title }}</NuxtLink>
        </nav>

        <!-- Mobile Drawer -->
        <div
            id="mobile-menu"
            v-show="isOpen"
            class="lg:hidden bg-white shadow-xl py-6 transition-all duration-300">
            <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-6">
                <NuxtLink
                    v-for="link in navLinks"
                    :key="link.id"
                    class="link-mobile border-b border-gray-50 pb-2"
                    :to="link.to"
                    @click="isOpen = false">
                    <component :is="link.icon" class="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span class="text-gray-700">{{ link.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
