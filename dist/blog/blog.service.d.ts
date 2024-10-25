import { PrismaService } from '../prisma/prisma.service';
import { BlogPost, Prisma } from '@prisma/client';
export declare class BlogService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(data: Prisma.BlogPostCreateInput): Promise<BlogPost>;
    findAllPosts(published?: boolean): Promise<BlogPost[]>;
    findPostBySlug(slug: string): Promise<BlogPost | null>;
    updatePost(id: number, data: Prisma.BlogPostUpdateInput): Promise<BlogPost>;
    removePost(id: number): Promise<BlogPost>;
    findAllCategories(): Promise<({
        _count: {
            blogPosts: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    })[]>;
    findAllTags(): Promise<({
        _count: {
            blogPosts: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
    })[]>;
}
