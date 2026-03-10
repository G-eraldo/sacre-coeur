<script setup>
defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <div class="strapi-blocks-renderer space-y-6 text-gray-700 leading-relaxed">
    <template v-for="(block, index) in blocks" :key="index">
      <!-- Paragraphe -->
      <p v-if="block.type === 'paragraph'" class="text-lg">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">
          <span :class="{
            'font-bold text-brand-primary': child.bold,
            'italic': child.italic,
            'underline': child.underline,
            'line-through': child.strikethrough,
            'font-mono bg-brand-warm px-1.5 py-0.5 rounded text-sm text-brand-gold': child.code
          }">
            <template v-if="child.type === 'link'">
              <a :href="child.url" class="text-brand-primary font-bold border-b-2 border-brand-gold/30 hover:border-brand-gold transition-all duration-300"
                target="_blank">
                <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                  {{ linkChild.text }}
                </template>
              </a>
            </template>
            <template v-else>
              {{ child.text }}
            </template>
          </span>
        </template>
      </p>

      <!-- Titres -->
      <h1 v-else-if="block.type === 'heading' && block.level === 1"
        class="text-4xl lg:text-5xl font-serif text-brand-primary mt-12 mb-6 tracking-tight">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">{{ child.text }}</template>
      </h1>
      <h2 v-else-if="block.type === 'heading' && block.level === 2"
        class="text-3xl lg:text-4xl font-serif text-brand-primary mt-10 mb-5 tracking-tight">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">{{ child.text }}</template>
      </h2>
      <h3 v-else-if="block.type === 'heading' && block.level === 3"
        class="text-2xl lg:text-3xl font-serif text-brand-primary mt-8 mb-4 tracking-tight">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">{{ child.text }}</template>
      </h3>
      <h4 v-else-if="block.type === 'heading' && block.level === 4"
        class="text-xl lg:text-2xl font-bold text-brand-primary mt-6 mb-3">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">{{ child.text }}</template>
      </h4>

      <!-- Listes -->
      <ul v-else-if="block.type === 'list' && block.format === 'unordered'" class="list-none pl-2 space-y-3 my-6">
        <li v-for="(item, itemIndex) in block.children" :key="itemIndex" class="flex items-start gap-3">
          <span class="text-brand-gold mt-1.5">•</span>
          <div class="flex-1">
            <template v-for="(child, childIndex) in item.children" :key="childIndex">
              <span :class="{ 'font-bold text-brand-primary': child.bold, 'italic': child.italic }">{{ child.text }}</span>
            </template>
          </div>
        </li>
      </ul>
      <ol v-else-if="block.type === 'list' && block.format === 'ordered'" class="list-none pl-2 space-y-3 my-6">
        <li v-for="(item, itemIndex) in block.children" :key="itemIndex" class="flex items-start gap-3 text-lg">
          <span class="text-brand-gold font-bold min-w-6">{{ itemIndex + 1 }}.</span>
          <div class="flex-1">
            <template v-for="(child, childIndex) in item.children" :key="childIndex">
              <span :class="{ 'font-bold text-brand-primary': child.bold, 'italic': child.italic }">{{ child.text }}</span>
            </template>
          </div>
        </li>
      </ol>

      <!-- Image (si présente dans les blocks) -->
      <div v-else-if="block.type === 'image'" class="my-10 group">
        <NuxtImg :src="block.image.url" :alt="block.image.alternativeText || ''" 
          class="rounded-lg w-full shadow-md group-hover:shadow-xl transition-shadow duration-500" />
      </div>

      <!-- Quote -->
      <blockquote v-else-if="block.type === 'quote'"
        class="relative border-l-4 border-brand-gold pl-8 py-4 italic my-10 text-xl font-serif text-brand-primary bg-brand-warm/30 rounded-r-lg">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">{{ child.text }}</template>
      </blockquote>
    </template>
  </div>
</template>
