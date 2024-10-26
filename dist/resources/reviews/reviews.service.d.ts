import { PrismaService } from '../../database/prisma.service';
import { Prisma, Review } from '@prisma/client';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ReviewCreateInput): Promise<Review>;
    findAllByVendor(vendorId: number): Promise<Review[]>;
    findOne(id: number): Promise<Review | null>;
    update(id: number, data: Prisma.ReviewUpdateInput): Promise<Review>;
    remove(id: number): Promise<Review>;
    getVendorStats(vendorId: number): Promise<{
        totalReviews: number;
        averageRating: number;
        ratingDistribution: Record<number, number>;
    }>;
}
