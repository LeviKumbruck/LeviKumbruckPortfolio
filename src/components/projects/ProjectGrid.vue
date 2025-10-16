<script setup>
import projects from '../../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
    <!-- Stage card styled exactly like ProjectCard -->
    <router-link
      to="/stage"
      class="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition block"
      aria-label="Open Stage iBeauty"
    >
      <img src="/projects/stage1.png" alt="Stage iBeauty" class="w-full aspect-[16/10] object-cover" />
      <div class="p-4">
        <div class="text-xs text-white/70 flex items-center gap-2">
          <span>2025</span>
          <span class="px-2 py-0.5 rounded-full border border-white/20">PHP</span>
          <span class="px-2 py-0.5 rounded-full border border-white/20">CodeIgniter</span>
          <span class="px-2 py-0.5 rounded-full border border-white/20">FullCalendar.io</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold">Stage iBeauty</h3>
        <p class="mt-1 text-sm text-white/80">Stage · Afsprakenplatform</p>
      </div>
    </router-link>
    
  </div>
</template>
