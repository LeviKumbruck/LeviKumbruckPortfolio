<template>
  <section class="space-y-6">
    <h2 class="text-2xl md:text-3xl font-bold">School</h2>

    <ol class="relative border-s border-white/10 ps-6 space-y-6">
      <li v-for="item in education" :key="item.title" class="group">
        <!-- dot -->
        <span
          class="absolute -start-2 mt-2 h-3 w-3 rounded-full bg-sky-500 ring-4 ring-[#0b0f16]"
          aria-hidden="true"
        />
        <!-- card -->
        <div class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm">
          <!-- grid keeps period pinned to the top-right -->
          <div class="grid grid-cols-[1fr,auto] items-start gap-3 min-w-0">
            <h3 class="font-semibold leading-snug clamp-2 min-w-0">
              {{ item.title }}
            </h3>
            <span
              class="text-xs whitespace-nowrap rounded-full border border-white/15 px-2 py-0.5 text-white/70 justify-self-end"
            >
              {{ item.period }}
            </span>
          </div>

          <p class="text-sm text-white/70 mt-1">{{ item.school }}</p>
          <p v-if="item.note" class="text-sm text-white/80 mt-2">{{ item.note }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import education from '../../data/education'
</script>

<style scoped>
.clamp-2{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
