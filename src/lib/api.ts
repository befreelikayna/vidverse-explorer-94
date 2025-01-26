export interface Video {
  title: string;
  url: string;
  thumbnail: string;
  uploaderName: string;
  uploaderUrl: string;
  uploaderAvatar: string;
  views: number;
  uploadedDate: string;
}

export const searchVideos = async (query: string = ""): Promise<Video[]> => {
  try {
    // If there's a search query, use it, otherwise fetch from the specific channel
    if (query.trim()) {
      const response = await fetch(`https://pipedapi.reallyaweso.me/search?q=${encodeURIComponent(query)}&filter=videos`);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error('Failed to fetch videos');
      }
      
      const data = await response.json();
      return Array.isArray(data) ? data.map(video => ({
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        uploaderName: video.uploaderName,
        uploaderUrl: video.uploaderUrl,
        uploaderAvatar: video.uploaderAvatar || "/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png",
        views: video.views,
        uploadedDate: video.uploadedDate || "Unknown date"
      })) : [];
    } else {
      // Fetch videos from KIMMISO's channel
      const channelId = "UClrGKMnK9lvo83f_vl-O-RQ";
      const response = await fetch(`https://pipedapi.reallyaweso.me/channel/${channelId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Channel API Error:', errorData);
        throw new Error('Failed to fetch channel videos');
      }
      
      const data = await response.json();
      return Array.isArray(data.relatedStreams) ? data.relatedStreams.map(video => ({
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        uploaderName: video.uploaderName,
        uploaderUrl: video.uploaderUrl,
        uploaderAvatar: video.uploaderAvatar || "/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png",
        views: video.views,
        uploadedDate: video.uploadedDate || "Unknown date"
      })) : [];
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};