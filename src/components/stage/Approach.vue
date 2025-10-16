<template>
  <section class="space-y-8">
    <header class="space-y-5">
      <h2 class="text-2xl md:text-3xl font-bold">Aanpak</h2>
      <p class="text-white/80">
        Zo heb ik mijn stage bij iBeauty aangepakt. Van analyse tot iteratieve levering, met
        een duidelijke focus op <span class="font-medium">kwaliteit</span>, <span class="font-medium">snelheid</span> en <span class="font-medium">feedback</span>.
      </p>
    </header>

    <!-- 4-stappen visual -->
    <ol class="grid gap-4 md:grid-cols-2">
      <li
        v-for="s in stappen"
        :key="s.nr"
        class="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1] transition"
      >
        <div class="flex items-start gap-4">
          <div
            class="shrink-0 h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500
                   text-white font-bold shadow-sm ring-1 ring-white/10"
          >
            {{ s.nr }}
          </div>
          <div class="min-w-0">
            <h3 class="text-lg font-semibold leading-tight">
              {{ s.titel }}
            </h3>
            <p class="mt-2 text-sm text-white/85 leading-relaxed">
              {{ s.tekst }}
            </p>
          </div>
        </div>
      </li>
    </ol>

   
  </section>
</template>

<script setup>
const stappen = [
  {
    nr: 1,
    titel: 'Analyse legacy code & architectuur',
    tekst:
      'Eerst een diepgaande analyse van de bestaande codebase en architectuur: structuur, verantwoordelijkheden en dataflows in kaart gebracht om bottlenecks te begrijpen.'
  },
  {
    nr: 2,
    titel: 'FullCalendar research',
    tekst:
      'De documentatie van FullCalendar grondig doorgenomen (views, events, drag & drop, recurring, timezones) om integratiekeuzes en beperkingen te kennen.'
  },
  {
    nr: 3,
    titel: 'Agile sprints met user stories',
    tekst:
      'In korte sprints gewerkt. Alle user stories beheerd in ClickUp — telkens van “To do” naar “In Progress” tot “Complete”. Regelmatige feedbackmomenten tussendoor.'
  },
  {
    nr: 4,
    titel: 'Implementatie & iteratie',
    tekst:
      'Gefaseerd implementeren: eerst basisweergaves en API-koppelingen, nadien drag & drop, conflict-detectie en performance-tuning. Telkens review → verbeteren.'
  }
]

const board = {
    todo: [
        { id: 'US-5', title: 'Als gebruiker wil ik een tooltip zien bij het hoveren over een afspraak zodat ik snel details kan bekijken.' },
        { id: 'US-4', title: 'Als medewerker wil ik afspraken kunnen verslepen in de agenda zodat ik eenvoudig wijzigingen kan doorvoeren.' }
    ],
    doing: [
        { id: 'US-3', title: 'Als medewerker wil ik de agenda per medewerker kunnen bekijken zodat ik de planning per persoon kan monitoren.' }
    ],
    done: [
        { id: 'US-2', title: 'Als gebruiker wil ik afspraken uit de database zien in de agenda zodat ik altijd actuele informatie heb.' },
        { id: 'US-1', title: 'Als gebruiker wil ik een FullCalendar agenda zien in de applicatie zodat ik mijn afspraken visueel kan beheren.' }
    ]
}
</script>