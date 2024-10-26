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
exports.ForumService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ForumService = class ForumService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTopic(data) {
        return this.prisma.forumTopic.create({ data });
    }
    async findAllTopics() {
        return this.prisma.forumTopic.findMany({
            include: {
                category: true,
                user: true,
                _count: {
                    select: { posts: true },
                },
            },
            orderBy: [
                { isPinned: 'desc' },
                { updatedAt: 'desc' },
            ],
        });
    }
    async findTopicById(id) {
        return this.prisma.forumTopic.findUnique({
            where: { id },
            include: {
                category: true,
                user: true,
                posts: {
                    include: {
                        user: true,
                    },
                    where: {
                        status: 'active',
                    },
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
    }
    async createPost(data) {
        return this.prisma.forumPost.create({ data });
    }
    async updatePost(id, data) {
        return this.prisma.forumPost.update({
            where: { id },
            data,
        });
    }
    async findAllCategories() {
        return this.prisma.forumCategory.findMany({
            include: {
                _count: {
                    select: { topics: true },
                },
            },
        });
    }
};
exports.ForumService = ForumService;
exports.ForumService = ForumService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ForumService);
//# sourceMappingURL=forum.service.js.map