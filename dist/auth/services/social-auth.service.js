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
exports.SocialAuthServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const base_auth_service_1 = require("./base-auth.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../resources/users/interfaces/constants");
let SocialAuthServiceImpl = class SocialAuthServiceImpl extends base_auth_service_1.BaseAuthService {
    constructor(getUserService, cudUserService, tokenService, jwtService) {
        super(jwtService);
        this.getUserService = getUserService;
        this.cudUserService = cudUserService;
        this.tokenService = tokenService;
        this.jwtService = jwtService;
    }
    async socialLogin(socialLoginDto) {
        const { name, email, photo } = socialLoginDto;
        let user = await this.getUserService
            .findByEmail(email)
            .catch(() => undefined);
        if (!user) {
            user = await this.cudUserService.create({
                name,
                email,
                emailConfirmed: true,
                imageUrl: photo,
            });
        }
        else if (!user.emailConfirmed) {
            user = await this.cudUserService.update({
                where: { id: user.id },
                data: { emailConfirmed: true },
            });
        }
        const refreshToken = await this.tokenService.createRefreshTokenForUser(user);
        return {
            access_token: await this.createAccessToken(user),
            refresh_token: refreshToken,
            user,
        };
    }
};
exports.SocialAuthServiceImpl = SocialAuthServiceImpl;
exports.SocialAuthServiceImpl = SocialAuthServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_1.USER_SERVICES.CudUserService)),
    __param(2, (0, common_1.Inject)(constants_1.USER_SERVICES.TokenService)),
    __metadata("design:paramtypes", [Object, Object, Object, jwt_1.JwtService])
], SocialAuthServiceImpl);
//# sourceMappingURL=social-auth.service.js.map