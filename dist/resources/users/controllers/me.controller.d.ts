import { UpdateAccountDto } from "../dtos/update-account.dto";
import { ChangePasswordDto } from "../dtos/change-password.dto";
import { CudUserService } from "../interfaces/cud-user-service.interface";
import { GetUserService } from "../interfaces/get-user-service.interface";
import { PasswordService } from "../interfaces/password-service.interface";
export declare class MeController {
    private readonly getUserService;
    private readonly cudUserService;
    private readonly passwordService;
    constructor(getUserService: GetUserService, cudUserService: CudUserService, passwordService: PasswordService);
    getAccount(id: string): Promise<{
        name: string;
        id: number;
        email: string;
        hashedPassword: string | null;
        imageUrl: string | null;
        imageId: string | null;
        emailConfirmed: boolean;
        locked: boolean;
        role: import("@prisma/client").$Enums.UserRole;
        birthDate: Date | null;
        gender: import("@prisma/client").$Enums.Gender | null;
        about: string | null;
        alias: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAccount(id: string, updateAccountDto: UpdateAccountDto, image: Express.Multer.File): Promise<{
        name: string;
        id: number;
        email: string;
        hashedPassword: string | null;
        imageUrl: string | null;
        imageId: string | null;
        emailConfirmed: boolean;
        locked: boolean;
        role: import("@prisma/client").$Enums.UserRole;
        birthDate: Date | null;
        gender: import("@prisma/client").$Enums.Gender | null;
        about: string | null;
        alias: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
