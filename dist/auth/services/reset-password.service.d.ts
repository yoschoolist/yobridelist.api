import { ResetPasswordService } from "../interfaces/reset-password-service.interface";
import { MailService } from "src/mail/mail.service";
import { ResetPasswordDto } from "../dtos/password-reset/reset-password.dto";
import { GetUserService } from "src/resources/users/interfaces/get-user-service.interface";
import { TokenService } from "src/resources/users/interfaces/token-service.interface";
import { PasswordService } from "src/resources/users/interfaces/password-service.interface";
export declare class ResetPasswordServiceImpl implements ResetPasswordService {
    protected readonly getUserService: GetUserService;
    protected readonly tokenService: TokenService;
    protected readonly passwordService: PasswordService;
    private readonly mailService;
    constructor(getUserService: GetUserService, tokenService: TokenService, passwordService: PasswordService, mailService: MailService);
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void>;
    sendResetPasswordToken(email: string): Promise<void>;
}
