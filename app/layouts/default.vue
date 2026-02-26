<template>
    <div class="flex flex-col min-h-screen">
        <a href="#main-content"
            class="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-9999 focus:px-4 focus:py-3 focus:bg-white focus:text-brand-primary focus:font-bold focus:text-sm focus:border-b focus:border-brand-primary">
            Aller au contenu principal
        </a>
        <AppHeader />
        <div class="grow">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>
