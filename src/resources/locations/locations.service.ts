import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma, VendorLocation } from '@prisma/client';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VendorLocationCreateInput): Promise<VendorLocation> {
    return this.prisma.vendorLocation.create({ data });
  }

  async findAllByVendor(vendorId: number): Promise<VendorLocation[]> {
    return this.prisma.vendorLocation.findMany({
      where: { vendorId },
      include: {
        country: true,
      },
    });
  }

  async findOne(id: number): Promise<VendorLocation | null> {
    return this.prisma.vendorLocation.findUnique({
      where: { id },
      include: {
        country: true,
        vendor: true,
      },
    });
  }

  async update(id: number, data: Prisma.VendorLocationUpdateInput): Promise<VendorLocation> {
    return this.prisma.vendorLocation.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<VendorLocation> {
    return this.prisma.vendorLocation.delete({
      where: { id },
    });
  }

  async findAllCountries() {
    return this.prisma.country.findMany({
      orderBy: { name: 'asc' },
    });
  }
}