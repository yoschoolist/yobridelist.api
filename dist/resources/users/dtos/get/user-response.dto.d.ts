import { Gender, Role, User } from "@prisma/client";
export declare class UserResponseDto implements User {
    id: string;
    name: string;
    alias: string;
    imageUrl: string;
    followerCount: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    hashedPassword: string;
    imageId: string;
    emailConfirmed: boolean;
    locked: boolean;
    role: Role;
    birthDate: Date;
    gender: Gender;
    about: string;
    static toUserResponseDto(user: User | User[]): any;
}
