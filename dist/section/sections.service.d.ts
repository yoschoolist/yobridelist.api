import { Section } from "src/section/section.dto";
import { GetBlogService } from "../resources/blogs/interfaces/get-blog-service.interface";
export declare class SectionsService {
    private readonly getBlogService;
    constructor(getBlogService: GetBlogService);
    getTopBlogsSection(): Promise<Section<any>>;
}
