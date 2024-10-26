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
exports.AuthServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const client_1 = require("@prisma/client");
const mail_service_1 = require("../../mail/mail.service");
const prisma_error_enum_1 = require("../../database/enums/prisma-error.enum");
const base_auth_service_1 = require("./base-auth.service");
const constants_1 = require("../../resources/users/interfaces/constants");
let AuthServiceImpl = class AuthServiceImpl extends base_auth_service_1.BaseAuthService {
    constructor(jwtService, mailService, getUserService, cudUserService, tokenService) {
        super(jwtService);
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.getUserService = getUserService;
        this.cudUserService = cudUserService;
        this.tokenService = tokenService;
    }
    async register(registerDto) {
        const { name, email, password } = registerDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const newUser = await this.cudUserService.create({
                name,
                email,
                hashedPassword,
            });
            const refreshToken = await this.tokenService.createRefreshTokenForUser(newUser);
            const token = await this.tokenService.createEmailConfirmationToken(newUser);
            this.mailService.sendEmail({
                to: newUser.email,
                subject: "Confirm account",
                templateName: "confirm-email",
                templateVars: {
                    name: newUser.name,
                    confirmationUrl: `${process.env.CLIENT_EMAIL_CONFIRM_URL}?token=${token}&userId=${newUser.id}`,
                },
            });
            return {
                access_token: await this.createAccessToken(newUser),
                refresh_token: refreshToken,
                user: newUser,
            };
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error?.code === prisma_error_enum_1.PrismaError.UNIQUE_CONSTRAINT_FAILED) {
                throw new common_1.BadRequestException(`Email ${email} đã tồn tại`);
            }
            throw new common_1.HttpException("Có lỗi nào đó xảy ra.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async signIn(signInDto) {
        const { email, password } = signInDto;
        const user = await this.getUserService
            .findByEmail(email)
            .catch(() => null);
        if (!user || !user.hashedPassword) {
            throw new common_1.BadRequestException("Email hoặc mật khẩu không chính xác");
        }
        const isMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isMatch) {
            throw new common_1.BadRequestException("Email hoặc mật khẩu không chính xác");
        }
        if (user.locked) {
            throw new common_1.ForbiddenException("Tài khoản đang bị khóa");
        }
        const refreshToken = await this.tokenService.createRefreshTokenForUser(user);
        return {
            access_token: await this.createAccessToken(user),
            refresh_token: refreshToken,
            user,
        };
    }
    async signOut(userId, refreshToken) {
        await this.tokenService
            .revokeRefreshToken(userId, refreshToken)
            .catch((error) => {
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND) {
                throw new common_1.BadRequestException("Refresh token invalid.");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    async refreshToken(refreshTokenDto) {
        const { userId, refreshToken } = refreshTokenDto;
        const user = await this.getUserService
            .findById(userId)
            .catch(() => null);
        if (!user) {
            throw new common_1.BadRequestException("Invalid userId or refresh token!");
        }
        if (user.locked) {
            throw new common_1.ForbiddenException("You are locked out.");
        }
        const token = await this.tokenService.getToken(user, refreshToken);
        if (!token || token.type !== client_1.TokenType.REFRESH_TOKEN) {
            throw new common_1.BadRequestException("Invalid userId or refresh token!");
        }
        if (token.expiryTime < new Date()) {
            await this.signOut(userId, refreshToken);
            throw new common_1.BadRequestException("Invalid userId or refresh token!");
        }
        return {
            access_token: await this.createAccessToken(user),
            refresh_token: refreshToken,
        };
    }
};
exports.AuthServiceImpl = AuthServiceImpl;
exports.AuthServiceImpl = AuthServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __param(3, (0, common_1.Inject)(constants_1.USER_SERVICES.CudUserService)),
    __param(4, (0, common_1.Inject)(constants_1.USER_SERVICES.TokenService)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mail_service_1.MailService, Object, Object, Object])
], AuthServiceImpl);
//# sourceMappingURL=auth.service.js.map