import { User } from "@prisma/client";
import { AccountParamDto } from "../dtos/query-params/account-param.dto";
import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
export interface GetUserService {
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    get(userParams: AccountParamDto): Promise<PagedResponseDto<User>>;
}
