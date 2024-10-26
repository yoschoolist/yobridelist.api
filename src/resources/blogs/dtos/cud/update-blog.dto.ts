import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsDate, IsInt, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

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

    @ApiProperty({
        type: "file",
        required: false,
    })
    imageUrl: Express.Multer.File;
}
