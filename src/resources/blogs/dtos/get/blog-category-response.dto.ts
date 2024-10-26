import { ApiProperty } from "@nestjs/swagger";
import { BlogCategory } from "@prisma/client";
import { Exclude, Expose, plainToInstance } from "class-transformer";

@Exclude()
export class BlogCategoryResponseDto implements BlogCategory {
    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    slug: string;

    @ApiProperty()
    @Expose()
    description: string;

    @ApiProperty()
    @Expose()
    blogsCount: number;

    createdAt: Date;
    updatedAt: Date;


    static toBlogCategoryResponseDto(blogCategory: BlogCategory | BlogCategory[]): any {
        return plainToInstance(BlogCategoryResponseDto, blogCategory, {
            excludeExtraneousValues: true,
        });
    }
}
