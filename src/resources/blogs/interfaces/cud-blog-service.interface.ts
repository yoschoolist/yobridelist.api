import { Prisma } from "@prisma/client";
import { CreateBlogDto } from "../dtos/cud/create-blog.dto";
import { UpdateBlogDto } from "../dtos/cud/update-blog.dto";
import { CudBlogResponseDto } from "../dtos/cud/cud-blog-response.dto";

/**
 * Interface for Blog to perform CUD operations (Create, Update, Delete)
 */
export interface CudBlogService {
    create(createBlogDto: CreateBlogDto): Promise<CudBlogResponseDto>;

    update(params: {
        where: Prisma.BlogPostWhereUniqueInput;
        data: UpdateBlogDto;
    }): Promise<CudBlogResponseDto>;

    delete(id: number): Promise<CudBlogResponseDto>;
}
