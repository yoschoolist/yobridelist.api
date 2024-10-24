import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Vendor, VendorCategory } from '@prisma/client';

@Injectable()
export class VendorsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VendorCreateInput): Promise<Vendor> {
    return this.prisma.vendor.create({ data });
  }

  async findAll(category?: VendorCategory): Promise<Vendor[]> {
    return this.prisma.vendor.findMany({
      where: category ? { category } : undefined,
      include: {
        locations: true,
        services: true,
        photos: true,
      },
    });
  }

  async findOne(id: number): Promise<Vendor | null> {
    return this.prisma.vendor.findUnique({
      where: { id },
      include: {
        locations: true,
        services: true,
        reviews: true,
        photos: true,
      },
    });
  }

  async update(id: number, data: Prisma.VendorUpdateInput): Promise<Vendor> {
    return this.prisma.vendor.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Vendor> {
    return this.prisma.vendor.delete({
      where: { id },
    });
  }
}