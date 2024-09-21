import { link } from "fs";

export const NavbarLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
    imagePath: "/icons/home.png",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    imagePath: "/icons/profile.png",
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects",
    imagePath: "/icons/working.png",
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
    imagePath: "/icons/chat.png",
  },
];

export const SocialLinks = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/hsinawa",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/awanish-mishra-941a93195/",
  },
  {
    id: 4,
    name: "Resume",
    href: "https://drive.google.com/file/d/1WfjBv0wi_0w9cuIs6ajjS3yN964CBbG5/view?usp=drive_link",
  },
];

export const SkillsList = [
  {
    id: 1,
    name: "React",
    image: "/images/react.png",
    category: "Frontend",
  },
  {
    id: 2,
    name: "Node",
    image: "/images/js.png",
    category: "Backend",
  },
  {
    id: 16,
    name: "Python",
    image: "/images/python.png",
    category: "Backend",
  },
  {
    id: 3,
    name: "MongoDB",
    image: "/images/mongo.png",
    category: "Database",
  },
  {
    id: 4,
    name: "Django",
    image: "/images/django.png",
    category: "Backend",
  },
  {
    id: 5,
    name: "Next",
    image: "/images/next.png",
    category: "Frontend",
  },
  {
    id: 7,
    name: "MySQL",
    image: "/images/mysql.png",
    category: "Database",
  },
  {
    id: 8,
    name: "JavaScript",
    image: "/images/javascript.png",
    category: "Backend",
  },
  {
    id: 9,
    name: "TypeScript",
    image: "/images/ts.png",
    category: "Frontend",
  },
  {
    id: 10,
    name: "CPP",
    image: "/images/cpp.png",
    category: "Backend",
  },
  {
    id: 11,
    name: "HTML",
    image: "/images/html.png",
    category: "Frontend",
  },
  {
    id: 12,
    name: "Bootstrap",
    image: "/images/bootstrap.png",
    category: "Frontend",
  },
  {
    id: 13,
    name: "Docker",
    image: "/images/docker.png",
    category: "TechOps",
  },
  ,
  {
    id: 14,
    name: "Kubernetes",
    image: "/images/k8.png",
    category: "TechOps",
  },
  {
    id: 15,
    name: "Postman",
    image: "/images/postman.png",
    category: "TechOps",
  },
];


export const WorkExperienceList = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Avasant",
    duration: "October 2023 - Present",
    image: "/images/avasant.png" ,
    description: [
      "Led development of AvasantX, a user and document management platform",
      "Designed WhatsApp news aggregator using Meta cloud API and cloud scheduler",
      "Reduced Django backend latency by 99.5% with database optimization and JSON caching",
      "Enhanced product security by implementing CSRF authorization across 240 URLs",
      "Built admin module for managing 15+ proposals using Django, NDB, and Google App Engine",
      "Developed Django admin modules to track user heatmaps with 5 key metrics",
      "Redesigned 7 products using Tailwind CSS, Preline, and custom components"
    ],
    techonolgies:[ "Django", "Python", "Tailwind CSS",  "Google Cloud Platform", "Meta Cloud API", "NDB", "Google App Engine","Cloud Run"]
  },
  {
    id: 2,
    role: "Software Developement Intern",
    company: "Thales",
    duration: "February 2023 - August 2023",
    image: "/images/thales.png" ,
    description:[
      "Built interactive front-end for IFE systems, serving 5 airlines",
      "Developed 15+ UI components using React.js and MUI",
      "Optimized GitLab delivery pipeline by 95%, reducing error logs significantly",
      "Automated product testing across 30+ live environments using Browserstack",
      "Wrote business APIs in Golang and Node.js, enhancing product performance by 10%",
      "Managed CI/CD pipelines for 14 microservices in an Agile model",
    ],
    techonolgies:[ "React", "MUI", "Golang",  "Node.js", "Browserstack", "GitLab", "CI/CD"]
  },
  {
    id:3,
    role: "Fullstack Developer Intern",
    company: "Infuzex Ventures",
    duration: "June 2022 - August 2022",
    image: "/images/infuzex.png" ,
    description:[
      
        "Developed healthcare platform using MERN Stack & AWS for accessible care",
        "Implemented scalable MVC architecture with Geo sharding, handling 50,000+ bookings",
        "Enabled bilingual support with React i18n, enhancing user experience",
        "Published on Playstore, achieving 15,000+ bookings in the first week"
      
      
    ],
    techonolgies:[ "MERN Stack", "AWS", "React i18n",  "Sharding", "Firebase","Postman"]
  }
]


export const ProjectsList = [
  {
    id:1,
    name: "Concept Classes",
    description: "A comprehensive coaching app which has 1800+ students across Delhi-NCR",
    isLive: true,
    image: "/images/conceptclasses.jpg",
    technologies: ["React", "Node", "MongoDB", "AWS" , "Firebase", "Postman","Javascript","Razorpay","Datatables","D3.js"],
    link: "https://www.conceptclassess.com/",
    features:[
      "Built a student portal with 12 features including homework, tests, and fee payments",
      "Developed a teacher portal with 15 features like lecture uploads, results, and bulk messaging",
      "Integrated Razorpay API for seamless fee payments and 30-day payment reminders",
      "Created a performance chart using D3.js based on student test scores"
    ],
    imagesArray:[
      "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.14.48%E2%80%AFAM.png?alt=media&token=db8e8809-975c-42af-859c-ec9f28086172",
      "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.15.09%E2%80%AFAM.png?alt=media&token=1bdf67ff-e1dc-46f3-a827-2c63a3d3fc5e",
      "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.15.43%E2%80%AFAM.png?alt=media&token=660e081e-a706-4f09-ab60-8693d6af9d42",
        "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.44.10%E2%80%AFAM.png?alt=media&token=47a9f93c-a721-4a51-9b8c-8a8b87b50dc7",
      "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.47.28%E2%80%AFAM.png?alt=media&token=1b773ccc-cf1b-47dd-a140-51e0e23b47ad",
      "https://firebasestorage.googleapis.com/v0/b/awanish-projects-7640c.appspot.com/o/concept_classes%2FScreenshot%202024-09-22%20at%201.58.34%E2%80%AFAM.png?alt=media&token=d17da824-b74e-4aa1-8ba7-71deb86e8932"

    

    ]
    
  }
]