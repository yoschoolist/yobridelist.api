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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../../auth/guards/auth.guard");
const api_paging_decorator_1 = require("../../../common/decorators/api/api-paging.decorator");
const constants_1 = require("../../../auth/constants");
const transform_data_interceptor_1 = require("../../../common/interceptors/transform-data.interceptor");
const paging_query_decorator_1 = require("../../../common/decorators/paging-query.decorator");
const account_param_dto_1 = require("../dtos/query-params/account-param.dto");
const account_response_dto_1 = require("../dtos/get/account-response.dto");
const update_user_dto_1 = require("../dtos/update-user.dto");
const policies_guard_1 = require("../../../casl/guards/policies.guard");
const check_policies_decorator_1 = require("../../../casl/decorators/check-policies.decorator");
const delete_account_policy_handler_1 = require("../../../casl/policies/users/delete-account-policy.handler");
const read_account_policy_handler_1 = require("../../../casl/policies/users/read-account-policy.handler");
const update_account_policy_handler_1 = require("../../../casl/policies/users/update-account-policy.handler");
const constants_2 = require("../interfaces/constants");
let AccountsController = class AccountsController {
    constructor(getUserService, cudUserService) {
        this.getUserService = getUserService;
        this.cudUserService = cudUserService;
    }
    async getAccounts(accountParams) {
        return this.getUserService.get(accountParams);
    }
    async getAccountById(id) {
        return this.getUserService.findById(id);
    }
    async updateUser(id, updateUserDto) {
        return this.cudUserService.update({
            where: { id: parseInt(id) },
            data: updateUserDto,
        });
    }
    async deleteAccount(id) {
        return this.cudUserService.delete(id);
    }
};
exports.AccountsController = AccountsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get accounts (ADMIN REQUIRED)" }),
    (0, api_paging_decorator_1.ApiPaging)(account_response_dto_1.AccountResponseDto, account_param_dto_1.AccountParamDto),
    (0, common_1.Get)(),
    (0, check_policies_decorator_1.CheckPolicies)(read_account_policy_handler_1.ReadAccountHandler),
    __param(0, (0, paging_query_decorator_1.PagingQuery)(account_param_dto_1.AccountParamDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_param_dto_1.AccountParamDto]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getAccounts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get account by ID (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiOkResponse)({ type: account_response_dto_1.AccountResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, common_1.Get)(":id"),
    (0, check_policies_decorator_1.CheckPolicies)(read_account_policy_handler_1.ReadAccountHandler),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getAccountById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Change account's state (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiOkResponse)({ type: account_response_dto_1.AccountResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, common_1.Patch)(":id"),
    (0, check_policies_decorator_1.CheckPolicies)(update_account_policy_handler_1.UpdateAccountHandler),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete an account (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiOkResponse)({ type: account_response_dto_1.AccountResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found" }),
    (0, common_1.Delete)(":id"),
    (0, check_policies_decorator_1.CheckPolicies)(delete_account_policy_handler_1.DeleteAccountHandler),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "deleteAccount", null);
exports.AccountsController = AccountsController = __decorate([
    (0, swagger_1.ApiTags)("accounts"),
    (0, common_1.Controller)({
        path: "accounts",
        version: "1",
    }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(account_response_dto_1.AccountResponseDto)),
    __param(0, (0, common_1.Inject)(constants_2.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_2.USER_SERVICES.CudUserService)),
    __metadata("design:paramtypes", [Object, Object])
], AccountsController);
//# sourceMappingURL=accounts.controller.js.map