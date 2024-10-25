import { IsEnum, IsString, IsOptional, IsUrl } from 'class-validator';
import { VendorCategory } from '@prisma/client';

export class CreateVendorDto {
  @IsString()
  businessName: string;

  @IsEnum(VendorCategory)
  category: VendorCategory;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsUrl()
  websiteUrl?: string;
}