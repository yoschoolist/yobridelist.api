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
exports.SectionsService = void 0;
const common_1 = require("@nestjs/common");
const blog_response_dto_1 = require("../resources/blogs/dtos/get/blog-response.dto");
const constants_1 = require("../resources/blogs/interfaces/constants");
const BLOGS_PER_SECTION = 5;
const VENDORS_PER_SECTION = 5;
const SONGS_PER_SECTION = 10;
let SectionsService = class SectionsService {
    constructor(getBlogService) {
        this.getBlogService = getBlogService;
    }
    async getTopBlogsSection() {
        const topBlogs = await this.getBlogService.get({
            allowCount: false,
            sort: "followerCount_desc",
            take: BLOGS_PER_SECTION,
        });
        return {
            title: "Nghệ Sĩ Thịnh Hành",
            type: "blogs",
            items: blog_response_dto_1.BlogResponseDto.toBlogResponseDto(topBlogs.results),
        };
    }
};
exports.SectionsService = SectionsService;
exports.SectionsService = SectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.BLOG_SERVICES.GetBlogService)),
    __metadata("design:paramtypes", [Object])
], SectionsService);
//# sourceMappingURL=sections.service.js.map