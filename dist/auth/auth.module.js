"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./services/auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const mail_module_1 = require("../mail/mail.module");
const users_module_1 = require("../resources/users/users.module");
const google_strategy_1 = require("./strategy/google.strategy");
const facebook_strategy_1 = require("./strategy/facebook.strategy");
const github_strategy_1 = require("./strategy/github.strategy");
const constants_1 = require("./interfaces/constants");
const social_auth_service_1 = require("./services/social-auth.service");
const confirm_email_service_1 = require("./services/confirm-email.service");
const reset_password_service_1 = require("./services/reset-password.service");
const config_1 = require("@nestjs/config");
const authService = {
    provide: constants_1.AUTH_SERVICES.AuthService,
    useClass: auth_service_1.AuthServiceImpl,
};
const socialAuthService = {
    provide: constants_1.AUTH_SERVICES.SocialAuthService,
    useClass: social_auth_service_1.SocialAuthServiceImpl,
};
const confirmEmailService = {
    provide: constants_1.AUTH_SERVICES.ConfirmEmailService,
    useClass: confirm_email_service_1.ConfirmEmailServiceImpl,
};
const resetPasswordService = {
    provide: constants_1.AUTH_SERVICES.ResetPasswordService,
    useClass: reset_password_service_1.ResetPasswordServiceImpl,
};
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            users_module_1.UsersModule,
            mail_module_1.MailModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get("JWT_SECRET"),
                        global: true,
                        signOptions: { expiresIn: "30m" },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            google_strategy_1.GoogleStrategy,
            facebook_strategy_1.FacebookStrategy,
            github_strategy_1.GithubStrategy,
            authService,
            socialAuthService,
            confirmEmailService,
            resetPasswordService,
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map