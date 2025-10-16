<script setup>
const props = defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <router-link
    :to="`/projecten/${encodeURIComponent(project.slug)}`"
    class="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition block"
  >
    <img :src="project.cover" :alt="project.title" class="w-full aspect-[16/10] object-cover" />
    <div class="p-4">
      <div class="text-xs text-white/70 flex items-center gap-2">
        <span>{{ project.year }}</span>
        <span v-for="t in project.tags" :key="t" class="px-2 py-0.5 rounded-full border border-white/20">
          {{ t }}
        </span>
      </div>
      <h3 class="mt-2 text-lg font-semibold">{{ project.title }}</h3>
      <p class="mt-1 text-sm text-white/80">{{ project.subtitle }}</p>
    </div>
  </router-link>
</template>
