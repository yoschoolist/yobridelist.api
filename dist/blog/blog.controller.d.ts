import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createPost(createPostDto: CreatePostDto): Promise<BlogPost>;
    findAllPosts(published?: boolean): Promise<BlogPost[]>;
    findPostBySlug(slug: string): Promise<any>;
    findAllCategories(): Promise<any>;
    findAllTags(): Promise<any>;
}
