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
exports.ResetPasswordServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../../mail/mail.service");
const constants_1 = require("../../resources/users/interfaces/constants");
let ResetPasswordServiceImpl = class ResetPasswordServiceImpl {
    constructor(getUserService, tokenService, passwordService, mailService) {
        this.getUserService = getUserService;
        this.tokenService = tokenService;
        this.passwordService = passwordService;
        this.mailService = mailService;
    }
    async resetPassword(resetPasswordDto) {
        const user = await this.getUserService.findById(resetPasswordDto.userId);
        await this.passwordService.resetPassword(user, resetPasswordDto.token, resetPasswordDto.newPassword);
    }
    async sendResetPasswordToken(email) {
        const user = await this.getUserService.findByEmail(email);
        const token = await this.tokenService.createResetPasswordToken(user);
        this.mailService.sendEmail({
            to: user.email,
            subject: "Reset password",
            templateName: "reset-password",
            templateVars: {
                name: user.name,
                resetPasswordUrl: `${process.env.CLIENT_RESET_PASSWORD_URL}?token=${token}&userId=${user.id}`,
            },
        });
    }
};
exports.ResetPasswordServiceImpl = ResetPasswordServiceImpl;
exports.ResetPasswordServiceImpl = ResetPasswordServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_1.USER_SERVICES.TokenService)),
    __param(2, (0, common_1.Inject)(constants_1.USER_SERVICES.PasswordService)),
    __metadata("design:paramtypes", [Object, Object, Object, mail_service_1.MailService])
], ResetPasswordServiceImpl);
//# sourceMappingURL=reset-password.service.js.map