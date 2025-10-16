<script setup>
import { ref } from 'vue'

// ✍️ Jouw gegevens
const PHONE    = '+32 468 30 78 40'
const EMAIL    = 'kumbrucklevi@gmail.com'
const LOCATION = 'België, Limburg'
const LINKEDIN = 'https://www.linkedin.com/in/levi-kumbruck/'

// helpers
const copying = ref('')
async function copy(text, key) {
  try {
    await navigator.clipboard.writeText(text)
    copying.value = key
    setTimeout(() => (copying.value = ''), 1200)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copying.value = key
    setTimeout(() => (copying.value = ''), 1200)
  }
}

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`
</script>

<template>
  <section class="space-y-8">
    <header>
      <h1 class="text-3xl md:text-4xl font-extrabold">Contact</h1>
      <p class="mt-2 text-white/80 max-w-prose">
        Je kan me rechtstreeks bereiken via onderstaande kanalen.
      </p>
    </header>

    <!-- Responsive grid: 1 col → 2 cols on sm+ -->
    <div class="grid gap-5 sm:gap-6 sm:grid-cols-2">
      <!-- PHONE -->
      <article
        class="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        v-reveal="{ onlyOnScroll: true }"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-xl bg-white/10 text-xl">
            📞
          </div>
          <div class="min-w-0 w-full">
            <h2 class="text-base md:text-lg font-semibold">Telefoon</h2>
            <p class="text-white/85 mt-1 truncate" :title="PHONE">{{ PHONE }}</p>

            <div class="mt-3 flex flex-col sm:flex-row gap-2">
              <button
                @click="copy(PHONE, 'phone')"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 w-full sm:w-auto"
              >
                <span v-if="copying==='phone'">Gekopieerd ✓</span>
                <span v-else>Kopieer nummer</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- EMAIL -->
      <article
        class="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        v-reveal="{ onlyOnScroll: true, delay: 80 }"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-xl bg-white/10 text-xl">
            ✉️
          </div>
          <div class="min-w-0 w-full">
            <h2 class="text-base md:text-lg font-semibold">E-mail</h2>
            <p class="text-white/85 mt-1 truncate" :title="EMAIL">{{ EMAIL }}</p>

            <div class="mt-3 flex flex-col sm:flex-row gap-2">
              <a
                :href="`mailto:${EMAIL}`"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium w-full sm:w-auto"
              >
                Stuur e-mail
              </a>
              <button
                @click="copy(EMAIL, 'email')"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 w-full sm:w-auto"
              >
                <span v-if="copying==='email'">Gekopieerd ✓</span>
                <span v-else>Kopieer e-mail</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- LOCATION -->
      <article
        class="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        v-reveal="{ onlyOnScroll: true, delay: 160 }"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-xl bg-white/10 text-xl">
            📍
          </div>
          <div class="min-w-0 w-full">
            <h2 class="text-base md:text-lg font-semibold">Locatie</h2>
            <p class="text-white/85 mt-1">{{ LOCATION }}</p>

            <div class="mt-3">
              <a
                :href="mapUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 w-full sm:w-auto"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </div>
      </article>

      <!-- LINKEDIN -->
      <article
        class="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        v-reveal="{ onlyOnScroll: true, delay: 240 }"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-xl bg-white/10">
            <img
              src="https://api.iconify.design/logos/linkedin-icon.svg"
              alt="LinkedIn"
              class="w-6 h-6 md:w-7 md:h-7"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="min-w-0 w-full">
            <h2 class="text-base md:text-lg font-semibold">LinkedIn</h2>
            <p class="text-white/85 mt-1 truncate" :title="LINKEDIN">{{ LINKEDIN }}</p>

            <div class="mt-3 flex flex-col sm:flex-row gap-2">
              <a
                :href="LINKEDIN"
                target="_blank"
                rel="noopener"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium w-full sm:w-auto"
              >
                Bekijk profiel
              </a>
              <button
                @click="copy(LINKEDIN, 'li')"
                class="inline-flex justify-center sm:justify-start items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 w-full sm:w-auto"
              >
                <span v-if="copying==='li'">Gekopieerd ✓</span>
                <span v-else>Kopieer link</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- CTA -->
    <div class="pt-2">
      <router-link
        to="/projecten"
        class="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 w-full sm:w-auto"
      >
        Bekijk mijn projecten
        <span aria-hidden="true">→</span>
      </router-link>
    </div>
  </section>
</template>
