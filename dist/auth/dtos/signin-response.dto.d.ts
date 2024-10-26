import { User } from "@prisma/client";
export declare class SignInResponseDto {
    access_token: string;
    refresh_token: string;
    user?: User;
}
