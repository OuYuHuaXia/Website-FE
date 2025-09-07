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

// API基础配置
const API_BASE_URL = 'http://127.0.0.1:4523/m1/6959045-6676200-default';

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
    return data;
  } catch (error) {
    console.error('Error fetching user videos:', error);
    throw error;
  }
};

// 导出所有API函数
export default {
  getUserVideos,
};
