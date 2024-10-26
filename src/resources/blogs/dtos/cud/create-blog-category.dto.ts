import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsDate, IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBlogCategoryDto {
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
    description?: string;

}