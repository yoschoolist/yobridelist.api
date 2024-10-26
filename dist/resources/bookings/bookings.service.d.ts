import { PrismaService } from '../../database/prisma.service';
import { Booking, BookingStatus, Prisma } from '@prisma/client';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.BookingCreateInput): Promise<Booking>;
    findAll(userId?: number, vendorId?: number): Promise<Booking[]>;
    findOne(id: number): Promise<Booking | null>;
    updateStatus(id: number, status: BookingStatus): Promise<Booking>;
    remove(id: number): Promise<Booking>;
}
