import { User } from "@prisma/client";
export interface UserEmailService {
    confirmEmail(user: User, token: string): Promise<boolean>;
}
