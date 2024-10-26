import { SignInResponseDto } from "./dtos/signin-response.dto";
import { ConfirmEmailDto } from "./dtos/email-confirm/confirm-email.dto";
import { ResetPasswordDto } from "./dtos/password-reset/reset-password.dto";
import { SendPasswordResetDto } from "./dtos/password-reset/send-password-reset.dto";
import { SignInDto } from "./dtos/sign-in.dto";
import { RegisterDto } from "./dtos/register.dto";
import { RefreshTokenDto } from "./dtos/refresh-token.dto";
import { LogoutDto } from "./dtos/logout.dto";
import { AuthService } from "./interfaces/auth-service.interface";
import { SocialAuthService } from "./interfaces/social-auth-service.interface";
import { ConfirmEmailService } from "./interfaces/confirm-email-service.interface";
import { ResetPasswordService } from "./interfaces/reset-password-service.interface";
export declare class AuthController {
    private readonly authService;
    private readonly socialAuthService;
    private readonly confirmEmailService;
    private readonly resetPasswordService;
    constructor(authService: AuthService, socialAuthService: SocialAuthService, confirmEmailService: ConfirmEmailService, resetPasswordService: ResetPasswordService);
    register(registerDto: RegisterDto): Promise<SignInResponseDto>;
    login(signInDto: SignInDto): Promise<SignInResponseDto>;
    logout(userId: string, logoutDto: LogoutDto): Promise<{
        success: boolean;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<SignInResponseDto>;
    confirm(confirmEmailDto: ConfirmEmailDto): Promise<{
        success: boolean;
    }>;
    resendEmailConfirmation(userId: string): Promise<{
        success: boolean;
    }>;
    reset(resetPasswordDto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    sendResetLink(data: SendPasswordResetDto): Promise<{
        success: boolean;
    }>;
    googleAuth(): Promise<void>;
    googleAuthRedirect(user: any, res: any): Promise<SignInResponseDto>;
    facebookAuth(): Promise<void>;
    facebookAuthRedirect(user: any, res: any): Promise<SignInResponseDto>;
    githubAuth(): Promise<void>;
    githubAuthRedirect(user: any, res: any): Promise<SignInResponseDto>;
}
