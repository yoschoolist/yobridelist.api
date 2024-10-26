import { PrismaService } from '../../database/prisma.service';
import { Prisma, Vendor, VendorCategory } from '@prisma/client';
export declare class VendorsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.VendorCreateInput): Promise<Vendor>;
    findAll(category?: VendorCategory): Promise<Vendor[]>;
    findOne(id: number): Promise<Vendor | null>;
    update(id: number, data: Prisma.VendorUpdateInput): Promise<Vendor>;
    remove(id: number): Promise<Vendor>;
}
