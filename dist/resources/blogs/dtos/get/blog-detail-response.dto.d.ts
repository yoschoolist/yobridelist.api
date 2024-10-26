import { BlogPost, BlogCategory, BlogTag } from "@prisma/client";
export declare class BlogDetailResponseDto implements BlogPost {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    slug: string;
    publishedAt: Date;
    excerpt: string;
    content: string;
    imageUrl: string;
    categoryCount: number;
    tagCount: number;
    _count?: any;
    status: string;
    authorId: number;
    imageId: string;
    categories?: BlogCategory[];
    tags?: BlogTag[];
}
