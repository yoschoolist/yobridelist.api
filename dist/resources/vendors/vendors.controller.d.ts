import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { VendorCategory } from '@prisma/client';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    create(createVendorDto: CreateVendorDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        businessName: string;
        category: import("@prisma/client").$Enums.VendorCategory;
        description: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        websiteUrl: string | null;
        userId: number;
    }>;
    findAll(category?: VendorCategory): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        businessName: string;
        category: import("@prisma/client").$Enums.VendorCategory;
        description: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        websiteUrl: string | null;
        userId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        businessName: string;
        category: import("@prisma/client").$Enums.VendorCategory;
        description: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        websiteUrl: string | null;
        userId: number;
    }>;
    update(id: string, updateVendorDto: UpdateVendorDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        businessName: string;
        category: import("@prisma/client").$Enums.VendorCategory;
        description: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        websiteUrl: string | null;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        businessName: string;
        category: import("@prisma/client").$Enums.VendorCategory;
        description: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        websiteUrl: string | null;
        userId: number;
    }>;
}
