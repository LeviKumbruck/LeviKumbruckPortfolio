<template>
  <header
    class="sticky top-0 z-50 border-b py-4 border-white/10 bg-[#0b0f16]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f16]/70"
  >
    <nav class="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-4">

      <!-- Brand -->
      <router-link to="/" class="flex items-center gap-2">
        <div
          class="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-bold"
        >
          L
        </div>
        <div class="leading-tight">
          <div class="font-semibold text-lg md:text-xl lg:text-2xl">
            Levi
          </div>
          <div class="text-xs md:text-sm lg:text-base text-white/70 -mt-0.5">
            Software Developer
          </div>
        </div>

      </router-link>

      <!-- Desktop nav -->
      <ul class="ml-auto  hidden md:flex items-center gap-1 ">
        <li v-for="l in links" :key="l.to">
          <router-link :to="l.to" custom v-slot="{ href, navigate, isActive }">
            <a
              :href="href"
              @click="navigate"
              :class="[base, hover, isActive ? active : inactive]"
            >
              {{ l.label }}
            </a>
          </router-link>
        </li>
      </ul>

      <!-- Mobile burger -->
      <button
        class="ml-auto md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl text-white/80 hover:bg-white/10"
        @click="open = !open"
        aria-label="Menu"
      >
        <svg v-if="!open" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
        <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.4 5.99 5 7.4 9.6 12 5 16.6l1.4 1.41L12 13.4l5.6 4.6 1.4-1.41L14.4 12 19 7.4 17.6 5.99 12 10.6z"/></svg>
      </button>
    </nav>

    <!-- Mobile drawer -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul v-if="open" class="md:hidden border-t border-white/10 px-4 pb-4 pt-2 space-y-2">
        <li v-for="l in links" :key="l.to">
          <router-link :to="l.to" custom v-slot="{ href, navigate, isActive }">
            <a
              :href="href"
              @click="() => { open = false; navigate() }"
              :class="[
                'block w-full text-left',
                base,
                hover,
                isActive ? active : inactive
              ]"
            >
              {{ l.label }}
            </a>
          </router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/over-mij', label: 'Over mij' },
  { to: '/stage', label: 'Stage' },
  { to: '/projecten', label: 'Projecten' },
  { to: '/contact', label: 'Contact' } 
]

const base =
  'px-3 py-2 rounded-xl text-sm transition focus:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-white/40'
const hover = 'hover:bg-white/10 hover:text-white'
const active =
  'bg-white text-black shadow-sm ring-1 ring-black/10'
const inactive = 'text-white/80'
</script>
