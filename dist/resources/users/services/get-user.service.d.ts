import { GetUserService } from "../interfaces/get-user-service.interface";
import { PrismaService } from "src/database/prisma.service";
import { User } from "@prisma/client";
import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { AccountParamDto } from "../dtos/query-params/account-param.dto";
export declare class GetUserServiceImpl implements GetUserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    get(userParams: AccountParamDto): Promise<PagedResponseDto<User>>;
}
