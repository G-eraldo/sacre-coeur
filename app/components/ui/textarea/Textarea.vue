<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

defineProps<{
    class?: string
}>()

const model = defineModel<string>()
</script>

<template>
    <textarea
        v-bind="$attrs"
        :class="cn(
            'flex min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none',
            $props.class
        )"
        v-model="model"
    />
</template>
