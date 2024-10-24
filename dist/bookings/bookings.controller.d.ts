import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(userId?: string, vendorId?: string): Promise<Booking[]>;
    findOne(id: string): Promise<any>;
    updateStatus(id: string, updateStatusDto: UpdateBookingStatusDto): Promise<Booking>;
    remove(id: string): Promise<Booking>;
}
