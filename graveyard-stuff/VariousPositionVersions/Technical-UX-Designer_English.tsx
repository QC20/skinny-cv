import { Publikationer, FrivilligtArbejde, Referencer } from "@/apollo/type-defs";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo, ClevertechLogo, JojoMobileLogo, NSNLogo } from "@/images/logos";
import { XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "Indlæser billede ...",
  location: "København, Danmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Detalie-orienteret UX developer med 5+ års erfaring, dedikeret til at skabe digitale brugeroplevelser af høj kvalitet",
  summary:
    "Som UX-specialist tager jeg digitale produkter fra koncept til lancering gennem brugeranalyse og tværfagligt samarbejde. Jeg kombinerer kvalitative og kvantitative data for at skabe brugercentrerede løsninger med målbar effekt. Med en stærk teknisk baggrund dækker jeg hele UX-livscyklussen, fra research og wireframing til prototyping og implementering. Jeg optimerer designsystemer og brugerrejser på tværs af platforme for at skabe skræddersyede oplevelser, der afbalancerer brugerens krav, forretningsmål og tekniske muligheder.",
  avatarUrl: "https://github.com/user-attachments/assets/3e386505-d55a-46f7-ac1a-fe8a42183225",
  personalWebsiteUrl: "https://jonaskjeldmand.vercel.app/about",
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
        name: "Min Hjemmeside",
        url: "https://jonaskjeldmand.vercel.app/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Cand.it. IT & Kognition",
      degree: "Københavns Universitet",
      description: "Specialiseret i at kombinere avanceret teknologi med dybdegående indsigt i menneskelig kognition, udvikling af innovative teknologier der efterligner menneskelige kognitive processer inden for sprog, visuel genkendelse og kunstig intelligens.",
      start: "2020",
      end: "2022",
      skills: ["Kognitionsvidenskab", "Kunstig Intelligens", "Sprogteknologi", "Interaktionsdesign"],
    },
    {
      school: "BA. Kommunikation & IT",
      degree: "Københavns Universitet",
      description: "Opnåede et solidt fundament i digital innovation og brugercentreret design, kombination af tekniske færdigheder med en dyb forståelse af, hvordan IT påvirker brugere og organisationer.",
      start: "2014",
      end: "2018",
      skills: ["Brugercentreret Design", "Konceptudvikling", "Empiriske Metoder"],
    },
  ],
  
  Publikationer: [
    {
      title: "Udforskning af Lydikoner til Indholdsbaseret Navigation i Stemmebrugergrænseflader",
      author: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
      start: "2023",
      sig: "Klik for at se artiklen - udgivet i ACM CUI",
      link: "https://doi.org/10.1145/3571884.3604302",
    },
    {
      title: "Ind i Skandinavien: Når Online Faderskab Afspejler Samfundsmæssige Infrastrukturer",
      author: "Jonas Kjeldmand Jensen, Tawfiq Ammari & Pernille Bjørn",
      start: "2019",
      sig: "Klik for at se artiklen - udgivet i ACM GROUP",
      link: "https://doi.org/10.1145/3361112",
    },
    {
      title: "Barrierer for Slutbruger-designere af Augmenteret Fabrikation",
      author: "Chandan Mahapatra, Jonas Kjeldmand Jensen, Michael McQuaid & Daniel Ashbrook",
      start: "2018",
      sig: "Klik for at se artiklen - udgivet i ACM CHI",
      link: "https://doi.org/10.1145/3290605.3300613",
    }
  ],

  work: [
    {
      company: "Skatteankestyrelsen",
      link: "https://skatteankestyrelsen.dk/",
      badges: ["Fuldtid"],
      title: "Brugercentreret Digital Udvikler",
      logo: ConsultlyLogo,
      start: "Dec 2022",
      end: null,
      description:
        "Ansvarlig for at identificere brugerbehov gennem interessentdialog og omsætte dem til effektive digitale løsninger. Som udvikler designer og implementerer jeg brugercentrerede systemer, der forbedrer oplevelser, optimerer processer og driver automatisering inden for komplekse offentlige IT-infrastrukturer.",
      skills: ["Interessenthåndtering", "Informationsarkitektur", "Brugercentreret Design", "Integrationer", "Procesoptimering"],
    },
    {
      company: "Odeno",
      link: "https://www.linkedin.com/company/odeno/",
      badges: ["Fuldtid", "Kontrakt"],
      title: "UX Researcher & Frontend Udvikler",
      logo: ParabolLogo,
      start: "Jun 2022",
      end: "Dec 2022",
      description:
        "Ledte agile udviklingsprocesser og udførte brugervenligheds-tests for at optimere brugeroplevelsen. Vurderede og prioriterede produktmål i samarbejde med forskellige interessenter og anvendte data og brugerindsigter til kontinuerlige platformforbedringer.",
      skills: ["Produktoptimering", "Brugervenligheds-testning", "A/B-testning", "Webudvikling", "Agil UX", "Figma"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Deltid"],
      title: "HCI MA Forskningsassistent",
      logo: ClevertechLogo,
      start: "Dec 2020",
      end: "Jun 2022",
      description:
        "Udførte brugerresearch og analyserede data for at forstå brugerbehov og -adfærd. Anvendte indsigter fra forskning til at informere designbeslutninger og optimere interaktive systemer i akademiske tværfaglige samarbejder.",
      skills: ["Interaktionsdesign", "Produktdiscovery", "Co-Design", "Publikationer", "Kvalitative Metoder"],
    },
    {
      company: "Lægeforeningen (Yngre Læger)",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: ["Fuldtid"],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "Nov 2018",
      end: "Nov 2020",
      description:
        "Designede og optimerede brugeroplevelser gennem analyse af feedback og udførelse af brugervenligheds-tests. Samarbejdede med forskellige faggrupper om at implementere brugercentrerede løsninger og forbedre digitale produkter.",
      skills: ["Tværfagligt Samarbejde", "Produktudvikling", "Designsystemer", "Webudvikling"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Fuldtid"],
      title: "HCI BA Forskningsassistent",
      logo: NSNLogo,
      start: "Maj 2018",
      end: "Nov 2018",
      description: "Forfatter og medforfatter til to artikler udgivet på den anerkendte CHI-konference, bidrog til førende forskning inden for brugercentreret design og menneske-computer interaktion.",
      skills: ["Akademisk Forskning", "Dataanalyse og Evaluering", "Prototyping", "Brugerstudier"],
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: ["Deltid"],
      title: "Studerende Video & Grafisk Designer",
      logo: NSNLogo,
      start: "Jan 2015",
      end: "Aug 2017",
      description: "Assisterede med wireframes og prototyper, udførte design reviews og producerede videoer til studerende.",
      skills: ["Wireframing", "Prototyping", "Multimedieproduktion", "Design Thinking"],
    },
  ],

  skills: [
    "Design Thinking",
    "Agil UX",
    "Brugercentreret Design",
    "Prototyping",
    "Interaktionsdesign",
    "Brugerfeedback",
    "Empati",
    "Dataanalyse",
    "Produktudvikling",
    "Figma",
    "Adobe Suite",
    "Webudvikling (CSS/HTML/JS)",
    "Brugerresearch",
    "Co-Design",
    "Brugerrejser",
    "Product discovery",
    "Informationsarkitektur",
    "Forretningsanalyse",
    "Programmering",
    "Konceptudvikling",
    "Service Design",
    "Tværfagligt Samarbejde"
  ],

  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor og Vice Head of Department for Research, Københavns Universitet",
      kontakt: "Kontaktoplysninger udleveres på forespørgsel"
    },
    {
      name: "Bertin Guldborg Hansen",
      company: "Medstifter & CTO, Odeno A/S",
      kontakt: "Kontaktoplysninger udleveres på forespørgsel"
    },
  ],

  FrivilligtArbejde: [
    {
      name: "Aktivt medlem af hackersamfundet Labitat",
      company: "Deltager i udviklingen af tech-projekter og innovation, og bidrager til workshops og teknologiske events i samfundet.",
      start: "Nuværende",
    },
    {
      name: "Frivillig instruktør hos Coding Pirates",
      company: "Hjalp børn med at lære programmering med sensorer, Arduino og C++.",
      start: "2022",
    },
    {
      name: "Eventarrangør & vært på Byens Radio (lokal pirat FM-radiostation)",
      company: "Arrangerede events og var DJ for radioprogrammer med over 5000 lokale FM-lyttere.",
      start: "2017",
    },
  ],

  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Udvikler",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Den agile møde-co-pilot, der leverer bedre møder med mindre indsats",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;