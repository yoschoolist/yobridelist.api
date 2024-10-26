import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class BlogCategoryDetailParamDto {
    @ApiProperty({
        required: false,
        description: "Limit blog posts to be returned, default is no blog post return",
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    blogLimit?: number;
}
