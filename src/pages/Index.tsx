import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { VideoGrid } from "@/components/VideoGrid";
import { searchVideos } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ["videos", searchQuery],
    queryFn: () => searchVideos(searchQuery),
    select: (data) => {
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-blue-500">
              <AvatarImage src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png" alt="KIMMISO" />
              <AvatarFallback>KM</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold text-white">KIMMISO</span>
          </div>
          <div className="flex-1 mx-4">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-white">Insta</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.open('https://www.instagram.com/kimmiso1194/', '_blank')}
            >
              <Avatar className="h-12 w-12 border-2 border-pink-500 hover:border-pink-400 transition-colors">
                <AvatarImage src="/lovable-uploads/539de762-71b5-4183-9e88-1071a8c6ea5c.png" alt="KIMMISO Instagram" />
                <AvatarFallback>
                  <Instagram className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
        <VideoGrid videos={videos} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;