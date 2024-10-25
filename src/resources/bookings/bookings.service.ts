import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Booking, BookingStatus, Prisma } from '@prisma/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BookingCreateInput): Promise<Booking> {
    return this.prisma.booking.create({ data });
  }

  async findAll(userId?: number, vendorId?: number): Promise<Booking[]> {
    return this.prisma.booking.findMany({
      where: {
        ...(userId && { userId }),
        ...(vendorId && { vendorId }),
      },
      include: {
        user: true,
        vendor: true,
        service: true,
      },
    });
  }

  async findOne(id: number): Promise<Booking | null> {
    return this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        vendor: true,
        service: true,
      },
    });
  }

  async updateStatus(id: number, status: BookingStatus): Promise<Booking> {
    return this.prisma.booking.update({
      where: { id },
      data: { status },
    });
  }

  async remove(id: number): Promise<Booking> {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}