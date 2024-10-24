import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Service } from '@prisma/client';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ServiceCreateInput): Promise<Service> {
    return this.prisma.service.create({ data });
  }

  async findAllByVendor(vendorId: number): Promise<Service[]> {
    return this.prisma.service.findMany({
      where: { vendorId },
      include: {
        _count: {
          select: { bookings: true },
        },
      },
    });
  }

  async findOne(id: number): Promise<Service | null> {
    return this.prisma.service.findUnique({
      where: { id },
      include: {
        vendor: true,
      },
    });
  }

  async update(id: number, data: Prisma.ServiceUpdateInput): Promise<Service> {
    return this.prisma.service.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Service> {
    return this.prisma.service.delete({
      where: { id },
    });
  }
}