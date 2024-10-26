"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlogServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../../database/prisma.service");
const prisma_error_enum_1 = require("../../../database/enums/prisma-error.enum");
const blog_not_found_exception_1 = require("../exceptions/blog-not-found.exception");
const paged_response_dto_1 = require("../../../common/dtos/paged-response.dto");
let GetBlogServiceImpl = class GetBlogServiceImpl {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByIdWithDetails(id, detailParams) {
        let includeQuery = undefined;
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
        }
        catch (error) {
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND) {
                throw new blog_not_found_exception_1.BlogNotFoundException();
            }
            throw error;
        }
    }
    async get(blogParams) {
        const { skip, take, allowCount, sort: order } = blogParams;
        let keyword = blogParams.keyword?.trim();
        if (keyword)
            keyword = keyword + '*';
        const filter = {
            title: keyword ? { contains: keyword } : undefined,
        };
        const blogFindInputs = {
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
                return new paged_response_dto_1.PagedResponseDto(blogs, skip, take, count);
            }
            else {
                const blogs = await this.prisma.blogPost.findMany(blogFindInputs);
                return new paged_response_dto_1.PagedResponseDto(blogs, skip, take, 0);
            }
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientValidationError) {
                throw new common_1.BadRequestException("Invalid query params.");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
exports.GetBlogServiceImpl = GetBlogServiceImpl;
exports.GetBlogServiceImpl = GetBlogServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GetBlogServiceImpl);
//# sourceMappingURL=get-blog.service.js.map