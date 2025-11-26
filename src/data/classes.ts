export interface Article {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: 'News' | 'Sports' | 'Culture' | 'Politics';
    author: string;
    publishedAt: string;
    imageUrl: string;
    location: string;
    showLocation?: boolean;
    reactions: {
        like?: number;
        thumbsUp?: number;
        smile?: number;
        angry?: number;
        thumbsDown?: number;
        crying?: number;
        hearteyes?: number;
        star?: number;
    };
    userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star';
    availableReactions: ('like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star')[];
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

export interface Podcast {
    id: string;
    title: string;
    description: string;
    category: 'News' | 'Sports' | 'Culture' | 'Politics';
    creators: string[];
    publishedAt: string;
    duration: string; // e.g., "45:30"
    imageUrl: string;
    episodeNumber?: number;
    reactions: {
        like?: number;
        thumbsUp?: number;
        smile?: number;
        angry?: number;
        thumbsDown?: number;
        crying?: number;
        hearteyes?: number;
        star?: number;
    };
    userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star';
    availableReactions: ('like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star')[];
}

export interface PodcastComment {
    id: string;
    podcastId: string;
    author: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    likes: number;
    liked: boolean;
    parentId?: string;
}

export interface Video {
    id: string;
    title: string;
    description: string;
    category: 'News' | 'Sports' | 'Culture' | 'Politics';
    creator: string;
    publishedAt: string;
    duration: string; // e.g., "1:30" or "10:45"
    imageUrl: string;
    videoUrl?: string;
    format: 'widescreen' | 'vertical'; // widescreen or vertical story
    reactions: {
        like?: number;
        thumbsUp?: number;
        smile?: number;
        angry?: number;
        thumbsDown?: number;
        crying?: number;
        hearteyes?: number;
        star?: number;
    };
    userReaction?: 'like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star';
    availableReactions: ('like' | 'thumbsUp' | 'smile' | 'angry' | 'thumbsDown' | 'crying' | 'hearteyes' | 'star')[];
}

export interface VideoComment {
    id: string;
    videoId: string;
    author: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    likes: number;
    liked: boolean;
    parentId?: string;
}