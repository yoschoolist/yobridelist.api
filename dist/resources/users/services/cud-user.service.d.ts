import { CudUserService } from "../interfaces/cud-user-service.interface";
import { PrismaService } from "src/database/prisma.service";
import { UploadService } from "src/upload/interfaces/upload.interface";
import { StringService } from "src/common/utils/string.service";
import { Prisma, User } from "@prisma/client";
export declare class CudUserServiceImpl implements CudUserService {
    private readonly prisma;
    private readonly uploadService;
    private readonly stringService;
    constructor(prisma: PrismaService, uploadService: UploadService, stringService: StringService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(params: {
        data: Prisma.UserUpdateInput;
        where: Prisma.UserWhereUniqueInput;
        image?: Express.Multer.File;
    }): Promise<User>;
    delete(id: string): Promise<User>;
}
