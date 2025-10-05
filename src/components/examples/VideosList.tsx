import { useEffect, useState } from 'react';
import { getUserVideos, VideosResponse } from '../../apis/videosAPI';

// 使用示例组件
const VideosList = () => {
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
          setVideos(response.data);
        } else {
          setError(response.message || 'Failed to fetch videos');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video}</li>
        ))}
      </ul>
    </div>
  );
};

export default VideosList;
