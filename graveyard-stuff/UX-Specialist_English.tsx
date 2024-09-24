import { Publikationer, FrivilligtArbejde, Referencer } from "@/apollo/type-defs";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo, ClevertechLogo, JojoMobileLogo, NSNLogo } from "@/images/logos";
import { XIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Jonas Kjeldmand Jensen",
  initials: "Loading image ...",
  location: "Copenhagen, Denmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Creative and detail-oriented user-centered developer with 5+ years of UX/UI experience, committed to driving innovation in public sector digital solutions.",
  summary:
    "As a UX Specialist, I excel in taking digital products from concept to launch through comprehensive user analysis. I thrive in team settings, collaborating across disciplines to achieve exceptional results. My methodology synthesizes qualitative and quantitative approaches to create user-oriented solutions that generate value for both consumers and organizations. A 'full-stack' UX professional with strong technical skills capable of handling all aspects of UX from planning and research to analysis and interaction design.",
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
        name: "My Website",
        url: "https://jonaskjeldmand.vercel.app/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "MSc. IT & Cognition",
      degree: "University of Copenhagen",
      description: "Specialized in combining advanced technology with deep insights into human cognition, developing innovative technologies that mimic human cognitive processes in language, visual recognition, and artificial intelligence.",
      start: "2020",
      end: "2022",
      skills: ["Cognitive Science", "Artificial Intelligence", "Language Technology", "Interaction Design"],
    },
    {
      school: "B.A. Communication & IT",
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
      badges: ["Full-time"],
      title: "User-Centered Digital Developer",
      logo: ConsultlyLogo,
      start: "Dec 2022",
      end: null,
      description:
        "Responsible for identifying user needs through stakeholder dialogue and translating them into effective digital solutions. As a developer, I design and implement user-centered systems that improve experiences, optimize processes, and drive automation within complex public IT infrastructures.",
      skills: ["Stakeholder Management", "Information Architecture", "User-Centered Design", "Integrations", "Process Optimization"],
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
        "Led agile development processes and conducted usability tests to optimize user experience. Weighed and prioritized product goals in collaboration with various stakeholders, and used data and user insights for continuous platform improvements.",
      skills: ["Product Optimization", "Usability Testing",, "A/B Testing", "Web Development"],
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
        "Conducted user research and analyzed data to understand user needs and behaviors. Applied insights from research to inform design decisions and optimize interactive systems in academic interdisciplinary collaborations.",
      skills: ["Interaction Design", "Product Discovery", "Co-Design", "Publications", "Qualitative Methods"],
    },
    {
      company: "Lægeforeningen (Yngre Læger)",
      link: "https://laeger.dk/foreninger/yngre-laeger",
      badges: ["Full-time"],
      title: "UX/UI Designer",
      logo: JojoMobileLogo,
      start: "Nov 2018",
      end: "Nov 2020",
      description:
        "Designed and optimized user experiences by analyzing feedback and conducting usability tests. Collaborated with various professional groups to implement user-centered solutions and improve digital products.",
      skills: ["Cross-functional Collaboration", "Product Development", "Design Systems", "Web Development"],
    },
    {
      company: "Human-Centred Computing Research Section",
      link: "https://di.ku.dk/english/research/human-centred-computing/",
      badges: ["Full-time"],
      title: "HCI BA Research Assistant",
      logo: NSNLogo,
      start: "May 2018",
      end: "Nov 2018",
      description: "Authored and co-authored two papers published in the renowned CHI conference, contributing to leading research in user-centered design and human-computer interaction.",
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
      description: "Assisted with wireframes and prototypes, conducted design reviews, and produced videos for students.",
      skills: ["Wireframing", "Prototyping", "Multimedia Production"],
    },
  ],

  skills: [
    "Design Thinking",
    "User-Centered Design",
    "Prototyping",
    "Interaction Design",
    "User Feedback",
    "Empathy",
    "Agile Methodology",
    "Data Analysis",
    "Product Development",
    "Design Tools",
    "Figma",
    "Sketch",
    "Adobe Suite",
    "Web Development",
    "User Research",
    "Co-Design",
    "Usability Testing",
    "User Journeys",
    "Product Discovery",
    "Information Architecture",
    "Complex IT Systems Design",
    "Business Analysis",
  ],

  Referencer: [
    {
      name: "Pernille Bjørn Rasmussen",
      company: "Professor and Vice Head of Department for Research, University of Copenhagen",
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
      company: "Participates in the development of tech projects and innovation, and contributes to workshops and technological events in the community.",
      start: "Present",
    },
    {
      name: "Volunteer Coding Pirates instructor",
      company: "Helped children learn programming with sensors, Arduino, and C++.",
      start: "2022",
    },
    {
      name: "Event Organizer & Host at Byens Radio (local pirate FM radio station)",
      company: "Organized events and DJed for radio programs with over 5000 local FM listeners.",
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