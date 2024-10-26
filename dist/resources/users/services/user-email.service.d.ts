import { UserEmailService } from "../interfaces/user-email-service.interface";
import { PrismaService } from "src/database/prisma.service";
import { TokenService } from "../interfaces/token-service.interface";
import { User } from "@prisma/client";
export declare class UserEmailServiceImpl implements UserEmailService {
    private readonly prisma;
    private readonly tokenService;
    constructor(prisma: PrismaService, tokenService: TokenService);
    confirmEmail(user: User, token: string): Promise<boolean>;
}
