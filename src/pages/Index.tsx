import { useState, useEffect, useCallback } from 'react';
import { NewsHeader } from '../components/NewsHeader';
import { BottomNavigation } from '../components/BottomNavigation';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleDetail } from '../components/ArticleDetail';
import { NavigationButtons } from '../components/NavigationButtons';
import { CommentView } from '../components/CommentView';
import { mockArticles, mockComments } from '../data/mockData';
import {Article, Comment} from "@/data/classes.ts";
import { useToast } from '../hooks/use-toast';
import VideoPage from './VideoPage';
import PodcastPage from './PodcastPage';
import MenuPage from './MenuPage';
import MalServicePage from './MalServicePage';

const Index = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('News');
  const [activeTab, setActiveTab] = useState('start');
  const [showArticleDetail, setShowArticleDetail] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMalService, setShowMalService] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [articles, setArticles] = useState(mockArticles);
  const [comments, setComments] = useState(mockComments);
  const { toast } = useToast();

  // Filter articles by category
  const filteredArticles = articles.filter(article => 
    activeCategory === 'News' ? true : article.category === activeCategory
  );

  // Navigation functions
  const handleNextArticle = useCallback(() => {
    if (currentArticleIndex < filteredArticles.length - 1) {
      setCurrentArticleIndex(prev => prev + 1);
    }
  }, [currentArticleIndex, filteredArticles.length]);

  const handlePrevArticle = useCallback(() => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(prev => prev - 1);
    }
  }, [currentArticleIndex]);

  // Handle scroll detection for header collapse and wheel navigation
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    let wheelTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (activeTab !== 'start' || showArticleDetail) return;
      
      e.preventDefault();
      
      // Debounce wheel events to prevent rapid scrolling
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          handleNextArticle();
        } else if (e.deltaY < 0) {
          handlePrevArticle();
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [activeTab, showArticleDetail, handleNextArticle, handlePrevArticle]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'start' || showArticleDetail) return;
      
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleNextArticle();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevArticle();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        setShowArticleDetail(true);
      } else if (e.key === 'Escape' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setShowArticleDetail(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, showArticleDetail, handleNextArticle, handlePrevArticle]);

  // Handle touch/swipe gestures
  useEffect(() => {
    let startY = 0;
    let startX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (activeTab !== 'start') return;
      
      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const diffY = startY - endY;
      const diffX = startX - endX;

      // Vertical swipes for article navigation
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        if (diffY > 0) {
          handleNextArticle();
        } else {
          handlePrevArticle();
        }
      }
      // Horizontal swipe right to open article detail
      else if (diffX < -50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (!showArticleDetail) {
          setShowArticleDetail(true);
        }
      }
      // Horizontal swipe left to close article detail
      else if (diffX > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (showArticleDetail) {
          setShowArticleDetail(false);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeTab, showArticleDetail, handleNextArticle, handlePrevArticle]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentArticleIndex(0);
    setShowArticleDetail(false);
  };

  const handleReactionChange = (articleId: string, reaction: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star') => {
    setArticles(prev => prev.map(article => {
      if (article.id === articleId) {
        const newReactions = { ...article.reactions };
        
        // Remove previous reaction if exists
        if (article.userReaction && newReactions[article.userReaction] !== undefined) {
          newReactions[article.userReaction] = Math.max(0, newReactions[article.userReaction]! - 1);
        }
        
        // Add new reaction or toggle off if same
        if (article.userReaction === reaction) {
          return { ...article, userReaction: undefined };
        } else {
          newReactions[reaction] = (newReactions[reaction] || 0) + 1;
          return { ...article, reactions: newReactions, userReaction: reaction };
        }
      }
      return article;
    }));

    toast({
      title: "Reaction recorded",
      description: "Your reaction has been saved.",
      duration: 2000,
    });
  };

  const handleShare = (article: Article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Article link copied to clipboard.",
        duration: 2000,
      });
    }
  };

  const handleComment = (article: Article) => {
    setShowComments(true);
  };

  const handleAddComment = (content: string, parentId?: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      articleId: currentArticle.id,
      author: 'You',
      content,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
      parentId,
    };
    setComments(prev => [...prev, newComment]);
    toast({
      title: "Comment added",
      description: "Your comment has been posted.",
      duration: 2000,
    });
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            liked: !comment.liked,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  // Render different pages based on active tab
  if (activeTab === 'video') return <VideoPage activeTab={activeTab} onTabChange={setActiveTab} />;
  if (activeTab === 'podcast') return <PodcastPage activeTab={activeTab} onTabChange={setActiveTab} />;
  if (activeTab === 'menu') return <MenuPage onBackToStart={() => setActiveTab('start')} />;
  if (showMalService) return <MalServicePage activeTab={activeTab} onTabChange={() => setShowMalService(false)} />;

  const currentArticle = filteredArticles[currentArticleIndex];
  const currentComments = comments.filter(c => c.articleId === currentArticle?.id);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Header - Only show on start tab and not in comments */}
      {activeTab === 'start' && !showComments && (
        <NewsHeader 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          isScrolled={isScrolled}
          onMalServiceClick={() => setShowMalService(true)}
        />
      )}

      {/* Main Content */}
      <main className="relative">
        {showComments ? (
          <CommentView
            comments={currentComments}
            onBack={() => setShowComments(false)}
            onAddComment={handleAddComment}
            onLikeComment={handleLikeComment}
          />
        ) : showArticleDetail ? (
          <ArticleDetail
            article={currentArticle}
            comments={currentComments}
            onBack={() => setShowArticleDetail(false)}
            onCommentClick={() => handleComment(currentArticle)}
            onShare={() => handleShare(currentArticle)}
            onReactionChange={(reaction) => handleReactionChange(currentArticle.id, reaction)}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        ) : (
          <div className="relative h-screen overflow-hidden">
            {/* Current Article */}
            {currentArticle && (
              <ArticleCard
                key={currentArticle.id}
                article={currentArticle}
                comments={currentComments}
                onArticleClick={() => setShowArticleDetail(true)}
                onCommentClick={() => handleComment(currentArticle)}
                onShare={() => handleShare(currentArticle)}
                onReactionChange={(reaction) => handleReactionChange(currentArticle.id, reaction)}
              />
            )}

            {/* Navigation Buttons and Indicators */}
            <NavigationButtons
              currentIndex={currentArticleIndex}
              totalArticles={filteredArticles.length}
              onNext={handleNextArticle}
              onPrev={handlePrevArticle}
            />
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'start' && showArticleDetail) {
            setShowArticleDetail(false);
          } else {
            setActiveTab(tab);
          }
        }}
      />
    </div>
  );
};

export default Index;
