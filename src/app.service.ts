import { Inject, Injectable } from "@nestjs/common";
import { SearchResponseDto } from "./common/dtos/search-response.dto";
import { Section } from "./section/section.dto";
import { SectionsService } from "./section/sections.service";
import {
    CACHE_SERVICE,
    CacheService,
} from "./cache/interfaces/cache.interface";
import { BLOG_SERVICES } from "./resources/blogs/interfaces/constants";
import { GetBlogService } from "./resources/blogs/interfaces/get-blog-service.interface";

@Injectable()
export class AppService {
    constructor(
        @Inject(BLOG_SERVICES.GetBlogService)
        private readonly getBlogService: GetBlogService,
        private readonly sectionsService: SectionsService,
        @Inject(CACHE_SERVICE) private readonly cacheService: CacheService,
    ) {}

    async getSections(): Promise<Section<any>[]> {
        const cachedSections = await this.cacheService.get("cached-sections");

        if (cachedSections) {
            return cachedSections;
        }

        const sectionTasks: any[] = [
            this.sectionsService.getTopBlogsSection,
            /*this.sectionsService.getGenreSections(),
            this.sectionsService.getHotAlbumsSection(),
            this.sectionsService.getRandomAlbumsSection(),
            this.sectionsService.getPlaylistSection(),
            this.sectionsService.getTopArtistsSection(),*/
        ];

        const sections: Section<any>[] = [].concat(...(await Promise.all(sectionTasks)));

        await this.cacheService.set(
            "cached-sections",
            JSON.stringify(sections),
        );

        return sections;
    }

    async search(
        keyword: string,
        options: {
            take: number;
            allowCount: boolean;
        },
    ): Promise<SearchResponseDto> {
        const skip = 0,
            { take, allowCount } = options;

        //const [songs, albums, playlists, genres, artists, users] =
        const [blogs] =
            await Promise.all([
                this.getBlogService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),
                /*this.getAlbumService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),
                this.getPlaylistService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),
                this.getGenreService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),
                this.getArtistService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),
                this.getUserService.get({
                    skip,
                    take,
                    allowCount,
                    keyword,
                }),*/
            ]);

        /*return {
            users,
            playlists,
            songs,
            genres,
            albums,
            artists,
        };*/
        return {
            blogs,
        };
    }
}
