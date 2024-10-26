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
exports.QueryParamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class QueryParamDto {
    constructor() {
        this.skip = 0;
        this.take = 10;
        this.allowCount = true;
    }
}
exports.QueryParamDto = QueryParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Skip number of items.",
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], QueryParamDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Limit amount of items to be returned.",
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], QueryParamDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Sort data by it's field, _desc to sort descending, _asc for ascending",
        example: "name_desc",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\w+(_desc|_asc)+$/, {
        message: "'sort' must end with _desc or _asc",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QueryParamDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        name: "q",
        description: "Keyword to search for items",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)({ name: "q" }),
    __metadata("design:type", String)
], QueryParamDto.prototype, "keyword", void 0);
//# sourceMappingURL=query-param.dto.js.map