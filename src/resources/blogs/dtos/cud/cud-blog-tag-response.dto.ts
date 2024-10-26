import { ApiProperty } from "@nestjs/swagger";
import { BlogTag } from "@prisma/client";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CudBlogTagResponseDto implements BlogTag {
    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    slug: string;

    
    createdAt: Date;
    updatedAt: Date;

}
