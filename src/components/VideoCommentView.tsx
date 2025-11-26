import { useState } from 'react';
import { mockVideoComments } from '@/data/mockVideoData';
import { VideoComment } from '@/data/classes';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ThumbsUp, Send } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

interface VideoCommentViewProps {
  videoId: string;
}

export function VideoCommentView({ videoId }: VideoCommentViewProps) {
  const [comments, setComments] = useState<VideoComment[]>(
    mockVideoComments.filter(c => c.videoId === videoId && !c.parentId)
  );
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: VideoComment = {
      id: `vc-${Date.now()}`,
      videoId,
      author: 'You',
      content: newComment,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleAddReply = (parentId: string) => {
    if (!replyText.trim()) return;

    const reply: VideoComment = {
      id: `vc-${Date.now()}`,
      videoId,
      author: 'You',
      content: replyText,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
      parentId,
    };

    setComments([...comments, reply]);
    setReplyText('');
    setReplyingTo(null);
  };

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(c => 
      c.id === commentId 
        ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 }
        : c
    ));
  };

  const getReplies = (parentId: string) => {
    return mockVideoComments.filter(c => c.parentId === parentId);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

      {/* Add Comment */}
      <div className="space-y-3">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button onClick={handleAddComment} className="w-full sm:w-auto">
          <Send className="w-4 h-4 mr-2" />
          Post Comment
        </Button>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-3">
            <div className="flex gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div>
                  <p className="font-semibold text-sm">{comment.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(comment.publishedAt).toLocaleDateString('sv-SE')}
                  </p>
                </div>
                <p className="text-sm leading-relaxed">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLikeComment(comment.id)}
                    className={comment.liked ? 'text-accent' : ''}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(comment.id)}
                  >
                    Reply
                  </Button>
                </div>

                {/* Reply Input */}
                {replyingTo === comment.id && (
                  <div className="mt-3 space-y-2">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleAddReply(comment.id)}>
                        Post Reply
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {getReplies(comment.id).map((reply) => (
                  <div key={reply.id} className="flex gap-3 mt-4 pl-4 border-l-2 border-border">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{reply.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div>
                        <p className="font-semibold text-sm">{reply.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(reply.publishedAt).toLocaleDateString('sv-SE')}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed">{reply.content}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeComment(reply.id)}
                        className={reply.liked ? 'text-accent' : ''}
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {reply.likes}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
