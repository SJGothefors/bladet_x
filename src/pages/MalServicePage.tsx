import { BottomNavigation } from "@/components/BottomNavigation.tsx";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSportsEvents, sportsCategories, SportEvent } from "@/data/mockSportsData";
import { Clock, Circle } from "lucide-react";

interface MalServicePageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MalServicePage({ activeTab, onTabChange }: MalServicePageProps) {
    const [selectedSport, setSelectedSport] = useState<string>('fotball');

    const filteredEvents = mockSportsEvents.filter(event => event.sport === selectedSport);

    const getEventIcon = (type: string) => {
        switch(type) {
            case 'goal': return '⚽';
            case 'penalty': return '🎯';
            case 'yellow-card': return '🟨';
            case 'red-card': return '🟥';
            case 'touchdown': return '🏈';
            case 'field-goal': return '🏈';
            case 'knockout': return '🥊';
            case 'birdie': return '⛳';
            case 'eagle': return '🦅';
            default: return '•';
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gradient mb-4">Mål Service</h1>
                    <Tabs value={selectedSport} onValueChange={setSelectedSport}>
                        <TabsList className="w-full justify-start overflow-x-auto flex-nowrap h-auto">
                            {sportsCategories.map((sport) => (
                                <TabsTrigger key={sport} value={sport} className="capitalize">
                                    {sport}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 pb-24">
                <div className="space-y-4">
                    {filteredEvents.map((event) => (
                        <Card key={event.id} className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Badge variant={event.status === 'live' ? 'destructive' : 'secondary'}>
                                        {event.status === 'live' && <Circle className="w-2 h-2 mr-1 animate-pulse fill-current" />}
                                        {event.status.toUpperCase()}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        {event.time}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-4">
                                <div className="text-right">
                                    <div className="font-semibold">{event.homeTeam}</div>
                                </div>
                                <div className="flex items-center gap-3 text-3xl font-bold">
                                    <span>{event.homeScore}</span>
                                    <span className="text-muted-foreground">-</span>
                                    <span>{event.awayScore}</span>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">{event.awayTeam}</div>
                                </div>
                            </div>

                            {event.events.length > 0 && (
                                <div className="border-t pt-3 space-y-2">
                                    <div className="text-sm font-semibold text-muted-foreground mb-2">Match Events</div>
                                    {event.events.slice().reverse().map((gameEvent) => (
                                        <div key={gameEvent.id} className="flex items-start gap-2 text-sm">
                                            <span className="text-xs text-muted-foreground min-w-[50px]">{gameEvent.time}</span>
                                            <span>{getEventIcon(gameEvent.type)}</span>
                                            <div className="flex-1">
                                                <span className="font-medium">{gameEvent.player}</span>
                                                <span className="text-muted-foreground"> - {gameEvent.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>

            <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    );
}