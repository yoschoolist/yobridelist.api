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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const transform_data_interceptor_1 = require("./common/interceptors/transform-data.interceptor");
const search_response_dto_1 = require("./common/dtos/search-response.dto");
const constants_1 = require("./auth/constants");
const section_dto_1 = require("./section/section.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getSections() {
        return this.appService.getSections();
    }
    async search(keyword, take, allowCount) {
        return this.appService.search(keyword, { take, allowCount });
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get sections for the home page" }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, swagger_1.ApiOkResponse)({ type: section_dto_1.Section, isArray: true }),
    (0, common_1.Get)("/sections"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSections", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Search resources" }),
    (0, swagger_1.ApiQuery)({
        name: "q",
        required: false,
        description: "Keyword to search",
    }),
    (0, swagger_1.ApiQuery)({ name: "take", required: false }),
    (0, swagger_1.ApiQuery)({
        name: "allowCount",
        required: false,
        description: "If true, allow count total of data searched (default: false)",
    }),
    (0, swagger_1.ApiOkResponse)({ type: search_response_dto_1.SearchResponseDto }),
    (0, common_1.Get)("/search"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(search_response_dto_1.SearchResponseDto)),
    __param(0, (0, common_1.Query)("q")),
    __param(1, (0, common_1.Query)("take", new common_1.DefaultValuePipe(5), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)("allowCount", new common_1.DefaultValuePipe(false), common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Boolean]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "search", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)(""),
    (0, common_1.Controller)({
        path: "",
        version: "1",
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map