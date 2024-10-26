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
exports.ConfirmEmailServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../../mail/mail.service");
const constants_1 = require("../../resources/users/interfaces/constants");
let ConfirmEmailServiceImpl = class ConfirmEmailServiceImpl {
    constructor(getUserService, tokenService, userEmailService, mailService) {
        this.getUserService = getUserService;
        this.tokenService = tokenService;
        this.userEmailService = userEmailService;
        this.mailService = mailService;
    }
    async confirmUserEmail(confirmEmailDto) {
        const user = await this.getUserService.findById(confirmEmailDto.userId);
        if (user.emailConfirmed)
            return;
        await this.userEmailService.confirmEmail(user, confirmEmailDto.token);
    }
    async resendEmailConfirmationToken(userId) {
        const user = await this.getUserService.findById(userId);
        if (user.emailConfirmed)
            return;
        const token = await this.tokenService.createEmailConfirmationToken(user);
        this.mailService.sendEmail({
            to: user.email,
            subject: "Confirm account",
            templateName: "confirm-email",
            templateVars: {
                name: user.name,
                confirmationUrl: `${process.env.CLIENT_EMAIL_CONFIRM_URL}?token=${token}&userId=${user.id}`,
            },
        });
    }
};
exports.ConfirmEmailServiceImpl = ConfirmEmailServiceImpl;
exports.ConfirmEmailServiceImpl = ConfirmEmailServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_1.USER_SERVICES.TokenService)),
    __param(2, (0, common_1.Inject)(constants_1.USER_SERVICES.UserEmailService)),
    __metadata("design:paramtypes", [Object, Object, Object, mail_service_1.MailService])
], ConfirmEmailServiceImpl);
//# sourceMappingURL=confirm-email.service.js.map