import { Podcast } from '@/data/classes';
import { Card } from './ui/card';
import { Play, Clock } from 'lucide-react';

interface PodcastCardProps {
    podcast: Podcast;
    onClick: () => void;
}

export function PodcastCard({ podcast, onClick }: PodcastCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('sv-SE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    return (
        <Card 
            className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            onClick={onClick}
        >
            <div className="relative">
                <img 
                    src={podcast.imageUrl} 
                    alt={podcast.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white bg-accent/90 px-2 py-1 rounded">
                                {podcast.category}
                            </span>
                            <div className="bg-accent/90 rounded-full p-2">
                                <Play className="w-5 h-5 text-white" fill="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="p-4 space-y-2">
                {podcast.episodeNumber && (
                    <p className="text-xs text-muted-foreground">Episode {podcast.episodeNumber}</p>
                )}
                <h3 className="font-semibold text-lg line-clamp-2">{podcast.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{podcast.description}</p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <span>{podcast.creators.join(', ')}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{podcast.duration}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{formatDate(podcast.publishedAt)}</span>
                </div>
            </div>
        </Card>
    );
}
