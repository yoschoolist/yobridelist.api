import { Gender, UserRole, User } from "@prisma/client";
export declare class UserDetailResponseDto implements User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    alias: string;
    name: string;
    email: string;
    hashedPassword: string;
    imageUrl: string;
    imageId: string;
    emailConfirmed: boolean;
    locked: boolean;
    role: UserRole;
    birthDate: Date;
    gender: Gender;
    about: string;
    followingVendorCount: number;
    followings?: User[];
    followers?: User[];
}
