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
exports.GetUserServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const user_not_found_exception_1 = require("../exceptions/user-not-found.exception");
const client_1 = require("@prisma/client");
const paged_response_dto_1 = require("../../../common/dtos/paged-response.dto");
let GetUserServiceImpl = class GetUserServiceImpl {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user)
            throw new user_not_found_exception_1.UserNotFoundException();
        return user;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user)
            throw new user_not_found_exception_1.UserNotFoundException();
        return user;
    }
    async get(userParams) {
        const { skip, take, allowCount, sort: order, keyword: oldKeyword, ...rest } = userParams;
        let keyword = oldKeyword?.trim();
        if (keyword)
            keyword = keyword + '*';
        const filter = {
            AND: {
                ...rest,
                name: keyword ? { contains: keyword } : undefined,
            },
        };
        const userFindInputs = {
            where: {
                ...filter,
                ...(keyword && {
                    OR: [
                        { name: { contains: keyword, mode: 'insensitive' } }
                    ]
                })
            },
            orderBy: order ? [
                this.prisma.toPrismaOrderByObject(order),
                { name: 'asc' }
            ] : [
                { title: 'desc' },
                { name: 'asc' }
            ],
            skip,
            take,
        };
        try {
            if (allowCount) {
                const [users, count] = await this.prisma.$transaction([
                    this.prisma.user.findMany(userFindInputs),
                    this.prisma.user.count({ where: filter }),
                ]);
                return new paged_response_dto_1.PagedResponseDto(users, skip, take, count);
            }
            else {
                const users = await this.prisma.user.findMany(userFindInputs);
                return new paged_response_dto_1.PagedResponseDto(users, skip, take, 0);
            }
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientValidationError) {
                throw new common_1.BadRequestException("Invalid query params.");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
exports.GetUserServiceImpl = GetUserServiceImpl;
exports.GetUserServiceImpl = GetUserServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GetUserServiceImpl);
//# sourceMappingURL=get-user.service.js.map