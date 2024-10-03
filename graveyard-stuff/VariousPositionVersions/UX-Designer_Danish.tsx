import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo, ClevertechLogo, JojoMobileLogo, NSNLogo } from "@/images/logos";
import { XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "Indlæser billede ...",
  location: "København, Danmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Detaljeorienteret UX-designer med 5+ års erfaring, dedikeret til at skabe digitale brugeroplevelser af høj kvalitet",
  summary:
    "Som UX-designer er jeg specialiseret i at tage digitale produkter fra idé til lancering gennem en dyb forståelse af brugerbehov og adfærd. Jeg trives i samarbejdet på tværs af faggrupper og bidrager til at udvikle løsninger i den mest optimale rækkefølge. Mit fokus ligger på at kombinere kvalitative og kvantitative metoder for at skabe brugercentrerede løsninger, der skaber værdi for både brugere og virksomhed. Med erfaring i design af komplekse webløsninger og selvbetjeningsportaler er jeg dygtig til at omsætte forretningens og brugernes ønsker til konkrete udviklingsopgaver.",
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
        name: "Min hjemmeside",
        url: "https://jonaskjeldmand.vercel.app/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Cand.Scient. IT & Kognition",
      degree: "Københavns Universitet, Datalogisk Institut",
      description: "Specialiseret i at kombinere avanceret teknologi med dyb indsigt i menneskelig kognition, med fokus på udvikling af innovative teknologier inden for brugergrænseflader og interaktionsdesign.",
      start: "2020",
      end: "2022",
      skills: ["Kognitiv Videnskab", "Brugergrænsefladedesign", "Interaktionsdesign", "Brugeroplevelse"],
    },
    {
      school: "B.A. Kommunikation & IT",
      degree: "Københavns Universitet, Humanistisk Fakultet",
      description: "Opnåede et solidt fundament inden for digital innovation og brugercentreret design, der kombinerer tekniske færdigheder med en dyb forståelse af, hvordan IT påvirker brugere og organisationer.",
      start: "2014",
      end: "2018",
      skills: ["Brugercentreret design", "Konceptudvikling", "Empiriske metoder"],
    },
  ],
  
  Publikationer: [
    {
      title: "Exploring Audio Icons for Content-Based Navigation in Voice User Interfaces",
      author: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
      start: "2023",
      sig: "Click to view the article - published in ACM CUI",
      link: "https://doi.org/10.1145/3571884.3604302",
    },
    {
      title: "Into Scandinavia: When Online Fatherhood Reflects Societal Infrastructures",
      author: "Jonas Kjeldmand Jensen, Tawfiq Ammari & Pernille Bjørn",
      start: "2019",
      sig: "Click to view the article - published in ACM GROUP",
      link: "https://doi.org/10.1145/3361112",
    },
    {
      title: "Barriers to End-User Designers of Augmented Fabrication",
      author: "Chandan Mahapatra, Jonas Kjeldmand Jensen, Michael McQuaid & Daniel Ashbrook",
      start: "2018",
      sig: "Click to view the article - published in ACM CHI",
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
      start: "dec 2022",
      end: null,
      description:
        "Ansvarlig for at identificere brugerbehov gennem løbende dialog med interessenter og omsætte dem til effektive digitale løsninger. Fokus på at forbedre brugeroplevelsen og bidrage til proces optimering og automatisering.",
      skills: ["Interessenthåndtering", "Brugercentreret design", "Integrationer", "Procesoptimering", "Wireframing", "Prototyping"],
    },
    {
      company: "Odeno",
      link: "https://www.linkedin.com/company/odeno/",
      badges: ["Fuldtid"],
      title: "UX Researcher & Frontend Udvikler",
      logo: ParabolLogo,
      start: "jun 2022",
      end: "dec 2022",
      description:
        "Ledte agile udviklingsprocesser og gennemførte brugbarhedstest for at optimere brugeroplevelsen. Vægtede og prioriterede produktmål i samarbejde med forskellige interessenter, og anvendte data og brugerindsigt til løbende forbedringer af platformen.",
      skills: ["Produktoptimering", "Brugbarhedstest", "Webudvikling", "Agile metoder", "Figma"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Deltid"],
      title: "HCI MA Forskningsassistent",
      logo: ClevertechLogo,
      start: "dec 2020",
      end: "jun 2022",
      description:
        "Gennemførte brugerundersøgelser og analyserede data for at forstå brugerbehov og adfærd. Anvendte indsigt fra research til at informere designbeslutninger og optimere interaktive systemer i akademisk tværfaglige samarbejder.",
      skills: ["Interaktionsdesign", "Brugerundersøgelser", "Co-Design", "Publikationer"],
    },
    {
      company: "Lægeforeningen (Yngre Læger)",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: ["Fuldtid"],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "nov 2018",
      end: "nov 2020",
      description:
        "Designede og optimerede brugeroplevelser ved at analysere feedback og gennemføre brugbarhedstest. Samarbejdede med forskellige faggrupper for at implementere brugercentrerede løsninger og forbedre digitale produkter.",
      skills: ["Tværfagligt samarbejde", "Produktudvikling", "Designsystemer", "Wireframing", "Prototyping"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Fuldtid"],
      title: "HCI BA Forskningsassistent",
      logo: NSNLogo,
      start: "maj 2018",
      end: "nov 2018",
      description: "Forfattede og medforfattede to artikler publiceret i den anerkendte CHI-konference, bidragende til førende forskning inden for brugercentreret design og menneske-computer interaktion.",
      skills: ["Akademisk forskning", "Dataanalyse og evaluering", "Prototyping"],
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: ["Deltid"],
      title: "Studerende Video & Grafisk Designer",
      logo: NSNLogo,
      start: "jan 2015",
      end: "aug 2017",
      description: "Assisterede med wireframes og prototyper, gennemførte designevalueringer, og producerede videoer til studerende.",
      skills: ["Wireframing", "Prototyping", "Multimedieproduktion"],
    },
  ],

  skills: [
    "UX-design",
    "Brugercentreret design",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Interaktionsdesign",
    "Brugbarhedstest",
    "Brugerundersøgelser",
    "Informationsarkitektur",
    "Brugerflows",
    "Agile metoder",
    "Interessenthåndtering",
    "Tværfagligt samarbejde",
    "Webløsninger",
    "Selvbetjeningsportaler",
    "Designsystemer",
    "Visuel design",
    "Kommunikation",
    "Sketch",
    "Adobe Suite",
    "Webudvikling",
  ],

  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor og viceinstitutleder for forskning, Københavns Universitet",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"
    },
    {
      name: "Bertin Guldborg Hansen",
      company: "Medstifter & CTO, Odeno A/S",
      kontakt: "Kontaktoplysninger udleveres efter anmodning"
    },
  ],

  FrivilligtArbejde: [
    {
      name: "Aktivt medlem af Hacker-fællesskabet Labitat",
      company: "Deltager i udvikling af tech projekter og innovation, samt bidrager til workshops og teknologiske events i fællesskabet.",
      start: "Nu",
    },
    {
      name: "Frivillig Coding Pirates underviser",
      company: "Hjalp børn med at lære programmering med sensorer, Arduino og C++.",
      start: "2022",
    },
    {
      name: "Eventarrangør & Vært hos Byens Radio (lokal pirat FM-radiostation)",
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
        "Den agile møde co-pilot, der leverer bedre møder med mindre indsats",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;