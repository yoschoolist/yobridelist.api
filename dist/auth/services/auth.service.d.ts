import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "../dtos/sign-in.dto";
import { RegisterDto } from "../dtos/register.dto";
import { SignInResponseDto } from "../dtos/signin-response.dto";
import { RefreshTokenDto } from "../dtos/refresh-token.dto";
import { MailService } from "src/mail/mail.service";
import { AuthService } from "../interfaces/auth-service.interface";
import { BaseAuthService } from "./base-auth.service";
import { GetUserService } from "src/resources/users/interfaces/get-user-service.interface";
import { CudUserService } from "src/resources/users/interfaces/cud-user-service.interface";
import { TokenService } from "src/resources/users/interfaces/token-service.interface";
export declare class AuthServiceImpl extends BaseAuthService implements AuthService {
    protected readonly jwtService: JwtService;
    private readonly mailService;
    protected readonly getUserService: GetUserService;
    protected readonly cudUserService: CudUserService;
    protected readonly tokenService: TokenService;
    constructor(jwtService: JwtService, mailService: MailService, getUserService: GetUserService, cudUserService: CudUserService, tokenService: TokenService);
    register(registerDto: RegisterDto): Promise<SignInResponseDto>;
    signIn(signInDto: SignInDto): Promise<SignInResponseDto>;
    signOut(userId: string, refreshToken: string): Promise<void>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<SignInResponseDto>;
}
