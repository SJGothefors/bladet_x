import { useState } from 'react';
import { MessageCircle, Share2, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ReactionButton } from './ReactionButton';
import {Article, Comment} from "@/data/classes.ts";
import { formatDistanceToNow } from 'date-fns';

interface ArticleCardProps {
  article: Article;
  comments: Comment[];
  onArticleClick: () => void;
  onCommentClick: () => void;
  onShare: () => void;
  onReactionChange: (reaction: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star') => void;
}

export function ArticleCard({ 
  article, 
  comments, 
  onArticleClick, 
  onCommentClick, 
  onShare,
  onReactionChange 
}: ArticleCardProps) {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center cursor-pointer touch-callout-none user-select-none"
      style={{ backgroundImage: `url(${article.imageUrl})` }}
      onClick={onArticleClick}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 pb-24">
        <div className="space-y-3 sm:space-y-4 animate-fade-up max-w-sm sm:max-w-lg mx-auto sm:mx-0">
          {/* Category Badge and Location */}
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-primary/20 backdrop-glass text-primary-foreground text-xs font-medium rounded-full">
              {article.category}
            </span>
            {article.showLocation && (
              <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-full">
                📍 {article.location}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
            {article.summary}
          </p>

          {/* Author and Time */}
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-300">
            <span>{article.author}</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
            </div>
          </div>

           {/* Actions */}
           <div className="flex items-center space-x-4 sm:space-x-6">
             <div onClick={(e) => e.stopPropagation()}>
                <ReactionButton
                  reactions={article.reactions}
                  userReaction={article.userReaction}
                  onReactionChange={onReactionChange}
                  availableReactions={article.availableReactions}
                />
             </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onCommentClick();
              }}
              className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-white hover:text-white hover:bg-white/10 px-2 sm:px-3"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{comments.length}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onShare();
              }}
              className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-white hover:text-white hover:bg-white/10 px-2 sm:px-3"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Swipe Indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-2 text-white/60">
          <div className="w-1 h-8 bg-white/20 rounded-full" />
          <div className="text-xs rotate-90 origin-center whitespace-nowrap">
            Swipe or tap →
          </div>
        </div>
      </div>
    </div>
  );
}