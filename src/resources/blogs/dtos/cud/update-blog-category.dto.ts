import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsDate, IsInt, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBlogCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    slug: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string = null;

}
