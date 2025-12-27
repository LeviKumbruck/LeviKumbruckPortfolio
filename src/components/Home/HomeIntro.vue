<template>
  <div class="grid items-center gap-10 md:grid-cols-2">
    <!-- left: title + one-liner -->
    <div>
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
        {{ hero.title }}
      </h1>
      <p class="mt-4 text-lg max-w-2xl text-white/80">
        {{ hero.sentence }}
      </p>
    </div>

    <!-- right: photo with ribbon (zoomed-in) -->
    <div class="relative">
      <!-- wrapper handles border/radius/clipping -->
      <div class="rounded-3xl border border-white/10 shadow-xl overflow-hidden
           aspect-[4/5] md:aspect-[16/12]">
        <img :src="hero.image" alt="Levi" class="w-full h-full object-cover
             scale-[1.70]          
             [transform-origin:center_40%] 
             transition-transform duration-700" />
      </div>

    </div>

  </div>

  <div class="my-10 h-px bg-white/10"></div>
</template>

<script setup>
const hero = {
  title: 'Software Developer',
  sentence:
    'Welkom! Ik ben Levi, een gepassioneerde software developer met een passie voor het bouwen van efficiënte en schaalbare applicaties.',
  image: '/images/linkedin.jpg',
  status: 'Beschikbaar voor werk'
}
</script>