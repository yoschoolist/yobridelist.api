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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transform_data_interceptor_1 = require("../../../common/interceptors/transform-data.interceptor");
const paging_query_decorator_1 = require("../../../common/decorators/paging-query.decorator");
const api_paging_decorator_1 = require("../../../common/decorators/api/api-paging.decorator");
const query_param_dto_1 = require("../../../common/dtos/query-param.dto");
const user_response_dto_1 = require("../dtos/get/user-response.dto");
const constants_1 = require("../interfaces/constants");
let UsersController = class UsersController {
    constructor(getUserService) {
        this.getUserService = getUserService;
    }
    async getUsers(params) {
        return this.getUserService.get(params);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get users" }),
    (0, api_paging_decorator_1.ApiPaging)(user_response_dto_1.UserResponseDto, query_param_dto_1.QueryParamDto),
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(user_response_dto_1.UserResponseDto)),
    __param(0, (0, paging_query_decorator_1.PagingQuery)(query_param_dto_1.QueryParamDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_param_dto_1.QueryParamDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)({
        path: "users",
        version: "1",
    }),
    __param(0, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __metadata("design:paramtypes", [Object])
], UsersController);
//# sourceMappingURL=users.controller.js.map