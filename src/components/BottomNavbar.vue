<template>
  <footer
    class="mt-16 border-t border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="py-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- left / copy -->
        <p class="text-sm text-white/70">
           {{ year }} <span class="font-medium text-white/90">Levi Kumbruck</span> — Software Developer
        </p>

        <!-- right / socials -->
        <nav aria-label="Socials">
          <ul class="flex flex-wrap items-center gap-2 sm:gap-3">
            <li v-for="s in socials" :key="s.name">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="s.name"
                class="group inline-flex items-center gap-2 rounded-xl px-3 py-2
                       text-sm text-white/80 transition
                       hover:text-white hover:bg-white/10
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Icon :name="s.icon" class="w-5 h-5 shrink-0" />
                <span class="hidden sm:inline">{{ s.name }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
    </div>
  </footer>
</template>


<script setup>
import Icon from './Icon.vue'

const year = new Date().getFullYear()

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/levi-kumbruck/', icon: 'linkedin' },
  { name: 'Email', href: 'mailto:kumbrucklevi@gmail.com', icon: 'mail' },
]
</script>
