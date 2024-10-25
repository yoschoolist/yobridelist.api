import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { VendorCategory } from '@prisma/client';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    create(createVendorDto: CreateVendorDto): Promise<Vendor>;
    findAll(category?: VendorCategory): Promise<Vendor[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateVendorDto: UpdateVendorDto): Promise<Vendor>;
    remove(id: string): Promise<Vendor>;
}
