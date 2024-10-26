import { SearchResponseDto } from "./common/dtos/search-response.dto";
import { Section } from "./section/section.dto";
import { SectionsService } from "./section/sections.service";
import { CacheService } from "./cache/interfaces/cache.interface";
import { GetUserService } from "./resources/users/interfaces/get-user-service.interface";
import { GetBlogService } from "./resources/blogs/interfaces/get-blog-service.interface";
export declare class AppService {
    private readonly getUserService;
    private readonly getBlogService;
    private readonly sectionsService;
    private readonly cacheService;
    constructor(getUserService: GetUserService, getBlogService: GetBlogService, sectionsService: SectionsService, cacheService: CacheService);
    getSections(): Promise<Section<any>[]>;
    search(keyword: string, options: {
        take: number;
        allowCount: boolean;
    }): Promise<SearchResponseDto>;
}
