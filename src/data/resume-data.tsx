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
import { Publikationer, Referencer } from "@/apollo/type-defs";
import { School } from "lucide-react";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "Loading image ...",
  location: "Copenhagen, Denmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Detaljeorienteret UX researcher og produktudvikler dedikeret til at skabe produkter af høj kvalitet",
  summary:
    "Som UX Researcher er jeg specialiseret i at tage digitale produkter fra idé til lancering gennem en dyb forståelse af brugerbehov og adfærd. Jeg trives i samarbejdet og overlappet med andre faggrupper, hvor alle kan yde deres bedste. I mit arbejde fokuserer jeg på at kombinere kvalitative og kvantitative metoder for at skabe brugercentrerede løsninger, der skaber værdi for både brugere og virksomhed.",
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
        name: "X",
        url: "https://jonaskjeldmand.vercel.app/about",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Cand.Scient. IT & Kognition",
      degree: "Københavns Universitet",
      description: "Specialiseret i at kombinere avanceret teknologi med dyb indsigt i menneskelig kognition, med udvikling af innovative teknologier, der efterligner menneskets kognitive processer inden for sprog, visuel genkendelse og kunstig intelligens.",
      start: "2019",
      end: "2022",
      skills: ["Kognitiv Videnskab", "Kunstig Intelligens", "Sprogteknologi", "Interaktionsdesign"],
    },
    {
      school: "B.A. Kommunikation & IT",
      degree: "Københavns Universitet",
      description: "Opnåede et solidt fundament inden for digital innovation og brugercentreret design, der kombinerer tekniske færdigheder med en dyb forståelse af, hvordan IT påvirker brugere og organisationer.",
      start: "2014",
      end: "2018",
      skills: ["Brugercentreret design", "Konceptudvikling", "Emperiske metoder"],
    },
  ],
  
  Publikationer: [
    {
      title: "Exploring Audio Icons for Content-Based Navigation in Voice User Interfaces",
      author: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
      start: "2023",
      sig: "Klik for at se artiklen - publiseret i ACM CUI",
      link: "https://doi.org/10.1145/3571884.3604302",

    },
    {
      title: "Into Scandinavia: When Online Fatherhood Reflects Societal Infrastructures",
      author: "Jonas Kjeldmand Jensen, Tawfiq Ammari & Pernille Bjørn",
      start: "2019",
      sig: "Klik for at se artiklen - publiseret i ACM GROUP",
      link: "https://doi.org/10.1145/3361112",

    },
    {
      title: "Barriers to End-User Designers of Augmented Fabrication",
      author: "Chandan Mahapatra, Jonas Kjeldmand Jensen, Michael McQuaid & Daniel Ashbrook",
      start: "2018",
      sig: "Klik for at se artiklen - publiseret i ACM CHI",
      link: "https://doi.org/10.1145/3290605.3300613",

    }
  ],


  work: [
    {
      company: "Skatteankestyrelsen",
      link: "https://skatteankestyrelsen.dk/",
      badges: ["On-site"],
      title: "Brugercentreret Digital Udvikler",
      logo: ConsultlyLogo,
      start: "dec 2022",
      end: null,
      description:
        "Jeg er ansvarlig for at identificere brugernes behov gennem løbende dialog med interessenter og omsætte dem til effektive digitale løsninger. Med fokus på at forbedre brugeroplevelsen bidrager jeg til at optimere og automatisere processer.",
      skills: ["Stakeholder Management", "Brugercentreret design", "Integrationer", "Procesoptimering"],
      },
    {
      company: "Odeno",
      link: "https://www.linkedin.com/company/odeno/",
      badges: ["On-site"],
      title: "UX Researcher & Frontend Udvikler",
      logo: ParabolLogo,
      start: "jun 2022",
      end: "dec 2022",
      description:
        "Ledte agile udviklingsprocesser og gennemførte usability tests for at optimere brugeroplevelsen. Vægtede og prioriterede produktmål i samarbejde med forskellige stakeholders, og anvendte data og brugerindsigt til løbende forbedringer af platformen.",
      skills: ["Produktoptimering", "Usability testing", "Web Development"],
      },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["On-site"],
      title: "HCI MA Forskningsassistent",
      logo: ClevertechLogo,
      start: "dec 2020",
      end: "jun 2022",
      description:
        "Gennemførte brugerundersøgelser og analyserede data for at forstå brugerbehov og adfærd. Anvendte indsigt fra research til at informere designbeslutninger og optimere interaktive systemer i akademisk interdisciplinære samarbejder.",
      skills: ["Interaktionsdesign", "Product Discovery", "Co-Design", "Publikationer"],
      },
    {
      company: "Yngre Læger",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: ["On-site"],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "nov 2018",
      end: "nov 2020",
      description:
        "Designede og optimerede brugeroplevelser ved at analysere feedback og gennemføre usability-tests, samarbejdede med forskellige faggrupper for at implementere brugercentrerede løsninger og forbedre digitale produkter.",
      skills: ["Tværfagligt samarbejde", "Produktudvikling", "Designsystemer"],
      },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["On-site"],
      title: "HCI BA Forskningsassistent",
      logo: NSNLogo,
      start: "may 2018",
      end: "nov 2018",
      description: "Forfattede og medforfattede to artikler publiceret i den anerkendte CHI-konference, bidragende til førende forskning inden for brugercentreret design menneske-computer interaktion.",
      skills: ["Akademisk Forskning", "Dataanalyse og Evaluering", "Prototyping"],
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: ["On-site"],
      title: "Student Video \& Graphic Designer",
      logo: NSNLogo,
      start: "jan 2015",
      end: "aug 2017",
      description: "Assisterede med wireframes og prototyper, gennemførte designanmeldelser, og filmede videoer til studerende.",
      skills: ["Wireframing", "Prototyping", "Multimedieproduktion"],
    },
  ],



  skills: [
    "Designtænkning",
    "Brugercentreret Design",
    "Prototyping",
    "Interaktionsdesign",
    "Brugerfeedback",
    "Empati",
    "Agil og iterativ Metodik",
    "Kvalitative og kvantitative forskningsmetoder",
    "Dataanslyse",
    "Produktudvikling",
    "Designværktøjer",
    "Tværfagligt Samarbejde",
    "Kommunikation",
    "Figma",
    "Sketch",
    "Adobe Suite",
    "Web Development",
    "User Research",
    "Co-Design",
    "Usability Testing",
    "Brugerrejser",
    "Product Discovery",
  ],


  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor og viceinstitutleder for forskning, Københavns Universitet",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"

    },
    {
      name: "Bertin Guldborg Hansen",
      company: "Co-Founder & CTO, Odeno A/S",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"

    },
  ],

  FrivilligtArbejde: [
    {
      name: "Præsentation af seneste akademiske artikel ved konference",
      company: "The ACM CUI Conference on Conversational User Interfaces (CUI), 2023.  ",
      start: "2023",
    },
    {
      name: "Frivillig Coding Pirates underviser",
      company: "Hjalp ungerne med at lære at programmere med sensorer, Arduino og C++.  ",
      start: "2022",
    },
    {
      name: "Eventorganisator & Vært hos Byens Radio (lokal pirat FM-radiostation)",
      company: "Organiserede events og DJ'ede ved radioprogrammer med over 5000 lokale FM-lyttere.",
      start: "2017",
    },
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
  ],
} as const;
