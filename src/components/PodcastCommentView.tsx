import { useState } from 'react';
import { PodcastComment } from '@/data/classes';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Heart, MessageCircle } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface PodcastCommentViewProps {
    comments: PodcastComment[];
    onBack: () => void;
    onAddComment: (content: string, parentId?: string) => void;
    onLikeComment: (commentId: string) => void;
}

export function PodcastCommentView({ comments, onBack, onAddComment, onLikeComment }: PodcastCommentViewProps) {
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState<string | null>(null);

    const handleSubmit = () => {
        if (newComment.trim()) {
            onAddComment(newComment, replyTo || undefined);
            setNewComment('');
            setReplyTo(null);
        }
    };

    const topLevelComments = comments.filter(c => !c.parentId);

    const CommentComponent = ({ comment, depth = 0 }: { comment: PodcastComment; depth?: number }) => {
        const replies = comments.filter(c => c.parentId === comment.id);
        const timeAgo = (dateString: string) => {
            const date = new Date(dateString);
            const now = new Date();
            const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
            
            if (diffInMinutes < 1) return 'Just now';
            if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
            if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
            return `${Math.floor(diffInMinutes / 1440)}d ago`;
        };

        return (
            <div className={`${depth > 0 ? 'ml-6 mt-3' : 'mb-4'}`}>
                <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">{comment.author}</span>
                                <span className="text-xs text-muted-foreground">{timeAgo(comment.publishedAt)}</span>
                            </div>
                            <p className="text-sm mt-1">{comment.content}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1"
                            onClick={() => onLikeComment(comment.id)}
                        >
                            <Heart className={`w-4 h-4 ${comment.liked ? 'fill-red-500 text-red-500' : ''}`} />
                            <span className="text-xs">{comment.likes}</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1"
                            onClick={() => setReplyTo(comment.id)}
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs">Reply</span>
                        </Button>
                    </div>
                </div>
                
                {replyTo === comment.id && (
                    <div className="mt-3 space-y-2">
                        <Textarea
                            placeholder={`Reply to ${comment.author}...`}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="min-h-[60px]"
                        />
                        <div className="flex gap-2">
                            <Button size="sm" onClick={handleSubmit}>Reply</Button>
                            <Button size="sm" variant="ghost" onClick={() => setReplyTo(null)}>Cancel</Button>
                        </div>
                    </div>
                )}
                
                {replies.length > 0 && (
                    <div className="mt-3">
                        {replies.map(reply => (
                            <CommentComponent key={reply.id} comment={reply} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background flex flex-col pb-24">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="flex items-center gap-4 p-4">
                    <Button variant="ghost" size="icon" onClick={onBack}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <h2 className="text-lg font-semibold">Comments ({comments.length})</h2>
                </div>
            </div>

            {/* Comments List */}
            <ScrollArea className="flex-1 px-4 pt-4">
                {topLevelComments.map(comment => (
                    <CommentComponent key={comment.id} comment={comment} />
                ))}
            </ScrollArea>

            {/* Add Comment Input */}
            {!replyTo && (
                <div className="sticky bottom-0 bg-background/95 backdrop-blur-lg border-t border-border p-4 space-y-2">
                    <Textarea
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="min-h-[60px]"
                    />
                    <Button onClick={handleSubmit} className="w-full">Post Comment</Button>
                </div>
            )}
        </div>
    );
}
