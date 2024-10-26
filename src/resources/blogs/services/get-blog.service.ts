import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";
import { PrismaError } from "src/database/enums/prisma-error.enum";
import { GetBlogService } from "../interfaces/get-blog-service.interface";
import { BlogNotFoundException } from "../exceptions/blog-not-found.exception";
import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogDetailParamDto } from "../dtos/query-params/blog-detail-param.dto";
import { BlogResponseDto } from "../dtos/get/blog-response.dto";
import { BlogDetailResponseDto } from "../dtos/get/blog-detail-response.dto";

@Injectable()
export class GetBlogServiceImpl implements GetBlogService {
    constructor(private readonly prisma: PrismaService) {}

    async findByIdWithDetails(
        id: number,
        detailParams?: BlogDetailParamDto,
    ): Promise<BlogDetailResponseDto> {
        let includeQuery: Prisma.BlogPostInclude = undefined;

        if (detailParams) {
            const { blogCategoriesLimit, blogTagsLimit } = detailParams;

            if (blogCategoriesLimit) {
                includeQuery = {
                    categories: {
                        include: {
                            blogPosts: true,
                        },
                        take: blogCategoriesLimit,
                    },
                };
            }

            if (blogTagsLimit) {
                includeQuery = {
                    ...includeQuery,
                    tags: {
                        include: {
                            blogPosts: true,
                        },
                        take: blogTagsLimit,
                    },
                };
            }

            includeQuery = {
                ...includeQuery,
                _count: {
                    select: {
                        categories: true,
                        tags: true,
                    },
                },
            };
        }

        try {
            const blog = await this.prisma.blogPost.findUniqueOrThrow({
                where: { id },
                include: includeQuery,
            });

            return {
                ...blog,
                categoryCount: blog._count?.categories,
                tagCount: blog._count?.tags,
            };
        } catch (error) {
            if (error?.code === PrismaError.ENTITY_NOT_FOUND) {
                throw new BlogNotFoundException();
            }
            throw error;
        }
    }
    async get(
        blogParams: QueryParamDto,
    ): Promise<PagedResponseDto<BlogResponseDto>> {
        const { skip, take, allowCount, sort: order } = blogParams;
        
        let keyword = blogParams.keyword?.trim();
        if (keyword) keyword = keyword + '*';

        const filter: Prisma.BlogPostWhereInput = {
            title: keyword ? { contains: keyword } : undefined,
        };

        const blogFindInputs: Prisma.BlogPostFindManyArgs = {
            where: {
                ...filter,
                ...(keyword && {
                    OR: [
                        { title: { contains: keyword, mode: 'insensitive' } }
                    ]
                })
            },
            orderBy: order ? [
                this.prisma.toPrismaOrderByObject(order),
                { name: 'asc' }
            ] : [
                { title: 'desc' },
                { name: 'asc' }
            ],
            skip,
            take
        };

        

        try {
            if (allowCount) {
                const [blogs, count] = await this.prisma.$transaction([
                    this.prisma.blogPost.findMany(blogFindInputs),
                    this.prisma.blogPost.count({ where: filter }),
                ]);

                return new PagedResponseDto<BlogResponseDto>(
                    blogs,
                    skip,
                    take,
                    count,
                );
            } else {
                const blogs = await this.prisma.blogPost.findMany(
                    blogFindInputs,
                );

                return new PagedResponseDto<BlogResponseDto>(
                    blogs,
                    skip,
                    take,
                    0,
                );
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequestException("Invalid query params.");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}