import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "关于",
  },
  {
    id: "work",
    title: "工作",
  },
  {
    id: "contact",
    title: "联络",
  },
];

const services: TService[] = [
  {
    title: "网页应用开发",
    icon: web,
  },
  {
    title: "移动端应用开发",
    icon: mobile,
  },
  {
    title: "后端开发",
    icon: backend,
  },
  {
    title: "文创内容与产品",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "标题 1",
    companyName: "副标题 1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "条列 1",
      "条列 2",
      "条列 3",
      "条列 4",
    ],
  },
  {
    title: "标题 2",
    companyName: "副标题 2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "条列 1",
      "条列 2",
      "条列 3",
      "条列 4",
    ],
  },
  {
    title: "标题 3",
    companyName: "副标题 3",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "条列 1",
      "条列 2",
      "条列 3",
      "条列 4",
    ],
  },
  {
    title: "标题 4",
    companyName: "副标题 4",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "条列 1",
      "条列 2",
      "条列 3",
      "条列 4",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    name: "谢伟",
    designation: "副院长",
    company: "华中师范大学计算机学院",
    image: "https://i.im.ge/2024/03/11/R1PDJY.6.jpg",
  },
  {
    testimonial:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    name: "孙昊",
    designation: "教授",
    company: "华中师范大学计算机学院",
    image: "https://i.im.ge/2024/03/11/R1PUN4.3275b4e01d477b1e12ae24afc817908d.jpg",
  },
  {
    testimonial:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    name: "赵金统",
    designation: "团长",
    company: "金宇园掌中剧团",
    image: "https://i.im.ge/2024/03/11/R1Vsv4.2024-03-11-195647.png",
  },
];

const projects: TProject[] = [
  {
    name: "团队网站",
    description:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/OuYuHuaXia/Website-FE",
  },
  {
    name: "移动应用",
    description:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/OuYuHuaXia/OuYuHuaXia-Android",
  },
  {
    name: "后端服务",
    description:
      "[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum orci eu viverra mollis.",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "123",
        color: "green-text-gradient",
      },
      {
        name: "123",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/KitZhangYs/oyhx-backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
