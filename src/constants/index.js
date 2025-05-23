import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "C# Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024- October 2024",
    points: [
      "Developing and maintaining the backend for QuantitySurvey.com website for a client, using C# and other related technologies.",
      "Collaborating with cross-functional teams including, a front-end developer high-quality website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    title: "SpringBoot Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - November 2024",
    points: [
      "Developing the backend for Student Management System in Java using Springboot and Maven",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Titus proved me wrong.",
    name: "Vivian Wothaya",
    designation: "Developer",
    company: "Unistrat Corporation",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Titus does.",
    name: "Graham Bradshaw",
    designation: "Senior Backend Developer",
    company: "TechBros",
    image: "https://randomuser.me/api/portraits/lego/0.jpg",
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
    name: "SmartFire Mobile App",
    description:
      "An IoT base mobile application integrated with sensors for monitoring, alerting and accessing emergency services to aid in fire accidents response",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase & firestore",
        color: "green-text-gradient",
      },
      {
        name: "expo & expo Go",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TitoKamau053/SFRA",
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
    image: jobit,
    source_code_link: "https://github.com/TitoKamau053/Time-Locked-Savings-Contract/tree/Development",
  },
  {
    name: "Quantity Survey API",
    description:
      "A comprehensive API for the backend integration of a Quntity Survey Website",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
      {
        name: ".Net8",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TitoKamau053/Backend/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
