import {
    Inject,
    Injectable,
    InternalServerErrorException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaError } from "src/database/enums/prisma-error.enum";
import { PrismaService } from "src/database/prisma.service";
import { UploadFolder } from "src/upload/enums/folder.enum";
import { StringService } from "src/common/utils/string.service";
import {
    UPLOAD_SERVICE,
    UploadService,
} from "src/upload/interfaces/upload.interface";
import { CudBlogService } from "../interfaces/cud-blog-service.interface";
import { BlogNotFoundException } from "../exceptions/blog-not-found.exception";
import { CreateBlogDto } from "../dtos/cud/create-blog.dto";
import { UpdateBlogDto } from "../dtos/cud/update-blog.dto";
import { CudBlogResponseDto } from "../dtos/cud/cud-blog-response.dto";

@Injectable()
export class CudBlogServiceImpl implements CudBlogService {
    constructor(
        private readonly prisma: PrismaService,
        @Inject(UPLOAD_SERVICE) private readonly uploadService: UploadService,
        private readonly stringService: StringService,
    ) {}

    async create(
        createBlogDto: CreateBlogDto,
    ): Promise<CudBlogResponseDto> {
        const { image, authorId, categoryIds, tagIds, ...blogData } = createBlogDto;

        // upload image
        const uploadResponse =
            image &&
            (await this.uploadService
                .uploadFile(image, {
                    folder: UploadFolder.BLOG_IMAGE,
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
                // if blog can not create, delete the image created
                if (uploadResponse)
                    this.uploadService.deleteFile(uploadResponse.fileId);

                throw new InternalServerErrorException();
            });
    }
    async update(params: {
        where: Prisma.BlogPostWhereUniqueInput;
        data: UpdateBlogDto;
    }): Promise<CudBlogResponseDto> {
        const { where, data } = params;
        const { imageUrl } = data;
        delete data.imageUrl;

        // if not upload image, then no need to query old blog to compare later
        const oldBlog =
            imageUrl &&
            (await this.prisma.blogPost
                .findUniqueOrThrow({
                    where,
                    select: { imageId: true },
                })
                .catch(() => {
                    throw new BlogNotFoundException();
                }));

        // upload image
        const uploadResponse =
            imageUrl &&
            (await this.uploadService
                .uploadFile(imageUrl, {
                    folder: UploadFolder.BLOG_IMAGE,
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
                // if blog can not update, delete the image created
                if (uploadResponse)
                    this.uploadService.deleteFile(uploadResponse.fileId);

                if (
                    error?.code === PrismaError.ENTITY_NOT_FOUND ||
                    error?.code === PrismaError.QUERY_INTERPRETATION_ERROR
                ) {
                    throw new BlogNotFoundException();
                } else {
                    throw new InternalServerErrorException();
                }
            });

        // if blog updated, delete the old image if it exist
        if (oldBlog?.imageId && updatedBlog.imageId !== oldBlog.imageId)
            this.uploadService.deleteFile(oldBlog.imageId);

        return updatedBlog;
    }

    async delete(id: number): Promise<CudBlogResponseDto> {
        const blog = await this.prisma.blogPost
            .delete({ where: { id } })
            .catch((error) => {
                if (error?.code === PrismaError.ENTITY_NOT_FOUND) {
                    throw new BlogNotFoundException();
                } else {
                    throw new InternalServerErrorException();
                }
            });

        // if blog have an image, delete it
        if (blog.imageId) this.uploadService.deleteFile(blog.imageId);

        return blog;
    }
}
