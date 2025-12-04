import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  solidity,
  avalanche,
  mssql,
  mysql,
  nginx, 
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  alpha,
  milp,
  piggzy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web2 and Web3 Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SpringBoot & Maven Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "nginx",
    icon: nginx,
  },
    {
    name: "mssql",
    icon: mssql,
  },

  {
    name: "mysql",
    icon: mysql,
  },

  {
    name: "avalanche",
    icon: avalanche,
  }


];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Nyanjigi Online",
    icon: shopify,
    iconBg: "#1d1836",
    date: "2025",
    points: [
      "Architected and deployed a fullstack application hosted at nyanjigi.online.",
      "Implemented backend APIs and MySQL database schema for scalable content delivery.",
      "Designed responsive React frontend with smooth animations and brand storytelling.",
      "Repo: https://github.com/TitoKamau053/Nyanjigi",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Unistrat",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2024 - August 2024",
    points: [
      "Developing and maintaining modules of Finnett360 ERP using React-Native.js and other related technologies.",
      "Collaborating with other developers to create high-quality user-interfaces of the modules.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Lead & Fabrication Strategist",
    company_name: "Alphawrights Custom Fabricators",
    icon: alpha,
    iconBg: "#232631",
    date: "2025",
    points: [
      "Developed and deployed alphawrightscustomfabricators.pw to showcase fabrication services.",
      "Integrated brand storytelling with modern UI/UX for distinct category presentation.",
      "Configured VPS hosting, DNS, and SSL for secure deployment.",
      "Repo: https://github.com/TitoKamau053/Alphawrights",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Titus transformed our fabrication brand into a digital experience that feels authentic and professional.",
    name: "Alex Nga'ang'a",
    designation: "Owner & Operations Manager",
    company: "Alphawrights Custom Fabricators",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    testimonial:
      "The Nyanjigi platform is seamless and scalable thanks to Titus’ fullstack expertise.",
    name: "Njeri Ndaiga",
    designation: "Product Manager",
    company: "Nyanjigi  Water Irrigation Project",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    testimonial:
      "After Titus optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lucas Were",
    designation: "Business Owner",
    company: "GraceTech Center",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
  },
];

const projects = [
  {
    name: "Nyanjigi Water Irrigation Project Platform",
    description:
      "A fullstack platform showcasing curated collections with dynamic asset discovery and responsive design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/TitoKamau053/Nyanjigi",
    live_url: "https://nyanjigi.online",
  },
  {
    name: "Piggzy DApp",
    description:
      "A smart contract that enables users to create time-locked savings deposits with early withdrawal penalties, built on the Avalanche network.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "core wallet",
        color: "green-text-gradient",
      },
      {
        name: "Avalanche Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: piggzy,
    source_code_link: "https://github.com/TitoKamau053/Time-Locked-Savings-Contract/tree/Development",
  },
  {
    name: "Alphawrights Custom Fabricators",
    description:
      "A brand-forward website deployed on VPS with secure reverse proxy, DNS, and SSL integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Cloudflare/Nginx", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/TitoKamau053/Alphawrights",
    live_url: "https://alphawrightscustomfabricators.pw",
  },
  {
    name: "MILP Optimization Model",
    description:
      "A Mixed-Integer Linear Programming model designed to optimize resource allocation and scheduling. The model balances constraints and objectives to deliver efficient, scalable solutions for complex decision-making problems.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PuLP", color: "green-text-gradient" },
      { name: "Optimization", color: "pink-text-gradient" },
    ],
    image: milp, 
    source_code_link: "https://github.com/TitoKamau053/MILP-Scheduler",
  },

];

export { services, technologies, experiences, testimonials, projects };
