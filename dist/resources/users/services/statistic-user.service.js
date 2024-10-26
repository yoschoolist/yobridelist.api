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
exports.StatisticUserServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
let StatisticUserServiceImpl = class StatisticUserServiceImpl {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async countNewUsersToday() {
        const from = new Date();
        const fromStr = from.toISOString().split("T")[0] + "T00:00:00.000Z";
        from.setDate(from.getDate() + 1);
        const toStr = from.toISOString().split("T")[0] + "T00:00:00.000Z";
        return this.prisma.user.count({
            where: {
                createdAt: {
                    lte: toStr,
                    gte: fromStr,
                }
            }
        });
    }
};
exports.StatisticUserServiceImpl = StatisticUserServiceImpl;
exports.StatisticUserServiceImpl = StatisticUserServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticUserServiceImpl);
//# sourceMappingURL=statistic-user.service.js.map