import { ApiProperty } from "@nestjs/swagger";
import { BlogTag } from "@prisma/client";
import { Exclude, Expose, plainToInstance } from "class-transformer";

@Exclude()
export class BlogTagResponseDto implements BlogTag {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    slug: string;

    createdAt: Date;
    updatedAt: Date;

    static toBlogTagResponseDto(blogTag: BlogTag | BlogTag []): any {
        return plainToInstance(BlogTagResponseDto, blogTag, {
            excludeExtraneousValues: true,
        }); 
    }
}
