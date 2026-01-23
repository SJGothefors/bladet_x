import { useState, useEffect } from 'react';
import { BottomNavigation } from "@/components/BottomNavigation.tsx";
import { PodcastCard } from '@/components/PodcastCard';
import { PodcastPlayer } from '@/components/PodcastPlayer';
import { mockPodcasts } from '@/data/mockPodcastData';
import { Podcast } from '@/data/classes';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface PodcastPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function PodcastPage({ activeTab, onTabChange }: PodcastPageProps) {
    const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryFilter]);

    const categories = ['All', 'News', 'Sports', 'Culture', 'Politics'];
    
    const filteredPodcasts = categoryFilter === 'All' 
        ? mockPodcasts 
        : mockPodcasts.filter(p => p.category === categoryFilter);

    if (selectedPodcast) {
        return (
            <PodcastPlayer 
                podcast={selectedPodcast} 
                onBack={() => setSelectedPodcast(null)} 
            />
        );
    }

    return (
        <div className="min-h-screen bg-background pb-24">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Podcasts</h1>
                    <Tabs value={categoryFilter} onValueChange={setCategoryFilter}>
                        <TabsList className="w-full justify-start overflow-x-auto">
                            {categories.map(cat => (
                                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {filteredPodcasts.map(podcast => (
                    <PodcastCard 
                        key={podcast.id} 
                        podcast={podcast} 
                        onClick={() => setSelectedPodcast(podcast)}
                    />
                ))}
            </div>

            <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    );
}