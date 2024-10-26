import { Prisma } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";
import { StringService } from "src/common/utils/string.service";
import { UploadService } from "src/upload/interfaces/upload.interface";
import { CudBlogService } from "../interfaces/cud-blog-service.interface";
import { CreateBlogDto } from "../dtos/cud/create-blog.dto";
import { UpdateBlogDto } from "../dtos/cud/update-blog.dto";
import { CudBlogResponseDto } from "../dtos/cud/cud-blog-response.dto";
export declare class CudBlogServiceImpl implements CudBlogService {
    private readonly prisma;
    private readonly uploadService;
    private readonly stringService;
    constructor(prisma: PrismaService, uploadService: UploadService, stringService: StringService);
    create(createBlogDto: CreateBlogDto): Promise<CudBlogResponseDto>;
    update(params: {
        where: Prisma.BlogPostWhereUniqueInput;
        data: UpdateBlogDto;
    }): Promise<CudBlogResponseDto>;
    delete(id: number): Promise<CudBlogResponseDto>;
}
