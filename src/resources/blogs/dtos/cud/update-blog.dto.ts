import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsDate, IsInt, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MapperService } from "src/common/utils/mapper.service";
export class UpdateBlogDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;


    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    excerpt?: string = null;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    imageId: string;

    @ApiProperty({ required: false })
    @Transform(({ value }) => MapperService.mapArray(value))
    @IsArray()
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @IsOptional()
    categoryIds?: string[] = null;

    @ApiProperty({ required: false })
    @Transform(({ value }) => MapperService.mapArray(value))
    @IsArray()
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @IsOptional()
    tagIds?: string[] = null;

    @ApiProperty({
        type: "file",
        required: false,
    })
    image: Express.Multer.File;
}
