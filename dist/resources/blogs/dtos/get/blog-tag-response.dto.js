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
var BlogTagResponseDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogTagResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let BlogTagResponseDto = BlogTagResponseDto_1 = class BlogTagResponseDto {
    static toBlogTagResponseDto(blogTag) {
        return (0, class_transformer_1.plainToInstance)(BlogTagResponseDto_1, blogTag, {
            excludeExtraneousValues: true,
        });
    }
};
exports.BlogTagResponseDto = BlogTagResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BlogTagResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BlogTagResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BlogTagResponseDto.prototype, "slug", void 0);
exports.BlogTagResponseDto = BlogTagResponseDto = BlogTagResponseDto_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], BlogTagResponseDto);
//# sourceMappingURL=blog-tag-response.dto.js.map