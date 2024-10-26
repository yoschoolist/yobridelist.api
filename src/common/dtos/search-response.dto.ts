import { ApiProperty } from "@nestjs/swagger";
//import { Album, Artist, Genre, Playlist, Song, User } from "@prisma/client";
import { User, BlogPost } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { UserResponseDto } from "src/resources/users/dtos/get/user-response.dto";
import { BlogResponseDto } from "src/resources/blogs/dtos/get/blog-response.dto";


import { PagedResponseDto } from "./paged-response.dto";


export class SearchResponseDto {
    /*@ApiProperty({ type: PagedResponseDto<SongResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<Song> }) => {
        value.results = SongResponseDto.toSongResponseDto(value.results);
        return value;
    })
    songs: PagedResponseDto<Song>;

    @ApiProperty({ type: PagedResponseDto<AlbumResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<Album> }) => {
        value.results = AlbumResponseDto.toAlbumResponseDto(value.results);
        return value;
    })
    albums: PagedResponseDto<Album>;

    @ApiProperty({ type: PagedResponseDto<PlaylistResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<Playlist> }) => {
        value.results = PlaylistResponseDto.toPlaylistResponseDto(
            value.results,
        );
        return value;
    })
    playlists: PagedResponseDto<Playlist>;

    @ApiProperty({ type: PagedResponseDto<GenreResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<Genre> }) => {
        value.results = GenreResponseDto.toGenreResponseDto(value.results);
        return value;
    })
    genres: PagedResponseDto<Genre>;

    @ApiProperty({ type: PagedResponseDto<ArtistResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<Artist> }) => {
        value.results = ArtistResponseDto.toArtistResponseDto(value.results);
        return value;
    })
    artists: PagedResponseDto<Artist>;*/

    @ApiProperty({ type: PagedResponseDto<UserResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<User> }) => {
        value.results = UserResponseDto.toUserResponseDto(value.results);
        return value;
    })
    users: PagedResponseDto<User>;

    @ApiProperty({ type: PagedResponseDto<BlogResponseDto> })
    @Expose()
    @Transform(({ value }: { value: PagedResponseDto<BlogPost> }) => {
        value.results = BlogResponseDto.toBlogResponseDto(value.results);
        return value;
    })
    blogs: PagedResponseDto<BlogPost>;
}
