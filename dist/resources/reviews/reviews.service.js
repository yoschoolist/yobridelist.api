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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ReviewsService = class ReviewsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.review.create({ data });
    }
    async findAllByVendor(vendorId) {
        return this.prisma.review.findMany({
            where: { vendorId },
            include: {
                user: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.review.findUnique({
            where: { id },
            include: {
                user: true,
                vendor: true,
            },
        });
    }
    async update(id, data) {
        return this.prisma.review.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.review.delete({
            where: { id },
        });
    }
    async getVendorStats(vendorId) {
        const reviews = await this.prisma.review.findMany({
            where: { vendorId },
            select: { rating: true },
        });
        const totalReviews = reviews.length;
        const averageRating = totalReviews > 0
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
            : 0;
        return {
            totalReviews,
            averageRating,
            ratingDistribution: reviews.reduce((acc, review) => {
                acc[review.rating] = (acc[review.rating] || 0) + 1;
                return acc;
            }, {}),
        };
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map