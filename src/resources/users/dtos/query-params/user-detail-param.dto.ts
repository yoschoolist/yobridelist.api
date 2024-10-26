import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class UserDetailParamDto {

 
    /*@ApiProperty({
        required: false,
        description:
            "Limit following artists to be returned, default is no artist return",
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    followingArtistLimit?: number;*/

}
