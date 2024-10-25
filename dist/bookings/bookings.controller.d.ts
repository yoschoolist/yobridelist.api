import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(createBookingDto: CreateBookingDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        vendorId: number;
        serviceId: number;
    }>;
    findAll(userId?: string, vendorId?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        vendorId: number;
        serviceId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        vendorId: number;
        serviceId: number;
    }>;
    updateStatus(id: string, updateStatusDto: UpdateBookingStatusDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        vendorId: number;
        serviceId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        vendorId: number;
        serviceId: number;
    }>;
}
