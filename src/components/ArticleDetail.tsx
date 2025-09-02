// articleDetail.tsx
import { MessageCircle, Share2, Clock, User } from 'lucide-react';
import { Button } from './ui/button';
import { ReactionButton } from './ReactionButton';
import { Article, Comment } from '@/data/classes.ts';
import { format } from 'date-fns';
import { useState } from 'react';
import { NewsHeader } from './NewsHeader';

interface ArticleDetailProps {
  article: Article;
  comments: Comment[];
  onBack: () => void;
  onCommentClick: () => void;
  onShare: () => void;
  onReactionChange: (
      reaction:
          | 'like'
          | 'thumbsUp'
          | 'smile'
          | 'angry'
          | 'thumbsDown'
          | 'crying'
          | 'hearteyes'
          | 'star'
  ) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ArticleDetail({
                                article,
                                comments,
                                onCommentClick,
                                onShare,
                                onReactionChange,
                                activeCategory,
                                onCategoryChange,
                              }: ArticleDetailProps) {
  // Expand/collapse state driven by this view's own scroll container
  const [isScrolled, setIsScrolled] = useState(false);

  // Tailwind h-28 = 7rem (112px), h-16 = 4rem (64px)
  const headerPaddingTop = isScrolled ? '4rem' : '7rem';

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget;
    setIsScrolled(el.scrollTop > 50);
  };

  return (
      <div
          className="h-screen overflow-y-auto bg-background article-detail-container"
          onScroll={handleScroll}
      >
        {/* Article view header: pass NO onMalServiceClick so that Mål service never renders here */}
        <NewsHeader
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
            isScrolled={isScrolled}
        />

        {/* Match content padding to header height so nothing sits under it */}
        <div className="p-6 pb-24 max-w-4xl mx-auto" style={{ paddingTop: headerPaddingTop }}>
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{article.title}</h1>

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
                <Clock className="w-4 h-4 hidden md:block" />
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
              // Inline image placeholder support: [IMAGE:/path/to/image.jpg]
              if (paragraph.startsWith('[IMAGE:') && paragraph.endsWith(']')) {
                const imagePath = paragraph.slice(7, -1);
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
            {/* Desktop/tablet layout */}
            <div className="hidden md:flex items-center justify-between">
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
                  <MessageCircle className="w-5 h-5" />
                  <span>{comments.length} Comments</span>
                </Button>
              </div>

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

            {/* Mobile layout */}
            <div className="md:hidden">
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <ReactionButton
                      reactions={article.reactions}
                      userReaction={article.userReaction}
                      onReactionChange={onReactionChange}
                      availableReactions={article.availableReactions}
                  />
                </div>

                <div className="flex-1">
                  <Button
                      variant="ghost"
                      size="sm"
                      onClick={onCommentClick}
                      className="flex items-center justify-center space-x-2 w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{comments.length} Comments</span>
                  </Button>
                </div>
              </div>

              <Button
                  variant="ghost"
                  size="sm"
                  onClick={onShare}
                  className="flex items-center justify-center space-x-2 w-full"
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
