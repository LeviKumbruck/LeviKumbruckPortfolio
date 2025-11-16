export default [
  {
    slug: 'B2B Klantenportaal',
    title: 'B2B Klantenportaal Elision',
    subtitle: 'PXL: IT-Project',
    year: 2024,
    tags: ['B2B', 'Java', 'Next.js'],
    cover: '/projects/blues1.png',
    tech: ['Next.js', 'Java', 'Spring Boot', 'REST API', 'JWT', 'MySQL', 'Tailwind CSS', 'Docker'],
    description: 'Een B2B klantenportaal voor Elision met orderbeheer, facturen en self-service.',
    story: `
      <section class="space-y-10">

        <!-- Context (card) -->
        <div class="rounded-2xl border border-white/15 bg-white/[0.04] p-5 md:p-6 shadow-sm space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Context</h2>
          <p class="text-white/85 leading-relaxed">
            Als deel van mijn opleiding kregen we het vak "IT-Project" in het laatste (3de) jaar.
            Hierbij moesten studenten van alle afstudeerrichtingen van Toegepaste Informatica samenwerken aan een project om te leren hoe de verschillende disciplines
            in de praktijk samenwerken.
            In teams van 6-7 studenten werkten we op de werkvloer van het bedrijf aan een real-world project voor een klant.
            In mijn geval mocht ik werken aan een project bij Elision. 
          </p>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

        <!-- Wie is Elision -->
        <div class="space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Wie is Elision?</h2>
          <p class="text-white/85 leading-relaxed">
            Elision is een Hasselts customer-experience bureau op de Corda Campus. Het bedrijf helpt vooral B2B-organisaties
            groeien met composable e-commerce, marketing automation en slim gebruik van klantdata. Door strategie, design en
            development te combineren, levert Elision oplossingen die snel inzetbaar zijn, schaalbaar blijven en naadloos
            integreren met bestaande systemen.
          </p>
          <p class="text-white/85 leading-relaxed">
            Met onder meer SAP CX, Emarsys en moderne customer-data-platformen vertaalt het team data naar persoonlijke
            klantervaringen over alle kanalen. Van roadmap en implementatie tot integraties en continue optimalisatie:
            Elision richt technologie in zodat die meetbaar rendeert en klanten laat terugkomen.
          </p>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

        <!-- Opdracht -->
        <div class="space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Opdracht</h2>
          <p class="text-white/85 leading-relaxed">
            Elision wou een B2B klantenportaal bouwen voor een klant die windmolen onderdelen verkoopt. In dit portaal moesten klanten onder andere
            bestellingen kunnen plaatsen, onderhoud kunnen aanvragen, facturen kunnen inzien en hun gegevens kunnen beheren. Dit portaal moest de klantenservice ontlasten en de
            klanttevredenheid verhogen door een gebruiksvriendelijke, self-service ervaring te bieden.
          </p>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

      <!-- Aanpak (float image so text wraps; then clear to full width) -->
        <div class="space-y-5">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Aanpak</h2>

          <div class="space-y-4">
            <!-- Tech stack image floats on large screens -->
            <figure class="lg:float-right lg:w-[52%] lg:ml-6 lg:mb-4 rounded-2xl overflow-hidden border border-white/10 shadow-sm">
              <img
                src="/projects/blues3.png"
                alt="B2B dashboard / Tech stack"
                class="w-full object-cover aspect-[16/8]"
              />
              <figcaption class="px-4 py-3 text-sm text-white/75">
                Technologie stack: Next.js, TypeScript, Java Spring Boot + Spring Security, PostgreSQL.
              </figcaption>
            </figure>

            <!-- Paragraphs that should wrap around the image -->
            <p class="text-white/85 leading-relaxed">
              Er werd gekozen voor een <strong>Next.js</strong> frontend met <strong>Tailwind CSS</strong> voor snelle ontwikkeling en een moderne look. In de frontend volgde we het <strong>Atomic Design Principle</strong> om herbruikbare componenten te maken.
              De backend werd gebouwd met <strong>Java Spring Boot</strong>, gebruikmakend van <strong>REST API's</strong> en <strong>JWT</strong> voor veilige authenticatie.
              <strong>PostgreSQL</strong> diende als database voor het opslaan van alle gegevens. Voor bestanden en documenten werd <strong>AWS S3</strong> gebruikt.
            </p>

            <p class="text-white/85 leading-relaxed">
              Voordat we konden beginnen met ontwikkelen, hebben we eerst een <strong>projectplan</strong> gemaakt met daarin onder andere een <strong>marktonderzoek</strong>, <strong>algemene afspraken</strong>, een <strong>projectdoel</strong>, <strong>kritische succesfactoren</strong> etc.
              Zo werd er bijvoorbeeld besloten om een <strong>code coverage van minstens 80% (gemeten via SonarQube)</strong> te behalen en om de <strong>pull requests</strong> te laten reviewen door <strong>minstens 3 teamleden</strong>.
              Ook werd er een <strong>domeinmodel</strong> opgesteld om de verschillende entiteiten en hun relaties in het systeem te visualiseren.
              Er werd een <strong>backlog</strong> opgesteld met <strong>user stories</strong> en taken die we moesten uitvoeren tijdens het ontwikkelen van het portaal.
              <strong>Wireframes en mockups</strong> werden gemaakt om de gebruikersinterface te visualiseren en feedback te verzamelen van de klant.
            </p>

            <!-- Clear the float so everything below is full width -->
            <div class="clear-both"></div>

            <!-- Full-width paragraph(s) after the image -->
            <p class="text-white/85 leading-relaxed">
              Nadat dit allemaal was goedgekeurd, konden we beginnen met de ontwikkeling van het portaal.
              We werkten op een agile manier, in <strong>sprints van 2-3 weken</strong>, waarbij we elke sprint een set van user stories uit de backlog oppakten.
              Ook gebruikten we de <strong>feature-branch workflow</strong> in Git om de code te beheren en samen te werken.
              We hielden altijd <strong>daily stand-ups</strong>. Aan het einde van elke sprint presenteerden we onze voortgang aan de klant en verzamelden we feedback.
              Dit stelde ons in staat om snel aanpassingen te maken en ervoor te zorgen dat het eindproduct voldeed aan de verwachtingen van de klant.
              Documentatie werd bijgehouden in <strong>Confluence</strong>.
              De ontwikkelaars (waaronder ik) bouwden de applicatie die <strong>deploy-ready</strong> was. De systeem en netwerkbeheerders zorgden voor de <strong>infrastructuur</strong> en <strong>deployment pipelines</strong>. 
              Waardoor we <strong>continu</strong> konden integreren en deployen naar een <strong>test omgeving</strong> voor testing en feedback. 
              De <strong>business analisten</strong> zorgden voor de communicatie met de klant en het vertalen van hun wensen naar technische vereisten.
              Zo werkten we als een hecht team samen om een succesvol portaal te leveren. 
            </p>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

        <!-- Resultaat (big images + captions) -->
        <div class="space-y-5">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>
          <p class="text-white/85 leading-relaxed">
            Het resultaat was een gebruiksvriendelijk B2B klantenportaal dat voldeed aan de eisen van de klant.
            Klanten kunnen nu zelfstandig bestellingen plaatsen, facturen inzien, gegevens beheren, onderhoud aanvragen, etc. wat heeft geleid tot een hogere klanttevredenheid en minder druk op de klantenservice.
            Het project werd op tijd en binnen budget opgeleverd, met een code coverage van minsten 80% zoals te zien is in de screenshot. Ook kregen we positieve feedback van de klant.
          </p>

          <!-- Visual result: one large image -->
          <figure class="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/projects/blues2.png"
              alt="Dashboard met producten en onderhoudsaanvragen"
              class="w-full object-cover aspect-[16/9]"
            />
            <figcaption class="px-4 py-3 text-sm text-white/75">
              Dashboard met producten en onderhoudsaanvragen.
            </figcaption>
          </figure>

          <p class="text-white/85 leading-relaxed">
            Al met al was dit project een geweldige leerervaring die me waardevolle inzichten gaf in het werken aan een real-world IT-project in een professionele omgeving.
            Ik heb geleerd hoe belangrijk goede communicatie en samenwerking zijn in een team, en hoe je snel kunt inspelen op veranderingen en feedback van klanten.
            Ik ben trots op wat we hebben bereikt en kijk ernaar uit om deze ervaring mee te nemen in mijn toekomstige carrière.
          </p>
        </div>

      </section>
      `
  },

  {
    slug: 'Paardenfokkerij PWA',
    title: 'Paardenfokkerij PWA',
    subtitle: 'PXL: Research Project',
    year: 2023,
    tags: ['PWA', 'Java', 'Vue.js'],
    cover: '/projects/fokkerij1.png',
    tech: ['Vue', 'Tailwind CSS', 'Java', 'Spring Boot'],
    description: '',
    story: `
      <section class="space-y-10">
        <!-- Context -->
        <div class="space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Context</h2>
          <p class="text-white/85 leading-relaxed">
            In het 2de jaar kregen we het vak "Research Project". Hierbij kregen we een real-world project waar we met een team van 4-5 ontwikkelaars aan werkten.
            Wij kregen als opdracht een <strong>Progressive Web App (PWA)</strong> te maken voor de eigenares van een paardenfokkerij.
          </p>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>
        
        <!-- Probleem & Doel -->
        <div class="grid lg:grid-cols-12 gap-8 items-start">
          <!-- Tekst + stack -->
          <div class="lg:col-span-6 space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Probleem &amp; Doel</h2>
            <p class="text-white/85 leading-relaxed">
              De eigenares hield alle gegevens van haar paarden bij in haar "Notities" app op haar telefoon.
              Dit werkte niet goed: de gegevens waren verspreid over verschillende notities en er was geen structuur.
              Dit zorgde voor fouten en kostte tijd.
            </p>
            <p class="text-white/85 leading-relaxed">
              Daarom was het doel van dit project om een gebruiksvriendelijke PWA te maken waarmee de eigenares al haar gegevens
              op één plek kon bijhouden. De app moest snel werken, ook offline, en makkelijk te gebruiken zijn.
              Zo kon ze efficiënter werken en fouten verminderen.
            </p>
          </div>

          <div class="lg:col-span-6">
            <figure class="mx-auto max-w-[20rem] rounded-2xl border border-white/15 bg-white/[0.04] overflow-hidden shadow-2xl">
              <img
                src="/projects/fokkerij4.png"
                alt="Extra scherm uit de PWA"
                class="w-full h-auto object-contain"
              />
            </figure>
          </div>


        </div>

        <div class="grid sm:grid-cols-3 gap-3">
              <div class="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                <p class="text-xs text-white/65">Frontend</p>
                <p class="text-white/90 text-sm font-medium">Vue.js (PWA)</p>
              </div>
              <div class="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                <p class="text-xs text-white/65">Backend</p>
                <p class="text-white/90 text-sm font-medium">Java Spring Boot</p>
              </div>
              <div class="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                <p class="text-xs text-white/65">Database</p>
                <p class="text-white/90 text-sm font-medium">MySQL database</p>
              </div>
            </div>


          

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

        <!-- Aanpak -->
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Aanpak</h2>
          <p class="text-white/85 leading-relaxed">
            We begonnen met <strong>wireframes</strong> om een duidelijk beeld te krijgen van de gebruikersflow. Hierbij kregen we feedback van de eigenares.
            Vervolgens maakten we <strong>mockups</strong> in Figma om de visuele stijl en interface te ontwerpen. 
            Ondertussen stelden we ook een <strong>backlog</strong> op met alle functionaliteiten die we wilden implementeren. Nadat dit allemaal was goedgekeurd, konden we beginnen met de ontwikkeling van de app.
          </p>
          <p class="text-white/85 leading-relaxed">
            We werkten op een agile manier met <strong>sprints van 2-3 weken</strong>. We deden altijd daily stand-ups met na elke sprint een <strong>demo</strong> en
            concrete feedbackpunten. We gebruikten Git met de <strong>feature-branch workflow</strong> om de code te beheren en samen te werken. 
            We streefden naar een <strong>code coverage van minstens 70%</strong>, dit werd gemeten via SonarQube.
          </p>
          
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-white/10"></div>

        <!-- Resultaat -->
        <div class="space-y-3">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>
          <p class="text-white/85 leading-relaxed">
            In plaats van al de gegevens ongestructureerd in de "Notities" app te zetten. Is er nu één centrale PWA met <strong>alle gegevens</strong> en <strong>offline werking</strong>.
            Hierdoor kan de eigenares sneller en efficiënter werken, met minder fouten. De app is gebruiksvriendelijk en ziet er professioneel uit.
            De eigenares was erg tevreden met het resultaat en kon de app nu dagelijks gebruiken. 
            Dit project was een geweldige leerervaring die me waardevolle inzichten gaf in het werken aan een real-world IT-project. 
            Goede communicatie en samenwerking in een team zijn cruciaal, net als snel kunnen inspelen op veranderingen en feedback van klanten.
          </p>
        </div>

        <div class="lg:col-span-6">
            <div class="relative mx-auto max-w-[34rem] h-[28rem] sm:h-[30rem]">
              <!-- left phone -->
              <figure class="absolute left-2 sm:left-6 top-6 sm:top-4 w-[13rem] sm:w-[14rem] rotate-[-10deg] rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl">
                <img src="/projects/fokkerij2.png" alt="Paardenprofiel (mobiel)" class="w-full h-full object-cover aspect-[9/20]" />
              </figure>
              <!-- right phone -->
              <figure class="absolute right-2 sm:right-6 top-0 w-[13rem] sm:w-[14rem] rotate-[10deg] rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl">
                <img src="/projects/fokkerij3.png" alt="Overzicht van alle paarden (mobiel)" class="w-full h-full object-cover aspect-[9/20]" />
              </figure>
              <!-- center glow / decoration -->
              <div class="pointer-events-none absolute inset-x-16 sm:inset-x-24 bottom-8 h-24 rounded-full blur-2xl bg-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    `
  },

  {
    slug: 'Training App',
    title: 'Training App',
    subtitle: 'PXL: FullStack .NET',
    year: 2024,
    tags: ['MAUI', 'ASP.NET', 'C#'],
    cover: '/projects/kwsoft1.png',
    tech: ['.NET 8', 'MAUI', 'ASP.NET Web API', 'EF Core', 'SQLite', 'JWT'],
    description: 'Plan workouts, track progress, ontvang meldingen.',
    story: `
      <section class="space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Omschrijving</h2>
        <p class="text-white/85 leading-relaxed">
          Voor het vak <strong>Fullstack .NET</strong> maakten we een soloproject.
          De frontend is een crossplatform mobile app in <strong>.NET MAUI</strong>, de backend is met <strong>ASP.NET Core Web API</strong> gemaakt.
          Deze app is gemaakt voor leerkrachten en leerlingen, ze kunnen beide inloggen op deze app. 
          Leerkrachten kunnen trainingen (opleidingen) plannen. Leerlingen kunnen zich inschrijven voor deze opleidingen. 
          Leerkrachten kunnen zo ook bijhouden welke leerlingen zijn ingeschreven en kunnen aanduiden als ze daadwerkelijk zijn komen opdagen.
        </p>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Architectuur</h2>
        <p class="text-white/85 leading-relaxed">
          Voordat ik begon met het ontwikkelen van de app, heb ik een <strong>C4-model</strong> gemaakt. Hierdoor kreeg ik een duidelijk beeld van de verschillende componenten en hun interacties.
        </p>

        <!-- Screenshot (normal image, not a phone) -->
        <figure class="mx-auto mt-4 rounded-2xl border border-white/15 bg-white/[0.04] overflow-hidden shadow-2xl max-w-[70rem]">
          <img
            src="/projects/training5.png"
            alt="Training App - overzichtsscherm"
            class="w-full h-auto object-contain"
          />
          <figcaption class="px-4 py-3 text-xs text-white/75">
            C4-model: overzicht van de verschillende componenten en hun interacties.
          </figcaption>
        </figure>

        <p class="text-white/85 leading-relaxed">
          De backend was opgesplitst in verschillende <strong>ASP.NET Core Web API microservices</strong>, zoals de <strong>Identity Service</strong> (Duende IdentityServer) voor authenticatie en autorisatie, 
          de <strong>Training Service</strong> voor het beheren van trainingen en dan ook nog een <strong>HR Service</strong> en <strong>DevOps Service</strong>.
          Alle communicatie tussen de microservices gebeurde asynchroon via <strong>RabbitMQ</strong>.
          Er werd gebruik gemaakt van de <strong>onion architecture</strong> om de verschillende lagen (Api, AppLogic, Domain, Infrastructure) van de applicatie te scheiden en de afhankelijkheden te beheren.
          Ook werd er rekening gehouden met verschillende technische vereisten, zoals een <strong>code coverage van 100%</strong> en het gebruik van
          <strong>DDD elementen</strong> zoals Entity, Value Objects en Ubiquitous Language.
          
        </p>

        <p class="text-white/85 leading-relaxed">
          De frontend werd gebouwd met <strong>.NET MAUI</strong>, waarbij het <strong>MVVM patroon</strong> werd gevolgd om de verschillende lagen van de applicatie te scheiden.
          Ook hier werden er unit tests geschreven en werd gestreefd naar een <strong>code coverage van 100%</strong>. Dependency Injection werd gebruikt om de afhankelijkheden te beheren
          en tussen de ViewModels werd messaging gebruikt.
        </p>


        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>
        <div class="lg:col-span-6">
          <!-- Desktop/tablet: overlapping row -->
          <div class="hidden sm:flex justify-center">
            <figure class="w-[14.5rem] md:w-[15.5rem] rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[-8deg]">
              <img src="/projects/training1.png" alt="Screen 1" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[14.5rem] md:w-[15.5rem] -ml-8 md:-ml-10 rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[-2deg]">
              <img src="/projects/training2.png" alt="Screen 2" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[14.5rem] md:w-[15.5rem] -ml-8 md:-ml-10 rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[2deg]">
              <img src="/projects/training3.png" alt="Screen 3" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[14.5rem] md:w-[15.5rem] -ml-8 md:-ml-10 rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[8deg]">
              <img src="/projects/training4.png" alt="Screen 4" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
          </div>

          <!-- Mobile: compact 2×2 grid -->
          <div class="sm:hidden grid grid-cols-2 gap-3 justify-items-center">
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <img src="/projects/training1.png" alt="Screen 1" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <img src="/projects/training2.png" alt="Screen 2" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <img src="/projects/training3.png" alt="Screen 3" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <img src="/projects/training4.png" alt="Screen 4" class="w-full h-full object-cover aspect-[9/20]" />
            </figure>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
            <h3 class="text-base font-semibold mb-2">Een geslaagd project</h3>
            <p class="text-white/80">Het project is succesvol afgerond met een duidelijke structuur.</p>
          </div>
          <div class="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
            <h3 class="text-base font-semibold mb-2">Goede leerervaring</h3>
            <p class="text-white/80">Veel geleerd over het MVVM patroon en dependency injection.</p>
          </div>
          <div class="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
            <h3 class="text-base font-semibold mb-2">Resultaat</h3>
            <p class="text-white/80">De applicatie is gebruiksvriendelijk en voldoet aan de gestelde eisen.</p>
          </div>
        </div>

      </section>
    `
  },

  {
    slug: 'Shared Expenses App',
    title: 'Shared Expenses App',
    subtitle: 'PXL: Software Engineering',
    year: 2024,
    tags: ['Vue.js', 'ASP.NET', 'Azure'],
    cover: '/projects/shared1.png',
    tech: ['Vue 3', 'Vite', 'Pinia', 'ASP.NET Core', 'EF Core', 'Azure App Service', 'Azure SQL'],
    description: 'Slimme verrekening van groepsuitgaven.',
    story: `
      <section class="space-y-6">

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Context</h2>

        <p class="text-white/85 leading-relaxed">
          <strong>Software Engineering</strong>, een vak waar het draait om het ontwikkelen van software op een gestructureerde en efficiënte manier.
          <strong>Design patterns</strong> en <strong>SOLID principes</strong> stonden hier centraal. 
          Als project kregen we de opdracht om een applicatie te maken voor het bijhouden en afrekenen van gedeelde uitgaven binnen een groep, een <strong>"Shared Expenses App"</strong>.
          Dit project werd uitgevoerd in een team van 4 personen. De nadruk lag hier vooral op het toepassen van deze <strong>Design patterns</strong> en <strong>SOLID principes</strong>.
        </p>

        <p class="text-white/85 leading-relaxed">
          De app moest gebruikers in staat stellen om groepen te creëren, deelnemen aan een groepen en uitgaven toe te voegen aan een groep.
          De technologieën die we gebruikten waren <strong>Vue</strong> met voor de frontend en <strong>ASP.NET Core</strong> voor de backend. 
          Als laatste werd de app gehost op <strong>Microsoft Azure</strong>.
        </p> 

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Design Patterns & SOLID Principes</h2>

        <p class="text-white/85 leading-relaxed">
          Voor de architectuur hebben we eerst de inzet van <strong>design patterns</strong> bepaald. We kozen voor een
          <strong>Factory Method</strong>om de creatie van objecten te
          centraliseren. Dat houdt klassen klein en gericht, in lijn met <strong>SOLID · SRP</strong>
          (Single Responsibility Principle).
        </p>
        <p class="text-white/85 leading-relaxed">
          Daarnaast pasten we het <strong>Strategy pattern</strong> toe om verschillende afrekenalgoritmen 
          als verwisselbare strategieën te kapselen. Nieuwe varianten kunnen zo worden toegevoegd zonder bestaande code aan
          te passen; dit respecteert <strong>SOLID · OCP</strong> (Open/Closed Principle). Clients programmeren tegen een interface, wat
          meteen ook de <strong>DIP</strong> (Dependency Inversion Principle) bevordert.
        </p>


        <div class="h-px w-full bg-white/10"></div>
          
       <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Azure</h2>

      <div class="mt-3 space-y-4">

        <!-- Step 1: Backend CI/CD -->
        <article class="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5 overflow-hidden">
          <!-- tiny glow -->
          <div class="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl"></div>

          <!-- Screenshot (small, integrated) -->
          <figure class="md:absolute md:right-4 md:top-4 md:w-52 md:rotate-[-2deg]">
            <div class="rounded-xl overflow-hidden border border-white/15 shadow-lg bg-white/[0.03]">
              <img src="/projects/shared2.png" alt="Backend pipeline succesvol" class="w-full h-auto object-contain" />
            </div>
            <figcaption class="hidden md:block mt-1 text-[11px] text-white/65">Backend: build • test • deploy ✓</figcaption>
          </figure>

          <!-- Content -->
          <div class="pr-0 md:pr-56">
            <div class="inline-flex items-center gap-2 text-xs text-emerald-300/90">
              <span class="h-5 w-5 grid place-items-center rounded-full border border-emerald-300/40">1</span>
              Backend · App Service
            </div>
            <p class="mt-2 text-[15px] text-white/85 leading-relaxed">
              De <strong>backend</strong> gaat via een Azure DevOps pipeline naar <strong>Azure App Service</strong>.
              Elke push triggert build, tests en automatische deploy—alles in één groene run.
            </p>

            <!-- mobile-only screenshot -->
            <figure class="mt-3 md:hidden">
              <div class="rounded-xl overflow-hidden border border-white/15 shadow-md bg-white/[0.03]">
                <img src="/projects/shared2.png" alt="Backend pipeline succesvol" class="w-full h-auto object-contain" />
              </div>
            </figure>
          </div>
        </article>

        <!-- Step 2: Azure resources -->
        <article class="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5 overflow-hidden">
          <div class="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl"></div>

          <figure class="md:absolute md:right-4 md:top-4 md:w-52 md:rotate-[2deg]">
            <div class="rounded-xl overflow-hidden border border-white/15 shadow-lg bg-white/[0.03]">
              <img src="/projects/shared3.png" alt="Azure resources overzicht" class="w-full h-auto object-contain" />
            </div>
          </figure>

          <div class="pr-0 md:pr-56">
            <div class="inline-flex items-center gap-2 text-xs text-sky-300/90">
              <span class="h-5 w-5 grid place-items-center rounded-full border border-sky-300/40">2</span>
              Resources · Monitoring & Data
            </div>
            <p class="mt-2 text-[15px] text-white/85 leading-relaxed">
              In Azure staat de Web App met <strong>Application Insights</strong> (monitoring),
              een <strong>App Service Plan</strong> voor hosting en een <strong>SQL Database</strong> voor opslag.
            </p>

            <figure class="mt-3 md:hidden">
              <div class="rounded-xl overflow-hidden border border-white/15 shadow-md bg-white/[0.03]">
                <img src="/projects/shared3.png" alt="Azure resources overzicht" class="w-full h-auto object-contain" />
              </div>
            </figure>
          </div>
        </article>

        <!-- Step 3: Frontend CI/CD -->
        <article class="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5 overflow-hidden">
          <div class="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl"></div>

          <figure class="md:absolute md:right-4 md:top-4 md:w-52 md:rotate-[-1deg]">
            <div class="rounded-xl overflow-hidden border border-white/15 shadow-lg bg-white/[0.03]">
              <img src="/projects/shared4.png" alt="Frontend pipeline succesvol" class="w-full h-auto object-contain" />
            </div>
            <figcaption class="hidden md:block mt-1 text-[11px] text-white/65">Static Web App build & deploy ✓</figcaption>
          </figure>

          <div class="pr-0 md:pr-56">
            <div class="inline-flex items-center gap-2 text-xs text-amber-300/90">
              <span class="h-5 w-5 grid place-items-center rounded-full border border-amber-300/40">3</span>
              Frontend · Static Web Apps
            </div>
            <p class="mt-2 text-[15px] text-white/85 leading-relaxed">
              De <strong>frontend</strong> draait als <strong>Azure Static Web App</strong>. Een push naar <code>main</code>
              bouwt en deployt automatisch, zodat nieuwe features meteen live staan.
            </p>

            <figure class="mt-3 md:hidden">
              <div class="rounded-xl overflow-hidden border border-white/15 shadow-md bg-white/[0.03]">
                <img src="/projects/shared4.png" alt="Frontend pipeline succesvol" class="w-full h-auto object-contain" />
              </div>
            </figure>
          </div>
        </article>

      </div>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>

        <p class="text-white/85 leading-relaxed">
          Het resultaat is een goed gestructureerde applicatie die voldoet aan de gestelde eisen.
          De app is gebruiksvriendelijk en ziet er professioneel uit. We hebben veel geleerd over het toepassen van <strong>design patterns</strong> en <strong>SOLID principes</strong> in een project.
          <strong>Azure</strong> bood een betrouwbare en schaalbare omgeving voor onze applicatie, met handige tools voor monitoring en beheer.
        </p>

        <!-- 4 phone screenshots (responsive) -->
        <div class="mt-4">
          <!-- Desktop/tablet: overlapping tilted row -->
          <div class="hidden sm:flex justify-center items-end">
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] rounded-[1rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[-8deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/shared5.png" alt="App screen 1" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] -ml-8 md:-ml-10 lg:-ml-12 rounded-[1rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[-2deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/shared6.png" alt="App screen 2" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] -ml-8 md:-ml-10 lg:-ml-12 rounded-[1rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[2deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/shared7.png" alt="App screen 3" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] -ml-8 md:-ml-10 lg:-ml-12 rounded-[1rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[8deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/shared8.png" alt="App screen 4" class="w-full h-full object-cover" />
              </div>
            </figure>
          </div>

          <!-- Mobile: compact 2×2 grid -->
          <div class="sm:hidden grid grid-cols-2 gap-3 justify-items-center">
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/shared5.png" alt="App screen 1" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/shared6.png" alt="App screen 2" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/shared7.png" alt="App screen 3" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[9.5rem] rounded-[1.75rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/shared8.png" alt="App screen 4" class="w-full h-full object-cover" />
              </div>
            </figure>
          </div>
        </div>





         
      </section>
    `
  },

  {
    slug: 'Connect 4',
    title: 'Connect 4',
    subtitle: 'PXL: Project',
    year: 2022,
    tags: ['ASP.NET', 'HTML, CSS, JavaScript'],
    cover: '/projects/connect1.png',
    tech: ['ASP.NET', 'Razor Pages', 'JavaScript', 'SignalR (optioneel)', 'CSS'],
    description: 'Klassieke game met AI en local multiplayer.',
    story: `
      <section class="space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">4 op een rij!</h2>

        <p class="text-white/85 leading-relaxed">
          Als eerste grote project in mijn opleiding <strong>"Toegepaste Informatica"</strong> kregen we de opdracht om een 4 op-een-rij game te maken.
          Dit mochten we doen in groepjes van 4-5 personen. Spelers kunnen een account maken door te registreren en in te loggen.  
          2 spelers kunnen tegen elkaar spelen op dezelfde computer (verschillende tabbladen).
        </p>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Technologieën</h2>

        <p class="text-white/85 leading-relaxed">
          De backend werd gebouwd met <strong>ASP.NET</strong>, hierbij werd de <strong>onion architecture</strong> gevolgd. 
          De frontend werd volledig gemaakt met <strong>HTML</strong>, <strong>CSS</strong> en <strong>JavaScript</strong>. 
        </p>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>
        <p class="text-white/85 leading-relaxed">
          Het resultaat is een prachtig project met een login systeem, wachtkamer, lobby en natuurlijk 4 op-een-rij!
          Een gebruiker kan een account aanmaken, inloggen, een spel starten en tegen een andere speler spelen.
          Dit was mijn eerste grote project en ik ben erg trots op het resultaat.
          We hebben veel geleerd over het werken in een team, het gebruik van Git en het ontwikkelen van een webapplicatie.
        </p>

        <div class="grid lg:grid-cols-12 gap-6 items-start">

          <div class="lg:col-span-7 space-y-6">
            <!-- Top-left hero -->
            <figure class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div class="aspect-[16/10]">
                <img src="/projects/connect4.png" alt="Spelbord & gameplay"
                    class="w-full h-full object-cover" />
              </div>
              <figcaption class="absolute inset-x-0 bottom-0 px-5 py-4 text-sm text-white/85 bg-gradient-to-t from-black/60 to-transparent">
                Lobby — klaar voor een potje 4 op-een-rij?
              </figcaption>
            </figure>

            <!-- Bottom-left (fills the open space) -->
            <figure class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-[-0.75deg]">
              <div class="aspect-[16/9]">
                <img src="/projects/connect5.png" alt="Login / extra scherm"
                    class="w-full h-full object-cover" />
              </div>
              <figcaption class="absolute inset-x-0 bottom-0 px-5 py-3 text-sm text-white/85 bg-gradient-to-t from-black/60 to-transparent">
                4 op-een-rij — wie wint, wie verliest?
              </figcaption>
            </figure>
          </div>

          <!-- RIGHT: two staggered cards -->
          <div class="lg:col-span-5 space-y-6">
            <figure class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-[-1.5deg]">
              <div class="aspect-[16/9]">
                <img src="/projects/connect2.png" alt="Lobby & match setup"
                    class="w-full h-full object-cover" />
              </div>
              <figcaption class="absolute inset-x-0 bottom-0 px-5 py-3 text-sm text-white/85 bg-gradient-to-t from-black/60 to-transparent">
                Login - Log snel in voor 4 op-een-rij!
              </figcaption>
            </figure>

            <figure class="relative -mt-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-[1.5deg]">
              <div class="aspect-[22/24]">
                <img src="/projects/connect3.png" alt="Scorebord & winnende lijn"
                    class="w-full h-full object-cover" />
              </div>
              <figcaption class="absolute inset-x-0 bottom-0 px-5 py-3 text-sm text-white/85 bg-gradient-to-t from-black/60 to-transparent">
                Wachtkamer - Kies je instellingen en zoeken maar!
              </figcaption>
            </figure>
          </div>
        </div>


      </section>
    `

  },

  {
    slug: 'Football PWA',
    title: 'Football PWA',
    subtitle: 'PXL: Mobile Development',
    year: 2024,
    tags: ['PWA', 'External API', 'Angular'],
    cover: '/projects/football1.png',
    tech: ['Angular', 'PWA', 'API-FOOTBALL', 'RxJS', 'Tailwind CSS', 'IndexedDB'],
    description: 'Standen, resultaten en fixtures — ook offline.',
    story: `
      <section class="space-y-6">
        <div class="grid lg:grid-cols-12 gap-6 items-start">

          <div class="lg:col-span-7 space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight">The Beautiful Game</h2>
            <p class="text-white/85 leading-relaxed">
              Mobile Development, een vak in het laatste jaar waar we een eigen project mochten kiezen in een eigen taal, met de voorwaarde dat het een PWA moest zijn. 
              Ik en een vriend kozen voor een voetbal PWA uit onze liefde voor voetbal. Via deze app kunnen voetballiefhebbers 
              de laatste standen, resultaten en fixtures van hun favoriete competities/teams volgen.
            </p>
          </div>

          <figure class="lg:col-span-5">
            <div class="mx-auto w-full max-w-[18rem] rounded-2xl overflow-hidden  ">
              <img
                src="/projects/football5.png"
                alt="The Beautiful Game – PWA scherm"
                class="w-full h-auto object-contain"
              />
            </div>
          </figure>

        </div>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Aanpak</h2>

        <p class="text-white/85 leading-relaxed">
          Als framework kozen we voor <strong>Angular</strong>, we kozen dit omdat we hier nog weinig ervaring mee hadden. Hierdoor konden we allebei iets nieuws bijleren. 
          Ook is Angular een goed framework voor het maken van een <strong>PWA</strong>. Angular is modulair, heeft een goede structuur en biedt veel functionaliteiten out-of-the-box.
          Voor de styling gebruikten we <strong>Tailwind CSS</strong>.
          We begonnen met het maken van wireframes zodat we een duidelijk beeld hadden van de app. 
        </p>

        <p class="text-white/85 leading-relaxed">
            Voor het ophalen van de data gebruikten we een externe API, namelijk <strong>API-FOOTBALL</strong>. Deze API biedt uitgebreide en actuele informatie over voetbalcompetities, 
            teams, spelers en wedstrijden wereldwijd.
        </p>   

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>

        <p class="text-white/85 leading-relaxed">
            Het resultaat is een gebruiksvriendelijke PWA waarmee voetballiefhebbers de laatste standen, resultaten en fixtures van hun favoriete competities/teams kunnen volgen.
            De app is snel en responsief.
            We hebben veel geleerd over het werken met Angular en het integreren van externe API's.
            Het maken van een project naar eigen keuze was een geweldige ervaring, we konden onze creativiteit en passie voor voetbal combineren met onze technische vaardigheden.
            We zijn zeer tevreden met het eindresultaat en kijken terug op een geslaagd project!
        </p>   

        <div class="mt-4">
          <!-- Desktop/tablet: overlapping row -->
          <div class="hidden sm:flex justify-center items-end">
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[-6deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/football2.png" alt="Team/competitie overzicht" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] -ml-8 md:-ml-10 lg:-ml-12 rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[0deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/football3.png" alt="Wedstrijddetails" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[12.5rem] md:w-[14rem] lg:w-[15rem] -ml-8 md:-ml-10 lg:-ml-12 rounded-[2rem] border border-white/15 bg-black overflow-hidden shadow-2xl rotate-[6deg]">
              <div class="aspect-[9/20]">
                <img src="/projects/football4.png" alt="Standen & vorm" class="w-full h-full object-cover" />
              </div>
            </figure>
          </div>

          <!-- Mobile: 3-in-a-row grid -->
          <div class="sm:hidden grid grid-cols-3 gap-3 justify-items-center">
            <figure class="w-[7.5rem] rounded-[1.5rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/football2.png" alt="Team/competitie overzicht" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[7.5rem] rounded-[1.5rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/football3.png" alt="Wedstrijddetails" class="w-full h-full object-cover" />
              </div>
            </figure>
            <figure class="w-[7.5rem] rounded-[1.5rem] border border-white/15 bg-black overflow-hidden shadow-xl">
              <div class="aspect-[9/20]">
                <img src="/projects/football4.png" alt="Standen & vorm" class="w-full h-full object-cover" />
              </div>
            </figure>
          </div>

          <p class="mt-3 text-center text-xs text-white/70">
            Overzicht, standen en eindscores.
          </p>
        </div>


      </section>
    `
  },

  {
    slug: 'Newsblog',
    title: 'Newsblog',
    subtitle: 'PXL: Fullstack Java',
    year: 2024,
    tags: ['Java', 'Angular', 'Spring Boot'],
    cover: '/projects/newsblog1.png',
    tech: ['Spring Boot', 'Hibernate', 'PostgreSQL', 'Angular', 'JWT', 'REST'],
    description: 'Role-based redactieworkflow, van draft tot publicatie.',
    story: `
      <section class="space-y-6">
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Omschrijving</h2>

        <p class="text-white/85 leading-relaxed">
          Voor het vak Fullstack Java maakte we een soloproject, een nieuwsblog website. 
          Via deze website konden gebruikers artikels lezen en erop reageren, redacteurs konden artikels schrijven en editors konden deze goedkeuren of afkeuren.

        </p>

        <div class="h-px w-full bg-white/10"></div>
        
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Architectuur</h2>

        <figure class="relative rounded-3xl overflow-hidden border border-white/10">
          <img src="/projects/newsblog5.png" alt="Editor" class="w-full object-cover aspect-[16/8]" />
          <figcaption class="absolute bottom-4 left-4 text-xs px-2 py-1 rounded bg-black/60 text-white/85">
            Architectuur: Angular frontend + Spring Boot microservices.
          </figcaption>
        </figure>

        <p class="text-white/85 leading-relaxed">
          De frontend werd gebouwd met <strong>Angular 18</strong>. Hierbij was er duidelijke opsplitsing tussen de verschillende componenten en services.
          Er werd gebruik gemaakt van <strong>RxJS</strong> voor state management en asynchrone data streams.
          Ook werd <strong>TailwindCSS</strong> gebruikt voor de styling en werd de frontend <strong>Docker</strong> ready opgebouwd.
        </p>

        <p class="text-white/85 leading-relaxed">
          De backend werd opgesplitst in verschillende <strong>microservices</strong> met behulp van <strong>Spring Cloud</strong>.
          Zo was er een <strong>GatewayService</strong> die alle inkomende requests afhandelde en doorstuurde naar de juiste microservice.
          De <strong>ConfigService</strong> beheerde alle configuratie-instellingen voor de verschillende microservices.
          De <strong>DiscoveryService</strong> hield bij welke microservices beschikbaar waren en waar ze zich bevonden.
          Communicatie tussen de microservices gebeurde asynchroon via <strong>RabbitMQ</strong> en synchroon via <strong>Open Feign</strong>.        
        </p>

        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Codevoorbeelden: frontend</h2>

        <h3 class="text-xl font-semibold tracking-tight">Mappenstructuur</h3>
        <div class="flex items-start gap-6">
          <figure class="relative rounded-2xl overflow-hidden border border-white/10 w-64 shrink-0">
            <img src="/projects/newsblog6.png" alt="Frontend mappenstructuur" class="w-full object-cover" />
          </figure>

          <p class="text-white/85 leading-relaxed">
            Zoals al was aangehaald is de frontend gemaakt in <strong>Angular 18</strong> met een duidelijke component- en servicestructuur.
            In de screenshot ziet u de mappenstructuur van de frontend.

            <br><br>
            In de map <strong>core</strong> bevinden zich alle herbruikbare componenten. De submappen zoals 
            <strong>comment</strong>, <strong>post</strong> en <strong>review</strong> zijn verder onderverdeeld tussen 
            verschillende componenten die elk een eigen verantwoordelijkheid hebben. Zo bevat de map 
            <em>comment</em> onder andere de componenten voor het toevoegen van comments, het weergeven van een lijst 
            van comments en een individueel comment-item. Dit zorgt ervoor dat elke component klein, overzichtelijk 
            en goed testbaar blijft.
            <br><br>

            Verder bevat de applicatie ook een <strong>guards</strong>-map met verschillende routeguards die controleren 
            of een gebruiker toegang heeft tot bepaalde delen van de applicatie. Deze guards zorgen ervoor dat niet-ingelogde 
            gebruikers of gebruikers zonder de juiste rol bepaalde functionaliteiten niet kunnen bereiken.
            <br><br>

            In de map <strong>shared</strong> bevinden zich alle gedeelde modellen en services die door meerdere onderdelen van de 
            applicatie worden gebruikt. De submap <em>services</em> bevat bijvoorbeeld de verschillende services voor het 
            ophalen en manipuleren van data via de backend API.
            <br><br>

            Alles samen vormt deze structuur een duidelijke en schaalbare opbouw, waarbij elke module logisch gegroepeerd is 
            en de codebase eenvoudig uitbreidbaar en onderhoudbaar blijft.
          </p>

        </div>
        </br></br>


        <h3 class="text-xl font-semibold tracking-tight">Services</h3>
        <p class="text-white/85 leading-relaxed">
          In de map <strong>services</strong> bevinden zich alle services die communiceren met de backend via HTTP requests. 
          Elke service is verantwoordelijk voor een specifiek domein, zoals <strong>AuthService</strong>, <strong>CommentService</strong> en <strong>PostService</strong>.
          In de screenshot ziet u de <strong>CommentService</strong>. Deze service bevat methoden om comments op te halen, toe te voegen, bij te werken en te verwijderen via HTTP requests naar de backend API.
          In deze methoden wordt gebruik gemaakt van <strong>Observables</strong> om asynchrone data streams te beheren. En pipe ik de responses om de data te transformeren indien nodig.
          
        </p>

        <figure class="relative rounded-2xl overflow-hidden border border-white/10 max-w-3xl mx-auto">
          <img src="/projects/newsblog8.png" alt="CommentService code" class="w-full object-cover" />
        </figure>
        </br></br>


        <h3 class="text-xl font-semibold tracking-tight">Routeguards</h3>
        <p class="text-white/85 leading-relaxed">
          Er werd ook gebruik gemaakt van <strong>Routeguards</strong> om bijvoorbeeld te controleren of een gebruiker de juiste rol had om bepaalde pagina's te bezoeken. 
          In dit voorbeeld ziet u een <strong>IsRedactorGuard</strong> die controleert of de gebruiker een Redactor is voordat hij toegang krijgt tot bepaalde pagina's.
        </p>
        <figure class="relative rounded-2xl overflow-hidden border border-white/10 max-w-3xl mx-auto">
          <img src="/projects/newsblog7.png" alt="IsRedactorGuard" class="w-full object-cover" />
        </figure>

        <p class="text-white/85 leading-relaxed">
          Deze routeguard wordt toegevoegd aan de routes in de <strong>app.routes.ts</strong>. 
        </p>
        <figure class="relative rounded-2xl overflow-hidden border border-white/10 max-w-3xl mx-auto">
          <img src="/projects/newsblog9.png" alt="Routes configuratie" class="w-full object-cover" />
        </figure>





        <div class="h-px w-full bg-white/10"></div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Resultaat</h2>

        <p class="text-white/85 leading-relaxed">
          Het platform levert een <strong>duidelijke redactieworkflow</strong>: redacteurs schrijven en dienen in, editors keuren goed of geven feedback, 
          en lezers krijgen een snelle, overzichtelijke leeservaring met categorieën en zoekfilters.
          Opnieuw een geslaagd project dat me veel leerde over fullstack ontwikkeling met Java en Angular!
        </p>



        <!-- Resultaat images: BIG, stacked, tilted, snug overlap -->
        <!-- Resultaat images: bigger, thicker white border, stacked & snug -->
        <div class="mx-auto w-full max-w-[140rem]">
          <!-- 1 -->
          <figure class="rounded-2xl mb-20 overflow-hidden border-2 border-white shadow-2xl rotate-[-2deg]">
            <div class="w-full aspect-[16/5] xl:aspect-[16/4.5]">
              <img src="/projects/newsblog2.png" alt="Reader view / artikelpagina" class="w-full h-full object-cover" />
            </div>
          </figure>

          <!-- 2 (overlaps the one above) -->
          <figure class="rounded-2xl mb-20 overflow-hidden border-2 border-white shadow-2xl rotate-[0deg] -mt-14 sm:-mt-20">
            <div class="w-full aspect-[16/5] xl:aspect-[16/4.5]">
              <img src="/projects/newsblog3.png" alt="Moderatie / queue" class="w-full h-full object-cover" />
            </div>
          </figure>

          <!-- 3 (overlaps the one above) -->
          <figure class="rounded-2xl overflow-hidden border-2 border-white shadow-2xl rotate-[2deg] -mt-14 sm:-mt-20">
            <div class="w-full aspect-[16/5] xl:aspect-[16/4.5]">
              <img src="/projects/newsblog4.png" alt="Dashboard / overzicht" class="w-full h-full object-cover" />
            </div>
          </figure>
        </div>
      </section>
    `
  },
]
