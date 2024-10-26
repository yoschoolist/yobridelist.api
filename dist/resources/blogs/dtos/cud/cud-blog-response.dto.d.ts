import { BlogPost } from "@prisma/client";
export declare class CudBlogResponseDto implements BlogPost {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    imageId: string;
    excerpt: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    authorId: number;
}
