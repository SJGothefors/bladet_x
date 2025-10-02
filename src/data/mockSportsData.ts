export interface SportEvent {
  id: string;
  sport: 'fotball' | 'hockey' | 'F1' | 'skiing' | 'UFC' | 'NFL' | 'handball' | 'golf';
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
  events: GameEvent[];
}

export interface GameEvent {
  id: string;
  time: string;
  type: 'goal' | 'penalty' | 'yellow-card' | 'red-card' | 'substitution' | 'lap' | 'knockout' | 'touchdown' | 'field-goal' | 'birdie' | 'eagle';
  team?: string;
  player: string;
  description: string;
}

export const sportsCategories = [
  'fotball',
  'hockey',
  'F1',
  'skiing',
  'UFC',
  'NFL',
  'handball',
  'golf'
] as const;

export const mockSportsEvents: SportEvent[] = [
  // Football
  {
    id: 'f1',
    sport: 'fotball',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    homeScore: 2,
    awayScore: 1,
    time: '67:23',
    status: 'live',
    events: [
      { id: 'e1', time: '12:30', type: 'goal', team: 'home', player: 'Rashford', description: 'Goal by Rashford' },
      { id: 'e2', time: '34:15', type: 'goal', team: 'away', player: 'Salah', description: 'Goal by Salah' },
      { id: 'e3', time: '45:00', type: 'yellow-card', team: 'home', player: 'Casemiro', description: 'Yellow card' },
      { id: 'e4', time: '58:42', type: 'goal', team: 'home', player: 'Fernandes', description: 'Goal by Fernandes' },
    ]
  },
  {
    id: 'f2',
    sport: 'fotball',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    homeScore: 0,
    awayScore: 0,
    time: '23:15',
    status: 'live',
    events: [
      { id: 'e5', time: '18:20', type: 'yellow-card', team: 'away', player: 'Modric', description: 'Yellow card' },
    ]
  },
  // Hockey
  {
    id: 'h1',
    sport: 'hockey',
    homeTeam: 'Boston Bruins',
    awayTeam: 'Montreal Canadiens',
    homeScore: 3,
    awayScore: 2,
    time: 'P2 14:32',
    status: 'live',
    events: [
      { id: 'e6', time: 'P1 05:12', type: 'goal', team: 'home', player: 'Pastrnak', description: 'Goal by Pastrnak' },
      { id: 'e7', time: 'P1 12:45', type: 'goal', team: 'away', player: 'Caufield', description: 'Goal by Caufield' },
      { id: 'e8', time: 'P2 03:21', type: 'goal', team: 'home', player: 'Marchand', description: 'Goal by Marchand' },
      { id: 'e9', time: 'P2 08:15', type: 'goal', team: 'away', player: 'Suzuki', description: 'Goal by Suzuki' },
      { id: 'e10', time: 'P2 11:03', type: 'goal', team: 'home', player: 'McAvoy', description: 'Goal by McAvoy' },
    ]
  },
  // F1
  {
    id: 'f1r1',
    sport: 'F1',
    homeTeam: 'Verstappen',
    awayTeam: 'Hamilton',
    homeScore: 1,
    awayScore: 2,
    time: 'Lap 42/58',
    status: 'live',
    events: [
      { id: 'e11', time: 'Lap 1', type: 'lap', player: 'Verstappen', description: 'Takes lead at start' },
      { id: 'e12', time: 'Lap 18', type: 'lap', player: 'Hamilton', description: 'Overtakes Verstappen' },
      { id: 'e13', time: 'Lap 35', type: 'lap', player: 'Verstappen', description: 'Pit stop - 2.3s' },
    ]
  },
  // Skiing
  {
    id: 's1',
    sport: 'skiing',
    homeTeam: 'Shiffrin',
    awayTeam: 'Vlhova',
    homeScore: 0,
    awayScore: 0,
    time: 'Run 1',
    status: 'live',
    events: [
      { id: 'e14', time: 'Run 1', type: 'lap', player: 'Shiffrin', description: '56.23s' },
      { id: 'e15', time: 'Run 1', type: 'lap', player: 'Vlhova', description: '56.89s' },
    ]
  },
  // UFC
  {
    id: 'u1',
    sport: 'UFC',
    homeTeam: 'Jones',
    awayTeam: 'Miocic',
    homeScore: 0,
    awayScore: 0,
    time: 'Round 2 - 3:24',
    status: 'live',
    events: [
      { id: 'e16', time: 'R1 4:32', type: 'knockout', player: 'Jones', description: 'Takedown by Jones' },
      { id: 'e17', time: 'R2 2:15', type: 'knockout', player: 'Jones', description: 'Ground and pound' },
    ]
  },
  // NFL
  {
    id: 'n1',
    sport: 'NFL',
    homeTeam: 'Kansas City Chiefs',
    awayTeam: 'Buffalo Bills',
    homeScore: 21,
    awayScore: 17,
    time: 'Q3 8:42',
    status: 'live',
    events: [
      { id: 'e18', time: 'Q1 10:23', type: 'touchdown', team: 'home', player: 'Mahomes to Kelce', description: 'TD pass' },
      { id: 'e19', time: 'Q1 10:23', type: 'field-goal', team: 'home', player: 'Butker', description: 'Extra point' },
      { id: 'e20', time: 'Q2 5:15', type: 'touchdown', team: 'away', player: 'Allen to Diggs', description: 'TD pass' },
      { id: 'e21', time: 'Q2 14:32', type: 'touchdown', team: 'home', player: 'Pacheco', description: 'Rushing TD' },
      { id: 'e22', time: 'Q3 3:21', type: 'field-goal', team: 'away', player: 'Bass', description: 'Field goal 45 yards' },
    ]
  },
  // Handball
  {
    id: 'ha1',
    sport: 'handball',
    homeTeam: 'Sweden',
    awayTeam: 'Norway',
    homeScore: 18,
    awayScore: 15,
    time: '38:12',
    status: 'live',
    events: [
      { id: 'e23', time: '05:23', type: 'goal', team: 'home', player: 'Gottfridsson', description: 'Goal' },
      { id: 'e24', time: '12:45', type: 'goal', team: 'away', player: 'Sagosen', description: 'Goal' },
      { id: 'e25', time: '27:18', type: 'penalty', team: 'home', player: 'Pellas', description: 'Penalty goal' },
    ]
  },
  // Golf
  {
    id: 'g1',
    sport: 'golf',
    homeTeam: 'Scheffler',
    awayTeam: 'McIlroy',
    homeScore: -8,
    awayScore: -6,
    time: 'Hole 14',
    status: 'live',
    events: [
      { id: 'e26', time: 'Hole 5', player: 'Scheffler', type: 'birdie', description: 'Birdie' },
      { id: 'e27', time: 'Hole 8', player: 'Scheffler', type: 'eagle', description: 'Eagle' },
      { id: 'e28', time: 'Hole 11', player: 'McIlroy', type: 'birdie', description: 'Birdie' },
    ]
  },
];
