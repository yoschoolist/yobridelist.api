import { ApiProperty } from "@nestjs/swagger";
import { Gender, UserRole, User } from "@prisma/client";
import { Exclude, Expose, Transform } from "class-transformer";
import { UserResponseDto } from "./user-response.dto";
//import { ArtistResponseDto } from "src/resources/artists/dtos/get/artist-response.dto";


@Exclude()
export class UserDetailResponseDto implements User {
    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    updatedAt: Date;

    @ApiProperty()
    @Expose()
    alias: string;

    @ApiProperty()
    @Expose()
    name: string;

    email: string;

    hashedPassword: string;

    @ApiProperty()
    @Expose()
    imageUrl: string;

    imageId: string;

    emailConfirmed: boolean;

    locked: boolean;

    role: UserRole;

    @ApiProperty()
    @Expose()
    birthDate: Date;

    @ApiProperty()
    @Expose()
    gender: Gender;

    @ApiProperty()
    @Expose()
    about: string;

    @ApiProperty()
    @Expose()
    followingVendorCount: number;

    @ApiProperty({
        isArray: true,
        type: UserResponseDto,
    })
    @Expose()
    @Transform(({ value }) => UserResponseDto.toUserResponseDto(value))
    followings?: User[];

    @ApiProperty({
        isArray: true,
        type: UserResponseDto,
    })
    @Expose()
    @Transform(({ value }) => UserResponseDto.toUserResponseDto(value))
    followers?: User[];

    /*@ApiProperty({
        isArray: true,
        type: ArtistResponseDto,
    })
    @Expose()
    @Transform(({ value }) =>
        ArtistResponseDto.toArtistResponseDto(value?.map((v) => v.artist)),
    )
    followingVendor?: UserFollowVendor[];*/

}
