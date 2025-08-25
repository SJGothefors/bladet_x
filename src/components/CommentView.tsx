import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Send, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Comment } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

interface CommentViewProps {
  comments: Comment[];
  onBack: () => void;
  onAddComment: (content: string, parentId?: string) => void;
  onLikeComment: (commentId: string) => void;
}

export function CommentView({ comments, onBack, onAddComment, onLikeComment }: CommentViewProps) {
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  const handleSubmitReply = () => {
    if (replyContent.trim() && replyTo) {
      onAddComment(replyContent, replyTo);
      setReplyContent('');
      setReplyTo(null);
    }
  };

  const topLevelComments = comments.filter(c => !c.parentId);
  const getReplies = (commentId: string) => comments.filter(c => c.parentId === commentId);

  const CommentComponent = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <Card className={`p-4 ${isReply ? 'ml-8 mt-2' : 'mb-4'}`}>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm">{comment.author}</span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-2">{comment.content}</p>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLikeComment(comment.id)}
              className={`flex items-center space-x-1 text-xs h-auto p-1 ${
                comment.liked ? 'text-news-heart' : 'text-muted-foreground'
              }`}
            >
              <Heart className={`w-3 h-3 ${comment.liked ? 'fill-current' : ''}`} />
              <span>{comment.likes}</span>
            </Button>
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyTo(comment.id)}
                className="flex items-center space-x-1 text-xs text-muted-foreground h-auto p-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Reply</span>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Reply Form */}
      {replyTo === comment.id && (
        <div className="mt-3 ml-11">
          <div className="flex space-x-2">
            <Input
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmitReply()}
            />
            <Button
              size="sm"
              onClick={handleSubmitReply}
              disabled={!replyContent.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setReplyTo(null);
                setReplyContent('');
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      
      {/* Replies */}
      {getReplies(comment.id).map(reply => (
        <CommentComponent key={reply.id} comment={reply} isReply />
      ))}
    </Card>
  );

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-glass border-b border-border p-4 z-50">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2 hover:bg-accent/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="font-semibold">Comments</h2>
            <p className="text-sm text-muted-foreground">{comments.length} comments</p>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto p-4">
        {topLevelComments.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          </div>
        ) : (
          topLevelComments.map(comment => (
            <CommentComponent key={comment.id} comment={comment} />
          ))
        )}
      </div>

      {/* Comment Input */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 flex space-x-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
            />
            <Button
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}