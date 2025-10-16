<template>
  <section class="space-y-8">
    <!-- Heading -->
    <header class="space-y-3">
      <h2 class="text-2xl md:text-3xl font-bold">Resultaat</h2>
    </header>

    <!-- Feature highlight cards -->
    <div class="grid gap-4 md:grid-cols-2">
      <div
        v-for="(p, i) in points"
        :key="p.title"
        class="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
        v-reveal="{ onlyOnScroll: true, delay: i * 80 }"
      >
        <div class="flex items-start gap-3">
          <div class="h-8 w-8 grid place-items-center rounded-lg bg-white/10 text-lg">{{ p.icon }}</div>
          <div>
            <h3 class="font-semibold">{{ p.title }}</h3>
            <p class="text-sm text-white/85 mt-1">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Screenshots -->
    <div class="space-y-3">
      <div class="grid gap-4 md:grid-cols-2">
        <figure class="rounded-2xl border border-white/10 bg-white/5 overflow-hidden" v-reveal="{ onlyOnScroll: true }">
          <img :src="props.screenshot1" alt="Nieuwe agenda — screenshot 1" class="w-full object-cover aspect-[16/9]" />
          <figcaption class="px-4 py-2 text-xs text-white/70 border-t border-white/10">Weekweergave nieuwe agendamodule</figcaption>
        </figure>
        <figure class="rounded-2xl border border-white/10 bg-white/5 overflow-hidden" v-reveal="{ onlyOnScroll: true, delay: 120 }">
          <img :src="props.screenshot2" alt="Nieuwe agenda — screenshot 2" class="w-full object-cover aspect-[16/9]" />
          <figcaption class="px-4 py-2 text-xs text-white/70 border-t border-white/10">Iedereenweergave nieuwe agendamodule</figcaption>
        </figure>
      </div>
    </div>

    <!-- Research outcome callout -->
    <div class="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5" v-reveal="{ onlyOnScroll: true }">
      <div class="flex items-start gap-3">
        <div class="h-8 w-8 grid place-items-center rounded-lg bg-emerald-400/20 text-emerald-200">📚</div>
        <div class="space-y-1">
          <h3 class="font-semibold text-emerald-200">Onderzoeksconclusie</h3>
          <p class="text-sm text-emerald-100/90">
            Uit de onderzoekspaper blijkt dat <span class="font-semibold">FullCalendar</span> voor iBeauty de beste optie is:
            gebruiksvriendelijk (gevalideerd via usability tests van POCs), uitstekende documentatie,
            sterke balans in functionaliteit, vlotte integratie in bestaande frameworks en een brede community.
          </p>
        </div>
      </div>
    </div>


  
  </section>
</template>


<script setup lang="ts">
const props = withDefaults(defineProps<{
  screenshot1?: string,
  screenshot2?: string,
  paperUrl?: string,
  demoUrl?: string
}>(), {
  screenshot1: '/stage/screenshot1.png',
  screenshot2: '/stage/screenshot2.png',
})

const points = [
  {
    icon: '✅',
    title: 'Volledig vernieuwde agenda',
    text: 'Alle bestaande features vervangen door een moderne implementatie met betere UX en performance.'
  },
  {
    icon: '🧲',
    title: 'Drag & Drop & Resizing',
    text: 'Afspraken snel verplaatsen of de duur aanpassen door simpelweg te resizen.'
  },
  {
    icon: '🗓️',
    title: 'Extra weergaves',
    text: 'Nieuwe views die nog niet bestonden, afgestemd op de dagelijkse workflow van het salon.'
  },
  {
    icon: '📈',
    title: 'Een geslaagde stage',
    text: 'Stage met succes afgerond, met positieve feedback van zowel iBeauty als mijn stagebegeleider. '
  }
]
</script>
