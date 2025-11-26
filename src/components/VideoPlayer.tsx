import { Video } from '@/data/classes';
import { Button } from './ui/button';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useState } from 'react';
import { Badge } from './ui/badge';
import { ReactionButton } from './ReactionButton';
import { VideoCommentView } from './VideoCommentView';

interface VideoPlayerProps {
  video: Video;
  onBack: () => void;
  onReactionChange?: (reaction: string) => void;
}

export function VideoPlayer({ video, onBack, onReactionChange }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleReactionChange = (reaction: string) => {
    onReactionChange?.(reaction);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/90 backdrop-blur-sm border-b border-border p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="mb-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Video Player */}
      <div className={`relative bg-black ${video.format === 'vertical' ? 'mx-auto max-w-md' : 'w-full'}`}>
        <div className={`relative ${video.format === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'}`}>
          <img 
            src={video.imageUrl} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              variant="ghost"
              className="w-20 h-20 rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10" fill="white" />
              )}
            </Button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Format Badge */}
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
            {video.format === 'vertical' ? 'Story' : 'Video'}
          </Badge>
        </div>
      </div>

      {/* Video Information */}
      <div className="p-6 max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-3">{video.category}</Badge>
        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div>
            <p className="font-medium">{video.creator}</p>
            <p>{new Date(video.publishedAt).toLocaleDateString('sv-SE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{video.duration}</p>
          </div>
        </div>

        <div className="mb-6">
          <ReactionButton
            reactions={video.reactions}
            userReaction={video.userReaction}
            onReactionChange={handleReactionChange}
            availableReactions={video.availableReactions}
          />
        </div>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          {video.description}
        </p>

        {/* Comments Section */}
        <VideoCommentView videoId={video.id} />
      </div>
    </div>
  );
}
