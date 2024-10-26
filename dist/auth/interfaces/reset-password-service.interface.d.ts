import { ResetPasswordDto } from "../dtos/password-reset/reset-password.dto";
export interface ResetPasswordService {
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void>;
    sendResetPasswordToken(email: string): Promise<void>;
}
