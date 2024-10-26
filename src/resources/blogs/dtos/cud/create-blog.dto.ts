import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsDate, IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBlogDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    slug: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    except?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty({ required: false })
    @Type(() => Date)
    @Transform(({ value }) => value)
    @IsDate({
        message: "Publish Date must match yyyy-mm-dd.",
    })
    @IsOptional()
    publishedAt?: Date;


    @ApiProperty({
        type: "file",
        required: false,
    })
    image: Express.Multer.File;

    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    categoryIds?: number[];

    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    tagIds?: number[];

    authorId: number;
}