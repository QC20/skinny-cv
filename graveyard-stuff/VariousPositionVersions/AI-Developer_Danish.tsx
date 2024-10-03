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
    location: "København, Danmark",
    locationLink: "https://www.google.com/maps/place/Copenhagen",
    about:
      "Python-udvikler med stærk erfaring inden for automatisering og kunstig intelligens. Dedikeret til at skabe innovative løsninger, der optimerer processer og forbedrer brugeroplevelsen i offentlige og private sektorer.",
    summary:
      "Med flere års erfaring i Python-programmering og AI-udvikling er jeg specialiseret i at udvikle løsninger, der kombinerer automatisering og kunstig intelligens for at skabe effektive og skalerbare systemer. Jeg brænder for at anvende ny teknologi, som RPA og Power Automate, til at digitalisere arbejdsgange og forbedre borger- og brugeroplevelser.",
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
          url: "https://https://jonaskjeldmand.vercel.app/",
          icon: XIcon,
        },
      ],
    },
    education: [
      {
        school: "Cand.Scient. IT & Kognition",
        degree: "Københavns Universitet",
        description: "Specialiseret i at kombinere avanceret teknologi med dyb indsigt i menneskelig kognition, med udvikling af innovative teknologier, der efterligner menneskets kognitive processer inden for sprog, visuel genkendelse og kunstig intelligens.",
        start: "2020",
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
        badges: ["Fultid"],
        title: "IT Udvikler & Automatiseringsspecialist",
        logo: ConsultlyLogo,
        start: "dec 2022",
        end: null,
        description:
          "Jeg er ansvarlig for at identificere brugernes behov gennem løbende dialog med interessenter og omsætte dem til effektive digitale løsninger. Med fokus på at forbedre brugeroplevelsen bidrager jeg til at optimere og automatisere processer.",
        skills: ["Stakeholder Management", "Automatisering", "Integrationer", "Procesoptimering", "AI"],
        },
      {
        company: "Odeno",
        link: "https://www.linkedin.com/company/odeno/",
        badges: ["Fultid"],
        title: "UX Researcher & Frontend Udvikler",
        logo: ParabolLogo,
        start: "jun 2022",
        end: "dec 2022",
        description:
          "Ledte procesoptimering af AI-baserede løsninger, der forbedrede virksomhedens platform gennem automatisering og datadrevet optimering. Arbejdede tæt med både interne og eksterne teams for at skabe innovative digitale løsninger.",
        skills: ["Produktoptimering", "Integration af backend AI-komponent", "Web Development"],
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
          "Gennemførte brugerundersøgelser og analyserede data for at forstå brugerbehov og adfærd. Anvendte indsigt fra research til at informere designbeslutninger og optimere interaktive systemer i akademisk interdisciplinære samarbejder.",
        skills: ["Interaktionsdesign", "Product Discovery", "Co-Design", "Publikationer"],
        },
      {
        company: "Lægeforeningen (Yngre Læger)",
        link: "https://laeger.dk/foreninger/yngre-laeger",
        badges: ["Fultid"],
        title: "UX/UI Designer",
        logo: JojoMobileLogo,
        start: "nov 2018",
        end: "nov 2020",
        description:
          "Designede og optimerede brugeroplevelser ved at analysere feedback og gennemføre usability-tests, samarbejdede med forskellige faggrupper for at implementere brugercentrerede løsninger og forbedre digitale produkter.",
        skills: ["Tværfagligt samarbejde", "Web development", "Produktudvikling", "Designsystemer"],
        },
      {
        company: "Human-Centred Computing Research Section",
        link: "https://di.ku.dk/english/research/human-centred-computing/",
        badges: ["Fultid"],
        title: "HCI Forskningsassistent",
        logo: NSNLogo,
        start: "may 2018",
        end: "nov 2018",
        description: "Forfattede og medforfattede to artikler publiceret i den anerkendte CHI-konference, bidragende til førende forskning inden for brugercentreret design og menneske-computer interaktion.",
        skills: ["Akademisk Forskning", "Dataanalyse og Evaluering", "Prototyping"],
      },
      {
        company: "DIS, Study Abroad in Scandinavia",
        link: "https://dis.dk/",
        badges: ["Deltid"],
        title: "Student Video \& Graphic Designer",
        logo: NSNLogo,
        start: "jan 2015",
        end: "aug 2017",
        description: "Assisterede med wireframes og prototyper, gennemførte designanmeldelser, og filmede videoer til studerende.",
        skills: ["Wireframing", "Prototyping", "Multimedieproduktion"],
      },
    ],
  
    skills: [
        "Python",
        "C++",
        "Web Development (CSS/HTML/JS)",
        "Embedded Development",
        "AI-udvikling",
        "Automatisering",
        "RPA-teknologier",
        "Azure AI-platform",
        "Procesoptimering",
        "Tværfagligt samarbejde",
        "Dataanalyse",
        "Brugercentreret design",
        "Usability testing",
        "Stakeholder Management",
        "Power Automate",
        "Git",
        "Agile metoder",
        "API Integration",
        "SQL",
        "Docker",
        "Tensorflow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy"
        
      ],
  
  
    Referencer: [
      {
        name: "Pernille Bjørn Rasmussen",
        company: "Professor og viceinstitutleder for forskning, Københavns Universitet",
        kontakt: "Kontaktoplysninger udleveres efter anmodning"
  
      },
      {
        name: "Bertin Guldborg Hansen",
        company: "Co-Founder & CEO, Odeno A/S",
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
  