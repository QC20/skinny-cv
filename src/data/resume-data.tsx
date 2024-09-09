import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Publications } from "@/apollo/type-defs";

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "JKJ",
  location: "Copenhagen, Denmark, CET",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Detaljeorienteret UX researcher dedikeret til at skabe produkter af høj kvalitet",
  summary:
    "Som UX Researcher er jeg specialiseret i at tage digitale produkter fra idé til lancering gennem en dyb forståelse af brugerbehov og adfærd. Jeg trives med at samarbejde med tværfaglige teams og skabe miljøer, hvor alle kan yde deres bedste. I mit arbejde fokuserer jeg på at kombinere kvalitative og kvantitative metoder for at skabe indsigtsfulde løsninger, der forbedrer brugeroplevelsen. Jeg har over 8 års erfaring med user research og produktudvikling, herunder samarbejde med internationale teams.",
  avatarUrl: "https://github.com/QC20/skinny-cv/blob/main/src/images/png/Spot-corrected-fladere%20farver-min.png",
  personalWebsiteUrl: "https://jonaskjeldmand.vercel.app/",
  contact: {
    email: "jkj@di.ku.dk",
    tel: "+45 20479628",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/QC20/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonaskjeldmand/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Københavns Universitet",
      degree: "Cand.Scient. IT & Kognition",
      start: "2019",
      end: "2022",
    },
    {
      school: "Københavns Universitet",
      degree: "B.A. Kommunikation & IT",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Skatteankestyrelsen",
      link: "https://skatteankestyrelsen.dk/",
      badges: ["On-site"],
      title: "IT projektleder",
      logo: ConsultlyLogo,
      start: "dec 2022",
      end: null,
      description:
        "Arbejder tæt sammen med tværfaglige teams for at udvikle brugercentrerede digitale løsninger. Jeg var ansvarlig for at identificere brugernes behov gennem løbende dialog med interessenter og omsætte dem til effektive teknologiske løsninger. Med fokus på at forbedre brugeroplevelsen bidrog jeg til at optimere og automatisere processer, hvilket sikrede en mere intuitiv og effektiv digital brugerrejse.",
    },
    {
      company: "Odeno",
      link: "https://www.linkedin.com/company/odeno/",
      badges: ["On-site"],
      title: "UX Researcher & Developer",
      logo: ParabolLogo,
      start: "jun 2022",
      end: "dec 2022",
      description:
        "Ledte agile udviklingsprocesser og gennemførte usability tests for at optimere brugeroplevelsen. Vægtede og prioriterede produktmål i samarbejde med tværfaglige teams, og anvendte data og brugerindsigt til løbende forbedringer af platformen.",
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["On-site"],
      title: "HCI MA Researcher",
      logo: ClevertechLogo,
      start: "dec 2020",
      end: "jun 2022",
      description:
        "Gennemførte brugerundersøgelser og analyserede data for at forstå brugerbehov og adfærd. Anvendte indsigt fra research til at informere designbeslutninger og forbedre brugeroplevelsen i samarbejde med tværfaglige teams.",
    },
    {
      company: "Yngre Læger",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: [],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "jan 2017",
      end: "nov 2020",
      description:
        "Designede og optimerede brugeroplevelser ved at analysere brugerfeedback og gennemføre usability-tests. Arbejdede tæt sammen med tværfaglige teams for at implementere brugercentrerede løsninger og forbedre digitale produkter baseret på brugerindsigt.",
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: [],
      title: "HCI BA Researcher",
      logo: NSNLogo,
      start: "may 2018",
      end: "nov 2012",
      description: "Forfattede og medforfattede to artikler publiceret i den anerkendte CHI-konference, bidragende til førende forskning inden for brugercentreret design menneske-computer interaktion.",
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: [],
      title: "Student Video \& Graphic Designer",
      logo: NSNLogo,
      start: "jan 2015",
      end: "aug 2017",
      description: "udvikle wireframes og prototyper, forbedret design gennem evalueringer, og skabt videoindhold til studerende.",
    },
  ],

    Publications:[
      {
        title: "Exploring Audio Icons for Content-Based Navigation in Voice User Interfaces",
        link: "https://doi.org/10.1145/3571884.3604302",
        authors: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
        year: "ACM CUI '23",
      }
  ],

  skills: [
    "Designtænkning",
    "Prototyping",
    "Brugerfeedback",
    "Agil og iterativ Metodik",
    "Kvalitative og kvantitative forskningsmetoder",
    "Dataanslyse",
    "Designværktøjer",
    "Tværfagligt Samarbejde",
    "Kommunikation",
    "Figma",
    "Sketch",
    "Adobe Suite",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
