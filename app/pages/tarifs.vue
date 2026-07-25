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
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

useSeoMeta({ title: "Tarifs — Institution du Sacré Cœur", ogImage: '/logo4.png' })
</script>

<template>
    <main id="main-content" class="pt-40 lg:pt-56 pb-20 min-h-screen bg-brand-warm">
        <div class="max-w-5xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Institution du Sacré Cœur
                </p>
                <h1 class="text-4xl lg:text-5xl font-serif text-brand-primary mb-4">Règlement Financier</h1>
                <p class="text-2xl font-bold text-gray-700">2026/2027</p>
            </div>

            <div class="space-y-12">
                <section>
                    <h2 class="text-2xl font-serif text-brand-primary mb-6 border-b border-brand-gold/30 pb-2">
                        <span class="text-brand-gold mr-2">I.</span> Tarifs Mensuels
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card>
                            <CardHeader class="pb-3">
                                <CardTitle class="text-lg uppercase tracking-wide text-brand-primary">Contribution
                                    Familiale</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Maternelle</TableCell>
                                            <TableCell class="text-right">77,50 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Primaire</TableCell>
                                            <TableCell class="text-right">82,50 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Collège</TableCell>
                                            <TableCell class="text-right">99,00 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader class="pb-3">
                                <CardTitle class="text-lg uppercase tracking-wide text-brand-primary">Complément
                                    Demi-Pension</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Maternelle</TableCell>
                                            <TableCell class="text-right">83,00 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Primaire</TableCell>
                                            <TableCell class="text-right">102,00 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Collège</TableCell>
                                            <TableCell class="text-right">107,00 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="pb-3">
                                <CardTitle class="text-lg uppercase tracking-wide text-brand-primary">Cantine
                                    Occasionnelle</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Par repas</TableCell>
                                            <TableCell class="text-right">7,50 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    <Card class="bg-white/50">
                        <CardHeader class="pb-3">
                            <CardTitle class="text-lg uppercase tracking-wide text-brand-primary mb-2">En résumé par
                                mois</CardTitle>
                            <p class="text-sm text-gray-600">
                                <strong class="text-brand-gold">Les tarifs :</strong><br>
                                - Forfait demi-pension additionner 1 + 2<br>
                                - Forfait internat additionner 1 + 2 + 3
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div class="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead class="w-37.5" />
                                            <TableHead class="text-center">Externe</TableHead>
                                            <TableHead class="text-center">Demi-pension</TableHead>
                                            <TableHead class="text-center">Internat</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Maternelle</TableCell>
                                            <TableCell class="text-center">77,50 €</TableCell>
                                            <TableCell class="text-center">160,50 €</TableCell>
                                            <TableCell class="text-center text-gray-400">x</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Primaire</TableCell>
                                            <TableCell class="text-center">82,50 €</TableCell>
                                            <TableCell class="text-center">184,50 €</TableCell>
                                            <TableCell class="text-center">545,50 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Collège</TableCell>
                                            <TableCell class="text-center">99,00 €</TableCell>
                                            <TableCell class="text-center">206,00 €</TableCell>
                                            <TableCell class="text-center">567,00 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 class="text-xl font-serif text-brand-primary mb-4 border-b border-brand-gold/30 pb-2">
                            <span class="text-brand-gold mr-2">II.</span> Fournitures scolaires maternelle et primaire
                        </h2>
                        <Card>
                            <CardContent class="pt-6">
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Cycle I</TableCell>
                                            <TableCell class="text-right">32,00 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Cycle II</TableCell>
                                            <TableCell class="text-right">43,00 €</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Cycle III</TableCell>
                                            <TableCell class="text-right">48,00 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                        <h2 class="text-xl font-serif text-brand-primary mb-4 border-b border-brand-gold/30 pb-2">
                            <span class="text-brand-gold mr-2">III.</span> Cotisation APEL
                        </h2>
                        <Card>
                            <CardContent class="pt-6">
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Cotisation annuelle de l'APEL</TableCell>
                                            <TableCell class="text-right font-bold">20,00 €</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                <section>
                    <h2 class="text-xl font-serif text-brand-primary mb-4 border-b border-brand-gold/30 pb-2">
                        <span class="text-brand-gold mr-2">IV.</span> Droits d'Inscription
                    </h2>
                    <p class="text-sm font-bold text-center mb-6 text-gray-700 uppercase tracking-wide">
                        (En cas de désistement ou de départ en cours d'année, cette somme reste acquise à
                        l'établissement.)
                    </p>
                    <Card class="max-w-2xl mx-auto">
                        <CardContent class="pt-6">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell class="font-medium">Maternelle</TableCell>
                                        <TableCell class="text-right">30,00 €</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell class="font-medium">Primaire</TableCell>
                                        <TableCell class="text-right">60,00 €</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell class="font-medium">Collège</TableCell>
                                        <TableCell class="text-right">80,00 €</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell class="font-medium">Interne <span
                                                class="text-xs text-gray-500 font-normal">(Primaire ou Collège)</span>
                                        </TableCell>
                                        <TableCell class="text-right">110,00 €</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </section>

                <section>
                    <h2 class="text-xl font-serif text-brand-primary mb-4 border-b border-brand-gold/30 pb-2">
                        <span class="text-brand-gold mr-2">V.</span> Garderie et Études Surveillées*
                    </h2>
                    <Card class="bg-white/50">
                        <CardHeader class="pb-3">
                            <CardTitle class="text-lg uppercase tracking-wide text-brand-primary">Garderie Périscolaire</CardTitle>
                            <p class="text-sm text-gray-600">
                                La garderie sera facturée par famille sur la base des tarifs mensuels ci-dessous :
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div class="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead />
                                            <TableHead class="text-center font-bold text-brand-primary">4 jours / semaine</TableHead>
                                            <TableHead class="text-center font-bold text-brand-primary">3 jours / semaine</TableHead>
                                            <TableHead class="text-center font-bold text-brand-primary">2 jours / semaine</TableHead>
                                            <TableHead class="text-center font-bold text-brand-primary">1 jour / semaine</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell class="font-medium">Forfait mensuel Matin <span class="text-xs text-gray-500 font-normal">(7h30-8h10)</span></TableCell>
                                            <TableCell class="text-center">21,40 € / mois</TableCell>
                                            <TableCell class="text-center">15,30 € / mois</TableCell>
                                            <TableCell class="text-center">10,20 € / mois</TableCell>
                                            <TableCell class="text-center">5,10 € / mois</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Forfait mensuel Soir <span class="text-xs text-gray-500 font-normal">(17h-18h30)</span></TableCell>
                                            <TableCell class="text-center">40,80 € / mois</TableCell>
                                            <TableCell class="text-center">30,60 € / mois</TableCell>
                                            <TableCell class="text-center">20,40 € / mois</TableCell>
                                            <TableCell class="text-center">10,20 € / mois</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell class="font-medium">Forfait mensuel Matin et Soir</TableCell>
                                            <TableCell class="text-center">61,20 € / mois</TableCell>
                                            <TableCell class="text-center">45,90 € / mois</TableCell>
                                            <TableCell class="text-center">30,60 € / mois</TableCell>
                                            <TableCell class="text-center">15,30 € / mois</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            <div class="mt-6 pt-4 border-t border-brand-gold/10 space-y-2">
                                <p class="text-sm text-gray-700">
                                    <strong class="text-brand-primary">Garderie occasionnelle :</strong> carnet de 5 tickets 20 €
                                </p>
                                <p class="text-xs text-gray-500 italic">
                                    * À compter de la rentrée 2026/2027, les études surveillées pour les élèves du primaire (de 17h00 à 18h00) seront facturées 4,50 €.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    </main>
</template>
