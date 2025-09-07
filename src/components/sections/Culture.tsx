import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";

const Culture = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 确保内容在组件挂载后一定时间内显示，作为fallback
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl ${isVisible ? 'opacity-100' : ''}`}
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            &emsp;&emsp;芗剧原名歌仔戏，是流行于福建漳州芗江一带的汉族戏曲剧种。
            芗江是福建九龙江流经漳州时的简称。芗剧是<span className="text-[#e3d7b1] font-semibold">全国 360 多个地方戏
            剧中唯一横跨海峡的剧种</span>，也是两岸群众文艺交流的纽带。其足迹
            遍及于龙溪、晋江、厦门、台湾省及东南亚华侨居住地区。
          </motion.p>
          <img src="http://t0yy8qojh.hn-bkt.clouddn.com//word图片/1.webp" alt="culture" className="w-full h-[700px] object-cover rounded-2xl mt-8" />
        </motion.div>

        {/* 剧种源流 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">剧种源流</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            {/* 起源发展 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">起源与早期发展</h4>
              <p>
                &emsp;&emsp;芗剧，原名歌仔戏，亦名子弟戏，起源于漳州。<span className="text-[#e3d7b1] font-semibold">明末清初，郑
                成功率部收复台湾</span>，把流传于漳州的"歌仔"（锦歌）、"车鼓
                弄"等民间艺术带到台湾，并与当地民歌小调结合，在农村、渔区
                广泛流行，出现坐唱形式的"歌仔馆"。
              </p>
              <p>
                &emsp;&emsp;清末，由于迎神赛会的需要，清唱的"歌仔馆"走上广场，出现化妆游行的表演形式，时称
                "歌仔阵"。此后，"歌仔阵"吸收梨园戏、四平戏和乱弹的剧目
                及表演艺术,在农村谷场、庙埕牵草绳圈地演出,民间俗称<span className="text-[#e3d7b1] font-semibold">"落地扫"</span>。
                逢年过节，也搭戏棚表演。因为是从"歌仔阵"发展起来的，故称
                歌仔戏。
              </p>
            </div>

            {/* 民国时期发展 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">民国时期的繁荣与变革</h4>
              <p>
                &emsp;&emsp;歌仔戏音乐曲调富有地方色彩，使用方言俚语，通俗易懂，又
                博采其他剧种的优秀剧目与表演艺术，民国初年盛行一时。<span className="text-[#e3d7b1] font-semibold">民国 17
                年（1928 年）4 月，台湾歌仔戏三乐轩班来漳州白礁慈济宫进香、
                演出</span>，大受群众欢迎。
              </p>
              <p>
                &emsp;&emsp;抗日战争爆发后，地方政府把形成于台湾的歌仔戏视为"亡国调"，通令禁演。当时，
                <span className="text-[#e3d7b1] font-semibold">邵江海、林文祥等艺人从锦歌吸收养分,创作了杂碎调</span>。他们以杂碎调为主曲,
                六角弦为主弦，并吸收高甲戏、梨园戏、竹马戏、汉剧部分曲调，
                融汇南曲、南词、山歌小调，重新创作一套新的唱腔改良调，搬上
                舞台演出，时称<span className="text-[#e3d7b1] font-semibold">改良戏</span>。
              </p>
              <div className="bg-black/20 rounded-lg p-4 mt-4">
                <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-2">著名职业班社：</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[15px]">
                  <span>• 龙凤春</span>
                  <span>• 宝德春</span>
                  <span>• 金宝丘</span>
                  <span>• 金瑞春</span>
                  <span>• 艳芳春</span>
                  <span>• 新金春</span>
                  <span>• 宝莲丘</span>
                  <span>• 笋仔班</span>
                </div>
              </div>
            </div>

            {/* 新中国成立后 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">新中国成立后的发展</h4>
              <p>
                &emsp;&emsp;新中国成立后，由于改良调（子弟戏）主要流行于龙溪芗江一
                带，就<span className="text-[#e3d7b1] font-semibold">正式改称芗剧</span>。<span className="text-[#e3d7b1] font-semibold">1951 年 8 月，歌仔戏霓光班与子弟戏新春
                班合并成立漳州市实验芗剧团</span>。从此，芗剧逐渐发展成为福建省五
                大剧种之一。
              </p>
              <p>
                &emsp;&emsp;<span className="text-[#e3d7b1] font-semibold">1960 年，龙溪专区芗剧团（原漳州实验芗剧团）参加全国巡回演出</span>，进一步
                扩大芗剧的影响和知名度。1979 年，新编歌仔戏现代剧《双剑春》晋京参加建国 30 周年献礼演出,
                芗剧首次进入首都舞台。
              </p>
              <div className="bg-black/20 rounded-lg p-4 mt-4">
                <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-2">国际交流成果：</h5>
                <ul className="text-[15px] space-y-1">
                  <li>• 1983年、1988年漳州市芗剧团两次出访新加坡，共演出49场</li>
                  <li>• 1990年台湾明声歌仔戏剧团首次采用大陆剧本，改编演出《琴剑恨》</li>
                  <li>• 至1990年，全市有专业芗剧团6个，民间职业剧团50多个</li>
                </ul>
              </div>
              <img src="http://t0yy8qojh.hn-bkt.clouddn.com//word图片/2.jpg" alt="culture" className="w-full h-[600px] object-cover rounded-2xl mt-8" />
            </div>
          </div>
        </motion.div>

        {/* 传统剧目 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">传统剧目</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            <div>
              <p>
                &emsp;&emsp;芗剧的传统剧目大约有<span className="text-[#e3d7b1] font-semibold">五百多个</span>。最初多用歌仔戏的唱本，进
                入城市后，增加了历史题材的剧目，多是从其他剧种或小说改编来
                的连台本戏。
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 mt-4 border border-purple-500/20">
                <h4 className="text-white text-[18px] font-semibold mb-3">歌仔戏"四大柱"</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#e3d7b1] text-[20px]">•</span>
                    <span className="text-[#e3d7b1] font-semibold">《陈三五娘》</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#e3d7b1] text-[20px]">•</span>
                    <span className="text-[#e3d7b1] font-semibold">《山伯英台》</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#e3d7b1] text-[20px]">•</span>
                    <span className="text-[#e3d7b1] font-semibold">《吕蒙正》</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#e3d7b1] text-[20px]">•</span>
                    <span className="text-[#e3d7b1] font-semibold">《杂货记》</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">剧目发展历程</h4>
              <p>
                &emsp;&emsp;<span className="text-[#e3d7b1] font-semibold">1939年后，艺人邵江海首先废除幕表制</span>，编定本剧种的第一个文学剧本《六月
                飞霜》（又名《六月雪》），以后又编演了《白蛇传》、《白扇
                记》、《山伯英台》、《陈三五娘》、《安安寻母》等三十多出戏，
                初步奠定了芗剧传统剧目的基础。
              </p>
              <img src="http://t0yy8qojh.hn-bkt.clouddn.com//word图片/3.webp" alt="culture" className="w-full h-[600px] object-cover rounded-2xl mt-8" />
              <p>
                &emsp;&emsp;新中国成立后，推行戏改政策，龙溪专区成立剧目工作室，组
                织力量对传统剧目进行发掘、记录、整理。<span className="text-[#e3d7b1] font-semibold">芗剧老艺人口述的传统剧目有 984 个，至 1963 年记录 410 个</span>，其中
                42 个剧本收入《传统剧目选》，4 个剧目收入《中国戏曲选》（福
                建省卷）。
              </p>
            </div>

            <div className="bg-black/20 rounded-lg p-4">
              <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-2">现代戏成就：</h5>
              <ul className="text-[15px] space-y-1">
                <li>• 历年来上演创作和移植的现代戏80多个，在全省名列前茅</li>
                <li>• 《戏魂》获得全国现代戏会演优秀编剧奖、文化部第二届文华剧作奖</li>
                <li>• 《月蚀》、《侨乡轶事》在全省获一等奖</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 戏曲音乐 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">戏曲音乐</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            {/* 唱腔特色 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">唱腔体系</h4>
              <p>
                &emsp;&emsp;芗剧唱腔为<span className="text-[#e3d7b1] font-semibold">民歌联缀体结构</span>，分为五种主要类型：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">【七字调】</h5>
                  <p className="text-[15px]">由锦歌发展而成，羽调式，分高、低两腔。高腔适于表现喜悦、激动之情；低腔适于沉思、悲叹。</p>
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4 border border-green-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">【杂碎调】</h5>
                  <p className="text-[15px]">从锦歌【杂碎】改良发展而成，旋律丰富，板式多样，适于叙述抒情。</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">【杂念调】</h5>
                  <p className="text-[15px]">又称【台湾杂念调】，旋律、节奏、速度都比较自由灵活，是唱念结合的多段体宣叙调。</p>
                </div>
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 border border-red-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">【哭调】</h5>
                  <p className="text-[15px]">从丧礼哭腔和民俗歌谣中提炼，有【大哭调】、【艋舺哭】、【宜兰哭】等近20首曲牌。</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-900/30 to-green-900/30 rounded-lg p-4 border border-yellow-500/20 mt-4">
                <h5 className="text-[#e3d7b1] font-semibold mb-2">【民歌小调】</h5>
                <p className="text-[15px]">俗称"调仔"，有【锦歌五空仔】、【倍思仔】、【思想起】、【心酸酸】、【行船调】等100多支曲牌。</p>
              </div>
            </div>

            {/* 乐器介绍 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">传统乐器</h4>
              <p>
                &emsp;&emsp;芗剧的主要乐器具有浓郁的闽南特色：
              </p>
              <div className="bg-black/20 rounded-lg p-4 mt-4">
                <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-3">主要乐器：</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 壳仔弦：</span>用椰壳制成的特色弦乐器
                  </div>
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 大广弦：</span>用龙舌茎作共鸣箱，梧桐木为箱板
                  </div>
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 台湾笛：</span>又名梆子箫，音色清脆
                  </div>
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 月琴：</span>圆形共鸣箱的弹拨乐器
                  </div>
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 六角弦：</span>又名二胡，共鸣箱为六角形
                  </div>
                  <div>
                    <span className="text-[#e3d7b1] font-semibold">• 鸭母笛：</span>又名竖管，簧嘴似鸭嘴巴
                  </div>
                </div>
              </div>
            </div>

            {/* 器乐组成 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">器乐体系</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-b from-blue-900/30 to-transparent rounded-lg p-4 border border-blue-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">琴串</h5>
                  <p className="text-[14px]">即丝弦乐曲，曲牌有200多首，常用的有【一枝花】、【珠串】、【菊花串】等80多首。</p>
                </div>
                <div className="bg-gradient-to-b from-green-900/30 to-transparent rounded-lg p-4 border border-green-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">哗牌</h5>
                  <p className="text-[14px]">用大唢呐吹奏的曲牌，有军乐【朝元歌】、喜乐【科场】、哀乐【火石榴】等近80首。</p>
                </div>
                <div className="bg-gradient-to-b from-purple-900/30 to-transparent rounded-lg p-4 border border-purple-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">介头</h5>
                  <p className="text-[14px]">即锣鼓经，现有120多种，分场面介头、唱腔介头、科白介头、哗牌介头四类。</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 表演艺术 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">表演艺术</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-6">
            {/* 角色行当 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">角色行当</h4>
              <p>
                &emsp;&emsp;芗剧的行当，早期只有生、旦、丑几个角色，后来吸收京剧的
                分行，角色增加。芗剧音乐的特点是<span className="text-[#e3d7b1] font-semibold">唱多旁白少，曲调自由，旋律
                优美，节奏强烈</span>，富有较强的表现力和乡土情调。
              </p>
              <img src="http://t0yy8qojh.hn-bkt.clouddn.com//word图片/4.webp" alt="culture" className="w-full h-[600px] object-cover rounded-2xl mt-8" />
            </div>

            {/* 基本功训练 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">基本功体系</h4>
              <p>
                &emsp;&emsp;芗剧吸收外来剧种（四平戏、汉剧、乱弹、京剧等）的表演艺
                术，创造发展了自己的表演程式。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-2">基本功训练：</h5>
                  <ul className="text-[15px] space-y-1">
                    <li>• 步法、趟马、跳台</li>
                    <li>• 四角枪和"三十二刀"</li>
                    <li>• 指法、水袖、扇功</li>
                    <li>• 伞功和麈尾功</li>
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h5 className="text-[#e3d7b1] text-[16px] font-semibold mb-2">指法技巧：</h5>
                  <div className="text-[14px] grid grid-cols-2 gap-1">
                    <span>• 鹰爪指</span>
                    <span>• 兰花手</span>
                    <span>• 双鹰爪</span>
                    <span>• 双阳手</span>
                    <span>• 波浪指</span>
                    <span>• 剑指</span>
                    <span>• 寻思指</span>
                    <span>• 招手指</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 特色技艺 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">特色技艺</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 border border-red-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">矮桩步（丑角表演）</h5>
                  <p className="text-[15px] mb-2">
                    丑角表演滑稽风趣，诙谐幽默。一出场便背着舞台走矮步，称为<span className="text-[#e3d7b1] font-semibold">"矮桩形"</span>，
                    分为高桩、中桩和短桩三种。
                  </p>
                  <div className="text-[14px] grid grid-cols-2 md:grid-cols-3 gap-2">
                    <span>• 猴子洗脸</span>
                    <span>• 懒猫抓痒</span>
                    <span>• 乌龟爬沙</span>
                    <span>• 鸡公啄米</span>
                    <span>• 画眉跳梁</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">小生表演</h5>
                  <p className="text-[15px]">
                    小生头戴罗帽，身穿短衣，腰系白堂裙，右手舞<span className="text-[#e3d7b1] font-semibold">"扇子花"</span>，
                    左手甩<span className="text-[#e3d7b1] font-semibold">"长袖筒"</span>，载歌载舞，轻松自如。
                    手势动作配合高步、矮步，体现生活情形。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-4 border border-pink-500/20">
                  <h5 className="text-[#e3d7b1] font-semibold mb-2">旦角技巧</h5>
                  <p className="text-[15px] mb-2">
                    旦角台步技巧丰富多姿，手势以<span className="text-[#e3d7b1] font-semibold">耍花巾为最独特</span>，
                    表演细腻，生活气息浓郁。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[14px]">
                    <div>
                      <span className="text-[#e3d7b1] font-semibold">台步：</span>一字步、十字步、交叉步、蹀步、云步、碎步等
                    </div>
                    <div>
                      <span className="text-[#e3d7b1] font-semibold">技巧：</span>摘茶、采桑、纳鞋、撑船、推磨、绣花、耍伞等
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 艺术特点 */}
            <div>
              <h4 className="text-white text-[20px] font-semibold mb-3">艺术特点</h4>
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 border border-yellow-500/20">
                <p className="text-[16px]">
                  &emsp;&emsp;芗剧唱腔特点是<span className="text-[#e3d7b1] font-semibold">曲多白少，格律自由，旋律优美，节奏强烈</span>，
                  具有较强的艺术表现力。唱词通俗，多用生动的民间语汇，<span className="text-[#e3d7b1] font-semibold">乡土气息浓厚</span>。
                  主要曲调有七字仔调、杂念调、大调、倍思及其他民歌、时曲。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 文化意义 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">文化意义与传承</h3>
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              &emsp;&emsp;芗剧作为<span className="text-[#e3d7b1] font-semibold">全国唯一横跨海峡的剧种</span>，承载着深厚的历史文化内涵，
              是两岸文化交流的重要纽带。它不仅保存了闽南地区的传统民间艺术，
              更见证了两岸同胞的血脉相连和文化传承。
            </p>
            <p>
              &emsp;&emsp;芗剧音乐源于闽南地区汉族民间音乐，由流传在台湾的闽南
              "歌仔"（锦歌）与台湾地区汉族民间音乐结合形成。它既有来自漳州地区汉族民间音乐锦歌、十音、
              八音，也吸收竹马戏、潮剧、京剧、南曲的音乐，形成了独特的艺术风格。
            </p>
            <p>
              &emsp;&emsp;50年代以后，由于新音乐工作者的加入，芗剧从填词、配曲改为作
              曲、配器，并发展了和声、伴唱。增加了二胡、扬琴、笙、中阮、大阮等民族乐器，
              并引进西洋管弦乐，使<span className="text-[#e3d7b1] font-semibold">芗剧音乐更加丰富多彩，更具表现力</span>。
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