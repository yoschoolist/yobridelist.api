import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createPost(createPostDto: CreatePostDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        slug: string;
        content: string;
        excerpt: string | null;
        featuredImageUrl: string | null;
        publishedAt: Date | null;
        authorId: number;
    }>;
    findAllPosts(published?: boolean): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        slug: string;
        content: string;
        excerpt: string | null;
        featuredImageUrl: string | null;
        publishedAt: Date | null;
        authorId: number;
    }[]>;
    findPostBySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        slug: string;
        content: string;
        excerpt: string | null;
        featuredImageUrl: string | null;
        publishedAt: Date | null;
        authorId: number;
    }>;
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
