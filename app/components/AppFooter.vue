<script setup>

</script>

<template>
    <footer
        class="bg-brand-primary text-white p-6 py-8 flex flex-col lg:flex-row justify-center items-center gap-6 text-center lg:text-left">
        <p class="text-sm lg:text-base">© 2026 Sacré-Cœur Breteuil. Site édité par <span>
                <NuxtLink to="https://lafabriqueducode.fr" target="_blank" class="hover:text-brand-gold cursor-pointer">
                    La fabrique du code
                </NuxtLink>
            </span> - <NuxtLink to="/mentions-legales" class="hover:text-brand-gold cursor-pointer">
                Mentions Légales
            </NuxtLink>
        </p>
        <div class="flex flex-wrap justify-center gap-2 text-sm">
            <NuxtLink href="https://www.facebook.com/profile.php?id=100063558847632&locale=fr_FR" target="_blank"
                rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook" class="hover:text-brand-gold block transition-colors duration-200">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>
            </NuxtLink>

            <NuxtLink href="https://www.instagram.com/isc_breteuil60120/" target="_blank" rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram" class="hover:text-brand-gold block transition-colors duration-200">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg>
            </NuxtLink>
        </div>



    </footer>
</template>