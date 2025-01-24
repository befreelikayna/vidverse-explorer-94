import { Video } from "@/lib/api";
import { VideoCard } from "./VideoCard";
import { LoadingSkeleton } from "./LoadingSkeleton";

interface VideoGridProps {
  videos: Video[];
  isLoading: boolean;
}

export const VideoGrid = ({ videos, isLoading }: VideoGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};