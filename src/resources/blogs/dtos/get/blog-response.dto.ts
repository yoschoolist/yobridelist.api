import { ApiProperty } from "@nestjs/swagger";
import { BlogPost } from "@prisma/client";
import { Exclude, Expose, plainToInstance } from "class-transformer";

@Exclude()
export class BlogResponseDto implements BlogPost {
    @ApiProperty()
    @Expose()
    id: number;

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
    authorId: number;
    imageId: string;

    static toBlogResponseDto(blog: BlogPost | BlogPost[]): any {
        return plainToInstance(BlogResponseDto, blog, {
            excludeExtraneousValues: true,
        });
    }
}
