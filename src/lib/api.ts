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
      return data;
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
      return data.relatedStreams;
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};