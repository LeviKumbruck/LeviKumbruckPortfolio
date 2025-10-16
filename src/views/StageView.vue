<template>
  <div class="space-y-16">
    <Intro :data="stage" />
    <About :data="stage" />
    <Problem />
    <Assignment />
    <Tech :stack="stage.tech" />
    <Approach />
    <Result :data="stage.project" />
  </div>
</template>

<script setup>
import Intro from '../components/stage/Intro.vue'
import About from '../components/stage/About.vue'
import Problem from '../components/stage/Problem.vue'
import Result from '../components/stage/Result.vue'
import Tech from '../components/stage/Tech.vue'
import stage from '../data/stage'
import Assignment from '../components/stage/Assignment.vue'
import Approach from '../components/stage/Approach.vue'
</script>
