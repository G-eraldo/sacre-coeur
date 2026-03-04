<script setup>
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import VacancesCard from '~/components/calendrier/VacancesCard.vue'

useSeoMeta({
    title: 'Calendrier scolaire — Sacré-Cœur de Breteuil',
    description: 'Consultez les dates des vacances scolaires et du calendrier de l\'Institution Sacré-Cœur de Breteuil, Zone B.',
    ogTitle: 'Calendrier scolaire — Sacré-Cœur de Breteuil',
    ogDescription: 'Dates des vacances scolaires Zone B pour l\'Institution Sacré-Cœur de Breteuil.'
})

// ─── Constantes ────────────────────────────────────────────────────────────────
const ZONE = 'Zone B'
const VACANCES_API = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records'
const FERIES_API = 'https://calendrier.api.gouv.fr/jours-feries/metropole'

// ─── État ──────────────────────────────────────────────────────────────────────
const anneeSelectionnee = ref('')
const now = new Date()

// ─── Fetch des années disponibles ─────────────────────────────────────────────
const { data: anneesData } = await useAsyncData('annees-scolaires', async () => {
    const url = new URL(VACANCES_API)
    url.searchParams.set('where', `zones="${ZONE}"`)
    url.searchParams.set('limit', '100')
    url.searchParams.set('order_by', 'annee_scolaire DESC')
    const res = await $fetch(url.toString())
    const annees = [...new Set(res.results.map(r => r.annee_scolaire))].sort().reverse()
    return annees
})

// Initialiser l'année par défaut selon la date actuelle
if (anneesData.value?.length && !anneeSelectionnee.value) {
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() // 0 = Janvier

    // Année scolaire : Septembre à Août
    // Si on est en Septembre (8) ou plus tard, l'année est "2025-2026"
    // Si on est avant Septembre, l'année est "2024-2025"
    let defaultAnnee = ""
    if (currentMonth >= 8) {
        defaultAnnee = `${currentYear}-${currentYear + 1}`
    } else {
        defaultAnnee = `${currentYear - 1}-${currentYear}`
    }

    // Chercher si cette année existe dans les data, sinon prendre la première
    if (anneesData.value.includes(defaultAnnee)) {
        anneeSelectionnee.value = defaultAnnee
    } else {
        anneeSelectionnee.value = anneesData.value[0]
    }
}

// ─── Fetch des vacances et jours fériés ────────────────────────────────────────
const { data: calendrierData, pending, error } = await useAsyncData(
    () => `calendrier-complet-${anneeSelectionnee.value}`,
    async () => {
        if (!anneeSelectionnee.value) return []

        // 1. Récupérer les vacances
        const vUrl = new URL(VACANCES_API)
        // Breteuil (Oise) dépend de l'Académie d'Amiens (Zone B)
        vUrl.searchParams.set('where', `zones="${ZONE}" AND annee_scolaire="${anneeSelectionnee.value}" AND location="Amiens"`)
        vUrl.searchParams.set('limit', '50')
        vUrl.searchParams.set('order_by', 'start_date ASC')
        const vacancesRes = await $fetch(vUrl.toString())

        let allEvents = (vacancesRes.results || [])
            // On exclut les enseignants pour n'avoir que les dates élèves
            .filter(v => v.population !== 'Enseignants')
            .map(v => ({
                ...v,
                type: 'vacances',
                id: `v-${v.description}-${v.start_date}`
            }))

        // 2. Récupérer les jours fériés pour les années concernées
        try {
            const [startYear, endYear] = anneeSelectionnee.value.split('-')
            const yearsToFetch = [startYear, endYear]

            for (const year of yearsToFetch) {
                const feries = await $fetch(`${FERIES_API}/${year}.json`)
                const feriesEvents = Object.entries(feries).map(([date, label]) => ({
                    description: label,
                    start_date: date,
                    end_date: date,
                    type: 'ferie',
                    id: `f-${date}`
                }))

                // Filtrer pour ne garder que ceux dans l'année scolaire (septembre à août)
                // ET supprimer le 14 juillet et le 15 août
                const filteredFeries = feriesEvents.filter(f => {
                    const d = new Date(f.start_date)
                    const m = d.getMonth() // 0-11
                    const day = d.getDate()
                    const y = d.getFullYear().toString()

                    // Exclure 14/07 et 15/08
                    if (m === 6 && day === 14) return false
                    if (m === 7 && day === 15) return false

                    if (y === startYear) return m >= 8 // À partir de septembre
                    if (y === endYear) return m <= 7 // Jusqu'à août
                    return false
                })

                allEvents = [...allEvents, ...filteredFeries]
            }
        } catch (e) {
            console.error('Erreur jours fériés:', e)
        }

        // Trier par date
        return allEvents.sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
    },
    { watch: [anneeSelectionnee] }
)

