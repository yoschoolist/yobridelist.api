import { PasswordService } from "../interfaces/password-service.interface";
import { PrismaService } from "src/database/prisma.service";
import { ChangePasswordDto } from "../dtos/change-password.dto";
import { User } from "@prisma/client";
import { TokenService } from "../interfaces/token-service.interface";
export declare class PasswordServiceImpl implements PasswordService {
    private readonly prisma;
    private readonly tokenService;
    constructor(prisma: PrismaService, tokenService: TokenService);
    changePassword(user: User, changePasswordDto: ChangePasswordDto): Promise<boolean>;
    resetPassword(user: User, token: string, newPassword: string): Promise<boolean>;
}
