type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TSection2 = {
  p: string;
  h2: string;
  content?: string;
  content2?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection2>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: '芗音同韵 - 推动两岸芗剧文化传承',
    fullName: '芗音同韵 - 推动两岸芗剧文化传承',
    email: 's5460703@gmail.com',
  },
  hero: {
    name: '芗音同韵',
    p: ['致力推动两岸木偶文化传承', '打造新时代数字化产品'],
  },
  contact: {
    p: '对我们感兴趣吗？',
    h2: '联络我们吧！',
    form: {
      name: {
        span: '您的名字',
        placeholder: '如何称呼您?',
      },
      email: { span: '您的电子邮箱', placeholder: '您的邮箱是?' },
      message: {
        span: '您的信息',
        placeholder: '想和我们说些什么?',
      },
    },
  },
  sections: {
    about: {
      p: '团队介绍',
      h2: '概述',
      content: `“芗音同韵”团队致力于将数字技术与传统芗剧相结合，打造了一款数字化的芗剧产品。采用了先进的3D建模技术和人体动作捕捉技术，使用户可以在屏幕上控制角色，表演出精彩的芗剧。通过这款产品，使用者可以亲身感受到表演芗剧的乐趣，并增强对中国传统文化的认同感。这不仅有助于促进非物质文化遗产的传承，也丰富了传统文化的传播方式。`,
      content2: `芗剧是闽台文化和中国台湾文化的重要体现，通过使用这款产品，用户可以深入体会大陆文化和台湾文化之间的共同之处，从而加深两岸同胞的认同感。“芗音同韵”团队由华中师范大学计算机学院本科生和教师组成，并与台湾金宇园掌中剧团合作，致力于推动各种形式的合作，为芗剧体验者提供更丰富、更深入的文化体验，为促进两岸芗剧文化的共同传承与发展做出积极贡献。`,
    },
    experience: {
      p: '我们如何一路走来',
      h2: '开发历程',
    },
    feedbacks: {
      p: '引路灯塔',
      h2: '指导老师',
    },
    works: {
      p: '我们的伟大作品',
      h2: '芗音同韵Web',
      content: `针对传统芗剧传播方式少、传承不易、体验感差等核心问题，我们基于Web平台构建了芗音同韵文化传播系统。在技术实现上，采用了Next.js框架进行前端开发，通过React组件化架构实现高可维护性应用设计。人体动作捕捉技术采用基于Mediapipe的优化方案，实现传统戏曲动作的数字化映射与实时交互。WebGL与Three.js技术结合构建了3D戏曲场景，用户可直接通过浏览器体验沉浸式芗剧表演。在前端架构中，利用React Router实现页面导航路由管理，通过React Query处理数据请求与状态同步，Framer Motion库驱动交互动画效果。后端服务沿用Gin框架处理RESTful API请求，采用GORM实现MySQL数据库的ORM映射，并使用Apifox进行接口测试管理。系统通过WebAssembly技术部署优化的姿态识别模型，大幅提升浏览器端计算效率，最终形成跨平台、免安装的传统文化传播解决方案。`,
    },
  },
};
