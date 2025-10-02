import { Podcast, PodcastComment } from './classes';

export const mockPodcasts: Podcast[] = [
    {
        id: 'podcast-1',
        title: 'Tech Revolution: AI in 2025',
        description: 'Dive deep into the latest developments in artificial intelligence and how they are reshaping our daily lives. Join our experts as they discuss breakthroughs, ethical concerns, and future predictions.',
        category: 'News',
        creators: ['Sarah Johnson', 'Michael Chen'],
        publishedAt: '2025-10-01T08:00:00Z',
        duration: '45:30',
        imageUrl: '/src/assets/news-tech.jpg',
        episodeNumber: 42,
        reactions: { like: 234, thumbsUp: 156, hearteyes: 89 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'hearteyes', 'star']
    },
    {
        id: 'podcast-2',
        title: 'Champions League Weekly Recap',
        description: 'All the highlights, controversies, and tactical analysis from this week\'s Champions League matches. We break down the key moments and preview upcoming fixtures.',
        category: 'Sports',
        creators: ['Tom Wilson', 'Emma Rodriguez'],
        publishedAt: '2025-09-30T18:00:00Z',
        duration: '38:15',
        imageUrl: '/src/assets/news-sports.jpg',
        episodeNumber: 15,
        reactions: { like: 445, thumbsUp: 289, smile: 123 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'star']
    },
    {
        id: 'podcast-3',
        title: 'The Art of Modern Cinema',
        description: 'Exploring contemporary filmmaking techniques and the directors who are pushing boundaries. This episode features discussions on visual storytelling and the impact of streaming platforms.',
        category: 'Culture',
        creators: ['Lisa Anderson', 'David Park'],
        publishedAt: '2025-09-29T12:00:00Z',
        duration: '52:40',
        imageUrl: '/src/assets/news-culture.jpg',
        episodeNumber: 28,
        reactions: { like: 178, hearteyes: 234, star: 156 },
        availableReactions: ['like', 'smile', 'hearteyes', 'star']
    },
    {
        id: 'podcast-4',
        title: 'Election 2025: What\'s at Stake',
        description: 'A comprehensive analysis of the upcoming election, key policy debates, and what it means for the future. Our political correspondents provide insights from across the political spectrum.',
        category: 'Politics',
        creators: ['Robert Greene', 'Maria Santos'],
        publishedAt: '2025-09-28T14:30:00Z',
        duration: '56:20',
        imageUrl: '/src/assets/news-politics.jpg',
        episodeNumber: 67,
        reactions: { like: 312, thumbsUp: 178, angry: 45, smile: 89 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'angry', 'star']
    },
    {
        id: 'podcast-5',
        title: 'Climate Crisis Update',
        description: 'The latest on global warming, renewable energy breakthroughs, and environmental policies. Scientists and activists share their perspectives on urgent climate action.',
        category: 'News',
        creators: ['Dr. Emily White', 'James Thompson'],
        publishedAt: '2025-09-27T10:00:00Z',
        duration: '41:15',
        imageUrl: '/src/assets/news-environment.jpg',
        episodeNumber: 89,
        reactions: { like: 567, thumbsUp: 423, hearteyes: 156 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'hearteyes', 'star']
    },
    {
        id: 'podcast-6',
        title: 'The Business of Innovation',
        description: 'Interviews with startup founders and corporate leaders about disrupting industries, building teams, and navigating market challenges in today\'s economy.',
        category: 'News',
        creators: ['Amanda Lee', 'Chris Martinez'],
        publishedAt: '2025-09-26T09:00:00Z',
        duration: '48:50',
        imageUrl: '/src/assets/news-business.jpg',
        episodeNumber: 134,
        reactions: { like: 289, thumbsUp: 234, star: 178 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'star']
    },
    {
        id: 'podcast-7',
        title: 'Urban Living: Cities of Tomorrow',
        description: 'Exploring how urban planning, architecture, and technology are transforming our cities. What will the cities of 2050 look like?',
        category: 'Culture',
        creators: ['Marcus Brown', 'Nina Patel'],
        publishedAt: '2025-09-25T15:00:00Z',
        duration: '39:25',
        imageUrl: '/src/assets/news-urban.jpg',
        episodeNumber: 23,
        reactions: { like: 145, thumbsUp: 98, smile: 67 },
        availableReactions: ['like', 'thumbsUp', 'smile', 'hearteyes', 'star']
    },
    {
        id: 'podcast-8',
        title: 'Entertainment Weekly Roundup',
        description: 'Your weekly dose of entertainment news, celebrity interviews, and pop culture commentary. From music releases to blockbuster movies.',
        category: 'Culture',
        creators: ['Sophie Turner', 'Alex Kim'],
        publishedAt: '2025-09-24T17:00:00Z',
        duration: '44:10',
        imageUrl: '/src/assets/news-entertainment.jpg',
        episodeNumber: 201,
        reactions: { like: 823, hearteyes: 456, smile: 234 },
        availableReactions: ['like', 'smile', 'hearteyes', 'star']
    }
];

export const mockPodcastComments: PodcastComment[] = [
    {
        id: 'pc1',
        podcastId: 'podcast-1',
        author: 'Tech Enthusiast',
        content: 'Amazing episode! The discussion on AI ethics was particularly insightful.',
        publishedAt: '2025-10-01T10:30:00Z',
        createdAt: '2025-10-01T10:30:00Z',
        likes: 24,
        liked: false
    },
    {
        id: 'pc2',
        podcastId: 'podcast-1',
        author: 'Data Scientist',
        content: 'Would love to hear more about machine learning applications in healthcare.',
        publishedAt: '2025-10-01T11:15:00Z',
        createdAt: '2025-10-01T11:15:00Z',
        likes: 18,
        liked: false
    },
    {
        id: 'pc3',
        podcastId: 'podcast-2',
        author: 'Football Fan',
        content: 'Great analysis! Totally agree with your take on the tactical changes.',
        publishedAt: '2025-09-30T19:00:00Z',
        createdAt: '2025-09-30T19:00:00Z',
        likes: 45,
        liked: true
    }
];
