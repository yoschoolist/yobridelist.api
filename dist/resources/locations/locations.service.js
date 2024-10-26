"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let LocationsService = class LocationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.vendorLocation.create({ data });
    }
    async findAllByVendor(vendorId) {
        return this.prisma.vendorLocation.findMany({
            where: { vendorId },
            include: {
                country: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.vendorLocation.findUnique({
            where: { id },
            include: {
                country: true,
                vendor: true,
            },
        });
    }
    async update(id, data) {
        return this.prisma.vendorLocation.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.vendorLocation.delete({
            where: { id },
        });
    }
    async findAllCountries() {
        return this.prisma.country.findMany({
            orderBy: { name: 'asc' },
        });
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationsService);
//# sourceMappingURL=locations.service.js.map