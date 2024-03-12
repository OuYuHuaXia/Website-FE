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
    title: '偶遇华夏',
    fullName: '偶遇华夏',
    email: 's5460703@gmail.com',
  },
  hero: {
    name: '偶遇华夏',
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
      content: `“偶遇华夏”团队致力于将数字技术与传统木偶戏相结合，打造了一款数字化的木偶戏产品。采用了先进的3D建模技术和人体动作捕捉技术，使用户可以在屏幕上控制木偶角色，表演出精彩的木偶戏。通过这款产品，使用者可以亲身感受到表演木偶戏的乐趣，并增强对中国传统文化的认同感。这不仅有助于促进非物质文化遗产的传承，也丰富了传统文化的传播方式。`,
      content2: `木偶戏是闽台文化和台湾文化的重要体现，通过使用这款产品，用户可以深入体会大陆文化和台湾文化之间的共同之处，从而加深两岸同胞的认同感。偶遇华夏团队由华中师范大学计算机、信管和美术学院等组成，并与台湾金宇园掌中剧团合作，致力于推动各种形式的合作，为木偶戏体验者提供更丰富、更深入的文化体验，为促进两岸木偶文化的共同传承与发展做出积极贡献。`,
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
      h2: '应用程序',
      content: `(我叫你填)[测试文本]Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Suspendisse elementum orci eu viverra mollis. 
      Maecenas mollis diam vel dignissim porttitor. 
      Vestibulum id maximus eros. Nunc imperdiet nisi ac augue maximus viverra. 
      Morbi feugiat nisl ante, nec fringilla est iaculis sed. Praesent in lobortis justo. Praesent feugiat, 
      justo eu lobortis commodo, orci arcu fermentum urna, vel varius nibh est ut neque. 
      Duis commodo lacus augue, eget luctus leo sollicitudin at. 
      Duis id erat sit amet nulla elementum tempor et in ligula. Pellentesque vitae mi mauris. 
      Suspendisse a leo id dolor dictum vestibulum. Pellentesque ultricies interdum iaculis. 
      Fusce risus diam, hendrerit at maximus at, lacinia vel urna.`,
    },
  },
};
