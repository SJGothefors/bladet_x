export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'News' | 'Sports' | 'Culture' | 'Politics';
  author: string;
  publishedAt: string;
  imageUrl: string;
  reactions: {
    likes: number;
    thumbsUp: number;
    smiles: number;
    angry: number;
  };
  userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry';
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  publishedAt: string;
  createdAt: string;
  likes: number;
  liked: boolean;
  parentId?: string;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Revolutionary AI Technology Transforms Healthcare Industry',
    summary: 'New breakthrough in artificial intelligence promises to revolutionize patient care and medical diagnostics across the globe.',
    content: `A groundbreaking artificial intelligence system has been unveiled that promises to transform the healthcare industry. The technology, developed by researchers at leading medical institutions, can diagnose diseases with unprecedented accuracy.

The AI system analyzes medical imaging data in real-time, detecting patterns that human doctors might miss. Early trials show a 95% accuracy rate in identifying various conditions, from cancer to neurological disorders.

Dr. Sarah Chen, lead researcher on the project, explained: "This technology doesn't replace doctors – it enhances their capabilities. We're seeing diagnoses that would have taken weeks now completed in minutes."

The system has already been deployed in several hospitals across major cities, with remarkable results. Patient outcomes have improved significantly, and doctors report increased confidence in their diagnostic decisions.

Healthcare officials are calling this the most significant advancement in medical technology in decades. Plans are underway to roll out the system globally within the next two years.`,
    category: 'News',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15T10:30:00Z',
    imageUrl: '/src/assets/news-tech.jpg',
    reactions: { likes: 1247, thumbsUp: 892, smiles: 234, angry: 12 },
    userReaction: 'like'
  },
  {
    id: '2',
    title: 'Championship Victory Sparks City-Wide Celebration',
    summary: 'Local team defeats defending champions in thrilling overtime match, bringing home their first title in over a decade.',
    content: `In a stunning upset that will be remembered for years to come, the underdog Riverside Ravens defeated the three-time defending champion Metro Thunderbolts 28-24 in overtime last night.

The game was a nail-biter from start to finish, with both teams trading leads throughout regulation. The Ravens, who hadn't won a championship since 2011, showed incredible determination and teamwork.

Quarterback Mike Rodriguez threw for 342 yards and three touchdowns, while the defense made crucial stops when it mattered most. The winning touchdown came on a beautiful 15-yard pass to wide receiver Tommy Chen in overtime.

"I can't believe we did it," said an emotional Rodriguez after the game. "This team has worked so hard all season. We knew we had something special, but to actually win it all... it's incredible."

The victory sparked celebrations throughout the city, with thousands of fans pouring into downtown streets to celebrate. The mayor has declared today a city holiday in honor of the team's achievement.`,
    category: 'Sports',
    author: 'Mike Thompson',
    publishedAt: '2024-01-15T08:15:00Z',
    imageUrl: '/src/assets/news-sports.jpg',
    reactions: { likes: 2156, thumbsUp: 1834, smiles: 567, angry: 34 }
  },
  {
    id: '3',
    title: 'Museum Unveils Revolutionary Interactive Art Experience',
    summary: 'Visitors can now step inside famous paintings and interact with artworks using cutting-edge virtual reality technology.',
    content: `The Metropolitan Museum of Modern Arts has opened its doors to a revolutionary new experience that allows visitors to literally step inside some of the world's most famous paintings.

Using advanced virtual reality and projection mapping technology, the "Living Canvas" exhibition transforms traditional art viewing into an immersive, interactive experience.

Visitors can walk through Van Gogh's "Starry Night," feeling the swirling brushstrokes around them, or sit at the table in Vermeer's "Girl with a Pearl Earring" and interact with the subjects.

Museum director Dr. Elena Rodriguez explained: "We're not replacing traditional art appreciation – we're expanding it. This technology allows people to understand art in completely new ways."

The exhibition took three years to develop, working with artists, technologists, and art historians to ensure historical accuracy while creating magical experiences.

Early reviews have been overwhelmingly positive, with visitors describing the experience as "life-changing" and "the future of museums."`,
    category: 'Culture',
    author: 'Elena Martinez',
    publishedAt: '2024-01-15T14:20:00Z',
    imageUrl: '/src/assets/news-culture.jpg',
    reactions: { likes: 987, thumbsUp: 654, smiles: 432, angry: 8 }
  },
  {
    id: '4',
    title: 'New Climate Policy Draws Mixed Reactions from Lawmakers',
    summary: 'Government announces ambitious environmental plan with both praise and criticism from different political parties.',
    content: `The government unveiled its most ambitious climate policy to date yesterday, aiming to achieve carbon neutrality by 2035 – five years ahead of previous targets.

The comprehensive plan includes massive investments in renewable energy infrastructure, electric vehicle charging networks, and green job creation programs.

Prime Minister Alexandra Thompson announced the policy at a press conference, stating: "The climate crisis demands bold action. We cannot afford to wait any longer."

The policy has drawn support from environmental groups and progressive lawmakers, who praise its ambitious timeline and comprehensive scope. However, conservative opposition leaders have criticized the plan's economic impact.

Senator Robert Hayes called the policy "economically reckless," while environmental advocate Dr. Maria Santos described it as "exactly what our planet needs."

The plan will require parliamentary approval and faces significant debate in the coming weeks. Public opinion polls show mixed support, with younger voters strongly in favor and older demographics expressing concerns about implementation costs.`,
    category: 'Politics',
    author: 'David Wilson',
    publishedAt: '2024-01-15T16:45:00Z',
    imageUrl: '/src/assets/news-politics.jpg',
    reactions: { likes: 1543, thumbsUp: 892, smiles: 123, angry: 456 }
  },
  {
    id: '5',
    title: 'Breakthrough in Quantum Computing Achieved by Local University',
    summary: 'Researchers successfully demonstrate quantum advantage in practical applications, marking a new era in computing power.',
    content: `Researchers at the University of Technology have achieved a major breakthrough in quantum computing, successfully demonstrating quantum advantage in solving real-world problems.

The team, led by Professor Lisa Wang, developed a new quantum algorithm that can solve certain optimization problems 1000 times faster than traditional computers.

"This isn't just theoretical anymore," explained Professor Wang. "We're seeing practical applications that could revolutionize everything from drug discovery to financial modeling."

The breakthrough came after five years of intensive research and represents a significant step toward practical quantum computing for everyday use.

Major technology companies have already expressed interest in licensing the university's technology, with potential applications in artificial intelligence, cryptography, and materials science.

The research has been published in the prestigious journal Nature Quantum Information and is being hailed as one of the most significant advances in the field this decade.`,
    category: 'News',
    author: 'Jennifer Liu',
    publishedAt: '2024-01-15T11:10:00Z',
    imageUrl: '/src/assets/news-tech.jpg',
    reactions: { likes: 876, thumbsUp: 543, smiles: 234, angry: 19 }
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    author: 'TechEnthusiast42',
    content: 'This is incredible! Can\'t wait to see how this transforms healthcare in developing countries.',
    publishedAt: '2024-01-15T11:00:00Z',
    createdAt: '2024-01-15T11:00:00Z',
    likes: 23,
    liked: false
  },
  {
    id: '2',
    articleId: '1',
    author: 'HealthcareWorker',
    content: 'As a nurse, I\'m excited but also concerned about job displacement. Hope there\'s training for healthcare workers.',
    publishedAt: '2024-01-15T11:15:00Z',
    createdAt: '2024-01-15T11:15:00Z',
    likes: 45,
    liked: false
  },
  {
    id: '3',
    articleId: '2',
    author: 'RavensFan4Life',
    content: 'I WAS THERE! What an amazing game! Rodriguez is a legend!',
    publishedAt: '2024-01-15T08:30:00Z',
    createdAt: '2024-01-15T08:30:00Z',
    likes: 67,
    liked: false
  },
  {
    id: '4',
    articleId: '3',
    author: 'ArtLover',
    content: 'Visited yesterday - absolutely mind-blowing experience. My kids loved it!',
    publishedAt: '2024-01-15T15:00:00Z',
    createdAt: '2024-01-15T15:00:00Z',
    likes: 12,
    liked: false
  },
  {
    id: '5',
    articleId: '4',
    author: 'ClimateActivist',
    content: 'Finally! A government taking climate change seriously. This gives me hope.',
    publishedAt: '2024-01-15T17:00:00Z',
    createdAt: '2024-01-15T17:00:00Z',
    likes: 34,
    liked: false
  },
  {
    id: '6',
    articleId: '1',
    author: 'MedStudent',
    content: 'This could really help with early detection. Amazing breakthrough!',
    publishedAt: '2024-01-15T12:00:00Z',
    createdAt: '2024-01-15T12:00:00Z',
    likes: 15,
    liked: false,
    parentId: '1'
  }
];

export const categories = ['News', 'Sports', 'Culture', 'Politics'] as const;