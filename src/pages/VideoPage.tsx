import {BottomNavigation} from "@/components/BottomNavigation.tsx";
import {useState} from "react";
import PodcastPage from "@/pages/PodcastPage.tsx";
import MenuPage from "@/pages/MenuPage.tsx";
import Index from "@/pages/Index.tsx";

export default function VideoPage() {

    const [activeTab, setActiveTab] = useState('video');

    // Render different pages based on active tab
    if (activeTab === 'start') return <Index/>;
    if (activeTab === 'video') return <VideoPage/>;
    if (activeTab === 'podcast') return <PodcastPage/>;
    if (activeTab === 'menu') return <MenuPage onBackToStart={() => setActiveTab('start')}/>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4 text-gradient">Video Section</h1>
                <p className="text-xl text-muted-foreground">See real app</p>
                <p className="text-sm text-muted-foreground mt-2">Video content will be available in the full
                    version</p>
            </div>
            {/* Bottom Navigation */}
            <BottomNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>
    );
}