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
exports.TokenServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../../database/prisma.service");
const constants_1 = require("../../../auth/constants");
const string_service_1 = require("../../../common/utils/string.service");
let TokenServiceImpl = class TokenServiceImpl {
    constructor(prisma, stringService) {
        this.prisma = prisma;
        this.stringService = stringService;
    }
    async getToken(user, token) {
        return this.prisma.token.findUnique({
            where: {
                token_userId: {
                    token,
                    userId: user.id,
                },
            },
        });
    }
    async createRefreshTokenForUser(user) {
        const refreshToken = this.stringService.random(40);
        const date = new Date();
        date.setDate(date.getDate() + constants_1.REFRESH_TOKEN_LIFETIME);
        await this.prisma.token.create({
            data: {
                token: refreshToken,
                expiryTime: date,
                type: client_1.TokenType.REFRESH_TOKEN,
                userId: user.id,
            },
        });
        return refreshToken;
    }
    async createEmailConfirmationToken(user) {
        await this.prisma.token.deleteMany({
            where: {
                AND: {
                    userId: user.id,
                    type: client_1.TokenType.CONFIRM_EMAIL,
                },
            },
        });
        const date = new Date();
        date.setDate(date.getDate() + constants_1.EMAIL_CONFIRMATION_TOKEN_LIFETIME);
        const token = await this.prisma.token.create({
            data: {
                user: {
                    connect: { id: user.id },
                },
                token: this.stringService.random(40),
                expiryTime: date,
                type: client_1.TokenType.CONFIRM_EMAIL,
            },
        });
        return token.token;
    }
    async createResetPasswordToken(user) {
        await this.prisma.token.deleteMany({
            where: {
                AND: {
                    userId: user.id,
                    type: client_1.TokenType.RESET_PASSWORD,
                },
            },
        });
        const date = new Date();
        date.setDate(date.getDate() + constants_1.RESET_PASSWORD_TOKEN_LIFETIME);
        const token = await this.prisma.token.create({
            data: {
                user: {
                    connect: { id: user.id },
                },
                token: this.stringService.random(40),
                expiryTime: date,
                type: client_1.TokenType.RESET_PASSWORD,
            },
        });
        return token.token;
    }
    async revokeRefreshToken(userId, refreshToken) {
        await this.prisma.token.delete({
            where: {
                token_userId: {
                    token: refreshToken,
                    userId: userId,
                },
            },
        });
    }
};
exports.TokenServiceImpl = TokenServiceImpl;
exports.TokenServiceImpl = TokenServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        string_service_1.StringService])
], TokenServiceImpl);
//# sourceMappingURL=token.service.js.map