import { SignInResponseDto } from "../dtos/signin-response.dto";
import { SocialLoginDto } from "../dtos/social-login.dto";
export interface SocialAuthService {
    socialLogin(socialLoginDto: SocialLoginDto): Promise<SignInResponseDto>;
}
