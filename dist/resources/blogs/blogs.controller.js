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
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../../auth/guards/auth.guard");
const api_paging_decorator_1 = require("../../common/decorators/api/api-paging.decorator");
const paging_query_decorator_1 = require("../../common/decorators/paging-query.decorator");
const transform_data_interceptor_1 = require("../../common/interceptors/transform-data.interceptor");
const constants_1 = require("../../auth/constants");
const policies_guard_1 = require("../../casl/guards/policies.guard");
const check_policies_decorator_1 = require("../../casl/decorators/check-policies.decorator");
const manage_blog_policy_handler_1 = require("../../casl/policies/blogs/manage-blog-policy.handler");
const constants_2 = require("./interfaces/constants");
const create_blog_dto_1 = require("./dtos/cud/create-blog.dto");
const query_param_dto_1 = require("../../common/dtos/query-param.dto");
const blog_response_dto_1 = require("./dtos/get/blog-response.dto");
const blog_detail_param_dto_1 = require("./dtos/query-params/blog-detail-param.dto");
const blog_detail_response_dto_1 = require("./dtos/get/blog-detail-response.dto");
const update_blog_dto_1 = require("./dtos/cud/update-blog.dto");
const cud_blog_response_dto_1 = require("./dtos/cud/cud-blog-response.dto");
let BlogsController = class BlogsController {
    constructor(getBlogService, cudBlogService) {
        this.getBlogService = getBlogService;
        this.cudBlogService = cudBlogService;
    }
    async getBlogs(params) {
        return this.getBlogService.get(params);
    }
    async createBlog(createBlogDto, image) {
        if (image)
            createBlogDto.featuredImageUrl = image;
        return this.cudBlogService.create(createBlogDto);
    }
    async getBlogById(id, blogDetailParams) {
        return this.getBlogService.findByIdWithDetails(parseInt(id), blogDetailParams);
    }
    async updateBlog(id, updateBlogDto, image) {
        if (image)
            updateBlogDto.featuredImageUrl = image;
        return this.cudBlogService.update({
            where: { id: parseInt(id) },
            data: updateBlogDto,
        });
    }
    async deleteBlog(id) {
        return this.cudBlogService.delete(parseInt(id));
    }
};
exports.BlogsController = BlogsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get blogs" }),
    (0, api_paging_decorator_1.ApiPaging)(blog_response_dto_1.BlogResponseDto, query_param_dto_1.QueryParamDto),
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(blog_response_dto_1.BlogResponseDto)),
    __param(0, (0, paging_query_decorator_1.PagingQuery)(query_param_dto_1.QueryParamDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_param_dto_1.QueryParamDto]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "getBlogs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create an blog (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiCreatedResponse)({ type: cud_blog_response_dto_1.CudBlogResponseDto }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, policies_guard_1.PoliciesGuard),
    (0, check_policies_decorator_1.CheckPolicies)(manage_blog_policy_handler_1.ManageBlogHandler),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(cud_blog_response_dto_1.CudBlogResponseDto)),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "createBlog", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get blog's detail" }),
    (0, swagger_1.ApiOkResponse)({ type: blog_detail_response_dto_1.BlogDetailResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Blog not found" }),
    (0, common_1.Get)(":id"),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(blog_detail_response_dto_1.BlogDetailResponseDto)),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, blog_detail_param_dto_1.BlogDetailParamDto]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "getBlogById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update an blog (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiOkResponse)({ type: cud_blog_response_dto_1.CudBlogResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Blog not found" }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, common_1.Put)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, policies_guard_1.PoliciesGuard),
    (0, check_policies_decorator_1.CheckPolicies)(manage_blog_policy_handler_1.ManageBlogHandler),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(cud_blog_response_dto_1.CudBlogResponseDto)),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_dto_1.UpdateBlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "updateBlog", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete an blog (ADMIN REQUIRED)" }),
    (0, swagger_1.ApiOkResponse)({ type: cud_blog_response_dto_1.CudBlogResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Blog not found" }),
    (0, swagger_1.ApiBearerAuth)(constants_1.ACCESS_TOKEN),
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, policies_guard_1.PoliciesGuard),
    (0, check_policies_decorator_1.CheckPolicies)(manage_blog_policy_handler_1.ManageBlogHandler),
    (0, common_1.UseInterceptors)(new transform_data_interceptor_1.TransformDataInterceptor(cud_blog_response_dto_1.CudBlogResponseDto)),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "deleteBlog", null);
exports.BlogsController = BlogsController = __decorate([
    (0, swagger_1.ApiTags)("blogs"),
    (0, common_1.Controller)({
        path: "blogs",
        version: "1",
    }),
    __param(0, (0, common_1.Inject)(constants_2.BLOG_SERVICES.GetBlogService)),
    __param(1, (0, common_1.Inject)(constants_2.BLOG_SERVICES.CudBlogService)),
    __metadata("design:paramtypes", [Object, Object])
], BlogsController);
//# sourceMappingURL=blogs.controller.js.map