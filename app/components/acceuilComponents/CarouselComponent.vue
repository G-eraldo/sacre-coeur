<script setup>
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
    Calendar,
    ClipboardList,
    Euro,
    ExternalLink,
    GraduationCap,
    Phone
} from 'lucide-vue-next';
import { computed, ref } from 'vue';

const images = [
    {
        url: 'https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-477206590-612x612_fykq0x.jpg',
        title: 'Bâtir l\'avenir ensemble',
        subtitle: 'Une communauté éducative où chaque élève est accompagné avec confiance, engagement et bienveillance de la maternelle au collège.'
    },
    {
        url: 'https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716886/istockphoto-1410950079-612x612_mgnu4e.jpg',
        title: 'Bienveillance',
        subtitle: 'Un cadre d\'apprentissage unique pour s\'épanouir et réussir son parcours scolaire.'
    },
    {
        url: 'https://res.cloudinary.com/dlnbsf2ed/image/upload/v1770716887/istockphoto-1355040546-612x612_o55gfe.jpg',
        title: 'L\'esprit Sacré-Cœur',
        subtitle: 'Plus qu\'une école, un lieu de vie et de partage pour nos futurs citoyens.'
    }
]

const quickLinks = [
    { label: 'Pré-inscriptions', icon: GraduationCap, to: '/pre-inscription' },
    { label: 'Calendrier', icon: Calendar, to: '/calendrier' },
    { label: 'Liens utiles', icon: ExternalLink, to: '/a-propos#liens-utiles' },
    { label: 'Tarifs', icon: Euro, to: '/tarifs' },
    { label: 'Nos documents', icon: ClipboardList, to: '/documents' },
    { label: 'Nous contacter', icon: Phone, to: '/contact' },
]

const currentSlideIndex = ref(0)

function onSetApi(api) {
    api.on('select', () => {
        currentSlideIndex.value = api.selectedScrollSnap()
    })
}

const currentSlide = computed(() => images[currentSlideIndex.value])
</script>

<template>
    <Carousel class="w-full mt-20 lg:h-full" :opts="{ loop: true }"
        :plugins="[Autoplay({ delay: 5000, stopOnInteraction: false })]"
        :set-api="onSetApi">

        <!-- Accessible live region for screen readers -->
        <div class="sr-only" aria-live="polite" aria-atomic="true">
            Diapositive {{ currentSlideIndex + 1 }} sur {{ images.length }} : {{ currentSlide.title }}
        </div>

        <CarouselContent class="h-140 lg:h-170 ml-0">
            <CarouselItem v-for="(slide, index) in images" :key="index" class="relative w-full h-full pl-0">
                <!-- Slide Background Image -->
                <div class="absolute inset-0 w-full h-full">
                    <NuxtImg :src="slide.url" :alt="slide.title" :loading="index === 0 ? 'eager' : 'lazy'"
                        :fetchpriority="index === 0 ? 'high' : 'auto'" format="webp" quality="80"
                        sizes="100vw sm:100vw md:100vw lg:100vw" class="w-full h-full object-cover brightness-[0.7]" />
                    <div class="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
                </div>

                <!-- Slide Content Overlay -->
                <div
                    class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white pb-32 lg:pb-0">
                    <div class="max-w-4xl space-y-6 lg:space-y-8">
                        <p class="text-[10px] lg:text-sm font-mono font-medium tracking-[0.2em] uppercase opacity-80">
                            Institution d'excellence depuis 1890
                        </p>

                        <h2 class="text-3xl md:text-5xl lg:text-8xl font-serif tracking-tight leading-tight">
                            {{ slide.title }}
                        </h2>

                        <p
                            class="text-base font-bold lg:text-xl font-sans lg:font-light max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
                            {{ slide.subtitle }}
                        </p>
                    </div>
                </div>
            </CarouselItem>
        </CarouselContent>

        <!-- Fixed Quick Links Bar -->
        <div class="absolute bottom-5 lg:bottom-0 left-0 w-full z-20 pb-8 lg:pb-16 px-4">
            <div class="max-w-7xl mx-auto border-t border-white/20 pt-6 lg:pt-12">
                <div
                    class="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-y-8 gap-x-2 md:gap-8 lg:gap-12">
                    <NuxtLink v-for="link in quickLinks" :key="link.label" :to="link.to"
                        class="flex flex-col justify-center items-center gap-2 lg:gap-4 group transition-all duration-300 min-w-0 md:min-w-20 lg:min-w-25">
                        <div
                            class="p-3 lg:p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300 min-w-11 min-h-11 flex items-center justify-center">
                            <component :is="link.icon" :size="20" class="text-white lg:size-7 shrink-0"
                                stroke-width="1.5" aria-hidden="true" />
                        </div>
                        <span
                            class="text-[11px] font-bold uppercase tracking-widest md:tracking-[0.15em] text-white/80 group-hover:text-white transition-colors leading-tight text-center max-w-25">
                            {{ link.label }}
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Custom Navigation Arrows -->
        <div class="hidden lg:block">
            <CarouselPrevious
                class="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-12 rounded-none bg-black/20 border-none hover:bg-black/40 text-white transition-all translate-x-0" />
            <CarouselNext
                class="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-12 rounded-none bg-black/20 border-none hover:bg-black/40 text-white transition-all translate-x-0" />
        </div>
    </Carousel>
</template>
