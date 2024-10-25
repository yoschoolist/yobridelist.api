import { PrismaService } from '../prisma/prisma.service';
import { Prisma, VendorLocation } from '@prisma/client';
export declare class LocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.VendorLocationCreateInput): Promise<VendorLocation>;
    findAllByVendor(vendorId: number): Promise<VendorLocation[]>;
    findOne(id: number): Promise<VendorLocation | null>;
    update(id: number, data: Prisma.VendorLocationUpdateInput): Promise<VendorLocation>;
    remove(id: number): Promise<VendorLocation>;
    findAllCountries(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }[]>;
}
