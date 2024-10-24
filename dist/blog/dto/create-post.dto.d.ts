export declare class CreatePostDto {
    title: string;
    content: string;
    excerpt?: string;
    featuredImageUrl?: string;
    categoryId: number;
    tagIds?: number[];
}
