import { BottomNavigation } from "@/components/BottomNavigation.tsx";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockSportsEvents, sportsCategories, SportEvent, leaguesBySport, championshipStandings } from "@/data/mockSportsData";
import { Clock, Circle, Trophy } from "lucide-react";

interface MalServicePageProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MalServicePage({ activeTab, onTabChange }: MalServicePageProps) {
    const [selectedSport, setSelectedSport] = useState<string>('fotball');
    const [selectedLeague, setSelectedLeague] = useState<string>('all');
    const [showStandings, setShowStandings] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedSport, selectedLeague, showStandings]);

    const hasLeagueFilter = ['fotball', 'hockey', 'handball'].includes(selectedSport);
    const leagues = hasLeagueFilter ? leaguesBySport[selectedSport] : [];
    
    const filteredEvents = mockSportsEvents.filter(event => {
        if (event.sport !== selectedSport) return false;
        if (hasLeagueFilter && selectedLeague !== 'all' && event.league !== selectedLeague) return false;
        return true;
    });

    const handleSportChange = (sport: string) => {
        setSelectedSport(sport);
        setSelectedLeague('all');
        setShowStandings(false);
    };

    const getStandingsKey = () => {
        if (selectedSport === 'F1') return 'F1 Drivers';
        if (selectedSport === 'NFL') return 'NFL';
        if (selectedSport === 'UFC') return 'UFC Rankings';
        if (selectedLeague !== 'all') return selectedLeague;
        if (selectedSport === 'fotball') return 'Premier League';
        if (selectedSport === 'hockey') return 'NHL';
        if (selectedSport === 'handball') return 'Bundesliga Handball';
        return null;
    };

    const standingsKey = getStandingsKey();
    const standings = standingsKey ? championshipStandings[standingsKey] : null;

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

    const renderRaceLeaderboard = (event: SportEvent) => {
        if (!event.participants) return null;
        
        return (
            <div className="space-y-2">
                {event.participants.map((participant) => (
                    <div key={participant.position} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm">
                            {participant.position}
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold">{participant.name}</div>
                            {participant.time && (
                                <div className="text-xs text-muted-foreground">Time: {participant.time}</div>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-medium">{participant.gap}</div>
                            {participant.points !== undefined && (
                                <div className="text-xs text-muted-foreground">{participant.points} pts</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background overflow-y-auto">
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gradient mb-4">Mål Service</h1>
                    <Tabs value={selectedSport} onValueChange={handleSportChange}>
                        <div className="overflow-x-auto -mx-4 px-4">
                            <TabsList className="w-max justify-start flex-nowrap h-auto">
                                {sportsCategories.map((sport) => (
                                    <TabsTrigger key={sport} value={sport} className="capitalize">
                                        {sport}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                    </Tabs>
                    
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {hasLeagueFilter && (
                            <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select league" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Leagues</SelectItem>
                                    {leagues.map((league) => (
                                        <SelectItem key={league} value={league}>{league}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                        {standings && (
                            <Button 
                                variant={showStandings ? "default" : "outline"} 
                                size="sm"
                                onClick={() => setShowStandings(!showStandings)}
                            >
                                <Trophy className="w-4 h-4 mr-2" />
                                {showStandings ? 'Show Matches' : 'Standings'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 pb-24">
                {showStandings && standings ? (
                    <Card className="p-4">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            {standingsKey}
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b text-sm text-muted-foreground">
                                        <th className="text-left py-2 px-2">#</th>
                                        <th className="text-left py-2 px-2">{selectedSport === 'UFC' ? 'Fighter' : 'Team'}</th>
                                        <th className="text-center py-2 px-2">W</th>
                                        <th className="text-center py-2 px-2">L</th>
                                        {standings[0].goalsFor !== undefined && (
                                            <th className="text-center py-2 px-2">GD</th>
                                        )}
                                        <th className="text-center py-2 px-2 font-bold">Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {standings.map((team) => (
                                        <tr key={team.position} className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-2 font-semibold">{team.position}</td>
                                            <td className="py-3 px-2 font-medium">{team.name}</td>
                                            <td className="text-center py-3 px-2">{team.won}</td>
                                            <td className="text-center py-3 px-2">{team.lost}</td>
                                            {team.goalsFor !== undefined && (
                                                <td className="text-center py-3 px-2">
                                                    {team.goalDifference && team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                                                </td>
                                            )}
                                            <td className="text-center py-3 px-2 font-bold">{team.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {filteredEvents.map((event) => (
                            <Card key={event.id} className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge variant={event.status === 'live' ? 'destructive' : 'secondary'}>
                                            {event.status === 'live' && <Circle className="w-2 h-2 mr-1 animate-pulse fill-current" />}
                                            {event.status.toUpperCase()}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4" />
                                            {event.time}
                                        </div>
                                        {event.league && (
                                            <Badge variant="outline" className="text-xs">{event.league}</Badge>
                                        )}
                                    </div>
                                </div>

                                {event.participants ? (
                                    <>
                                        <div className="mb-4">
                                            <h3 className="font-bold text-lg mb-2">{event.homeTeam}</h3>
                                        </div>
                                        {renderRaceLeaderboard(event)}
                                    </>
                                ) : (
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
                                )}

                                {event.events.length > 0 && (
                                    <div className="border-t pt-3 space-y-2 mt-4">
                                        <div className="text-sm font-semibold text-muted-foreground mb-2">Events</div>
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
                )}
            </div>

            <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    );
}