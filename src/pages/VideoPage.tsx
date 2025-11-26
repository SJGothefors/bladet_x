import { BottomNavigation } from "@/components/BottomNavigation.tsx";
import { useState } from 'react';
import { mockVideos } from '@/data/mockVideoData';
import { Video } from '@/data/classes';
import { VideoCard } from '@/components/VideoCard';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VideoPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function VideoPage({ activeTab, onTabChange }: VideoPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'News', 'Sports', 'Culture', 'Politics'];

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleBack = () => {
    setSelectedVideo(null);
  };

  const handleReactionChange = (videoId: string, reaction: string) => {
    setVideos(videos.map(v => {
      if (v.id === videoId) {
        const currentReaction = v.userReaction;
        const newReactions = { ...v.reactions };
        
        if (currentReaction) {
          newReactions[currentReaction] = (newReactions[currentReaction] || 0) - 1;
        }
        
        if (currentReaction !== reaction) {
          newReactions[reaction as keyof typeof newReactions] = (newReactions[reaction as keyof typeof newReactions] || 0) + 1;
          return { ...v, reactions: newReactions, userReaction: reaction as any };
        }
        
        return { ...v, reactions: newReactions, userReaction: undefined };
      }
      return v;
    }));
  };

  const handlePlayerReactionChange = (reaction: string) => {
    if (selectedVideo) {
      handleReactionChange(selectedVideo.id, reaction);
      setSelectedVideo({
        ...selectedVideo,
        reactions: videos.find(v => v.id === selectedVideo.id)?.reactions || selectedVideo.reactions,
        userReaction: videos.find(v => v.id === selectedVideo.id)?.userReaction,
      });
    }
  };

  const filteredVideos = categoryFilter === 'All'
    ? videos
    : videos.filter(v => v.category === categoryFilter);

  const widescreenVideos = filteredVideos.filter(v => v.format === 'widescreen');
  const verticalVideos = filteredVideos.filter(v => v.format === 'vertical');

  if (selectedVideo) {
    return (
      <VideoPlayer 
        video={selectedVideo} 
        onBack={handleBack}
        onReactionChange={handlePlayerReactionChange}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Videos</h1>
          <Tabs value={categoryFilter} onValueChange={setCategoryFilter}>
            <TabsList className="w-full justify-start overflow-x-auto">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="p-4 max-w-7xl mx-auto">

        {/* Widescreen Videos Section */}
        {widescreenVideos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {widescreenVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video)}
                  onReactionChange={handleReactionChange}
                />
              ))}
            </div>
          </div>
        )}

        {/* Vertical Stories Section */}
        {verticalVideos.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Stories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {verticalVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video)}
                  onReactionChange={handleReactionChange}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}