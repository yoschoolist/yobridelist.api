import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiConsumes,
  ApiOperation,
} from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { ApiPaging } from "src/common/decorators/api/api-paging.decorator";
import { PagingQuery } from "src/common/decorators/paging-query.decorator";
import { TransformDataInterceptor } from "src/common/interceptors/transform-data.interceptor";
import { ACCESS_TOKEN } from "src/auth/constants";
import { PoliciesGuard } from "src/casl/guards/policies.guard";
import { CheckPolicies } from "src/casl/decorators/check-policies.decorator";
import { ManageBlogHandler } from "src/casl/policies/blogs/manage-blog-policy.handler";
import { BLOG_SERVICES } from "./interfaces/constants";
import { GetBlogService } from "./interfaces/get-blog-service.interface";
import { CudBlogService } from "./interfaces/cud-blog-service.interface";
import { CreateBlogDto } from "./dtos/cud/create-blog.dto";
import { QueryParamDto } from "src/common/dtos/query-param.dto";
import { BlogResponseDto } from "./dtos/get/blog-response.dto";
import { BlogDetailParamDto } from "./dtos/query-params/blog-detail-param.dto";
import { BlogDetailResponseDto } from "./dtos/get/blog-detail-response.dto";
import { UpdateBlogDto } from "./dtos/cud/update-blog.dto";
import { CudBlogResponseDto } from "./dtos/cud/cud-blog-response.dto";

@ApiTags("blogs")
@Controller({
  path: "blogs",
  version: "1",
})
export class BlogsController {
  constructor(
      @Inject(BLOG_SERVICES.GetBlogService)
      private readonly getBlogService: GetBlogService,
      @Inject(BLOG_SERVICES.CudBlogService)
      private readonly cudBlogService: CudBlogService,
  ) {}

  @ApiOperation({ summary: "Get blogs" })
  @ApiPaging(BlogResponseDto, QueryParamDto)
  @Get()
  @UseInterceptors(new TransformDataInterceptor(BlogResponseDto))
  async getBlogs(@PagingQuery(QueryParamDto) params: QueryParamDto) {
      return this.getBlogService.get(params);
  }

  @ApiOperation({ summary: "Create an blog (ADMIN REQUIRED)" })
  @ApiConsumes("multipart/form-data")
  @ApiCreatedResponse({ type: CudBlogResponseDto })
  @ApiBearerAuth(ACCESS_TOKEN)
  @Post()
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies(ManageBlogHandler)
  @UseInterceptors(new TransformDataInterceptor(CudBlogResponseDto))
  @UseInterceptors(FileInterceptor("image"))
  async createBlog(
      @Body() createBlogDto: CreateBlogDto,
      @UploadedFile() image: Express.Multer.File,
  ) {
      if (image) createBlogDto.image = image;

      return this.cudBlogService.create(createBlogDto);
  }

  @ApiOperation({ summary: "Get blog's detail" })
  @ApiOkResponse({ type: BlogDetailResponseDto })
  @ApiNotFoundResponse({ description: "Blog not found" })
  @Get(":id")
  @UseInterceptors(new TransformDataInterceptor(BlogDetailResponseDto))
  async getBlogById(
      @Param("id") id: string,
      @Query() blogDetailParams: BlogDetailParamDto,
  ) {
      return this.getBlogService.findByIdWithDetails(
          id,
          blogDetailParams,
      );
  }

  @ApiOperation({ summary: "Update an blog (ADMIN REQUIRED)" })
  @ApiConsumes("multipart/form-data")
  @ApiOkResponse({ type: CudBlogResponseDto })
  @ApiNotFoundResponse({ description: "Blog not found" })
  @ApiBearerAuth(ACCESS_TOKEN)
  @Put(":id")
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies(ManageBlogHandler)
  @UseInterceptors(FileInterceptor("image"))
  @UseInterceptors(new TransformDataInterceptor(CudBlogResponseDto))
  async updateBlog(
      @Param("id") id: string,
      @Body() updateBlogDto: UpdateBlogDto,
      @UploadedFile() image: Express.Multer.File,
  ) {
      if (image) updateBlogDto.image = image;

      return this.cudBlogService.update({
          where: { id },
          data: updateBlogDto,
      });
  }

  @ApiOperation({ summary: "Delete an blog (ADMIN REQUIRED)" })
  @ApiOkResponse({ type: CudBlogResponseDto })
  @ApiNotFoundResponse({ description: "Blog not found" })
  @ApiBearerAuth(ACCESS_TOKEN)
  @Delete(":id")
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies(ManageBlogHandler)
  @UseInterceptors(new TransformDataInterceptor(CudBlogResponseDto))
  async deleteBlog(@Param("id") id: string) {
      return this.cudBlogService.delete(id);
  }
}
