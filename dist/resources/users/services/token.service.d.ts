import { TokenService } from "../interfaces/token-service.interface";
import { Token, User } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";
import { StringService } from "src/common/utils/string.service";
export declare class TokenServiceImpl implements TokenService {
    private readonly prisma;
    private readonly stringService;
    constructor(prisma: PrismaService, stringService: StringService);
    getToken(user: User, token: string): Promise<Token>;
    createRefreshTokenForUser(user: User): Promise<string>;
    createEmailConfirmationToken(user: User): Promise<string>;
    createResetPasswordToken(user: User): Promise<string>;
    revokeRefreshToken(userId: string, refreshToken: string): Promise<void>;
}
