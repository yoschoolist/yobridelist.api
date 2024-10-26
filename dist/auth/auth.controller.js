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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const anonymous_email_decorator_1 = require("./decorators/anonymous-email.decorator");
const user_decorator_1 = require("../resources/users/decorators/user.decorator");
const auth_guard_1 = require("./guards/auth.guard");
const constants_1 = require("./constants");
const signin_response_dto_1 = require("./dtos/signin-response.dto");
const transform_data_interceptor_1 = require("../common/interceptors/transform-data.interceptor");
const confirm_email_dto_1 = require("./dtos/email-confirm/confirm-email.dto");
const reset_password_dto_1 = require("./dtos/password-reset/reset-password.dto");
const send_password_reset_dto_1 = require("./dtos/password-reset/send-password-reset.dto");
const sign_in_dto_1 = require("./dtos/sign-in.dto");
const register_dto_1 = require("./dtos/register.dto");
const refresh_token_dto_1 = require("./dtos/refresh-token.dto");
const logout_dto_1 = require("./dtos/logout.dto");
const google_oauth_guard_1 = require("./guards/google-oauth.guard");
const facebook_oauth_guard_1 = require("./guards/facebook-oauth.guard");
const github_oauth_guard_1 = require("./guards/github-oauth.guard");
const constants_2 = require("./interfaces/constants");
let AuthController = class AuthController {
    constructor(authService, socialAuthService, confirmEmailService, resetPasswordService) {
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.confirmEmailService = confirmEmailService;
        this.resetPasswordService = resetPasswordService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(signInDto) {
        return this.authService.signIn(signInDto);
    }
    async logout(userId, logoutDto) {
        await this.authService.signOut(userId, logoutDto.refreshToken);
        return { success: true };
    }
    async refreshToken(refreshTokenDto) {
        return this.authService.refreshToken(refreshTokenDto);
    }
    async confirm(confirmEmailDto) {
        await this.confirmEmailService.confirmUserEmail(confirmEmailDto);
        return { success: true };
    }
    async resendEmailConfirmation(userId) {
        await this.confirmEmailService.resendEmailConfirmationToken(userId);
        return { success: true };
    }
    async reset(resetPasswordDto) {
        await this.resetPasswordService.resetPassword(resetPasswordDto);
        return { success: true };
    }
    async sendResetLink(data) {
        await this.resetPasswordService.sendResetPasswordToken(data.email);
        return { success: true };
    }
    async googleAuth() {
        return;
    }
    async googleAuthRedirect(user, res) {
        const result = await this.socialAuthService.socialLogin(user);
        const jsonString = JSON.stringify(result).replace(/'/g, "\\'").replace(/"/g, '\\"');
        res.send(`<script>
                window.opener?.postMessage('${jsonString}', '*');

                try {
                    Print.postMessage('${jsonString}');
                } catch {}

                window.close();
            </script>`);
        return result;
    }
    async facebookAuth() {
        return;
    }
    async facebookAuthRedirect(user, res) {
        const result = await this.socialAuthService.socialLogin(user);
        const jsonString = JSON.stringify(result).replace(/'/g, "\\'").replace(/"/g, '\\"');
        res.send(`<script>window.opener.postMessage('${jsonString}', '*');window.close()</script>`);
        return result;
    }
    async githubAuth() {
        return;
    }
    async githubAuthRedirect(user, res) {
        const result = await this.socialAuthService.socialLogin(user);
        const jsonString = JSON.stringify(result).replace(/'/g, "\\'").replace(/"/g, '\\"');
        res.send(`<script>window.opener.postMessage('${jsonString}', '*');window.close()</script>`);
        return result;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Register new user" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Email already exist." }),
    (0, swagger_1.ApiCreatedResponse)({ type: signin_response_dto_1.SignInResponseDto }),
    (0, common_1.Post)("register"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Login" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Email or password is incorrect" }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "You are locked out" }),
    (0, swagger_1.ApiOkResponse)({ type: signin_response_dto_1.SignInResponseDto }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("login"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Logout" }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Refresh token invalid" }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("logout"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, anonymous_email_decorator_1.AnonymousEmail)(),
    __param(0, (0, user_decorator_1.User)("sub")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, logout_dto_1.LogoutDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Refresh new access token" }),
    (0, swagger_1.ApiOkResponse)({ type: signin_response_dto_1.SignInResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Invalid refresh token" }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "You are locked out" }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("refresh-token"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Confirm user's email" }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Invalid confirm email token." }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("confirm-email"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [confirm_email_dto_1.ConfirmEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirm", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Resend confirm email link" }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, swagger_1.ApiOkResponse)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, anonymous_email_decorator_1.AnonymousEmail)(),
    (0, common_1.Post)("confirm-email-link"),
    __param(0, (0, user_decorator_1.User)("sub")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendEmailConfirmation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Reset user's password" }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Invalid password reset token." }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("reset-password"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "reset", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Send password reset link" }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("reset-password-link"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_password_reset_dto_1.SendPasswordResetDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendResetLink", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOAuthGuard),
    (0, common_1.Get)("google"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOAuthGuard),
    (0, common_1.Get)("google-redirect"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(facebook_oauth_guard_1.FacebookOAuthGuard),
    (0, common_1.Get)("facebook"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookAuth", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(facebook_oauth_guard_1.FacebookOAuthGuard),
    (0, common_1.Get)("facebook-redirect"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookAuthRedirect", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(github_oauth_guard_1.GithubOAuthGuard),
    (0, common_1.Get)("github"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubAuth", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(github_oauth_guard_1.GithubOAuthGuard),
    (0, common_1.Get)("github-redirect"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(signin_response_dto_1.SignInResponseDto)),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubAuthRedirect", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("auth"),
    (0, common_1.Controller)({
        path: "auth",
        version: "1",
    }),
    __param(0, (0, common_1.Inject)(constants_2.AUTH_SERVICES.AuthService)),
    __param(1, (0, common_1.Inject)(constants_2.AUTH_SERVICES.SocialAuthService)),
    __param(2, (0, common_1.Inject)(constants_2.AUTH_SERVICES.ConfirmEmailService)),
    __param(3, (0, common_1.Inject)(constants_2.AUTH_SERVICES.ResetPasswordService)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], AuthController);
//# sourceMappingURL=auth.controller.js.map