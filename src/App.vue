<template>
  <div class="min-h-dvh flex flex-col relative text-white">
    <!-- gradient bg (your previous one) -->
    <div class="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-[#0b1020] via-[#0a1430] to-[#0b1b3a]" />
    <div class="pointer-events-none fixed -top-40 -left-40 h-[60rem] w-[60rem] -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_60%)]" />

    <TopNavbar />

    <main class="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <BottomNavbar />
  </div>
</template>

<script setup>
import TopNavbar from './components/TopNavbar.vue'
import BottomNavbar from './components/BottomNavbar.vue'
</script>
