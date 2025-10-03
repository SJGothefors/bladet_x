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
  league?: string;
  participants?: RaceParticipant[];
}

export interface RaceParticipant {
  position: number;
  name: string;
  time?: string;
  gap?: string;
  points?: number;
}

export interface ChampionshipStanding {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goalDifference?: number;
  points: number;
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

export const leaguesBySport: Record<string, string[]> = {
  fotball: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
  hockey: ['NHL', 'SHL', 'KHL', 'Liiga'],
  handball: ['Bundesliga', 'Liga ASOBAL', 'Eliteserien']
};

export const championshipStandings: Record<string, ChampionshipStanding[]> = {
  'Premier League': [
    { position: 1, name: 'Manchester City', played: 28, won: 20, drawn: 5, lost: 3, goalsFor: 68, goalsAgainst: 28, goalDifference: 40, points: 65 },
    { position: 2, name: 'Arsenal', played: 28, won: 19, drawn: 6, lost: 3, goalsFor: 65, goalsAgainst: 25, goalDifference: 40, points: 63 },
    { position: 3, name: 'Liverpool', played: 28, won: 18, drawn: 7, lost: 3, goalsFor: 62, goalsAgainst: 30, goalDifference: 32, points: 61 },
    { position: 4, name: 'Aston Villa', played: 28, won: 17, drawn: 6, lost: 5, goalsFor: 58, goalsAgainst: 38, goalDifference: 20, points: 57 },
    { position: 5, name: 'Tottenham', played: 28, won: 16, drawn: 5, lost: 7, goalsFor: 55, goalsAgainst: 42, goalDifference: 13, points: 53 },
  ],
  'NHL': [
    { position: 1, name: 'Boston Bruins', played: 65, won: 42, drawn: 0, lost: 23, goalsFor: 215, goalsAgainst: 178, goalDifference: 37, points: 84 },
    { position: 2, name: 'Florida Panthers', played: 65, won: 40, drawn: 0, lost: 25, goalsFor: 208, goalsAgainst: 185, goalDifference: 23, points: 80 },
    { position: 3, name: 'Toronto Maple Leafs', played: 65, won: 38, drawn: 0, lost: 27, goalsFor: 220, goalsAgainst: 195, goalDifference: 25, points: 76 },
    { position: 4, name: 'Tampa Bay Lightning', played: 65, won: 37, drawn: 0, lost: 28, goalsFor: 198, goalsAgainst: 190, goalDifference: 8, points: 74 },
  ],
  'F1 Drivers': [
    { position: 1, name: 'Max Verstappen', played: 18, won: 14, drawn: 0, lost: 4, points: 395 },
    { position: 2, name: 'Sergio Perez', played: 18, won: 2, drawn: 0, lost: 16, points: 273 },
    { position: 3, name: 'Lewis Hamilton', played: 18, won: 1, drawn: 0, lost: 17, points: 234 },
    { position: 4, name: 'Fernando Alonso', played: 18, won: 0, drawn: 0, lost: 18, points: 206 },
    { position: 5, name: 'Charles Leclerc', played: 18, won: 1, drawn: 0, lost: 17, points: 206 },
  ],
  'Bundesliga Handball': [
    { position: 1, name: 'SC Magdeburg', played: 24, won: 20, drawn: 2, lost: 2, goalsFor: 785, goalsAgainst: 698, goalDifference: 87, points: 42 },
    { position: 2, name: 'Füchse Berlin', played: 24, won: 18, drawn: 3, lost: 3, goalsFor: 768, goalsAgainst: 705, goalDifference: 63, points: 39 },
    { position: 3, name: 'THW Kiel', played: 24, won: 17, drawn: 2, lost: 5, goalsFor: 742, goalsAgainst: 688, goalDifference: 54, points: 36 },
  ],
  'NFL': [
    { position: 1, name: 'Kansas City Chiefs', played: 14, won: 11, drawn: 0, lost: 3, points: 11 },
    { position: 2, name: 'Buffalo Bills', played: 14, won: 10, drawn: 0, lost: 4, points: 10 },
    { position: 3, name: 'Baltimore Ravens', played: 14, won: 10, drawn: 0, lost: 4, points: 10 },
    { position: 4, name: 'Miami Dolphins', played: 14, won: 9, drawn: 0, lost: 5, points: 9 },
    { position: 5, name: 'Cincinnati Bengals', played: 14, won: 8, drawn: 0, lost: 6, points: 8 },
  ],
  'UFC Rankings': [
    { position: 1, name: 'Jon Jones', played: 28, won: 27, drawn: 0, lost: 1, points: 27 },
    { position: 2, name: 'Islam Makhachev', played: 25, won: 24, drawn: 0, lost: 1, points: 24 },
    { position: 3, name: 'Alex Pereira', played: 10, won: 9, drawn: 0, lost: 1, points: 9 },
    { position: 4, name: 'Leon Edwards', played: 22, won: 20, drawn: 0, lost: 2, points: 20 },
    { position: 5, name: 'Alexander Volkanovski', played: 27, won: 25, drawn: 0, lost: 2, points: 25 },
  ]
};

export const mockSportsEvents: SportEvent[] = [
  // Football
  {
    id: 'f1',
    sport: 'fotball',
    league: 'Premier League',
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
    league: 'La Liga',
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
  {
    id: 'f3',
    sport: 'fotball',
    league: 'Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Manchester City',
    homeScore: 1,
    awayScore: 1,
    time: '82:15',
    status: 'live',
    events: [
      { id: 'e29', time: '23:10', type: 'goal', team: 'home', player: 'Saka', description: 'Goal by Saka' },
      { id: 'e30', time: '71:05', type: 'goal', team: 'away', player: 'Haaland', description: 'Goal by Haaland' },
    ]
  },
  // Hockey
  {
    id: 'h1',
    sport: 'hockey',
    league: 'NHL',
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
  {
    id: 'h2',
    sport: 'hockey',
    league: 'SHL',
    homeTeam: 'Frölunda HC',
    awayTeam: 'Växjö Lakers',
    homeScore: 2,
    awayScore: 1,
    time: 'P3 05:22',
    status: 'live',
    events: [
      { id: 'e31', time: 'P1 08:30', type: 'goal', team: 'home', player: 'Lundestrom', description: 'Goal' },
      { id: 'e32', time: 'P2 15:10', type: 'goal', team: 'away', player: 'Carlsson', description: 'Goal' },
      { id: 'e33', time: 'P3 02:45', type: 'goal', team: 'home', player: 'Dahlén', description: 'Goal' },
    ]
  },
  // F1
  {
    id: 'f1r1',
    sport: 'F1',
    homeTeam: 'Monaco Grand Prix',
    awayTeam: '',
    homeScore: 0,
    awayScore: 0,
    time: 'Lap 42/58',
    status: 'live',
    league: 'Formula 1',
    participants: [
      { position: 1, name: 'Max Verstappen', gap: 'Leader', points: 25 },
      { position: 2, name: 'Charles Leclerc', gap: '+2.3s', points: 18 },
      { position: 3, name: 'Lewis Hamilton', gap: '+5.8s', points: 15 },
      { position: 4, name: 'Sergio Perez', gap: '+12.1s', points: 12 },
      { position: 5, name: 'Carlos Sainz', gap: '+18.7s', points: 10 },
      { position: 6, name: 'Lando Norris', gap: '+24.2s', points: 8 },
      { position: 7, name: 'George Russell', gap: '+31.5s', points: 6 },
      { position: 8, name: 'Fernando Alonso', gap: '+38.9s', points: 4 },
    ],
    events: [
      { id: 'e11', time: 'Lap 1', type: 'lap', player: 'Verstappen', description: 'Takes lead at start' },
      { id: 'e12', time: 'Lap 18', type: 'lap', player: 'Leclerc', description: 'Overtakes Hamilton' },
      { id: 'e13', time: 'Lap 35', type: 'lap', player: 'Verstappen', description: 'Pit stop - 2.3s' },
    ]
  },
  // Skiing
  {
    id: 's1',
    sport: 'skiing',
    homeTeam: 'World Cup Slalom - Åre',
    awayTeam: '',
    homeScore: 0,
    awayScore: 0,
    time: 'Run 1 Completed',
    status: 'live',
    league: 'FIS World Cup',
    participants: [
      { position: 1, name: 'Mikaela Shiffrin', time: '56.23', gap: 'Leader' },
      { position: 2, name: 'Petra Vlhova', time: '56.89', gap: '+0.66' },
      { position: 3, name: 'Wendy Holdener', time: '57.12', gap: '+0.89' },
      { position: 4, name: 'Katharina Liensberger', time: '57.45', gap: '+1.22' },
      { position: 5, name: 'Sara Hector', time: '57.78', gap: '+1.55' },
      { position: 6, name: 'Michelle Gisin', time: '58.03', gap: '+1.80' },
    ],
    events: [
      { id: 'e14', time: 'Run 1', type: 'lap', player: 'Shiffrin', description: 'Fastest time: 56.23s' },
      { id: 'e15', time: 'Run 1', type: 'lap', player: 'Vlhova', description: 'Second fastest: 56.89s' },
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
    league: 'Bundesliga',
    homeTeam: 'SC Magdeburg',
    awayTeam: 'THW Kiel',
    homeScore: 28,
    awayScore: 25,
    time: '52:12',
    status: 'live',
    events: [
      { id: 'e23', time: '05:23', type: 'goal', team: 'home', player: 'Magnusson', description: 'Goal' },
      { id: 'e24', time: '12:45', type: 'goal', team: 'away', player: 'Duvnjak', description: 'Goal' },
      { id: 'e25', time: '27:18', type: 'penalty', team: 'home', player: 'Zehnder', description: 'Penalty goal' },
    ]
  },
  {
    id: 'ha2',
    sport: 'handball',
    league: 'Eliteserien',
    homeTeam: 'Elverum Handball',
    awayTeam: 'Kolstad Handball',
    homeScore: 22,
    awayScore: 20,
    time: '45:30',
    status: 'live',
    events: [
      { id: 'e34', time: '08:15', type: 'goal', team: 'home', player: 'Gulliksen', description: 'Goal' },
      { id: 'e35', time: '32:50', type: 'goal', team: 'away', player: 'Myrhol', description: 'Goal' },
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
