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
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transform_data_interceptor_1 = require("../../../common/interceptors/transform-data.interceptor");
const auth_guard_1 = require("../../../auth/guards/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const constants_1 = require("../../../auth/constants");
const anonymous_email_decorator_1 = require("../../../auth/decorators/anonymous-email.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const account_response_dto_1 = require("../dtos/get/account-response.dto");
const update_account_dto_1 = require("../dtos/update-account.dto");
const change_password_dto_1 = require("../dtos/change-password.dto");
const constants_2 = require("../interfaces/constants");
let MeController = class MeController {
    constructor(getUserService, cudUserService, passwordService) {
        this.getUserService = getUserService;
        this.cudUserService = cudUserService;
        this.passwordService = passwordService;
    }
    async getAccount(id) {
        return this.getUserService.findById(id);
    }
    async updateAccount(id, updateAccountDto, image) {
        return this.cudUserService.update({
            where: { id: parseInt(id) },
            data: updateAccountDto,
            image,
        });
    }
    async changePassword(id, changePasswordDto) {
        const user = await this.getUserService.findById(id);
        await this.passwordService.changePassword(user, changePasswordDto);
        return { success: true, message: "Change password successful." };
    }
};
exports.MeController = MeController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get current user's information" }),
    (0, swagger_1.ApiOkResponse)({ type: account_response_dto_1.AccountResponseDto }),
    (0, common_1.Get)(),
    (0, anonymous_email_decorator_1.AnonymousEmail)(),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(account_response_dto_1.AccountResponseDto)),
    __param(0, (0, user_decorator_1.User)("sub")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getAccount", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update user's profile" }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiOkResponse)({ type: account_response_dto_1.AccountResponseDto }),
    (0, common_1.Patch)(),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(account_response_dto_1.AccountResponseDto)),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    __param(0, (0, user_decorator_1.User)("sub")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_account_dto_1.UpdateAccountDto, Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "updateAccount", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Change user's password" }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Password does not match" }),
    (0, common_1.Patch)("password"),
    __param(0, (0, user_decorator_1.User)("sub")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "changePassword", null);
exports.MeController = MeController = __decorate([
    (0, swagger_1.ApiTags)("me"),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, common_1.Controller)({
        path: "me",
        version: "1",
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Inject)(constants_2.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_2.USER_SERVICES.CudUserService)),
    __param(2, (0, common_1.Inject)(constants_2.USER_SERVICES.PasswordService)),
    __metadata("design:paramtypes", [Object, Object, Object])
], MeController);
//# sourceMappingURL=me.controller.js.map