import { SocialAuthService } from "../interfaces/social-auth-service.interface";
import { SocialLoginDto } from "../dtos/social-login.dto";
import { SignInResponseDto } from "../dtos/signin-response.dto";
import { BaseAuthService } from "./base-auth.service";
import { JwtService } from "@nestjs/jwt";
import { GetUserService } from "src/resources/users/interfaces/get-user-service.interface";
import { CudUserService } from "src/resources/users/interfaces/cud-user-service.interface";
import { TokenService } from "src/resources/users/interfaces/token-service.interface";
export declare class SocialAuthServiceImpl extends BaseAuthService implements SocialAuthService {
    protected readonly getUserService: GetUserService;
    protected readonly cudUserService: CudUserService;
    protected readonly tokenService: TokenService;
    protected readonly jwtService: JwtService;
    constructor(getUserService: GetUserService, cudUserService: CudUserService, tokenService: TokenService, jwtService: JwtService);
    socialLogin(socialLoginDto: SocialLoginDto): Promise<SignInResponseDto>;
}
