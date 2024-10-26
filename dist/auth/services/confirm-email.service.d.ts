import { ConfirmEmailService } from "../interfaces/confirm-email-service.interface";
import { MailService } from "src/mail/mail.service";
import { ConfirmEmailDto } from "../dtos/email-confirm/confirm-email.dto";
import { GetUserService } from "src/resources/users/interfaces/get-user-service.interface";
import { TokenService } from "src/resources/users/interfaces/token-service.interface";
import { UserEmailService } from "src/resources/users/interfaces/user-email-service.interface";
export declare class ConfirmEmailServiceImpl implements ConfirmEmailService {
    protected readonly getUserService: GetUserService;
    protected readonly tokenService: TokenService;
    protected readonly userEmailService: UserEmailService;
    private readonly mailService;
    constructor(getUserService: GetUserService, tokenService: TokenService, userEmailService: UserEmailService, mailService: MailService);
    confirmUserEmail(confirmEmailDto: ConfirmEmailDto): Promise<void>;
    resendEmailConfirmationToken(userId: string): Promise<void>;
}
