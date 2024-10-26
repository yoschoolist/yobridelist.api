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
exports.SearchResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const user_response_dto_1 = require("../../resources/users/dtos/get/user-response.dto");
const blog_response_dto_1 = require("../../resources/blogs/dtos/get/blog-response.dto");
const paged_response_dto_1 = require("./paged-response.dto");
class SearchResponseDto {
}
exports.SearchResponseDto = SearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: (paged_response_dto_1.PagedResponseDto) }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        value.results = user_response_dto_1.UserResponseDto.toUserResponseDto(value.results);
        return value;
    }),
    __metadata("design:type", paged_response_dto_1.PagedResponseDto)
], SearchResponseDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: (paged_response_dto_1.PagedResponseDto) }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        value.results = blog_response_dto_1.BlogResponseDto.toBlogResponseDto(value.results);
        return value;
    }),
    __metadata("design:type", paged_response_dto_1.PagedResponseDto)
], SearchResponseDto.prototype, "blogs", void 0);
//# sourceMappingURL=search-response.dto.js.map