import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { BlogResponseDto } from "../dtos/get/blog-response.dto";
import { BlogDetailParamDto } from "../dtos/query-params/blog-detail-param.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogDetailResponseDto } from "../dtos/get/blog-detail-response.dto";

/**
 * Interface for Blog to perform Read operations
 */
export interface GetBlogService {
    /**
     * get blogs
     * @param params - options to filter blogs
     */
    get(params: QueryParamDto): Promise<PagedResponseDto<BlogResponseDto>>;

    /**
     * @param id - Blog's ID
     * @param detailParams - options to contains songs and albums
     */
    findByIdWithDetails(
        id: number,
        detailParams?: BlogDetailParamDto,
    ): Promise<BlogDetailResponseDto>;
}
