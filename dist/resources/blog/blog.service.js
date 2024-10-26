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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let BlogService = class BlogService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPost(data) {
        return this.prisma.blogPost.create({ data });
    }
    async findAllPosts(published = true) {
        return this.prisma.blogPost.findMany({
            where: published ? { status: 'published' } : undefined,
            include: {
                author: true,
                category: true,
                tags: true,
            },
            orderBy: { publishedAt: 'desc' },
        });
    }
    async findPostBySlug(slug) {
        return this.prisma.blogPost.findUnique({
            where: { slug },
            include: {
                author: true,
                category: true,
                tags: true,
            },
        });
    }
    async updatePost(id, data) {
        return this.prisma.blogPost.update({
            where: { id },
            data,
        });
    }
    async removePost(id) {
        return this.prisma.blogPost.delete({
            where: { id },
        });
    }
    async findAllCategories() {
        return this.prisma.blogCategory.findMany({
            include: {
                _count: {
                    select: { blogPosts: true },
                },
            },
        });
    }
    async findAllTags() {
        return this.prisma.blogTag.findMany({
            include: {
                _count: {
                    select: { blogPosts: true },
                },
            },
        });
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogService);
//# sourceMappingURL=blog.service.js.map