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
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vendorId: number;
        serviceId: number;
        bookingDate: Date;
    }>;
    findAll(userId?: string, vendorId?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vendorId: number;
        serviceId: number;
        bookingDate: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vendorId: number;
        serviceId: number;
        bookingDate: Date;
    }>;
    updateStatus(id: string, updateStatusDto: UpdateBookingStatusDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vendorId: number;
        serviceId: number;
        bookingDate: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vendorId: number;
        serviceId: number;
        bookingDate: Date;
    }>;
}
