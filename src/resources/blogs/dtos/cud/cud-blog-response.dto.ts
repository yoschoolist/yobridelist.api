import { ApiProperty } from "@nestjs/swagger";
import { BlogPost } from "@prisma/client";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CudBlogResponseDto implements BlogPost {
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
    imageId: string;

    @ApiProperty()
    @Expose()
    excerpt: string;

    @ApiProperty()
    @Expose()
    content: string;

    @ApiProperty()
    @Expose()
    views: number;

    @ApiProperty()
    @Expose()
    status: string;
    
    createdAt: Date;
    updatedAt: Date;

    @ApiProperty()
    @Expose()
    publishedAt: Date;


    authorId: string;
}
