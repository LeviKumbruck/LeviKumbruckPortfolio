<script setup>
import skills, { skillIconId } from '../../data/skills'

const iconUrl = (name) => {
  const id = skillIconId[name]
  return id ? `https://api.iconify.design/${id}.svg` : null
}
</script>

<template>
  <section class="space-y-8">
    <h2 class="text-3xl font-extrabold text-center">Vaardigheden</h2>

    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="group in skills"
        :key="group.title"
        class="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">{{ group.title }}</h3>
          <div class="h-[2px] w-24 bg-sky-500 rounded-full"></div>
        </div>

        <ul class="mt-4 grid grid-cols-3 md:grid-cols-4 gap-5">

          <li v-for="s in group.items" :key="s.name" class="group flex flex-col items-center text-center gap-2" >

            <div class="size-16 md:size-20 grid place-items-center rounded-xl overflow-hidden ring-0 group-hover:ring-2 group-hover:ring-white/20 transition">
              <img
                :src="iconUrl(s.name)"
                :alt="s.name + ' logo'"
                class="w-12 h-12 md:w-14 md:h-14 object-contain"
                loading="lazy"
                decoding="async"
                referrerpolicy="no-referrer"
              />
            </div>

            <span class="text-sm md:text-base text-white/90 max-w-[10ch] md:max-w-none truncate font-medium" :title="s.name" >
              {{ s.name }}
            </span>

          </li>

        </ul>


      </div>
    </div>
  </section>
</template>
