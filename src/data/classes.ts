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