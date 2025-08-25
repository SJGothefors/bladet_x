import { ArrowLeft, MessageCircle, Share2, Clock, User } from 'lucide-react';
import { Button } from './ui/button';
import { ReactionButton } from './ReactionButton';
import { Article, Comment } from '../data/mockData';
import { format } from 'date-fns';

interface ArticleDetailProps {
  article: Article;
  comments: Comment[];
  onBack: () => void;
  onCommentClick: () => void;
  onShare: () => void;
  onReactionChange: (reaction: 'like' | 'thumbsUp' | 'smile' | 'angry') => void;
}

export function ArticleDetail({ 
  article, 
  comments, 
  onBack, 
  onCommentClick, 
  onShare, 
  onReactionChange 
}: ArticleDetailProps) {
  return (
    <div className="h-screen overflow-y-auto bg-background">
      {/* Header - Higher z-index and better spacing */}
      <div className="sticky top-0 bg-background/95 backdrop-glass border-b border-border p-4 z-[60] mt-28">
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

      <div className="p-6 pb-24 max-w-4xl mx-auto">
        {/* Category */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
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
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between p-4 bg-card rounded-lg">
          <div className="flex items-center space-x-6">
            <ReactionButton
              reactions={article.reactions}
              userReaction={article.userReaction}
              onReactionChange={onReactionChange}
            />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onCommentClick}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length} Comments</span>
            </Button>

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
      </div>
    </div>
  );
}