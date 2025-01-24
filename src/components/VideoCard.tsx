import { Video } from "@/lib/api";
import { useState } from "react";

export const VideoCard = ({ video }: { video: Video }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoId = video.url.split("v=")[1] || "";

  return (
    <div className="transition-all duration-500 ease-in-out">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
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
        <div className="mt-4 animate-scale-in">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2 text-white">{video.title}</h1>
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png"
                alt={video.uploaderName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-white">{video.uploaderName}</p>
                <p className="text-sm text-gray-400">
                  {video.views.toLocaleString()} views
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};