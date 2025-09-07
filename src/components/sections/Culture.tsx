import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const Culture = () => {
  return (
    <>
      <Header 
        useMotion={true} 
        p="传统文化"
        h2="芗剧文化科普"
      />

      <div className="mt-10 space-y-12">
        {/* 简介部分 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            &emsp;&emsp;芗剧原名歌仔戏，是流行于福建漳州芗江一带的汉族戏曲剧种。
            芗江是福建九龙江流经漳州时的简称。芗剧是全国 360 多个地方戏
            剧中唯一横跨海峡的剧种，也是两岸群众文艺交流的纽带。其足迹
            遍及于龙溪、晋江、厦门、台湾省及东南亚华侨居住地区。
          </motion.p>
        </motion.div>

        {/* 剧种源流 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">剧种源流</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              &emsp;&emsp;芗剧，原名歌仔戏，亦名子弟戏，起源于漳州。明末清初，郑成功率部收复台湾，把流传于漳州的"歌仔"（锦歌）、"车鼓
              弄"等民间艺术带到台湾，并与当地民歌小调结合，在农村、渔区
              广泛流行，出现坐唱形式的"歌仔馆"。
            </p>
            <p>
              &emsp;&emsp;清末，由于迎神赛会的需要，清唱的"歌仔馆"走上广场，出现化妆游行的表演形式，时称
              "歌仔阵"。此后，"歌仔阵"吸收梨园戏、四平戏和乱弹的剧目
              及表演艺术，在农村谷场、庙埕牵草绳圈地演出，民间俗称"落地扫"。
            </p>
            <p>
              &emsp;&emsp;新中国成立后，由于改良调（子弟戏）主要流行于龙溪芗江一
              带，就正式改称芗剧。1951 年 8 月，歌仔戏霓光班与子弟戏新春
              班合并成立漳州市实验芗剧团。从此，芗剧逐渐发展成为福建省五
              大剧种之一。
            </p>
          </div>
        </motion.div>

        {/* 传统剧目 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">传统剧目</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              &emsp;&emsp;芗剧的传统剧目大约有五百多个。最初多用歌仔戏的唱本，进
              入城市后，增加了历史题材的剧目，多是从其他剧种或小说改编来
              的连台本戏。
            </p>
            <p>
              &emsp;&emsp;芗剧的传统剧目均为幕表戏。<span className="text-[#e3d7b1] font-semibold">《陈三五娘》、《山伯英台》、
              《吕蒙正》、《杂货记》被称为歌仔戏"四大柱"</span>。30 年代末，芗
              剧名艺人邵江海为改变幕表制，曾编演《六月飞雪》等定型戏。
            </p>
          </div>
        </motion.div>

        {/* 戏曲音乐 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">戏曲音乐</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">唱腔特色</h4>
              <p>
                &emsp;&emsp;芗剧唱腔为民歌联缀体结构，分为<span className="text-[#e3d7b1] font-semibold">【七字调】、【哭调】、
                【杂念调】、【杂碎调】和【民歌小调】</span>五种。主要唱腔的调式多为两调交替的混合调式，
                使曲牌的联缀顺情成理。
              </p>
            </div>
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">传统乐器</h4>
              <p>
                &emsp;&emsp;芗剧的主要乐器有<span className="text-[#e3d7b1] font-semibold">壳仔弦（用椰壳制成）、大广弦、台湾笛、月琴、六角弦</span>等。
                传统乐队分文爿和武爿，各4人，后来增设西洋管弦乐器，乐队相应扩大。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 表演艺术 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">表演艺术</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">角色行当</h4>
              <p>
                &emsp;&emsp;芗剧的行当，早期只有生、旦、丑几个角色，后来吸收京剧的
                分行，角色增加。芗剧音乐的特点是唱多旁白少，曲调自由，旋律
                优美，节奏强烈，富有较强的表现力和乡土情调。
              </p>
            </div>
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">特色技艺</h4>
              <div className="space-y-3">
                <p>
                  <span className="text-[#e3d7b1] font-semibold">矮桩步：</span>丑角表演滑稽风趣，诙谐幽默。一出场便背着舞台走
                  矮步，称为"矮桩形"，动作多模仿动物形象，如"猴子洗
                  脸"、"懒猫抓痒"、"乌龟爬沙"等。
                </p>
                <p>
                  <span className="text-[#e3d7b1] font-semibold">小生表演：</span>小生头戴罗帽，身穿短衣，腰系白堂裙，右手舞
                  "扇子花"，左手甩"长袖筒"，载歌载舞，轻松自如。
                </p>
                <p>
                  <span className="text-[#e3d7b1] font-semibold">旦角技巧：</span>旦角台步技巧丰富多姿，有一字步、十字步、交叉步等。
                  手势以耍花巾为最独特，表演细腻，生活气息浓郁。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 文化意义 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">文化意义</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              &emsp;&emsp;芗剧作为<span className="text-[#e3d7b1] font-semibold">全国唯一横跨海峡的剧种</span>，承载着深厚的历史文化内涵，
              是两岸文化交流的重要纽带。它不仅保存了闽南地区的传统民间艺术，
              更见证了两岸同胞的血脉相连和文化传承。
            </p>
            <p>
              &emsp;&emsp;通过数字化技术的创新应用，我们致力于让更多年轻人了解和体验芗剧文化，
              推动这一珍贵的非物质文化遗产在新时代焕发新的生机与活力。
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Culture, "culture");
