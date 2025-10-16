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
          probleemoplossend denken en werk vlot samen. Ik sta klaar om snel te schakelen, verantwoordelijkheid te nemen en waarde te leveren.
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
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 font-medium"
          >
            Contacteer mij
            <span aria-hidden="true">→</span>
          </router-link>
          <a
            href="/Levi_Kumbruck_CV.pdf"
            class="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </div>

      <!-- Foto Levi (licht ingezoomd) -->
      <div class="justify-self-end w-full max-w-[280px]" v-reveal="{ delay: 120 }">
        <div class="rounded-2xl border border-white/10 shadow-xl overflow-hidden aspect-[4/5]">
          <img
            src="/images/linkedin.jpg"
            alt="Levi"
            class="w-full h-full object-cover scale-[1.12] [transform-origin:center_42%]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <div class="h-px bg-white/10"></div>

    <!-- Persoonlijk -->
    <section class="space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold">Hobby's en interesses</h2>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- Tennis (text fades out on hover) -->
        <article
          class="group relative overflow-hidden rounded-2xl border border-white/10 transition"
          v-reveal="{ onlyOnScroll: true }"
          tabindex="0" aria-label="Tennis"
        >
          <!-- bg image -->
          <img
            src="/images/tennis.png"
            alt="Tennis"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-focus:opacity-70
                   transition-all duration-500 ease-out filter blur-[2px] group-hover:blur-0 group-focus:blur-0"
            loading="lazy" decoding="async"
          />
          <!-- overlay for readability -->
          <div
            class="absolute inset-0 bg-black/35 group-hover:bg-black/25 group-focus:bg-black/25 transition-colors duration-500"
            aria-hidden="true"
          ></div>

          <div class="relative z-10 p-5">
            <header class="flex items-center gap-3 mb-3">
              <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-xl">🎾</div>
              <h3 class="font-semibold text-lg">Tennis</h3>
            </header>
            <p
              class="text-sm text-white/90 leading-relaxed transition-opacity duration-300
                     group-hover:opacity-0 group-focus:opacity-0"
            >
              Al meer dan 15 jaar op het veld. Tennis leert me volhouden, focussen en slim spelen - skills die ik ook in code toepas.
            </p>
          </div>
        </article>

        <!-- KRC Genk (text fades out on hover, soccer icon) -->
        <article
          class="group relative overflow-hidden rounded-2xl border border-white/10 transition"
          v-reveal="{ onlyOnScroll: true, delay: 120 }"
          tabindex="0" aria-label="KRC Genk supporter"
        >
          <!-- bg image -->
          <img
            src="/images/genk.jpg"
            alt="KRC Genk — thuismatch"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-focus:opacity-70
                   transition-all duration-500 ease-out filter blur-[2px] group-hover:blur-0 group-focus:blur-0"
            loading="lazy" decoding="async"
          />
          <!-- overlay -->
          <div
            class="absolute inset-0 bg-black/35 group-hover:bg-black/25 group-focus:bg-black/25 transition-colors duration-500"
            aria-hidden="true"
          ></div>

          <div class="relative z-10 p-5">
            <header class="flex items-center gap-3 mb-3">
              <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-xl">⚽</div>
              <h3 class="font-semibold text-lg">KRC Genk</h3>
            </header>

            <p
              class="text-sm text-white/90 leading-relaxed transition-opacity duration-300
                     group-hover:opacity-0 group-focus:opacity-0"
            >
              Ik ben een grote KRC Genk-supporter en ga elke thuismatch kijken. 🔵⚪
            </p>
          </div>
        </article>

        <!-- Formule 1 (text fades out on hover) -->
        <article
          class="group relative overflow-hidden rounded-2xl border border-white/10 transition"
          v-reveal="{ onlyOnScroll: true, delay: 200 }"
          tabindex="0" aria-label="Formule 1"
        >
          <!-- bg image -->
          <img
            src="/images/f1.jpg"
            alt="Formule 1"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-focus:opacity-70
                   transition-all duration-500 ease-out filter blur-[2px] group-hover:blur-0 group-focus:blur-0"
            loading="lazy" decoding="async"
          />
          <!-- overlay -->
          <div
            class="absolute inset-0 bg-black/35 group-hover:bg-black/25 group-focus:bg-black/25 transition-colors duration-500"
            aria-hidden="true"
          ></div>

          <div class="relative z-10 p-5">
            <header class="flex items-center gap-3 mb-3">
              <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-xl">🏎️</div>
              <h3 class="font-semibold text-lg">Formule 1</h3>
            </header>
            <p
              class="text-sm text-white/90 leading-relaxed transition-opacity duration-300
                     group-hover:opacity-0 group-focus:opacity-0"
            >
              In het weekend zit ik graag klaar voor de Formule 1 race.
            </p>
          </div>
        </article>
      </div>
    </section>

    <div class="h-px bg-white/10"></div>
  </section>
</template>

<script setup>
// geen extra script nodig — alle content staat in de template
</script>
