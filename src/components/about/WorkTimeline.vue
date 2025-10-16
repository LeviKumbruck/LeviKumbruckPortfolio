<script setup>
import work from '../../data/work'
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl md:text-3xl font-bold">Werkervaring</h2>

    <ol class="relative border-s border-white/10 ps-6 space-y-6">
      <li v-for="item in work" :key="item.title" class="group">
        <!-- dot -->
        <span
          class="absolute -start-2 mt-2 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#0b0f16]"
          aria-hidden="true"
        />
        <!-- card -->
        <div class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <h3 class="font-semibold">{{ item.title }}</h3>
            <span class="text-xs rounded-full border border-white/15 px-2 py-0.5 text-white/70">
              {{ item.period }}
            </span>
          </div>
          <p class="text-sm text-white/70 mt-1">{{ item.company }}</p>
          <p v-if="item.desc" class="text-sm text-white/80 mt-2">{{ item.desc }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
