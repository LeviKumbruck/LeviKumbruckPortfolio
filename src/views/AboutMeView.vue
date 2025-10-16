<template>
  <div class="space-y-20">
    <AboutIntro />

    <!-- School & Work side-by-side on desktop -->
    <section class="grid gap-10 lg:grid-cols-2">
      <EduTimeline v-reveal="{ onlyOnScroll: true }"  />
      <WorkTimeline  v-reveal="{ onlyOnScroll: true, delay: 120 }" />
    </section>

    <SkillsBoard v-reveal="{ onlyOnScroll: true, delay: 180 }" />
  </div>
</template>

<script setup>
import AboutIntro from '../components/about/AboutIntro.vue'
import EduTimeline from '../components/about/EduTimeline.vue'
import WorkTimeline from '../components/about/WorkTimeline.vue'
import SkillsBoard from '../components/about/SkillsBoard.vue'
</script>