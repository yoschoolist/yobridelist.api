import { ConfirmEmailDto } from "../dtos/email-confirm/confirm-email.dto";
export interface ConfirmEmailService {
    confirmUserEmail(confirmEmailDto: ConfirmEmailDto): Promise<void>;
    resendEmailConfirmationToken(userId: string): Promise<void>;
}
