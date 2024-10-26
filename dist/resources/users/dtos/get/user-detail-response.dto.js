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
exports.UserDetailResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const user_response_dto_1 = require("./user-response.dto");
let UserDetailResponseDto = class UserDetailResponseDto {
};
exports.UserDetailResponseDto = UserDetailResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserDetailResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], UserDetailResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDetailResponseDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDetailResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDetailResponseDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], UserDetailResponseDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDetailResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDetailResponseDto.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserDetailResponseDto.prototype, "followingVendorCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: user_response_dto_1.UserResponseDto,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => user_response_dto_1.UserResponseDto.toUserResponseDto(value)),
    __metadata("design:type", Array)
], UserDetailResponseDto.prototype, "followings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: user_response_dto_1.UserResponseDto,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => user_response_dto_1.UserResponseDto.toUserResponseDto(value)),
    __metadata("design:type", Array)
], UserDetailResponseDto.prototype, "followers", void 0);
exports.UserDetailResponseDto = UserDetailResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], UserDetailResponseDto);
//# sourceMappingURL=user-detail-response.dto.js.map