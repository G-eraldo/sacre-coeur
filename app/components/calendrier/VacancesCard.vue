<script setup>
const props = defineProps({
    vacance: {
        type: Object,
        required: true
    },
    isPassed: {
        type: Boolean,
        default: false
    },
    isCurrent: {
        type: Boolean,
        default: false
    }
})

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

const duration = computed(() => {
    const start = new Date(props.vacance.start_date)
    const end = new Date(props.vacance.end_date)
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
})
</script>

<template>
    <div class="group relative bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        :class="{ 'opacity-60 grayscale-[0.5]': isPassed, 'border-brand-gold/50 ring-1 ring-brand-gold/20': isCurrent }">

        <div v-if="isCurrent"
            class="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg z-10">
            En cours
        </div>
        <div v-else-if="!isPassed"
            class="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg z-10">
            Vacances
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-brand-warm text-brand-primary"
                        :class="{ 'bg-brand-gold/10 text-brand-gold': isCurrent }">
                        <Icon name="lucide:calendar" class="w-5 h-5" />
                    </div>
                    <h3 class="text-xl font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                        {{ vacance.description }}
                    </h3>
                </div>

                <p class="text-sm text-muted-foreground font-sans">
                    Du <span class="font-semibold text-brand-dark">{{ formatDate(vacance.start_date) }}</span>
                    au <span class="font-semibold text-brand-dark">{{ formatDate(vacance.end_date) }}</span>
                </p>
            </div>

            <div
                class="flex flex-col items-end gap-1 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 min-w-30">
                <span class="text-3xl font-serif text-brand-gold">{{ duration }}</span>
                <span class="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Jours de
                    repos</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-serif {
    font-family: var(--font-serif, serif);
}

.font-sans {
    font-family: var(--font-sans, sans-serif);
}
</style>
