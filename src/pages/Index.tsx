import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { VideoGrid } from "@/components/VideoGrid";
import { searchVideos } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ["videos", searchQuery],
    queryFn: () => searchVideos(searchQuery),
    select: (data) => {
      // Ensure we always return an array
      if (!Array.isArray(data)) {
        console.error("Received non-array data:", data);
        return [];
      }
      return data;
    },
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to load videos. Please try again later.",
    });
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <VideoGrid videos={videos} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;