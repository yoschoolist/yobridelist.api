import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { GetUserService } from "../interfaces/get-user-service.interface";
export declare class UsersController {
    private readonly getUserService;
    constructor(getUserService: GetUserService);
    getUsers(params: QueryParamDto): Promise<import("../../../common/dtos/paged-response.dto").PagedResponseDto<{
        name: string;
        id: number;
        email: string;
        hashedPassword: string | null;
        imageUrl: string | null;
        imageId: string | null;
        emailConfirmed: boolean;
        locked: boolean;
        role: import("@prisma/client").$Enums.UserRole;
        birthDate: Date | null;
        gender: import("@prisma/client").$Enums.Gender | null;
        about: string | null;
        alias: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>>;
}
