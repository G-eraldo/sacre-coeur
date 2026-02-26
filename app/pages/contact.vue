<script setup>

import { ref } from 'vue';
import { toast } from 'vue-sonner';
import Button from '~/components/ui/button/Button.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';

const name = ref('')
const email = ref('')
const phone = ref('')
const textarea = ref('')

async function submitForm() {
    try {
        const response = await $fetch('/api/sendContact', {
            method: 'POST',
            body: ({
                name: name.value,
                email: email.value,
                phone: phone.value,
                textarea: textarea.value
            })
        })
        if (response.success) {
            name.value = ''
            email.value = ''
            phone.value = ''
            textarea.value = ''
            toast.success('Votre message a bien été envoyé !')
        }
    } catch (e) {
        console.log(e)
        toast.error('Une erreur est survenue !')
    }
}

</script>

<template>
    <div class="pt-32 lg:pt-56 pb-20 bg-brand-warm min-h-screen">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <h1 class="text-4xl lg:text-5xl font-serif text-brand-primary mb-6">
                    Contactez <br class="sm:hidden">
                    <span class="text-brand-gold">l'Institution</span>
                    du Sacré-Cœur
                </h1>
                <p class="text-lg text-gray-700 font-sans leading-relaxed">
                    Vous avez une question sur notre établissement, les admissions ou nos programmes ? <br
                        class="hidden lg:block">
                    Toute notre équipe est à votre écoute pour vous renseigner.
                </p>
            </div>

            <Card class="max-w-2xl mx-auto">
                <div class="p-8">
                    <h3 class=" text-2xl font-bold text-slate-800 mb-6">
                        Formulaire de contact
                    </h3>
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div>
                            <Label html-for="name" class="block text-sm font-medium text-slate-700 mb-1">
                                Votre Nom
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
                                Votre message
                            </Label>
                            <textarea id="message" v-model="textarea" name="message" rows="6" required minlength="10"
                                class="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-brand-primary 
                                        focus:ring-2 focus:border-brand-primary transition duration-150 outline-none
                                        placeholder:text-gray-300 resize-none font-sans"
                                placeholder="Comment pouvons-nous vous aider ?" />
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

<style scoped></style>