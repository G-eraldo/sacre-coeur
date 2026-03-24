<script setup>
const props = defineProps({
    event: { type: Object, required: true },
    isPassed: { type: Boolean, default: false },
    isCurrent: { type: Boolean, default: false }
})

const typeConfig = {
    'temps-fort': { label: 'Temps Fort', color: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20 whitespace-nowrap' },
    'evenement': { label: 'Événement', color: 'bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap' },
    'pont': { label: 'Pont', color: 'bg-emerald-50 text-emerald-700 border-emerald-200 whitespace-nowrap' },
    'voyage': { label: 'Voyage', color: 'bg-indigo-50 text-indigo-700 border-indigo-200 whitespace-nowrap' },
    'epreuve': { label: 'Épreuves', color: 'bg-rose-50 text-rose-700 border-rose-200 whitespace-nowrap' }
}

const config = computed(() => typeConfig[props.event.type] || typeConfig['evenement'])

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
}

const isMultiDay = computed(() => {
    return props.event.end_date && props.event.end_date !== props.event.start_date
})

const duration = computed(() => {
    if (!isMultiDay.value) return 1
    const start = new Date(props.event.start_date)
    const end = new Date(props.event.end_date)
    const diffTime = Math.abs(end - start)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
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
            class="absolute top-0 right-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg z-10"
            :class="config.color">
            {{ config.label }}
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-brand-warm text-brand-primary"
                        :class="{ 'bg-brand-gold/10 text-brand-gold': isCurrent }">
                        <Icon name="lucide:calendar" class="w-5 h-5" />
                    </div>
                    <h3 class="text-xl font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                        {{ event.description }}
                    </h3>
                </div>

                <p class="text-sm text-muted-foreground font-sans">
                    <template v-if="isMultiDay">
                        Du <span class="font-semibold text-brand-dark">{{ formatDate(event.start_date) }}</span>
                        au <span class="font-semibold text-brand-dark">{{ formatDate(event.end_date) }}</span>
                    </template>
                    <template v-else>
                        <span class="font-semibold text-brand-dark">{{ formatDate(event.start_date) }}</span>
                    </template>
                </p>
                <p v-if="event.details" class="text-sm text-muted-foreground font-sans mt-2">
                    {{ event.details }}
                </p>
            </div>

            <div v-if="isMultiDay"
                class="flex flex-col items-end gap-1 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 min-w-30">
                <span class="text-3xl font-serif text-brand-gold">{{ duration }}</span>
                <span class="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Jours</span>
            </div>
        </div>
    </div>
</template>