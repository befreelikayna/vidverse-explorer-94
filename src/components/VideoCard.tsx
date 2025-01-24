import { Video } from "@/lib/api";

export const VideoCard = ({ video }: { video: Video }) => {
  return (
    <div className="group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
      <div className="aspect-video rounded-lg overflow-hidden mb-3">
        <img
          src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png"
          alt={video.title}
          className="w-full h-full object-cover"
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
  );
};