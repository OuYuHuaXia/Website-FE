// API响应类型定义
export interface ApiResponse<T> {
  code: number;
  data: T;
  message: string | null;
}

// 视频列表响应类型
export interface VideosResponse {
  code: number;
  data: string[];
  message: string | null;
}

// 处理后的视频信息
export interface ProcessedVideo {
  id: string;
  title: string;
  url: string;
  series: string;
  episode: number;
  originalFileName: string;
}

// 按剧目分组的视频数据
export interface VideoSeries {
  seriesName: string;
  videos: ProcessedVideo[];
}

// API基础配置
const API_BASE_URL = 'http://47.115.50.106:8080/api/v1';

// 处理和过滤视频数据
export const processVideoData = (rawUrls: string[]): VideoSeries[] => {
  // 1. 过滤出真正的视频文件
  const videoUrls = rawUrls.filter(url => {
    return url.endsWith('.mp4') && !url.endsWith('/');
  });

  // 2. 处理每个视频URL，提取信息
  const processedVideos: ProcessedVideo[] = videoUrls.map((url, index) => {
    // 提取文件名
    const fileName = url.split('/').pop() || '';
    
    // 解析文件名，提取剧目名称和集数
    let series = '';
    let episode = 1;
    const title = fileName.replace('.mp4', '');

    // 匹配集数模式 《数字》
    const episodeMatch = title.match(/《(\d+)》/);
    if (episodeMatch) {
      episode = parseInt(episodeMatch[1]);
      // 移除集数部分，得到剧目名称
      series = title.replace(/《\d+》/, '').trim();
    } else {
      // 如果没有集数，将整个文件名作为剧目名称
      series = title;
    }

    // 清理剧目名称
    series = series.replace(/^芗剧-/, '').trim();

    return {
      id: `video-${index}`,
      title: title,
      url: url,
      series: series,
      episode: episode,
      originalFileName: fileName
    };
  });

  // 3. 按剧目分组
  const seriesMap = new Map<string, ProcessedVideo[]>();
  
  processedVideos.forEach(video => {
    if (!seriesMap.has(video.series)) {
      seriesMap.set(video.series, []);
    }
    seriesMap.get(video.series)!.push(video);
  });

  // 4. 转换为数组并排序
  const videoSeries: VideoSeries[] = Array.from(seriesMap.entries()).map(([seriesName, videos]) => ({
    seriesName,
    videos: videos.sort((a, b) => a.episode - b.episode) // 按集数排序
  }));

  // 按剧目名称排序
  return videoSeries.sort((a, b) => a.seriesName.localeCompare(b.seriesName));
};

// 获取用户视频列表
export const getUserVideos = async (): Promise<VideosResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: VideosResponse = await response.json();
    console.log('Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching user videos:', error);
    throw error;
  }
};

// 获取处理后的视频数据
export const getProcessedVideos = async (): Promise<VideoSeries[]> => {
  try {
    const response = await getUserVideos();
    if (response.code === 0) {
      return processVideoData(response.data);
    } else {
      throw new Error(response.message || '获取视频数据失败');
    }
  } catch (error) {
    console.error('Error processing videos:', error);
    throw error;
  }
};

// 导出所有API函数
export default {
  getUserVideos,
  getProcessedVideos,
  processVideoData,
};
