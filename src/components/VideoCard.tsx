import { Video } from "@/lib/api";

interface VideoCardProps {
  video: Video;
  isExpanded: boolean;
  onExpand: (videoUrl: string) => void;
}

export const VideoCard = ({ video, isExpanded, onExpand }: VideoCardProps) => {
  const videoId = video.url.split("v=")[1] || "";

  return (
    <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'col-span-full' : ''}`}>
      <div 
        onClick={() => onExpand(video.url)}
        className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      >
        <div className="aspect-video rounded-lg overflow-hidden mb-3">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex gap-3">
          <img
            src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png"
            alt={video.uploaderName}
            className="w-9 h-9 rounded-full"
          />
          <div>
            <h3 className="font-medium text-white line-clamp-2 group-hover:text-blue-400">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{video.uploaderName}</p>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <span>{video.views.toLocaleString()} views</span>
              <span>•</span>
              <span>{video.uploadedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-gray-950/90 overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-8">
              <button 
                onClick={() => onExpand(video.url)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
              >
                ✕
              </button>
              <div className="max-w-7xl mx-auto">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-3xl font-bold mb-4 text-white">{video.title}</h1>
                  <div className="flex items-center gap-4">
                    <img
                      src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png"
                      alt={video.uploaderName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-xl text-white">{video.uploaderName}</p>
                      <p className="text-gray-400">
                        {video.views.toLocaleString()} views • {video.uploadedDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};