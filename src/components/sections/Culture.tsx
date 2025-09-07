import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";

const Culture = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      id="culture"
    >
      <span className="hash-span">&nbsp;</span>
      
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
          <img src="http://t0yy8qojh.hn-bkt.clouddn.com//word图片/1.webp" alt="culture" className="w-full h-[700px] object-cover rounded-2xl mt-8" />
        </motion.div>

        {/* 剧种源流 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">剧种源流</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              &emsp;&emsp;芗剧，原名歌仔戏，亦名子弟戏，起源于漳州。明末清初，郑
成功率部收复台湾，把流传于漳州的“歌仔”（锦歌）、“车鼓
弄”等民间艺术带到台湾，并与当地民歌小调结合，在农村、渔区
广泛流行，出现坐唱形式的“歌仔馆”。清末，由于迎神赛会的需
要，清唱的“歌仔馆”走上广场，出现化妆游行的表演形式，时称
“歌仔阵”。此后，“歌仔阵”吸收梨园戏、四平戏和乱弹的剧目
及表演艺术,在农村谷场、庙埕牵草绳圈地演出,民间俗称“落地扫”。
逢年过节，也搭戏棚表演。因为是从“歌仔阵”发展起来的，故称
歌仔戏。
            </p>
            <p>
              &emsp;&emsp;歌仔戏音乐曲调富有地方色彩，使用方言俚语，通俗易懂，又
博采其他剧种的优秀剧目与表演艺术，民国初年盛行一时。民国 17
年（1928 年）4 月，台湾歌仔戏三乐轩班来漳州白礁慈济宫进香、
演出，大受群众欢迎。于是龙溪、海澄等县城乡，纷纷成立歌仔馆
或歌仔戏班。民国 20 年，龙溪竹马戏班宝德春首先改唱歌仔戏，
随后一些小梨园、竹马戏班也改唱歌仔戏。民间近百个南馆、北馆
也改为歌仔馆，逐渐转为子弟戏班。抗日战争爆发后，地方政府把
形成于台湾的歌仔戏视为“亡国调”，通令禁演。当时，邵江海、
林文祥等艺人从锦歌吸收养分,创作了杂碎调。他们以杂碎调为主曲,
六角弦为主弦，并吸收高甲戏、梨园戏、竹马戏、汉剧部分曲调，
融汇南曲、南词、山歌小调，重新创作一套新的唱腔改良调，搬上
舞台演出，时称改良戏。改良戏在漳州龙溪一带广泛流传与发展，
仅龙溪县的改良戏班、歌仔馆就有 200 多个。较著名的职业班社有
龙凤春、宝德春、金宝丘、金瑞春、艳芳春、新金春、宝莲丘、笋
仔班等。苏登发、甘文质、宋占美、陈金木、姚九婴、叶振东、颜
扁等一批名艺人崭露头角。民国 29 年末，国民党龙溪社会服务处
以“扩大抗日宣传”为借口，插手子弟戏班社，并塞进黄色歌曲，
使改良戏一度走向歧途。抗战胜利后，舞台上出现改良调与歌仔调
合流融汇的盛况。民国 37 年，南靖县都马抗建剧团（子弟戏班）
前往台湾演出，带去改良戏和新编杂碎调，受到台胞的喜爱与欢迎。
            </p>
            <p>
              &emsp;&emsp;新中国成立后，由于改良调（子弟戏）主要流行于龙溪芗江一
带，就正式改称芗剧。1951 年 8 月，歌仔戏霓光班与子弟戏新春
班合并成立漳州市实验芗剧团。从此，芗剧逐渐发展成为福建省五
大剧种之一。50 年代初，南靖、漳浦、龙溪、海澄、华安、长泰相
继组织县一级专业芗剧团。各剧团贯彻中央戏改政策，推行“改制、
改戏、改人”措施，政府向专业剧团派去干部和文化教员,组织艺人
学习,剧团管理逐步走向正轨。通过记录、整理传统剧目，逐步改幕
表制为剧本制，芗剧表演艺术逐渐成熟。芗剧团创作与上演了不少
优秀新剧目，参加省、华东区的戏剧会演，频频得奖。1960 年，
龙溪专区芗剧团（原漳州实验芗剧团）参加全国巡回演出，进一步
扩大芗剧的影响和知名度。



<p>
              &emsp;&emsp;“文化大革命”期间，芗剧专业剧团全部被解散。粉碎江青反革
命集团后，各县芗剧团相继恢复并有所发展。1979 年，新编歌仔
戏现代剧《双剑春》晋京参加建国 30 周年献礼演出,芗剧首次进入
首都舞台。

</p>
1983 年、1988 年漳州市芗剧团两次出访新加坡,带去面目一
新、风格鲜明的芗剧艺术，共演出 49 场,受到各界的赞赏,新加坡政
界、商界、文艺界、宗教界一些名人均出席观看演出。1990 年，
台湾明声歌仔戏剧团首次采用大陆的剧本,改编演出漳州芗剧《琴剑
恨》。至 1990 年，全市有专业芗剧团 6 个，民间职业剧团 50 多个，
还有许多业余剧团遍布城乡。全市涌现了李少楼、姚九婴、宋占美、
陈玛玲、纪招治、谢秀莲、张丹、郑秀琴、戴进德、洪彩莲、杨丽
玲、郭维窕、江铁、蓝海滨等著名芗剧艺人。
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
    </motion.section>
  );
};

export default Culture;
