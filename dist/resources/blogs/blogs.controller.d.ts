import { GetBlogService } from "./interfaces/get-blog-service.interface";
import { CudBlogService } from "./interfaces/cud-blog-service.interface";
import { CreateBlogDto } from "./dtos/cud/create-blog.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogResponseDto } from "./dtos/get/blog-response.dto";
import { BlogDetailParamDto } from "./dtos/query-params/blog-detail-param.dto";
import { BlogDetailResponseDto } from "./dtos/get/blog-detail-response.dto";
import { UpdateBlogDto } from "./dtos/cud/update-blog.dto";
import { CudBlogResponseDto } from "./dtos/cud/cud-blog-response.dto";
export declare class BlogsController {
    private readonly getBlogService;
    private readonly cudBlogService;
    constructor(getBlogService: GetBlogService, cudBlogService: CudBlogService);
    getBlogs(params: QueryParamDto): Promise<import("../../common/dtos/paged-response.dto").PagedResponseDto<BlogResponseDto>>;
    createBlog(createBlogDto: CreateBlogDto, image: Express.Multer.File): Promise<CudBlogResponseDto>;
    getBlogById(id: string, blogDetailParams: BlogDetailParamDto): Promise<BlogDetailResponseDto>;
    updateBlog(id: string, updateBlogDto: UpdateBlogDto, image: Express.Multer.File): Promise<CudBlogResponseDto>;
    deleteBlog(id: string): Promise<CudBlogResponseDto>;
}
