import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class BlogDetailParamDto {
    @ApiProperty({
        required: false,
        description: "Limit tags to be returned, default is no song return",
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    blogCategoriesLimit?: number;

    @ApiProperty({
        required: false,
        description: "Limit blog tags to be returned, default is no album return",
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    blogTagsLimit?: number;
}
