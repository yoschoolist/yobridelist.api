import { ApiProperty } from "@nestjs/swagger";
import { BlogCategory } from "@prisma/client";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CudBlogCategoryResponseDto implements BlogCategory {
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
    
    createdAt: Date;
    updatedAt: Date;


}