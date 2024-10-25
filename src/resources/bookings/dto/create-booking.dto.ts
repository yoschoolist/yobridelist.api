import { IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookingDto {
  @IsInt()
  vendorId: number;

  @IsInt()
  serviceId: number;

  @IsDate()
  @Type(() => Date)
  bookingDate: Date;
}