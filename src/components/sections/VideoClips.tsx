import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { getProcessedVideos, VideoSeries } from "../../apis/videosAPI";
import { styles } from "../../constants/styles";

// 封面图片映射
const getCoverImage = (seriesName: string): string => {
  const coverMap: { [key: string]: string } = {
    '三凤求凰': 'http://t0yy8qojh.hn-bkt.clouddn.com//封面/三凤求凰.png',
    '李三娘': 'http://t0yy8qojh.hn-bkt.clouddn.com//封面/李三娘.png',
    '杨戬救母': 'http://t0yy8qojh.hn-bkt.clouddn.com//封面/杨戬救母.png',
    '红楼梦-黛玉葬花': 'http://t0yy8qojh.hn-bkt.clouddn.com//封面/黛玉葬花.png',
    '杨丽花芗剧－红楼梦-黛玉葬花': 'http://t0yy8qojh.hn-bkt.clouddn.com//封面/黛玉葬花.png',
  };
  
  // 尝试精确匹配
  if (coverMap[seriesName]) {
    return coverMap[seriesName];
  }
  
  // 尝试模糊匹配
  for (const [key, value] of Object.entries(coverMap)) {
    if (seriesName.includes(key) || key.includes(seriesName)) {
      return value;
    }
  }
  
  // 默认封面（如果没有匹配的）
  return '';
};

const VideoClips = () => {
  const [videoSeries, setVideoSeries] = useState<VideoSeries[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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

  const handlePlayVideo = (videoUrl: string, videoTitle: string) => {
    setSelectedVideo(videoUrl);
    setPlayingVideo(videoTitle);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setPlayingVideo(null);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // 可以添加一个toast提示
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="bg-tertiary rounded-2xl p-8"
        >
          <p className="text-secondary text-[17px] leading-[30px]">
            &emsp;&emsp;在这里，您可以欣赏到精彩的芗剧表演片段，感受传统戏曲的魅力与韵味。
            每一个片段都经过精心挑选，展现了芗剧独特的艺术表现力和深厚的文化底蕴。
            让我们一起走进芗剧的世界，体验这门古老艺术的现代活力。
          </p>
        </motion.div>

        {/* 视频播放器 */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseVideo}
          >
            <div 
              className="bg-tertiary rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-[20px] font-bold">{playingVideo}</h3>
                <button
                  onClick={handleCloseVideo}
                  className="text-white hover:text-red-400 text-[24px] font-bold"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onError={() => {
                    setError('视频加载失败，请检查网络连接或视频链接');
                  }}
                >
                  您的浏览器不支持视频播放
                </video>
              </div>
            </div>
          </motion.div>
        )}

        {/* 视频内容区域 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
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
                  共有 <span className="text-[#e3d7b1] font-semibold">{videoSeries.reduce((total, series) => total + series.videos.length, 0)}</span> 个视频，
                  分为 <span className="text-[#e3d7b1] font-semibold">{videoSeries.length}</span> 个剧目
                </p>
              </div>

              {/* 按剧目分组的视频列表 */}
              <div className="space-y-8">
                {videoSeries.map((series, seriesIndex) => (
                  <motion.div
                    key={series.seriesName}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={fadeIn("up", "spring", seriesIndex * 0.1, 0.75)}
                    className="bg-gradient-to-r from-black/40 to-black/20 rounded-2xl p-6 border border-gray-700/30"
                  >
                    <h4 className="text-white text-[20px] font-bold mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                        {series.seriesName}
                      </span>
                      <span className="ml-3 text-[#e3d7b1] text-[14px] font-normal">
                        ({series.videos.length} 集)
                      </span>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {series.videos.map((video, videoIndex) => (
                        <motion.div
                          key={video.id}
                          variants={fadeIn("up", "spring", videoIndex * 0.05, 0.5)}
                          className="bg-tertiary rounded-lg p-4 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                          {/* 视频缩略图区域 */}
                          <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg mb-3 relative overflow-hidden group cursor-pointer"
                               onClick={() => handlePlayVideo(video.url, video.title)}>
                            {getCoverImage(series.seriesName) ? (
                              <>
                                <img 
                                  src={getCoverImage(series.seriesName)} 
                                  alt={series.seriesName}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  onError={(e) => {
                                    // 如果图片加载失败，显示默认内容
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                                {/* 播放按钮覆盖层 */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </>
                            ) : (
                              // 默认显示（没有封面图片时）
                              <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <p className="text-white/60 text-[12px]">点击播放</p>
                                </div>
                              </div>
                            )}
                            
                            {/* 集数标识 */}
                            <div className="absolute top-2 right-2 bg-black/70 text-white text-[12px] px-2 py-1 rounded backdrop-blur-sm">
                              第 {video.episode} 集
                            </div>
                          </div>
                          
                          {/* 视频信息 */}
                          <div className="space-y-3">
                            <h5 className="text-white text-[14px] font-semibold line-clamp-2 leading-tight">
                              {video.title}
                            </h5>
                            
                            {/* 操作按钮 */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => handlePlayVideo(video.url, video.title)}
                                className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-[12px] rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-1"
                              >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                播放
                              </button>
                              <button
                                onClick={() => copyToClipboard(video.url)}
                                className="px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-[12px] rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center"
                                title="复制链接"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* 更多内容提示 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
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