import { useState } from 'react';
import { Heart, ThumbsUp, Smile, Frown, ThumbsDown, Zap, Star, Eye, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ReactionButtonProps {
  reactions: {
    like?: number;
    thumbsUp?: number;
    smile?: number;
    angry?: number;
    thumbsDown?: number;
    crying?: number;
    hearteyes?: number;
    star?: number;
  };
  userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star';
  onReactionChange: (reaction: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star') => void;
  availableReactions: ('like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star')[];
}

export function ReactionButton({ reactions, userReaction, onReactionChange, availableReactions }: ReactionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const allReactionTypes = [
    { id: 'like', icon: Heart, count: reactions.like || 0, color: 'text-news-heart' },
    { id: 'thumbsUp', icon: ThumbsUp, count: reactions.thumbsUp || 0, color: 'text-news-thumbs' },
    { id: 'smile', icon: Smile, count: reactions.smile || 0, color: 'text-news-smile' },
    { id: 'angry', icon: Frown, count: reactions.angry || 0, color: 'text-news-angry' },
    { id: 'thumbsDown', icon: ThumbsDown, count: reactions.thumbsDown || 0, color: 'text-red-500' },
    { id: 'crying', icon: Zap, count: reactions.crying || 0, color: 'text-blue-500' },
    { id: 'hearteyes', icon: Eye, count: reactions.hearteyes || 0, color: 'text-pink-500' },
    { id: 'star', icon: Star, count: reactions.star || 0, color: 'text-yellow-500' },
  ] as const;

  const reactionTypes = allReactionTypes.filter(r => availableReactions.includes(r.id));

  const mainReaction = reactionTypes.find(r => r.id === userReaction) || reactionTypes[0];
  const totalReactions = Object.values(reactions).reduce((sum, count) => sum + (count || 0), 0);

  return (
    <div className="relative">
      {/* Dropdown Menu - Better background and z-index */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-card border border-border rounded-lg p-2 flex space-x-2 animate-fade-up shadow-card z-[100]">
          {reactionTypes.map((reaction) => {
            const Icon = reaction.icon;
            return (
              <Button
                key={reaction.id}
                variant="ghost"
                size="sm"
                onClick={() => {
                  onReactionChange(reaction.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "p-2 h-auto hover-lift bg-background/10 hover:bg-background/20",
                  userReaction === reaction.id && reaction.color
                )}
              >
                <Icon className="w-5 h-5" />
              </Button>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm"
      >
        <div className="flex items-center space-x-1">
          <mainReaction.icon 
            className={cn("w-5 h-5", userReaction ? mainReaction.color : "text-muted-foreground")} 
          />
          <span className="text-xs">{totalReactions}</span>
        </div>
        <ChevronUp className={cn("w-3 h-3 transition-transform duration-200", isOpen && "rotate-180")} />
      </Button>
    </div>
  );
}