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
      "Detail-oriented Concept Developer with 5+ years of UX experience, dedicated to creating innovative, user-centered solutions that drive business value",
    summary:
    "As a Concept Developer, I excel at transforming business opportunities into tangible solution concepts. With a strong background in UX research and product development, I bring a unique blend of creative thinking and technical understanding to every project. I'm adept at facilitating cross-functional collaboration, conducting user research, and developing prototypes that bridge the gap between user needs and business goals. My experience spans various industries, allowing me to bring fresh perspectives and innovative approaches to concept development.",
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
        description: "Specialized in combining advanced technology with deep insight into human cognition, focusing on developing innovative technologies that mimic human cognitive processes in language, visual recognition, and macine learning.",
        start: "2020",
        end: "2022",
        skills: ["Cognitive Science", "Artificial Intelligence", "Language Technology", "Interaction Design"],
      },
      {
        school: "BA. Communication & IT",
        degree: "University of Copenhagen",
        description: "Gained a solid foundation in digital innovation and user-centered design, combining technical skills with a deep understanding of how IT impacts users and organizations.",
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
        company: "Danish Tax Appeals Agency",
        link: "https://skatteankestyrelsen.dk/",
        badges: ["Full-time"],
        title: "User-Centered Digital Developer",
        logo: ConsultlyLogo,
        start: "Dec 2022",
        end: null,
        description:
          "Led concept development for digital solutions, transforming complex business needs into user-friendly designs. Facilitated cross-functional workshops to ideate and validate solution concepts. Conducted user research to ensure customer value drove all design decisions. Created early-stage prototypes and mock-ups to communicate ideas effectively.",
        skills: ["Concept Development", "User Research", "Cross-functional Collaboration", "Prototyping", "Stakeholder Management"],
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
          "Spearheaded concept development for new product features, focusing on customer value and business impact. Led agile development processes and conducted usability tests to validate and refine solution concepts. Collaborated with cross-functional teams to transform ideas into tangible product improvements. Created wireframes and interactive prototypes to visualize and test new concepts.",
        skills: ["Concept Ideation", "Agile Methodologies", "Usability Testing", "Product Innovation", "Wireframing"],
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
          "Developed innovative concept solutions for human-computer interaction challenges. Conducted in-depth user research to inform concept development, ensuring alignment with user needs and behaviors. Facilitated ideation workshops and collaborated with interdisciplinary teams to explore and refine solution concepts. Created and evaluated prototypes to validate proposed solutions.",
        skills: ["Concept Innovation", "User Research", "Interdisciplinary Collaboration", "Prototype Evaluation", "Academic Writing"],
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
          "Led concept development for digital products, focusing on creating value for healthcare professionals. Facilitated co-creation workshops with stakeholders to generate and refine solution ideas. Developed user journeys and wireframes to visualize concepts. Conducted usability testing to validate and iterate on proposed solutions, ensuring they met both user needs and business objectives.",
        skills: ["Concept Development", "Co-creation Workshops", "User Journey Mapping", "Wireframing", "Iterative Design"],
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
      "Design Thinking",
      "User-Centered Design",
      "Prototyping",
      "Interaction Design",
      "Agile and Iterative Methodology",
      "Physical Computing",
      "Data Analysis",
      "Product Development",
      "Design Tools",
      "Figma",
      "Wearables",
      "Adobe Suite",
      "Web Development",
      "Co-Design",
      "Usability Testing",
      "User Journeys",
      "Product Discovery",
      "Solution Conceptualization",
      "Technical Understanding",
      "Facilitation Skills",
    ],
  
    Referencer: [
      {
        name: "Pernille Bjørn Rasmussen",
        company: "Professor and Vice Head of Department for Research, University of Copenhagen",
        kontakt: "Contact information provided upon request"
      },
      {
        name: "Bertin Guldborg Hansen",
        company: "Co-Founder & CEO, Odeno A/S",
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
        company: "Helped children learn programming with sensors, Arduino, and C++.",
        start: "2022",
      },
      {
        name: "Event Organizer & Host at Byens Radio (local pirate FM radio station)",
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