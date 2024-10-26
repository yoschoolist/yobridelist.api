import { ApiProperty } from "@nestjs/swagger";
import { BlogPost } from "@prisma/client";
import { Exclude, Expose, plainToInstance } from "class-transformer";

@Exclude()
export class BlogResponseDto implements BlogPost {
    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    slug: string;

    @ApiProperty()
    @Expose()
    imageUrl: string;

    @ApiProperty()
    @Expose()
    content: string;


    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    excerpt: string;
    status: string;
    authorId: string;
    views: number;
    imageId: string;

    static toBlogResponseDto(blog: BlogPost | BlogPost[]): any {
        return plainToInstance(BlogResponseDto, blog, {
            excludeExtraneousValues: true,
        });
    }
}
