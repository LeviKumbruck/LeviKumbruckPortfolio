<script setup>
const props = defineProps({ data: Object })
</script>

<template>
  <section class="grid grid-cols-1 gap-6 md:grid-cols-[1fr,200px] items-start">
    <div>
      <h1 class="text-3xl md:text-4xl font-extrabold">
        Stage - {{ props.data.company.name }}
      </h1>
      <p class="text-white/80 mt-3 leading-7">
        {{ props.data.company.summary }}
      </p>

      <dl class="mt-4 grid gap-2 text-sm text-white/70">
        <div class="flex gap-2">
          <dt class="w-24 text-white/60">Locatie</dt><dd>{{ props.data.company.location }}</dd>
        </div>
        <div class="flex gap-2">
          <dt class="w-24 text-white/60">Periode</dt><dd>{{ props.data.company.period }}</dd>
        </div>
        <div class="flex gap-2">
          <dt class="w-24 text-white/60">Mentor</dt><dd>{{ props.data.company.mentor }}</dd>
        </div>
      </dl>
    </div>

    <!-- Center on mobile, right on md+ -->
    <div class="justify-self-center md:justify-self-end mt-1 md:mt-0">
      <img
        :src="props.data.company.logo"
        alt="Logo"
        class="w-28 h-28 sm:w-36 sm:h-36 md:w-[160px] md:h-[160px] object-contain rounded-2xl border border-white/10 bg-white/5 p-4"
      />
    </div>

    <div class="md:col-span-2 mt-6 h-px bg-white/10"></div>
  </section>
</template>
