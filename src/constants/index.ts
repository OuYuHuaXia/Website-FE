import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
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
  tripguide,
  threejs,
  cultureIcon,
  videoIcon,
  experienceIcon,
  profileIcon,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: '关于',
  },
  {
    id: 'work',
    title: '工作',
  },
  {
    id: 'contact',
    title: '联络',
  },
];

const services: TService[] = [
  {
    title: '文化科普',
    icon: cultureIcon,
  },
  {
    title: '片段欣赏',
    icon: videoIcon,
  },
  {
    title: '情景体验',
    icon: experienceIcon,
  },
  {
    title: '个人中心',
    icon: profileIcon,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: '项目立项',
    companyName: '探索项目潜力',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Dec 2024 - Mar 2025',
    points: ['前期项目调查', '研讨创新点', '进行分工'],
  },
  {
    title: '签约合作协议书',
    companyName: '拓展合作网络',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Apr 2025 - Aug 2025',
    points: ['学习项目技术', '与台湾掌中剧团签订合作协议书'],
  },
  {
    title: '项目打磨',
    companyName: '提升项目实力',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Sep 2025 - Dec 2025',
    points: ['参访台湾掌中剧团', '项目打磨：优化项目设计和实施方案', '更新技术'],
  },
  {
    title: '项目尾声',
    companyName: '完善项目收尾',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2026 - Mar 2026',
    points: ['申请软件著作权和软件专利', '项目进行最后的调整和优化', '整合各项技术'],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      '主持国家自然科学基金青年项目和中央高校基本科研业务费资助项目等科研课题，参与承担湖北省自然科学基金委员会重点项目、国家自然科学基金重点项目等国家级、省部级课题等；以第一作者或通讯作者在IEEETransactionsonImageProcessing、IEEETransactionsonCSVT、Sensors、SignalProcessingLetters期刊、DCC、ICME等国际著名学术会议及学术期刊上发表论文10多篇，获软件著作权授权5项、发明专利授权1项。',
    name: '钟睿',
    designation: '副教授',
    company: '华中师范大学计算机学院',
    image: 'http://t0yy8qojh.hn-bkt.clouddn.com/avatar/F64E82EDAAABDE3E2E6F6D7D2EE1542B.jpg',
  },
  {
    testimonial:
      '研究聚焦图像生成、能量模型、无/半监督学习及教育数据挖掘等领域。于2022年获美国佐治亚州立大学博士学位，本科毕业于厦门大学，兼具工业界与科研机构跨领域经验；以第一作者或通讯作者在IEEETNNLS、IEEETLT等国际权威期刊，以及ICML、EDM等顶级学术会议上发表论文10余篇，研究聚焦模型鲁棒性优化、对抗训练算法改进及教育数据应用等方向，提出的联合能量模型、XAT/XVAT算法等成果具有理论创新性与实践价值。',
    name: '杨秀隆',
    designation: '讲师',
    company: '华中师范大学计算机学院',
    image: 'http://t0yy8qojh.hn-bkt.clouddn.com/avatar/EAEB10E397644328A25A41C5BF69DDA2.jpg',
  },
  {
    testimonial:
      '台湾金宇园掌中剧团团长，剧团创立于 2008 年，剧团一直致力于发展“创艺”布袋戏的演出风格，让布袋戏不再只局限于古册戏、剑侠戏、金光戏等，而是可以很广泛、 天马行空与创新。荣获多 次云林国际偶戏节金掌奖剧本奖、视觉奖与操偶奖之殊荣，每年受邀出国参与演出等。用不同表演诠释布袋戏，让观众感受布袋戏的多元化演出，就是金宇园掌中剧团之特色。',
    name: '赵金统',
    designation: '团长',
    company: '金宇园掌中剧团',
    image: 'https://i.im.ge/2024/03/11/R1Vsv4.2024-03-11-195647.png',
  },
];

const projects: TProject[] = [
  {
    name: '团队网站',
    description:
      '网页选择 Next.js 作为开发框架，实现服务器渲染和静态网站生成，确保网页具有出色的性能和可优化性。同时引入了 TypeScript，此静态类型超集将有助开发过程中捕获潜在的错误，提供更好的代码编辑和自动完成功能。并使用 Tailwind CSS 和 Sass 更高效地管理样式，增强样式定制的灵活性的和可重用性。同时集成了 Three.js 实现 3D 渲染，并引入 Framer Motion 为网页添加流畅的动画和交互效果。',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/OuYuHuaXia/Website-FE',
  },
  {
    name: '后端服务',
    description:
      '采用了单体服务模式，并选择了 Gin 框架作为核心组件来处理外部请求和暴露接口。Gin 是一个基于 Go 语言开发的轻量级 Web 框架，提供了路由、中间件、参数解析等功能，使开发者能够快速构建高性能的 RESTful API。同时使用 Gorm 框架与 MySQL 数据库进行交互，简化了数据访问层的开发。Gorm 是一个强大的 ORM 库，提供了数据库模型定义、查询构建、事务处理等功能，以面向对象的方式操作数据库，极大地简化了数据访问层的开发工作。',
    tags: [
      {
        name: 'go',
        color: 'blue-text-gradient',
      },
      {
        name: 'gin',
        color: 'green-text-gradient',
      },
      {
        name: 'grom',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/KitZhangYs/oyhx-backend',
  },
];

export { services, technologies, experiences, testimonials, projects };
