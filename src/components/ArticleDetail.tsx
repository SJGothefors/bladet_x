import { ArrowLeft, MessageCircle, Share2, Clock, User } from 'lucide-react';
import { Button } from './ui/button';
import { ReactionButton } from './ReactionButton';
import {Article, Comment} from "@/data/classes.ts";
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { NewsHeader } from './NewsHeader';
import { categories } from '../data/mockData';

interface ArticleDetailProps {
  article: Article;
  comments: Comment[];
  onBack: () => void;
  onCommentClick: () => void;
  onShare: () => void;
  onReactionChange: (reaction: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star') => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ArticleDetail({ 
  article, 
  comments, 
  onBack, 
  onCommentClick, 
  onShare, 
  onReactionChange,
  activeCategory,
  onCategoryChange
}: ArticleDetailProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        setIsScrolled(target.scrollTop > 50);
      }
    };

    const articleContainer = document.querySelector('.article-detail-container');
    if (articleContainer) {
      articleContainer.addEventListener('scroll', handleScroll);
      return () => articleContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-screen overflow-y-auto bg-background article-detail-container">
      {/* News Header - Collapses on scroll */}
      <NewsHeader 
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        isScrolled={isScrolled}
      />

      {/* Back Button - Fixed position when categories are collapsed */}
      <div className={`sticky bg-background/95 backdrop-glass border-b border-border p-4 z-50 transition-all duration-300 ${
        isScrolled ? 'top-16' : 'top-28'
      }`}>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2 hover:bg-accent/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-muted-foreground">Back to feed</span>
        </div>
      </div>

      <div className="p-6 pb-24 max-w-4xl mx-auto" style={{ paddingTop: '2rem' }}>
        {/* Category and Location */}
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {article.category}
          </span>
          <span className="px-3 py-1 bg-muted/20 text-muted-foreground text-sm font-medium rounded-full">
            📍 {article.location}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Author and Date */}
        <div className="flex items-center justify-between mb-8 p-4 bg-card rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium">{article.author}</p>
              <p className="text-sm text-muted-foreground">Journalist</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{format(new Date(article.publishedAt), 'PPP')}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {format(new Date(article.publishedAt), 'p')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-8">
          {article.content.split('\n\n').map((paragraph, index) => {
            // Check if paragraph is an image placeholder
            if (paragraph.startsWith('[IMAGE:') && paragraph.endsWith(']')) {
              const imagePath = paragraph.slice(7, -1); // Remove [IMAGE: and ]
              return (
                <div key={index} className="my-8">
                  <img 
                    src={imagePath} 
                    alt="Article content" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              );
            }
            return (
              <p key={index} className="mb-4 leading-relaxed text-foreground">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Actions */}
        <div className="p-4 bg-card rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ReactionButton
                reactions={article.reactions}
                userReaction={article.userReaction}
                onReactionChange={onReactionChange}
                availableReactions={article.availableReactions}
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onCommentClick}
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{comments.length} Comments</span>
              </Button>
            </div>
            
            {/* Share button on tablet/desktop - same row */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="sm"
                onClick={onShare}
                className="flex items-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </Button>
            </div>
          </div>
          
          {/* Share button on mobile - separate row */}
          <div className="md:hidden mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onShare}
              className="flex items-center space-x-2 w-full justify-center"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}