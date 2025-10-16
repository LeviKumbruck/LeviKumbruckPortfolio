<template>
  <section v-if="project" class="space-y-8">
    <div class="flex items-center justify-between">
      <button
      class="text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:decoration-white"
      @click="$router.back()"
      >
      ← Terug
      </button>
      <header class="flex-1 flex justify-center">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center">{{ project.title }}</h1>
      </header>
    </div>



    <!-- Rich, styled case-study content -->
    <article
      v-if="project.story"
      class="max-w-none space-y-12"
      v-html="project.story"
    ></article>

    <!-- Fallback: short description -->
    <article v-else-if="project.description" class="max-w-none text-white/85 leading-relaxed">
      <p>{{ project.description }}</p>
    </article>

    <!-- Optional: keep Tech list if you like -->
    
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projects from '../data/projects'

const route = useRoute()
const router = useRouter()

const routeSlug = computed(() => decodeURIComponent(String(route.params.slug || '')))
const project = computed(() => projects.find(p => p.slug === routeSlug.value))
if (!project.value) router.replace({ name: 'projecten' })
</script>
