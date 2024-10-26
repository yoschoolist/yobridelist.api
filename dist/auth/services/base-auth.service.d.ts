import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
export declare class BaseAuthService {
    protected readonly jwtService: JwtService;
    constructor(jwtService: JwtService);
    protected createAccessToken(user: User): Promise<string>;
}
