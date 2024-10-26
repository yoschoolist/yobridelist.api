import { UserRole } from "@prisma/client";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
export declare class AccountParamDto extends QueryParamDto {
    locked?: boolean;
    emailConfirmed?: boolean;
    role?: UserRole;
}
