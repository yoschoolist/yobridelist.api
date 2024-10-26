import { Prisma, User } from "@prisma/client";
export interface CudUserService {
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(params: {
        data: Prisma.UserUpdateInput;
        where: Prisma.UserWhereUniqueInput;
        image?: Express.Multer.File;
    }): Promise<User>;
    delete(id: string): Promise<User>;
}
