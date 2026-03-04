<script setup>

import { ref } from 'vue';
import { toast } from 'vue-sonner';
import Button from '~/components/ui/button/Button.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';
import Select from '~/components/ui/select/Select.vue';
import SelectContent from '~/components/ui/select/SelectContent.vue';
import SelectItem from '~/components/ui/select/SelectItem.vue';
import SelectTrigger from '~/components/ui/select/SelectTrigger.vue';
import SelectValue from '~/components/ui/select/SelectValue.vue';

useSeoMeta({
    title: 'Pré-inscription',
    description: 'Inscrivez votre enfant à l\'Institution du Sacré-Cœur à Breteuil via notre formulaire de pré-inscription en ligne.',
    ogTitle: 'Institution du Sacré-Cœur à Breteuil — Pré-inscription',
    ogDescription: 'Pré-inscrivez votre enfant au Sacré-Cœur à Breteuil.',
    ogImage: '/logo4.png',
    ogType: 'website',
})

const name = ref('')
const email = ref('')
const phone = ref('')
const classeSouhaite = ref('')

async function submitForm() {
    try {
        const response = await $fetch('/api/sendPreInscription', {
            method: 'POST',
            body: ({
                name: name.value,
                email: email.value,
                phone: phone.value,
                classeSouhaite: classeSouhaite.value
            })
        })
        if (response.success) {
            name.value = ''
            email.value = ''
            phone.value = ''
            classeSouhaite.value = ''
            toast.success('Votre message a bien été envoyé !', {
                description: 'Nous vous contacterons dans les plus brefs délais pour fixer un rendez-vous.',
            })
        }
    } catch (e) {
        console.log(e)
        toast.error('Une erreur est survenue !')
    }
}

</script>

<template>
    <div class="pt-40 lg:pt-56 pb-20 bg-brand-warm min-h-screen">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-12 max-w-3xl mx-auto">
                <h1 class="text-4xl lg:text-5xl font-serif text-brand-primary mb-6">
                    Pré-inscrire <br class="sm:hidden">
                    <span class="text-brand-gold">mon enfant</span>
                    au Sacré-Cœur
                </h1>
                <p class="text-lg text-gray-700 font-sans leading-relaxed">
                    Remplissez ce formulaire pour pré-inscrire votre enfant au Sacré-Cœur. <br class="hidden lg:block">
                    Nous vous contacterons dans les plus brefs délais pour fixer un rendez-vous.
                </p>
            </div>

            <Card class="max-w-2xl mx-auto">
                <div class="p-8">
                    <h3 class=" text-2xl font-bold text-slate-800 mb-6">
                        Formulaire de Pré-inscription
                    </h3>
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div class="space-y-2">
                            <Label html-for="name" class="text-xs font-bold uppercase tracking-widest text-gray-600">
                                Nom et Prénom
                            </Label>
                            <Input id="name" v-model="name" type="text" name="name" required
                                class="h-12 border-gray-200 focus:ring-brand-primary focus:border-brand-primary rounded-sm placeholder:text-gray-300"
                                placeholder="Ex: Jean Martin" />
                        </div>
                        <div class="space-y-2">
                            <Label html-for="email" class="text-xs font-bold uppercase tracking-widest text-gray-600">
                                Votre Email
                            </Label>
                            <Input id="email" v-model="email" type="email" name="email" required
                                class="h-12 border-gray-200 focus:ring-brand-primary focus:border-brand-primary rounded-sm placeholder:text-gray-300"
                                placeholder="me@email.fr" />
                        </div>
                        <div class="space-y-2">
                            <Label html-for="phone" class="text-xs font-bold uppercase tracking-widest text-gray-600">
                                Téléphone
                            </Label>
                            <Input id="phone" v-model="phone" type="tel" name="phone" required
                                class="h-12 border-gray-200 focus:ring-brand-primary focus:border-brand-primary rounded-sm placeholder:text-gray-300"
                                placeholder="Ex: 06 00 00 00 00" pattern="0[1-9]([ .-]?[0-9]{2}){4}" />
                        </div>

                        <div class="space-y-2">
                            <Label html-for="message" class="text-xs font-bold uppercase tracking-widest text-gray-600">
                                Classe souhaitée </Label>
                            <Select v-model="classeSouhaite" name="classeSouhaite">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Maternelle" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="TPS">Toute petite section</SelectItem>
                                    <SelectItem value="PS">Petite section</SelectItem>
                                    <SelectItem value="MS">Moyenne section</SelectItem>
                                    <SelectItem value="GS">Grande section</SelectItem>
                                    <SelectItem value="CP">CP</SelectItem>
                                    <SelectItem value="CE1">CE1</SelectItem>
                                    <SelectItem value="CE2">CE2</SelectItem>
                                    <SelectItem value="CM1">CM1</SelectItem>
                                    <SelectItem value="CM2">CM2</SelectItem>
                                    <SelectItem value="6ème">6ème</SelectItem>
                                    <SelectItem value="5ème">5ème</SelectItem>
                                    <SelectItem value="4ème">4ème</SelectItem>
                                    <SelectItem value="3ème">3ème</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            class="w-full bg-brand-primary text-white py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5a171d] transition-all rounded-sm shadow-lg shadow-brand-primary/10">
                            Envoyer le message
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    </div>
</template>
