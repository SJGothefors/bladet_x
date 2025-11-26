import { Video } from '@/data/classes';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Play } from 'lucide-react';
import { ReactionButton } from './ReactionButton';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  onReactionChange?: (videoId: string, reaction: string) => void;
}

export function VideoCard({ video, onClick, onReactionChange }: VideoCardProps) {
  const handleReactionChange = (reaction: string) => {
    onReactionChange?.(video.id, reaction);
  };

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={video.imageUrl} 
          alt={video.title}
          className={`w-full object-cover transition-transform group-hover:scale-105 ${
            video.format === 'vertical' ? 'h-96' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-16 h-16 text-white" fill="white" />
        </div>
        <Badge className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm">
          {video.format === 'vertical' ? 'Story' : 'Video'}
        </Badge>
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <Clock className="w-3 h-3 text-white" />
          <span className="text-xs text-white font-medium">{video.duration}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">{video.category}</Badge>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{video.creator}</span>
          <ReactionButton
            reactions={video.reactions}
            userReaction={video.userReaction}
            onReactionChange={handleReactionChange}
            availableReactions={video.availableReactions}
          />
        </div>
      </CardContent>
    </Card>
  );
}
