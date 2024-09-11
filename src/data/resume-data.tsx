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

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "JKJ",
  location: "Copenhagen, Denmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Detaljeorienteret UX researcher dedikeret til at skabe produkter af høj kvalitet",
  summary:
    "Som UX Researcher er jeg specialiseret i at tage digitale produkter fra idé til lancering gennem en dyb forståelse af brugerbehov og adfærd. Jeg trives med at samarbejde med tværfaglige teams og skabe miljøer, hvor alle kan yde deres bedste. I mit arbejde fokuserer jeg på at kombinere kvalitative og kvantitative metoder for at skabe indsigtsfulde løsninger, der forbedrer brugeroplevelsen. Jeg har over 8 års erfaring med user research og produktudvikling, herunder samarbejde med internationale teams.",
  avatarUrl: "https://github.com/user-attachments/assets/97cfbf9f-9add-46f2-9d0d-d2058534bd7e",
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
      description: "skriv noget tekst her",
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
  
  Publikationer: [
    {
      title: "Exploring Audio Icons for Content-Based Navigation in Voice User Interfaces",
      author: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
      start: "2023",
      sig: "ACM CUI",

    },
    {
      title: "Into Scandinavia: When Online Fatherhood Reflects Societal Infrastructures",
      author: "Jonas Kjeldmand Jensen, Tawfiq Ammari & Pernille Bjørn",
      start: "2019",
      sig: "ACM GROUP",

    },
    {
      title: "Barriers to End-User Designers of Augmented Fabrication",
      author: "Chandan Mahapatra, Jonas Kjeldmand Jensen & Michael McQuaid 40",
      start: "2018",
      sig: "ACM CHI",

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
      badges: ["On-site"],
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
      badges: ["On-site"],
      title: "HCI BA Researcher",
      logo: NSNLogo,
      start: "may 2018",
      end: "nov 2012",
      description: "Forfattede og medforfattede to artikler publiceret i den anerkendte CHI-konference, bidragende til førende forskning inden for brugercentreret design menneske-computer interaktion.",
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: ["On-site"],
      title: "Student Video \& Graphic Designer",
      logo: NSNLogo,
      start: "jan 2015",
      end: "aug 2017",
      description: "Udvikle wireframes og prototyper, forbedret design gennem evalueringer, og skabt videoindhold til studerende.",
    },
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
    "Web Development",
    "User Research",
  ],


  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor og viceinstitutleder for forskning, Københavns Universitet",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"

    },
    {
      name: "Co-Founder & CTO, Odeno A/S",
      company: "Bertin Guldborg Hansen",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"

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
