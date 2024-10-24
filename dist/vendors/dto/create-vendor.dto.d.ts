import { VendorCategory } from '@prisma/client';
export declare class CreateVendorDto {
    businessName: string;
    category: VendorCategory;
    description?: string;
    contactEmail?: string;
    contactPhone?: string;
    websiteUrl?: string;
}
