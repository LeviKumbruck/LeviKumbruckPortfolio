<template>
  <section class="space-y-8">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">Over mij</h1>

    <!-- Intro + foto -->
    <div class="grid gap-8 md:grid-cols-[1fr,280px] items-start">
      <div class="space-y-4 leading-7 text-white/85" v-reveal>

        <p>
          Ik ben Levi Kumbruck, een leergierige, gemotiveerde en hands-on full-stack developer uit Limburg.
          Ik hou van bijleren, snel itereren en projecten met impact opleveren. Teamwork, duidelijke
          communicatie en oog voor detail staan bij mij centraal.
        </p>

        <p>
          Recent ben ik afgestudeerd als <strong>Professionele Bachelor Toegepaste Informatica</strong>
          (afstudeerrichting <strong>Applicatie-ontwikkeling</strong>). Ik ben supergemotiveerd om mijn
          net opgedane kennis nu in de praktijk te zetten: van <strong>Vue</strong> en
          <strong>Tailwind</strong> aan de front-end tot <strong>Node/Java (Spring)</strong> en
          <strong>.NET</strong> aan de back-end. Ik werk gestructureerd met <strong>Git</strong> en
          <strong>Agile</strong> sprints, schrijf leesbare, testbare code en denk mee over UX,
          performance en schaalbaarheid. Ik heb een passie voor
          probleemoplossend denken en werk vlot samen. Ik sta klaar om snel te schakelen, verantwoordelijkheid te nemen
          en waarde te leveren.
        </p>


        <!-- badges -->
        <div class="flex flex-wrap gap-2 pt-2">
          <span class="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/5">Leergierig</span>
          <span class="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/5">Gemotiveerd</span>
          <span class="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/5">Proactief</span>
          <span class="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/5">Teamspeler</span>
        </div>

        <!-- CTA -->
        <div class="pt-4 flex flex-wrap gap-3">
          <router-link to="/contact"
            class="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 font-medium">
            Contacteer mij
            <span aria-hidden="true">→</span>
          </router-link>
          <a href="/Levi_Kumbruck_CV.pdf"
            class="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
            Download CV
          </a>
        </div>
      </div>

      <!-- Foto Levi (licht ingezoomd) -->
      <div class="justify-self-end w-full max-w-[280px]" v-reveal="{ delay: 120 }">
        <div class="rounded-2xl border border-white/10 shadow-xl overflow-hidden aspect-[4/5]">
          <img src="/images/linkedin.jpg" alt="Levi"
            class="w-full h-full object-cover scale-[1.12] [transform-origin:center_42%]" loading="lazy"
            decoding="async" />
        </div>
      </div>
    </div>

    <div class="h-px bg-white/10"></div>

    <!-- Persoonlijk -->
    <section class="space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold">Hobby's en interesses</h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="relative h-56 overflow-hidden cursor-grab">
          <h1 class="font-semibold text-lg" >Tennis</h1>
          <Hobby3DIcon kind="tennis" />
        </div>

        <div class="relative h-56 overflow-hidden cursor-grab">
          <h1 class="font-semibold text-lg">KRC Genk</h1>
          <Hobby3DIcon kind="genk" />
        </div>

        <div class="relative h-56 overflow-hidden cursor-grab">
          <h1 class="font-semibold text-lg">Formule 1</h1>
          <Hobby3DIcon kind="f1" />
        </div>
      </div>

    </section>

    <div class="h-px bg-white/10"></div>
  </section>
</template>

<script setup>

import Hobby3DIcon from './Hobby3DIcon.vue';

</script>
