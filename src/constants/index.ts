import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
    title: '网页应用开发',
    icon: web,
  },
  {
    title: '移动端应用开发',
    icon: mobile,
  },
  {
    title: '后端开发',
    icon: backend,
  },
  {
    title: '文创内容与产品',
    icon: creator,
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
    date: 'Dec 2022 - Mar 2023',
    points: ['前期项目调查', '研讨创新点', '进行分工'],
  },
  {
    title: '签约合作协议书',
    companyName: '拓展合作网络',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - Aug 2023',
    points: [
      '学习项目技术',
      '与台湾掌中剧团签订合作协议书',
      '项目进校园：枫叶红幼稚园',
      '参加挑战杯等多项赛事',
    ],
  },
  {
    title: '项目打磨',
    companyName: '提升项目实力',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Sep 2023 - Dec 2023',
    points: [
      '参访台湾掌中剧团',
      '项目打磨：优化项目设计和实施方案',
      '更新技术',
      '在计算机设计大赛、小挑获得成绩',
    ],
  },
  {
    title: '项目尾声',
    companyName: '完善项目收尾',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2024 - Mar 2024',
    points: ['申请软件著作权', '项目进行最后的调整和优化', '整合各项技术'],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      '湖北省高校计算机教育专委会秘书长。湖北省“优秀博士学位论文”获得者，湖北省委组织部“湖北省青年英才开发计划”首批培养对象，湖北省“科技创新源泉工程”创新创业人才。主要从事图像处理、计算机视觉、人工智能、深度学习等相关领域的研究。',
    name: '谢伟',
    designation: '副院长',
    company: '华中师范大学计算机学院',
    image: 'https://i.im.ge/2024/03/11/R1PDJY.6.jpg',
  },
  {
    testimonial:
      '毕业于中国科学院大学，获得信号与信息处理专业博士学位。担任多个 SCI 权威期刊审稿人。曾获中国科学院院长特别奖。主要研究方向为机器学习、深度学习、计算机视觉、图像处理。',
    name: '孙昊',
    designation: '教授',
    company: '华中师范大学计算机学院',
    image: 'https://i.im.ge/2024/03/11/R1PUN4.3275b4e01d477b1e12ae24afc817908d.jpg',
  },
  {
    testimonial:
      '武汉大学计算机学院，计算机应用，研究生/硕士，主持和参与项目多项，发表多篇 EI论文。从事图像处理和物联网技术应用研究。',
    name: '刘巍',
    designation: '教授',
    company: '华中师范大学计算机学院',
    image: 'https://i.im.ge/2024/03/11/R1PUN4.3275b4e01d477b1e12ae24afc817908d.jpg',
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
    name: '移动应用',
    description:
      '采用了 MVC 模式将数据处理、用户界面和控制逻辑分离，提高代码的可维护性和扩展性。并使用了 Retrofit 框架，有效处理网络请求和数据交互。RecyclerView 可有效显示大量数据，并支持各种布局和交互方式，创建灵活的视图列表，以适应不同屏幕尺寸和设备方向。同时采用了 RadioGroup + ViewPager 的结构，使用户能够轻松切换不同的视图页面，并通过导航栏快速导航到应用的不同部分。',
    tags: [
      {
        name: 'java',
        color: 'orange-text-gradient',
      },
      {
        name: 'xml',
        color: 'green-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/OuYuHuaXia/OuYuHuaXia-Android',
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
