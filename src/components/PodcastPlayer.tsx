import { useState } from 'react';
import { Podcast } from '@/data/classes';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { ReactionButton } from './ReactionButton';
import { PodcastCommentView } from './PodcastCommentView';
import { mockPodcastComments } from '@/data/mockPodcastData';

interface PodcastPlayerProps {
    podcast: Podcast;
    onBack: () => void;
}

export function PodcastPlayer({ podcast, onBack }: PodcastPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(70);
    const [showComments, setShowComments] = useState(false);
    const [reactions, setReactions] = useState(podcast.reactions);
    const [userReaction, setUserReaction] = useState(podcast.userReaction);
    const [comments, setComments] = useState(
        mockPodcastComments.filter(c => c.podcastId === podcast.id)
    );

    // Parse duration (e.g., "45:30" to seconds)
    const durationParts = podcast.duration.split(':');
    const totalSeconds = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleReactionChange = (reaction: string) => {
        const newReactions = { ...reactions };
        
        if (userReaction && reactions[userReaction]) {
            newReactions[userReaction] = (newReactions[userReaction] || 0) - 1;
        }
        
        if (!newReactions[reaction]) newReactions[reaction] = 0;
        newReactions[reaction] = (newReactions[reaction] || 0) + 1;
        
        setReactions(newReactions);
        setUserReaction(reaction as any);
    };

    const handleAddComment = (content: string, parentId?: string) => {
        const newComment = {
            id: `pc${Date.now()}`,
            podcastId: podcast.id,
            author: 'You',
            content,
            publishedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            likes: 0,
            liked: false,
            parentId
        };
        setComments([...comments, newComment]);
    };

    const handleLikeComment = (commentId: string) => {
        setComments(comments.map(c => 
            c.id === commentId ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c
        ));
    };

    if (showComments) {
        return (
            <PodcastCommentView
                comments={comments}
                onBack={() => setShowComments(false)}
                onAddComment={handleAddComment}
                onLikeComment={handleLikeComment}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background pb-32">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="flex items-center gap-4 p-4">
                    <Button variant="ghost" size="icon" onClick={onBack}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Playing Podcast</p>
                        <p className="font-semibold text-sm">{podcast.category}</p>
                    </div>
                </div>
            </div>

            {/* Podcast Cover */}
            <div className="flex flex-col items-center px-6 pt-8">
                <div className="w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-2xl">
                    <img 
                        src={podcast.imageUrl} 
                        alt={podcast.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Podcast Info */}
                <div className="w-full max-w-sm mt-6 space-y-2">
                    {podcast.episodeNumber && (
                        <p className="text-sm text-muted-foreground">Episode {podcast.episodeNumber}</p>
                    )}
                    <h1 className="text-2xl font-bold">{podcast.title}</h1>
                    <p className="text-sm text-muted-foreground">{podcast.creators.join(', ')}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 pt-2">{podcast.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-sm mt-8 space-y-2">
                    <Slider
                        value={[currentTime]}
                        max={totalSeconds}
                        step={1}
                        onValueChange={(value) => setCurrentTime(value[0])}
                        className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{formatTime(currentTime)}</span>
                        <span>{podcast.duration}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="w-full max-w-sm mt-6 flex items-center justify-center gap-6">
                    <Button variant="ghost" size="icon" className="w-12 h-12">
                        <SkipBack className="w-6 h-6" />
                    </Button>
                    <Button 
                        size="icon" 
                        className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? (
                            <Pause className="w-8 h-8" fill="currentColor" />
                        ) : (
                            <Play className="w-8 h-8 ml-1" fill="currentColor" />
                        )}
                    </Button>
                    <Button variant="ghost" size="icon" className="w-12 h-12">
                        <SkipForward className="w-6 h-6" />
                    </Button>
                </div>

                {/* Volume */}
                <div className="w-full max-w-sm mt-6 flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-muted-foreground" />
                    <Slider
                        value={[volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setVolume(value[0])}
                        className="flex-1"
                    />
                </div>

                {/* Reactions & Comments */}
                <div className="w-full max-w-sm mt-8 flex items-center justify-between gap-4 pb-4">
                    <ReactionButton
                        reactions={reactions}
                        userReaction={userReaction}
                        onReactionChange={handleReactionChange}
                        availableReactions={podcast.availableReactions}
                    />
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowComments(true)}
                        className="gap-2"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>{comments.length}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
