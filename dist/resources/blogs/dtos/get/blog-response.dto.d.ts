import { BlogPost } from "@prisma/client";
export declare class BlogResponseDto implements BlogPost {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    excerpt: string;
    status: string;
    authorId: number;
    imageId: string;
    static toBlogResponseDto(blog: BlogPost | BlogPost[]): any;
}
