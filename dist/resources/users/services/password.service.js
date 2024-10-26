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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const bcrypt = require("bcrypt");
const client_1 = require("@prisma/client");
const constants_1 = require("../interfaces/constants");
let PasswordServiceImpl = class PasswordServiceImpl {
    constructor(prisma, tokenService) {
        this.prisma = prisma;
        this.tokenService = tokenService;
    }
    async changePassword(user, changePasswordDto) {
        const { oldPassword, newPassword } = changePasswordDto;
        if (!(await bcrypt.compare(oldPassword, user.hashedPassword))) {
            throw new common_1.BadRequestException("Password does not match!");
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                hashedPassword: newHashedPassword,
            },
        });
        return true;
    }
    async resetPassword(user, token, newPassword) {
        const tokenInDb = await this.tokenService.getToken(user, token);
        if (!tokenInDb ||
            tokenInDb.type !== client_1.TokenType.RESET_PASSWORD ||
            tokenInDb.expiryTime < new Date()) {
            throw new common_1.BadRequestException("Invalid password reset token.");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await this.prisma.user.update({
            data: {
                hashedPassword,
            },
            where: { id: user.id },
        });
        await this.prisma.token.delete({
            where: { id: tokenInDb.id },
        });
        return true;
    }
};
exports.PasswordServiceImpl = PasswordServiceImpl;
exports.PasswordServiceImpl = PasswordServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.USER_SERVICES.TokenService)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], PasswordServiceImpl);
//# sourceMappingURL=password.service.js.map