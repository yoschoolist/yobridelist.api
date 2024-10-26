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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CudBlogServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_error_enum_1 = require("../../../database/enums/prisma-error.enum");
const prisma_service_1 = require("../../../database/prisma.service");
const folder_enum_1 = require("../../../upload/enums/folder.enum");
const string_service_1 = require("../../../common/utils/string.service");
const upload_interface_1 = require("../../../upload/interfaces/upload.interface");
const blog_not_found_exception_1 = require("../exceptions/blog-not-found.exception");
let CudBlogServiceImpl = class CudBlogServiceImpl {
    constructor(prisma, uploadService, stringService) {
        this.prisma = prisma;
        this.uploadService = uploadService;
        this.stringService = stringService;
    }
    async create(createBlogDto) {
        const { image, authorId, categoryIds, tagIds, ...blogData } = createBlogDto;
        const uploadResponse = image &&
            (await this.uploadService
                .uploadFile(image, {
                folder: folder_enum_1.UploadFolder.BLOG_IMAGE,
            })
                .catch(() => undefined));
        return this.prisma.blogPost
            .create({
            data: {
                ...blogData,
                slug: this.stringService.slug(blogData.title),
                imageId: uploadResponse?.fileId,
                imageUrl: uploadResponse?.url,
                author: {
                    connect: { id: authorId },
                },
                categories: categoryIds ? {
                    connect: categoryIds.map(id => ({ id })),
                } : undefined,
                tags: tagIds ? {
                    connect: tagIds.map(id => ({ id })),
                } : undefined,
            },
        })
            .catch(() => {
            if (uploadResponse)
                this.uploadService.deleteFile(uploadResponse.fileId);
            throw new common_1.InternalServerErrorException();
        });
    }
    async update(params) {
        const { where, data } = params;
        const { imageUrl } = data;
        delete data.imageUrl;
        const oldBlog = imageUrl &&
            (await this.prisma.blogPost
                .findUniqueOrThrow({
                where,
                select: { imageId: true },
            })
                .catch(() => {
                throw new blog_not_found_exception_1.BlogNotFoundException();
            }));
        const uploadResponse = imageUrl &&
            (await this.uploadService
                .uploadFile(imageUrl, {
                folder: folder_enum_1.UploadFolder.BLOG_IMAGE,
            })
                .catch(() => undefined));
        const updatedBlog = await this.prisma.blogPost
            .update({
            where,
            data: {
                ...data,
                slug: this.stringService.slug(data.title),
                imageId: uploadResponse?.fileId,
                imageUrl: uploadResponse?.url,
            },
        })
            .catch((error) => {
            if (uploadResponse)
                this.uploadService.deleteFile(uploadResponse.fileId);
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND ||
                error?.code === prisma_error_enum_1.PrismaError.QUERY_INTERPRETATION_ERROR) {
                throw new blog_not_found_exception_1.BlogNotFoundException();
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        });
        if (oldBlog?.imageId && updatedBlog.imageId !== oldBlog.imageId)
            this.uploadService.deleteFile(oldBlog.imageId);
        return updatedBlog;
    }
    async delete(id) {
        const blog = await this.prisma.blogPost
            .delete({ where: { id } })
            .catch((error) => {
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND) {
                throw new blog_not_found_exception_1.BlogNotFoundException();
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        });
        if (blog.imageId)
            this.uploadService.deleteFile(blog.imageId);
        return blog;
    }
};
exports.CudBlogServiceImpl = CudBlogServiceImpl;
exports.CudBlogServiceImpl = CudBlogServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(upload_interface_1.UPLOAD_SERVICE)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, string_service_1.StringService])
], CudBlogServiceImpl);
//# sourceMappingURL=cud-blog.service.js.map