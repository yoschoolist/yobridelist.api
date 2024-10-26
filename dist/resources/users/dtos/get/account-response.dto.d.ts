import { Gender, UserRole, User } from "@prisma/client";
export declare class AccountResponseDto implements User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    alias: string;
    email: string;
    hashedPassword: string;
    imageUrl: string;
    imageId: string;
    emailConfirmed: boolean;
    locked: boolean;
    role: UserRole;
    followerCount: number;
    birthDate: Date;
    gender: Gender;
    about: string;
}
