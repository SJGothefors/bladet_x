import { BottomNavigation } from "@/components/BottomNavigation.tsx";

interface PodcastPageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function PodcastPage({ activeTab, onTabChange }: PodcastPageProps) {
    return (
        <div className="min-h-screen bg-background">
            <div className="flex items-center justify-center h-full p-6 pb-24">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 text-gradient">Podcast Section</h1>
                    <p className="text-xl text-muted-foreground">See real app</p>
                    <p className="text-sm text-muted-foreground mt-2">Podcast content will be available in the full version</p>
                </div>
            </div>
            <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    );
}