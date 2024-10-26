import { PrismaService } from '../../database/prisma.service';
import { Prisma, Service } from '@prisma/client';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ServiceCreateInput): Promise<Service>;
    findAllByVendor(vendorId: number): Promise<Service[]>;
    findOne(id: number): Promise<Service | null>;
    update(id: number, data: Prisma.ServiceUpdateInput): Promise<Service>;
    remove(id: number): Promise<Service>;
}
