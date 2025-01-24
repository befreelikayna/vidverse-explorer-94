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
    const response = await fetch(`https://pipedapi.reallyaweso.me/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to fetch videos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};