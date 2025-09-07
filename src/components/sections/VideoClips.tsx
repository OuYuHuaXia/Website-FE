import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { getUserVideos, VideosResponse } from "../../apis/videosAPI";

const VideoClips = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response: VideosResponse = await getUserVideos();
        
        if (response.code === 0) {
          // 确保数据是字符串数组
          const videoList = Array.isArray(response.data) 
            ? response.data.filter(item => typeof item === 'string')
            : [];
          setVideos(videoList);
        } else {
          setError(response.message || '获取视频失败');
        }
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
    <>
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

          {!loading && !error && videos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary text-[16px]">暂无视频内容</p>
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.filter(url => url && typeof url === 'string').map((videoUrl, index) => (
                <motion.div
                  key={`video-${index}`}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="bg-black-200 rounded-xl overflow-hidden shadow-card"
                >
                  <div className="relative">
                    {/* 检查是否是视频URL */}
                    {videoUrl.includes('.mp4') || videoUrl.includes('.webm') || videoUrl.includes('.ogg') ? (
                      <video 
                        src={videoUrl}
                        controls
                        className="w-full h-48 object-cover"
                        poster=""
                      >
                        您的浏览器不支持视频播放。
                      </video>
                    ) : (
                      /* 如果不是视频文件，显示为链接 */
                      <div className="w-full h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <p className="text-white text-sm">点击观看</p>
                        </div>
                      </div>
                    )}
                    
                    {/* 视频覆盖层 */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors cursor-pointer"
                         onClick={() => window.open(videoUrl, '_blank')}>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-white text-[16px] font-semibold mb-2">
                      芗剧片段 {index + 1}
                    </h4>
                    <p className="text-secondary text-[14px] truncate">
                      {typeof videoUrl === 'string' ? videoUrl : 'Invalid URL'}
                    </p>
                    <button
                      onClick={() => window.open(videoUrl, '_blank')}
                      className="mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
                    >
                      观看视频
                    </button>
                  </div>
                </motion.div>
              ))}
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
    </>
  );
};

export default SectionWrapper(VideoClips, "videoclips");
