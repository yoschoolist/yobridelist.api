import { ApiProperty } from "@nestjs/swagger";
import { BlogPost, BlogCategory, BlogTag } from "@prisma/client";
import { Exclude, Expose, Transform } from "class-transformer";
import { BlogCategoryResponseDto } from "./blog-category-response.dto";
import { BlogTagResponseDto } from "./blog-tag-response.dto";

@Exclude()
export class BlogDetailResponseDto implements BlogPost {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    slug: string;

    @ApiProperty()
    @Expose()
    publishedAt: Date;

    @ApiProperty()
    @Expose()
    excerpt: string;

    @ApiProperty()
    @Expose()
    content: string;

    @ApiProperty()
    @Expose()
    featuredImageUrl: string;

    @ApiProperty()
    @Expose()
    categoryCount: number;

    @ApiProperty()
    @Expose()
    tagCount: number;

    _count?: any;

    @ApiProperty()
    @Expose()
    status: string;

    @ApiProperty()
    @Expose()
    authorId: number;

    @ApiProperty()
    @Expose()
    featuredImageId: string;

    @ApiProperty({
        type: BlogCategoryResponseDto,
        isArray: true,
    })
    @Expose()
    @Transform(({ value }) => BlogCategoryResponseDto.toBlogCategoryResponseDto(value))
    categories?: BlogCategory[];

    @ApiProperty({
        type: BlogTagResponseDto,
        isArray: true,
    })
    @Expose()
    @Transform(({ value }) => BlogTagResponseDto.toBlogTagResponseDto(value))
    tags?: BlogTag[];
}
