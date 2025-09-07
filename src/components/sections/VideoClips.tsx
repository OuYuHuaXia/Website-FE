import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { getProcessedVideos, VideoSeries } from "../../apis/videosAPI";
import { styles } from "../../constants/styles";

const VideoClips = () => {
  const [videoSeries, setVideoSeries] = useState<VideoSeries[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const processedData = await getProcessedVideos();
        setVideoSeries(processedData);
      } catch (err) {
        console.error('API Error:', err);
        setError(err instanceof Error ? err.message : '网络连接错误');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      id="videoclips"
    >
      <span className="hash-span">&nbsp;</span>
      
      <Header 
        useMotion={true} 
        p="精彩内容"
        h2="片段欣赏"
      />

      <div className="mt-10 space-y-8">
        {/* 页面介绍 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <p className="text-secondary text-[17px] leading-[30px]">
            &emsp;&emsp;在这里，您可以欣赏到精彩的芗剧表演片段，感受传统戏曲的魅力与韵味。
            每一个片段都经过精心挑选，展现了芗剧独特的艺术表现力和深厚的文化底蕴。
            让我们一起走进芗剧的世界，体验这门古老艺术的现代活力。
          </p>
        </motion.div>

        {/* 视频内容区域 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">精选视频</h3>
          
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <span className="ml-4 text-secondary text-[16px]">加载中...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 text-[16px]">
                <span className="font-semibold">加载失败：</span>{String(error)}
              </p>
            </div>
          )}

          {!loading && !error && videoSeries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary text-[16px]">暂无视频内容</p>
            </div>
          )}

          {!loading && !error && videoSeries.length > 0 && (
            <div className="space-y-8">
              {/* 视频总数统计 */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
                <p className="text-white text-[16px]">
                  共找到 <span className="text-[#e3d7b1] font-semibold">{videoSeries.reduce((total, series) => total + series.videos.length, 0)}</span> 个视频，
                  分为 <span className="text-[#e3d7b1] font-semibold">{videoSeries.length}</span> 个剧目
                </p>
              </div>

              {/* 简单的数字列表 */}
              <div className="bg-tertiary rounded-2xl p-6">
                <h4 className="text-white text-[20px] font-bold mb-6">视频列表</h4>
                <div className="space-y-4">
                  {videoSeries.map((series) => 
                    series.videos.map((video, globalIndex) => {
                      // 计算全局索引
                      const prevVideosCount = videoSeries
                        .slice(0, videoSeries.indexOf(series))
                        .reduce((count, s) => count + s.videos.length, 0);
                      const videoNumber = prevVideosCount + globalIndex + 1;
                      
                      return (
                        <motion.div
                          key={video.id}
                          variants={fadeIn("up", "spring", globalIndex * 0.05, 0.5)}
                          className="flex items-start gap-4 p-4 bg-black-100/30 rounded-lg hover:bg-black-100/50 transition-colors border border-gray-700/30"
                        >
                          {/* 数字标识 */}
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-[16px]">{videoNumber}</span>
                          </div>
                          
                          {/* 视频信息 */}
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white text-[16px] font-semibold mb-2">
                              {video.title}
                            </h5>
                            <p className="text-secondary text-[14px] mb-2">
                              剧目：{series.seriesName} | 第 {video.episode} 集
                            </p>
                            <div className="bg-black-200 rounded p-2 mb-3">
                              <p className="text-[#e3d7b1] text-[12px] font-mono break-all">
                                {video.url}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => window.open(video.url, '_blank')}
                                className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-[12px] rounded hover:from-green-600 hover:to-green-700 transition-colors"
                              >
                                播放视频
                              </button>
                              <button
                                onClick={() => navigator.clipboard.writeText(video.url)}
                                className="px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-[12px] rounded hover:from-gray-600 hover:to-gray-700 transition-colors"
                              >
                                复制链接
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 更多内容提示 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-white text-[20px] font-bold mb-4">更多精彩内容</h3>
          <p className="text-secondary text-[16px] leading-[28px]">
            &emsp;&emsp;我们会持续更新更多精彩的芗剧表演片段，包括经典剧目选段、名家演出实录、
            教学示范视频等。敬请期待更多精彩内容的上线，让我们一同传承和发扬这一珍贵的文化遗产。
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoClips;
