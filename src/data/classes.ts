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