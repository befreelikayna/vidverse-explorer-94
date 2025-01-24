import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchVideos } from "@/lib/api";

const Player = () => {
  const { videoId } = useParams();
  const { data: videos = [] } = useQuery({
    queryKey: ["videos"],
    queryFn: () => searchVideos(),
  });

  const video = videos.find((v) => v.url.includes(videoId || ""));

  if (!video) {
    return <div className="text-white">Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="aspect-video w-full mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png"
            alt={video.uploaderName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{video.uploaderName}</p>
            <p className="text-sm text-gray-400">
              {video.views.toLocaleString()} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;