import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Review } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ReviewCreateInput): Promise<Review> {
    return this.prisma.review.create({ data });
  }

  async findAllByVendor(vendorId: number): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: { vendorId },
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number): Promise<Review | null> {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        user: true,
        vendor: true,
      },
    });
  }

  async update(id: number, data: Prisma.ReviewUpdateInput): Promise<Review> {
    return this.prisma.review.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Review> {
    return this.prisma.review.delete({
      where: { id },
    });
  }

  async getVendorStats(vendorId: number) {
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
      }, {} as Record<number, number>),
    };
  }
}