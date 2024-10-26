"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsModule = void 0;
const common_1 = require("@nestjs/common");
const blogs_controller_1 = require("./blogs.controller");
const prisma_module_1 = require("../../database/prisma.module");
const upload_module_1 = require("../../upload/upload.module");
const casl_module_1 = require("../../casl/casl.module");
const string_service_1 = require("../../common/utils/string.service");
const get_blog_service_1 = require("./services/get-blog.service");
const constants_1 = require("./interfaces/constants");
const cud_blog_service_1 = require("./services/cud-blog.service");
const getBlogService = {
    provide: constants_1.BLOG_SERVICES.GetBlogService,
    useClass: get_blog_service_1.GetBlogServiceImpl,
};
const cudBlogService = {
    provide: constants_1.BLOG_SERVICES.CudBlogService,
    useClass: cud_blog_service_1.CudBlogServiceImpl,
};
let BlogsModule = class BlogsModule {
};
exports.BlogsModule = BlogsModule;
exports.BlogsModule = BlogsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, upload_module_1.UploadModule, casl_module_1.CaslModule],
        controllers: [blogs_controller_1.BlogsController],
        providers: [string_service_1.StringService, getBlogService, cudBlogService],
        exports: [getBlogService],
    })
], BlogsModule);
//# sourceMappingURL=blogs.module.js.map