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
exports.GetUserByIdMiddleware = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const user_not_found_exception_1 = require("../exceptions/user-not-found.exception");
let GetUserByIdMiddleware = class GetUserByIdMiddleware {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async use(req, res, next) {
        if (!req.params.id)
            throw new common_1.BadRequestException("Missing id");
        const user = await this.prisma.user.findUnique({
            where: { id: req.params.id },
            select: {
                role: true,
            },
        });
        if (!user)
            throw new user_not_found_exception_1.UserNotFoundException();
        req["userInParam"] = user;
        next();
    }
};
exports.GetUserByIdMiddleware = GetUserByIdMiddleware;
exports.GetUserByIdMiddleware = GetUserByIdMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GetUserByIdMiddleware);
//# sourceMappingURL=get-user-by-id.middleware.js.map