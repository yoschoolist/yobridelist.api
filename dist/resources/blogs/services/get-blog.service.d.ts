import { PrismaService } from "src/database/prisma.service";
import { GetBlogService } from "../interfaces/get-blog-service.interface";
import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogDetailParamDto } from "../dtos/query-params/blog-detail-param.dto";
import { BlogResponseDto } from "../dtos/get/blog-response.dto";
import { BlogDetailResponseDto } from "../dtos/get/blog-detail-response.dto";
export declare class GetBlogServiceImpl implements GetBlogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByIdWithDetails(id: number, detailParams?: BlogDetailParamDto): Promise<BlogDetailResponseDto>;
    get(blogParams: QueryParamDto): Promise<PagedResponseDto<BlogResponseDto>>;
}
