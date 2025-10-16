<template>
  <section class="grid gap-10 md:grid-cols-2 items-start">
    <div
      class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
    >
      <div class="flex items-center gap-4">
        <img
          src="/images/linkedin.jpg"
          alt="Levi"
          class="h-16 w-16 rounded-2xl object-cover border border-white/10"
        />
        <div>
          <h3 class="font-semibold text-lg">Levi Kumbruck</h3>
          <p class="text-sm text-white/60">Software Developer</p>
        </div>
      </div>

      <div class="mt-6 space-y-3 text-sm">
        <div class="flex items-center gap-3">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
          <span class="text-white/80">Beschikbaar voor werk</span>
        </div>
        <div class="flex items-center gap-3 text-white/70">
          <span>📍</span><span>België, Limburg</span>
        </div>
        <div class="flex items-center gap-3 text-white/70">
          <span>✉️</span><a class="underline decoration-white/20 hover:decoration-white" href="mailto:kumbrucklevi@gmail.com">kumbrucklevi@gmail.com</a>
        </div>
      </div>
    </div>

    <!-- about text + buttons right -->
    <div>
      <h2 class="text-3xl font-bold">Over mij</h2>
      <p class="mt-4 leading-7 text-white/80">
        {{ intro }}
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          href="/Levi_Kumbruck_CV.pdf"
          class="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 font-medium"
        >
          Download CV
          <span aria-hidden="true"></span>
        </a>

        <router-link
          to="/over-mij"
          class="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10"
        >
          Lees meer
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// keep the copy short; it's just a preview
const intro = `Ik ben Levi Kumbruck, recent afgestudeerd als bachelor
Toegepaste Informatica: Applicatieontwikkeling. Ik sta
klaar om mijn vaardigheden in de praktijk te brengen en
bij te dragen binnen het werkveld. Ik hou van creatief en
probleemoplossend denken en sta altijd open om nieuwe
kennis en technologieën bij te leren.
`
</script>
