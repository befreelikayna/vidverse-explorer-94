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
    // Use a default search term when query is empty and always include filter parameter
    const searchQuery = query.trim() || "music";
    const response = await fetch(`https://pipedapi.reallyaweso.me/search?q=${encodeURIComponent(searchQuery)}&filter=videos`);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error('Failed to fetch videos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};