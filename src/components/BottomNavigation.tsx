import { Home, Video, Headphones, Menu } from 'lucide-react';
import { Button } from './ui/button';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'start', label: 'Start', icon: Home },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'podcast', label: 'Podcast', icon: Headphones },
    { id: 'menu', label: 'Menu', icon: Menu },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-glass border-t border-border z-50">
      <div className="grid grid-cols-4 gap-1 py-2 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 h-auto py-2 px-1 min-h-[4rem] w-full ${
                activeTab === tab.id ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}