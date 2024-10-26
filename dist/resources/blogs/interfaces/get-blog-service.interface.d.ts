import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { BlogResponseDto } from "../dtos/get/blog-response.dto";
import { BlogDetailParamDto } from "../dtos/query-params/blog-detail-param.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogDetailResponseDto } from "../dtos/get/blog-detail-response.dto";
export interface GetBlogService {
    get(params: QueryParamDto): Promise<PagedResponseDto<BlogResponseDto>>;
    findByIdWithDetails(id: number, detailParams?: BlogDetailParamDto): Promise<BlogDetailResponseDto>;
}
