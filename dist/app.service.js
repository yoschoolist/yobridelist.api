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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const sections_service_1 = require("./section/sections.service");
const cache_interface_1 = require("./cache/interfaces/cache.interface");
const constants_1 = require("./resources/users/interfaces/constants");
const constants_2 = require("./resources/blogs/interfaces/constants");
let AppService = class AppService {
    constructor(getUserService, getBlogService, sectionsService, cacheService) {
        this.getUserService = getUserService;
        this.getBlogService = getBlogService;
        this.sectionsService = sectionsService;
        this.cacheService = cacheService;
    }
    async getSections() {
        const cachedSections = await this.cacheService.get("cached-sections");
        if (cachedSections) {
            return cachedSections;
        }
        const sectionTasks = [
            this.sectionsService.getTopBlogsSection,
        ];
        const sections = [].concat(...(await Promise.all(sectionTasks)));
        await this.cacheService.set("cached-sections", JSON.stringify(sections));
        return sections;
    }
    async search(keyword, options) {
        const skip = 0, { take, allowCount } = options;
        const [users, blogs] = await Promise.all([
            this.getUserService.get({
                skip,
                take,
                allowCount,
                keyword,
            }),
            this.getBlogService.get({
                skip,
                take,
                allowCount,
                keyword,
            }),
        ]);
        return {
            users,
            blogs,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_SERVICES.GetUserService)),
    __param(1, (0, common_1.Inject)(constants_2.BLOG_SERVICES.GetBlogService)),
    __param(3, (0, common_1.Inject)(cache_interface_1.CACHE_SERVICE)),
    __metadata("design:paramtypes", [Object, Object, sections_service_1.SectionsService, Object])
], AppService);
//# sourceMappingURL=app.service.js.map