<script setup>
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table';

useSeoMeta({ title: "Personnels OGEC — Institution du Sacré Cœur", ogImage: '/logo4.png' })

const { find } = useStrapi()
const { data: personnelsData, error } = await useAsyncData('personnels', async () => {
    try {
        return await find('personnels', { 
            fields: ['nom', 'prenom', 'role', 'categorie'],
            pagination: { pageSize: 100, page: 1 },
            sort: ['nom:asc']
        })
    } catch (e) {
        console.error('Erreur lors de la récupération des personnels (Vérifiez les permissions publiques Strapi)', e)
        return { data: [] }
    }
})

// Categories in the order we want to display them
const categories = [
    { key: 'Administratif', title: 'Personnel Administratif' },
    { key: 'Vie scolaire', title: 'Personnel de Vie Scolaire' },
    { key: 'Asem', title: 'Asem' },
    { key: 'Entretien', title: 'Personnel d\'Entretien' },
    { key: 'Apprenties', title: 'Apprenties' }
]

const personnels = computed(() => personnelsData.value?.data || [])

// Filter personnel by exact category key
const getPersonnelByCategorie = (categorieKey) => {
    return personnels.value.filter(p => p.categorie === categorieKey)
}
</script>

<template>
    <main id="main-content" class="pt-40 lg:pt-56 pb-20 min-h-screen bg-brand-warm">
        <div class="max-w-5xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Institution du Sacré Cœur</p>
                <h1 class="text-4xl lg:text-5xl font-serif text-brand-primary mb-4">Personnels OGEC</h1>
            </div>

            <div class="space-y-12">
                <section>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card v-for="cat in categories" :key="cat.key">
                            <CardHeader class="pb-3">
                                <CardTitle class="text-lg uppercase tracking-wide text-brand-primary">{{ cat.title }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow v-for="person in getPersonnelByCategorie(cat.key)" :key="person.documentId || person.id">
                                            <TableCell class="font-medium">{{ person.nom }} {{ person.prenom }}</TableCell>
                                            <TableCell class="text-right text-muted-foreground">{{ person.role }}</TableCell>
                                        </TableRow>
                                        <TableRow v-if="getPersonnelByCategorie(cat.key).length === 0">
                                            <TableCell colspan="2" class="text-center text-muted-foreground italic py-4 border-b-0">
                                                Aucun membre enregistré
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>
