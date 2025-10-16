<template>
  <section class="space-y-6">
    <div class="h-px w-full bg-white/10"></div>
    <h2 class="text-3xl font-bold">Projecten</h2>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in top3" :key="p.slug" :project="p"  />
    </div>

    <div>
      <router-link
        to="/projecten"
        class="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10"
      >
        Bekijk alle projecten
        <span aria-hidden="true">→</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import projects from '../../data/projects'
import ProjectCard from '../projects/ProjectCard.vue'

const top3 = projects.slice(0, 3)
</script>
