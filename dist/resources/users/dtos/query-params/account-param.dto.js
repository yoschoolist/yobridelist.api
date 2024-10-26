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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountParamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const query_param_dto_1 = require("../../../../common/dtos/query-param.dto");
const mapper_service_1 = require("../../../../common/utils/mapper.service");
class AccountParamDto extends query_param_dto_1.QueryParamDto {
}
exports.AccountParamDto = AccountParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ value }) => mapper_service_1.MapperService.mapBool(value)),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], AccountParamDto.prototype, "locked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ value }) => mapper_service_1.MapperService.mapBool(value)),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], AccountParamDto.prototype, "emailConfirmed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserRole,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(client_1.UserRole),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AccountParamDto.prototype, "role", void 0);
//# sourceMappingURL=account-param.dto.js.map