// ─── Helpers ───────────────────────────────────────────────────────────────────
function isPassed(event) {
    return new Date(event.end_date || event.start_date) < now
}

function isCurrent(event) {
    const start = new Date(event.start_date)
    const end = new Date(event.end_date || event.start_date)
    // Pour un jour férié, on ajoute 23h59 pour la fin de journée
    if (event.type === 'ferie') end.setHours(23, 59, 59)
    return start <= now && end >= now
}

// ─── Prochains événements ─────────────────────────────────────────────────────
const prochainEvenement = computed(() => {
    if (!calendrierData.value) return null
    return calendrierData.value.find(e => new Date(e.start_date) > now) ?? null
})

function joursAvant(event) {
    if (!event) return null
    const diff = new Date(event.start_date) - now
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

const eventEnCours = computed(() => {
    if (!calendrierData.value) return null
    return calendrierData.value.find(e => isCurrent(e)) ?? null
})

// Filtrer les doublons (notamment pour les vacances d'été) et cacher les événements passés
const finalEvents = computed(() => {
    if (!calendrierData.value) return []

    // 1. Déduplication par description et date de début
    const uniqueEvents = []
    const seen = new Set()

    for (const event of calendrierData.value) {
        const key = `${event.description}-${event.start_date}`
        if (!seen.has(key)) {
            seen.add(key)
            uniqueEvents.push(event)
        }
    }

    // 2. Filtrer les événements passés uniquement si on est sur l'année en cours ou future
    // Si on regarde une année passée, on montre tout (archive)
    const [startYear] = anneeSelectionnee.value.split('-')
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()
    const currentSchoolYearStart = currentMonth >= 8 ? currentYear : currentYear - 1

    const isPastSchoolYear = parseInt(startYear) < currentSchoolYearStart

    if (isPastSchoolYear) return uniqueEvents

    return uniqueEvents.filter(event => {
        const end = new Date(event.end_date || event.start_date)
        if (event.type === 'ferie') end.setHours(23, 59, 59)
        return end >= now
    })
})
</script>

<template>
    <div class="min-h-screen bg-brand-warm/30 pb-20">
        <!-- Hero Section Premium -->
        <section class="pt-40 lg:pt-56 pb-20 bg-brand-warm relative overflow-hidden text-center">
            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <span class="inline-block text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">
                    Votre vie scolaire
                </span>
                <h1 class="text-5xl lg:text-7xl font-serif text-brand-primary mb-8 leading-tight">
                    Calendrier <br class="hidden lg:block"> Scolaire
                </h1>
                <p class="max-w-2xl mx-auto text-lg text-gray-700 font-sans leading-relaxed">
                    Retrouvez toutes les dates importantes, périodes de vacances et jours fériés
                    pour l'organisation de votre année à l'Institution.
                </p>
                <div class="mt-12 flex justify-center">
                    <div class="w-15 h-0.75 bg-brand-gold" />
                </div>
            </div>
        </section>

        <!-- Contenu principal -->
        <div class="max-w-5xl mx-auto px-6 -mt-10 relative z-20">

            <!-- Countdown / Status Card -->
            <div class="mb-12">
                <div v-if="eventEnCours"
                    class="bg-brand-primary text-white p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10 group overflow-hidden relative">
                    <div class="text-6xl animate-bounce">🎉</div>
                    <div class="text-center md:text-left flex-1">
                        <h2 class="text-2xl font-serif mb-2">{{ eventEnCours.description }}</h2>
                        <p class="text-white/70 font-sans">Profitez bien de cette période de repos !</p>
                    </div>
                    <div class="flex flex-col items-center md:items-end">
                        <span class="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">Se termine
                            le</span>
                        <span class="text-xl font-serif text-brand-gold">{{ new
                            Date(eventEnCours.end_date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
                        }}</span>
                    </div>
                </div>

                <div v-else-if="prochainEvenement"
                    class="bg-white border border-brand-gold/20 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 group overflow-hidden relative">
                    <div
                        class="relative z-10 w-24 h-24 rounded-2xl bg-brand-primary flex flex-col items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                        <span class="text-4xl font-serif leading-none">{{ joursAvant(prochainEvenement) }}</span>
                        <span class="text-[10px] uppercase tracking-widest font-bold mt-1">Jours</span>
                    </div>
                    <div class="relative z-10 text-center md:text-left flex-1">
                        <span
                            class="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">Prochain
                            rendez-vous</span>
                        <h2 class="text-3xl font-serif text-brand-dark">{{ prochainEvenement.description }}</h2>
                        <p class="text-gray-500 font-sans mt-1 italic">
                            Début le {{ new Date(prochainEvenement.start_date).toLocaleDateString('fr-FR', {
                                day:
                                    'numeric', month: 'long', year: 'numeric'
                            }) }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Filtres et Header Liste -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h2 class="text-3xl font-serif text-brand-dark inline-flex items-center gap-3">
                        Périodicités
                        <span
                            class="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs rounded-full font-sans uppercase tracking-widest font-bold">Zone
                            B</span>
                    </h2>
                </div>

                <div class="flex items-center gap-4 bg-white p-2 rounded-xl border border-border">
                    <label class="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-3">Année
                        scolaire</label>
                    <Select v-model="anneeSelectionnee">
                        <SelectTrigger class="w-45 border-none shadow-none focus:ring-0 font-bold text-brand-primary">
                            <SelectValue :placeholder="anneeSelectionnee" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="annee in anneesData" :key="annee" :value="annee">
                                {{ annee }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <!-- Grille des événements -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Loading State -->
                <div v-if="pending" class="space-y-4">
                    <div v-for="i in 6" :key="i"
                        class="h-32 rounded-xl bg-white border border-border animate-pulse shadow-sm" />
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="bg-red-50 border border-red-100 p-12 rounded-2xl text-center space-y-4">
                    <div class="text-4xl">📡</div>
                    <h3 class="text-xl font-serif text-red-900">Communication interrompue</h3>
                    <p class="text-red-700/70 max-w-md mx-auto">Impossible de récupérer les données officielles du
                        ministère. Veuillez essayer de rafraîchir la page.</p>
                    <button
                        class="px-6 py-2 bg-red-900 text-white rounded-lg font-bold hover:bg-red-800 transition-colors"
                        @click="refresh()">
                        Réessayer
                    </button>
                </div>

                <!-- Content -->
                <template v-else-if="finalEvents.length">
                    <template v-for="event in finalEvents" :key="event.id">
                        <!-- Jour Férié (Mini Card) -->
                        <div v-if="event.type === 'ferie'"
                            class="flex items-center gap-4 px-6 py-4 bg-white/50 border border-dashed border-brand-gold/30 rounded-xl relative group overflow-hidden"
                            :class="{ 'opacity-50 grayscale': isPassed(event) }">
                            <div class="w-2 h-2 rounded-full bg-brand-gold" />
                            <div class="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div class="flex items-center gap-3">
                                    <span class="text-xs font-bold uppercase tracking-widest text-brand-gold">Jour
                                        Férié</span>
                                    <h4 class="text-lg font-serif text-brand-dark">{{ event.description }}</h4>
                                </div>
                                <span class="text-sm font-sans text-muted-foreground">
                                    {{ new Date(event.start_date).toLocaleDateString('fr-FR', {
                                        weekday: 'long', day:
                                            'numeric', month: 'long'
                                    }) }}
                                </span>
                            </div>
                            <!-- Small status badge -->
                            <div v-if="isCurrent(event)"
                                class="bg-brand-gold text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                                Aujourd'hui</div>
                        </div>

                        <!-- Vacances (Large Card) -->
                        <VacancesCard v-else :vacance="event" :is-passed="isPassed(event)"
                            :is-current="isCurrent(event)" />
                    </template>
                </template>

                <!-- No Data -->
                <div v-else
                    class="bg-white border border-border p-20 rounded-2xl text-center text-muted-foreground shadow-sm">
                    <Icon name="lucide:calendar-x-2" class="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p class="font-sans italic">Aucun événement répertorié pour cette sélection.</p>
                </div>
            </div>

            <!-- Footer Notes -->
            <div class="mt-16 text-center space-y-4">
                <p class="text-[10px] text-muted-foreground font-sans uppercase tracking-[0.2em]">
                    Données officielles certifiées — Académie d'Amiens (Zone B)
                </p>
            </div>
        </div>
    </div>
</template>
