<script setup>
const props = defineProps({ stack: Array })

const isFullCalendar = (t) =>
  t.name === 'FullCalendar' || t.icon === 'simple-icons:fullcalendar'

const iconSrc = (t) =>
  `https://api.iconify.design/${t.icon}.svg`
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold">Tech stack</h2>
    <ul class="mt-4 flex flex-wrap gap-3">
      <li
        v-for="t in props.stack"
        :key="t.name"
        class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
      >
        <!-- Use emoji for FullCalendar -->
        <span
          v-if="isFullCalendar(t)"
          class="text-base leading-none"
          aria-hidden="true"
          title="FullCalendar"
        >🗓️</span>

        <!-- Use Iconify for others -->
        <img
          v-else
          :src="iconSrc(t)"
          :alt="t.name + ' icon'"
          class="w-5 h-5"
          loading="lazy"
          decoding="async"
        />

        <span class="text-sm">{{ t.name }}</span>
      </li>
    </ul>
  </section>
</template>
