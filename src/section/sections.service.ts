import { Inject, Injectable } from "@nestjs/common";
import { Section } from "src/section/section.dto";
import { BlogResponseDto } from "../resources/blogs/dtos/get/blog-response.dto";
import { BLOG_SERVICES } from "../resources/blogs/interfaces/constants";
import { GetBlogService } from "../resources/blogs/interfaces/get-blog-service.interface";

const BLOGS_PER_SECTION = 5;
const VENDORS_PER_SECTION = 5;
const SONGS_PER_SECTION = 10;

@Injectable()
export class SectionsService {
    constructor(
        @Inject(BLOG_SERVICES.GetBlogService)
        private readonly getBlogService: GetBlogService,

    ) {}

    /*public async getNewReleasedSongs(): Promise<Section<any>> {
        const songs = await this.getSongService.get({
            take: SONGS_PER_SECTION,
            allowCount: false,
            sort: "releasedAt_desc",
        });

        return {
            title: "Bài Hát Mới Phát Hành",
            type: "songs",
            items: SongResponseDto.toSongResponseDto(songs.results),
        };
    }

    public async getRandomAlbumsSection(): Promise<Section<any>> {
        const randomAlbums = await this.getAlbumService.getRandomAlbums(
            ALBUMS_PER_SECTION,
        );

        return {
            title: "Hôm Nay Nghe Gì?",
            type: "albums",
            items: AlbumResponseDto.toAlbumResponseDto(randomAlbums),
        };
    }

    public async getGenreSections(): Promise<Section<any>[]> {
        const randomGenres = await this.getGenreService.getRandomGenres(2, {
            albums: {
                include: {
                    genres: true,
                    blog: true,
                },
                orderBy: { likeCount: "desc" },
                take: ALBUMS_PER_SECTION,
            },
        });

        return randomGenres.map((genre) => ({
            title: genre.name,
            type: "albums",
            link: `/genres/${genre.alias}/${genre.id}/albums`,
            items: AlbumResponseDto.toAlbumResponseDto(genre.albums),
        }));
    }

    public async getHotAlbumsSection(): Promise<Section<any>> {
        const hotAlbums = await this.getAlbumService.get({
            sort: "likeCount_desc",
            take: ALBUMS_PER_SECTION,
            allowCount: false,
        });

        return {
            title: "Album Hot",
            type: "albums",
            items: AlbumResponseDto.toAlbumResponseDto(hotAlbums.results),
        };
    }*/

    public async getTopBlogsSection(): Promise<Section<any>> {
        const topBlogs = await this.getBlogService.get({
            allowCount: false,
            sort: "followerCount_desc",
            take: BLOGS_PER_SECTION,
        });

        return {
            title: "Nghệ Sĩ Thịnh Hành",
            type: "blogs",
            items: BlogResponseDto.toBlogResponseDto(topBlogs.results),
        };
    }

}
