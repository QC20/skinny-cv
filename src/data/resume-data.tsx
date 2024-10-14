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
import { FrivilligtArbejde, Publikationer, Referencer } from "@/apollo/type-defs";
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
  "A dedicated UX professional who blends user insights with innovative design to create impactful digital experiences",
  summary:
    "Seasoned and technically skilled UX professional with over 5 years of experience, ready to elevate EY’s digital transformation through user-centered design and data-driven insights. Proficient in conducting research to inform strategic product decisions that drive measurable improvements in user satisfaction and business outcomes. Skilled at collaborating with cross-functional teams to align complex financial solutions with user needs and mental models. Expertise in leveraging qualitative and quantitative methods to deliver insights that shape innovative digital experiences in the professional services sector.",
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
      school: "MSc. IT & Cognition",
      degree: "University of Copenhagen",
      description: "Specialized in combining advanced technology with deep insight into human cognition, developing innovative technologies that mimic human cognitive processes in language, visual recognition, and artificial intelligence.",
      start: "2020",
      end: "2022",
      skills: ["Cognitive Science", "Artificial Intelligence", "Language Technology", "Interaction Design"],
    },
    {
      school: "BA. Communication & IT",
      degree: "University of Copenhagen",
      description: "Gained a solid foundation in digital innovation and user-centered design, combining technical skills with a deep understanding of how IT affects users and organizations.",
      start: "2014",
      end: "2018",
      skills: ["User-Centered Design", "Concept Development", "Empirical Methods"],
    },
  ],
  
  Publikationer: [
    {
      title: "Exploring Audio Icons for Content-Based Navigation in Voice User Interfaces",
      author: "Jonas Kjeldmand Jensen & Daniel Ashbrook",
      start: "2023",
      link: "https://doi.org/10.1145/3571884.3604302",
    },
    {
      title: "Into Scandinavia: When Online Fatherhood Reflects Societal Infrastructures",
      author: "Jonas Kjeldmand Jensen, Tawfiq Ammari & Pernille Bjørn",
      start: "2019",
      link: "https://doi.org/10.1145/3361112",
    },
    {
      title: "Barriers to End-User Designers of Augmented Fabrication",
      author: "Chandan Mahapatra, Jonas Kjeldmand Jensen, Michael McQuaid & Daniel Ashbrook",
      start: "2018",
      link: "https://doi.org/10.1145/3290605.3300613",
    }
  ],

  work: [
    {
      company: "Danish Tax Appeals Agency",
      link: "https://skatteankestyrelsen.dk/",
      badges: ["Full-time"],
      title: "User-Centered Digital Developer",
      logo: ConsultlyLogo,
      start: "Dec 2022",
      end: null,
      description:
        "I am responsible for identifying user needs through ongoing dialogue with stakeholders and translating them into effective digital solutions. With a focus on improving the user experience, I contribute to optimizing and automating processes.",
      skills: ["Stakeholder Management", "User-Centered Design", "Integrations", "Process Optimization"],
    },
    {
      company: "Odeno",
      link: "https://www.linkedin.com/company/odeno/",
      badges: ["Full-time"],
      title: "UX Researcher & Frontend Developer",
      logo: ParabolLogo,
      start: "Jun 2022",
      end: "Dec 2022",
      description:
        "Led agile development processes and conducted usability tests to optimize the user experience. Weighted and prioritized product goals in collaboration with various stakeholders, and used data and user insights for continuous improvements of the platform.",
      skills: ["Product Optimization", "Usability Testing", "Web Development"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Part-time"],
      title: "HCI MA Research Assistant",
      logo: ClevertechLogo,
      start: "Dec 2020",
      end: "Jun 2022",
      description:
        "Conducted user studies and analyzed data to understand user needs and behavior. Applied insights from research to inform design decisions and optimize interactive systems in academic interdisciplinary collaborations.",
      skills: ["Interaction Design", "Product Discovery", "Co-Design", "Publications"],
    },
    {
      company: "Danish Medical Association (Junior Doctors)",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: ["Full-time"],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "Nov 2018",
      end: "Nov 2020",
      description:
        "Designed and optimized user experiences by analyzing feedback and conducting usability tests, collaborated with various professional groups to implement user-centered solutions and improve digital products.",
      skills: ["Cross-functional Collaboration", "Product Development", "Design Systems"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Full-time"],
      title: "HCI BA Research Assistant",
      logo: NSNLogo,
      start: "May 2018",
      end: "Nov 2018",
      description: "Authored and co-authored two articles published in the renowned CHI conference, contributing to leading research in user-centered design and human-computer interaction.",
      skills: ["Academic Research", "Data Analysis and Evaluation", "Prototyping"],
    },
    {
      company: "DIS, Study Abroad in Scandinavia",
      link: "https://dis.dk/",
      badges: ["Part-time"],
      title: "Student Video & Graphic Designer",
      logo: NSNLogo,
      start: "Jan 2015",
      end: "Aug 2017",
      description: "Assisted with wireframes and prototypes, conducted design reviews, and filmed videos for students.",
      skills: ["Wireframing", "Prototyping", "Multimedia Production"],
    },
  ],

  skills: [
    "User-Centered Design",
    "Qualitative and Quantitative Research Methods",
    "Data Analysis",
    "Usability Testing",
    "User Journey Mapping",
    "Prototyping",
    "Interaction Design",
    "Agile Methodology",
    "Stakeholder Management",
    "UX Strategy",
    "Information Architecture",
    "A/B Testing",
    "Survey Design",
    "Persona Development",
    "Figma",
    "Adobe Suite",
    "Cross-functional Collaboration",
    "Workshop Facilitation",
  ],

  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor and Deputy Head of Research, University of Copenhagen",
      kontakt: "Contact information provided upon request"
    },
    {
      name: "Bertin Guldborg Hansen",
      company: "Co-Founder & CTO, Odeno A/S",
      kontakt: "Contact information provided upon request"
    },
  ],

  FrivilligtArbejde: [
    {
      name: "Active member of the Hacker community Labitat",
      company: "Participates in the development of tech projects and innovation, as well as contributes to workshops and technological events in the community.",
      start: "Present",
    },
    {
      name: "Volunteer Coding Pirates instructor",
      company: "Helped children learn to program with sensors, Arduino, and C++.",
      start: "2022",
    },
    {
      name: "Event Organizer & Host at City Radio (local pirate FM radio station)",
      company: "Organized events and DJed radio programs with over 5,000 local FM listeners.",
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