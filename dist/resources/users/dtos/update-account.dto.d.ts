import { Gender } from "@prisma/client";
export declare class UpdateAccountDto {
    name?: string;
    gender?: Gender;
    birthDate?: Date;
    about?: string;
    image: Express.Multer.File;
}
