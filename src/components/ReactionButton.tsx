import { useState } from 'react';
import { Heart, ThumbsUp, Smile, Frown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ReactionButtonProps {
  reactions: {
    likes: number;
    thumbsUp: number;
    smiles: number;
    angry: number;
  };
  userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry';
  onReactionChange: (reaction: 'like' | 'thumbsUp' | 'smile' | 'angry') => void;
}

export function ReactionButton({ reactions, userReaction, onReactionChange }: ReactionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const reactionTypes = [
    { id: 'like', icon: Heart, count: reactions.likes, color: 'text-news-heart' },
    { id: 'thumbsUp', icon: ThumbsUp, count: reactions.thumbsUp, color: 'text-news-thumbs' },
    { id: 'smile', icon: Smile, count: reactions.smiles, color: 'text-news-smile' },
    { id: 'angry', icon: Frown, count: reactions.angry, color: 'text-news-angry' },
  ] as const;

  const mainReaction = reactionTypes.find(r => r.id === userReaction) || reactionTypes[0];
  const totalReactions = reactions.likes + reactions.thumbsUp + reactions.smiles + reactions.angry;

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